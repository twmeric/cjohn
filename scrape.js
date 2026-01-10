const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
    });
    const page = await browser.newPage();

    // Set a real user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    console.log('Navigating to target site...');
    // Increase timeout to 60s
    await page.goto('https://apex-finance.youware.app', { waitUntil: 'networkidle2', timeout: 60000 });

    console.log('Waiting for Cloudflare challenge...');
    // Wait for a bit to let the challenge pass or redirect
    await new Promise(r => setTimeout(r, 10000)); 

    // Try to wait for a navigation element that exists on the real site
    try {
        await page.waitForSelector('nav', { timeout: 10000 });
        console.log('Navigation found, assuming site loaded.');
    } catch (e) {
        console.log('Navigation not found, might still be stuck or site structure is different.');
    }

    // Screenshot for debugging
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    console.log('Scraping data...');
    const data = await page.evaluate(() => {
        const getText = (selector) => document.querySelector(selector)?.innerText.trim() || '';
        const getSrc = (selector) => document.querySelector(selector)?.src || '';
        const getAllText = (selector) => Array.from(document.querySelectorAll(selector)).map(el => el.innerText.trim());

        // Helper to get background image url from style
        const getBgImage = (selector) => {
            const el = document.querySelector(selector);
            if (!el) return '';
            const bg = window.getComputedStyle(el).backgroundImage;
            if (bg === 'none') return '';
            return bg.replace(/^url\(['"](.+)['"]\)$/, '$1');
        };

        const navItems = Array.from(document.querySelectorAll('nav a')).map(a => ({
            text: a.innerText.trim(),
            href: a.href
        })).filter(i => i.text);

        // Hero - Try multiple common selectors for Hero image/content
        const hero = {
            headline: getText('h1'),
            subheadline: getText('h1 + p') || getText('.hero-text p'),
            ctaText: getText('a[class*="btn"], button[class*="btn"]'), // First button found
            bgImage: getBgImage('section:first-of-type') || getBgImage('header') || getBgImage('.hero-bg')
        };

        // Services - Try to identify service cards by structure
        // Looking for: Icon + Title + Text group
        let services = [];
        const possibleCards = document.querySelectorAll('div[class*="card"], div[class*="item"], section > div > div');
        possibleCards.forEach(card => {
            const title = card.querySelector('h3, h4')?.innerText.trim();
            const desc = card.querySelector('p')?.innerText.trim();
            const img = card.querySelector('img')?.src;
            if (title && desc) {
                services.push({ title, description: desc, iconSrc: img });
            }
        });
        
        // If heuristic failed, just grab all H3s and Ps
        if (services.length === 0) {
            const h3s = getAllText('h3');
            const ps = getAllText('p');
            services = h3s.map((t, i) => ({ title: t, description: ps[i] || '' }));
        }

        return {
            title: document.title,
            navItems,
            hero,
            services: services.slice(0, 10),
            htmlPreview: document.body.innerHTML.slice(0, 500)
        };
    });

    console.log('Data scraped. Saving to file...');
    fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));

    await browser.close();
    console.log('Done.');
})();
