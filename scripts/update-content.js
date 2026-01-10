import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import OpenCC from 'opencc-js';

// Configuration
const PSYCHOLOGISTS = ['阿德勒','弗洛姆','薩提亞','鮑爾比','羅洛梅','榮格','李中瑩','卡普曼','約翰·戈特曼'];
const SCENARIOS = [
    {
        id: 'work',
        keywords: ['OT文化', '放工時間', '返工', '老細'],
        template: (psychologist) => `
            <section class="content-block">
                <div class="psychologist-header">
                    <img src="/images/avatars/${psychologist}.webp" alt="${psychologist}" class="w-[100px] h-[100px] rounded-full mx-auto mb-4" />
                    <h3>${psychologist} 的職場智慧</h3>
                </div>
                <blockquote class="quote-text">
                    "工作不是人生的全部，但我們常在工作中迷失自己。"
                </blockquote>
                <div class="theory-summary">
                    ${psychologist} 強調個體心理學在職場關係中的應用，特別是面對 OT 文化時的界限設定。
                </div>
                <div class="hk-case">
                    陳先生最近常因 OT 問題感到焦慮，放工時間仍無法放鬆，擔心被老細標籤為不合群。
                </div>
                <div class="action-steps">
                    建議：試著建立「心理放工」儀式，離開公司後專注當下，重拾生活掌控感。
                </div>
                <div class="gentle-reminder">
                    溫馨提示：你的價值不只在於工作表現。💛
                </div>
            </section>
        `
    },
    {
        id: 'housework',
        keywords: ['煮飯', '晾衫', '家務分工'],
        template: (psychologist) => `
            <section class="content-block">
                <div class="psychologist-header">
                    <img src="/images/avatars/${psychologist}.webp" alt="${psychologist}" class="w-[100px] h-[100px] rounded-full mx-auto mb-4" />
                    <h3>${psychologist} 的家庭觀點</h3>
                </div>
                <blockquote class="quote-text">
                    "家是共同經營的港灣，不是一個人的戰場。"
                </blockquote>
                <div class="theory-summary">
                    ${psychologist} 認為家庭互動模式決定了關係質量，家務分工是愛的具體實踐。
                </div>
                <div class="hk-case">
                    李太太抱怨先生不主動幫忙煮飯晾衫，覺得自己像個工人，雙方陷入僵局。
                </div>
                <div class="action-steps">
                    建議：邀請伴侶一起參與家務，將「幫忙」轉化為「共同參與」的樂趣。
                </div>
                <div class="gentle-reminder">
                    溫馨提示：家務是愛的流動，不是責任的堆砌。✨
                </div>
            </section>
        `
    },
    {
        id: 'coldwar',
        keywords: ['唔出聲', '黑面', '冷戰'],
        template: (psychologist) => `
            <section class="content-block">
                <div class="psychologist-header">
                    <img src="/images/avatars/${psychologist}.webp" alt="${psychologist}" class="w-[100px] h-[100px] rounded-full mx-auto mb-4" />
                    <h3>${psychologist} 的溝通藝術</h3>
                </div>
                <blockquote class="quote-text">
                    "沈默有時是最大的吶喊，但也是最深的傷害。"
                </blockquote>
                <div class="theory-summary">
                    ${psychologist} 指出迴避衝突往往導致更大的隔閡，真誠表達脆弱才是連結的開始。
                </div>
                <div class="hk-case">
                    面對爭執，張先生選擇唔出聲、黑面，以為可以冷靜，卻讓伴侶感到被拒絕。
                </div>
                <div class="action-steps">
                    建議：嘗試說出「我現在需要一點時間整理情緒」，而非直接切斷交流。
                </div>
                <div class="gentle-reminder">
                    溫馨提示：愛需要流動，別讓沈默築起高牆。👫
                </div>
            </section>
        `
    }
];

const FORBIDDEN_WORDS = {
    '老公': '先生',
    '老婆': '太太'
};

const DATA_DIR = path.join(process.cwd(), 'data');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'header-bg');
const AVATARS_DIR = path.join(process.cwd(), 'public', 'images', 'avatars');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
if (!fs.existsSync(AVATARS_DIR)) fs.mkdirSync(AVATARS_DIR, { recursive: true });

// Converter
const converter = OpenCC.Converter({ from: 'cn', to: 'hk' });

function localizeText(text) {
    let converted = converter(text);
    
    // Fix OpenCC artifacts
    converted = converted.replace(/黑麪/g, '黑面'); // Fix face vs noodle
    converted = converted.replace(/麪/g, '面'); // General fix for face context if any others slip through
    converted = converted.replace(/説/g, '說'); // Fix speak character
    converted = converted.replace(/温/g, '溫'); // Fix warm character
    
    for (const [key, value] of Object.entries(FORBIDDEN_WORDS)) {
        converted = converted.replace(new RegExp(key, 'g'), value);
    }
    return converted;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// HSL to RGB helper for Sharp
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return {
        r: Math.round(255 * f(0)),
        g: Math.round(255 * f(8)),
        b: Math.round(255 * f(4))
    };
}

async function generateImage(filename) {
    const h = 20 + (Math.random() * 10 - 5); 
    const s = 40 + (Math.random() * 10 - 5); 
    const l = 80 + (Math.random() * 10 - 5); 
    
    const color = hslToRgb(h, s, l);
    
    const width = 750;
    const height = 400; 
    
    await sharp({
        create: {
            width: width,
            height: height,
            channels: 3,
            background: color
        }
    })
    .webp({ quality: 75 })
    .toFile(path.join(IMAGES_DIR, filename));
    
    const filenameSmall = filename.replace('.webp', '-375w.webp');
    await sharp(path.join(IMAGES_DIR, filename))
        .resize(375)
        .webp({ quality: 75 })
        .toFile(path.join(IMAGES_DIR, filenameSmall));
        
    return {
        url: `/images/header-bg/${filename}`,
        srcSet: `/images/header-bg/${filename} 750w, /images/header-bg/${filenameSmall} 375w`
    };
}

async function generateAvatar(name) {
    const filePath = path.join(AVATARS_DIR, `${name}.webp`);
    if (fs.existsSync(filePath)) return; 

    // Generate a simple placeholder avatar with initial
    await sharp({
        create: {
            width: 100,
            height: 100,
            channels: 4,
            background: { r: 240, g: 240, b: 240, alpha: 1 }
        }
    })
    .composite([{
        input: Buffer.from(`<svg width="100" height="100"><text x="50%" y="60%" font-family="Arial" font-size="50" fill="#666" text-anchor="middle">${name.charAt(0)}</text></svg>`),
        top: 0,
        left: 0
    }])
    .webp({ quality: 80 })
    .toFile(filePath);
}

async function updatePages() {
    const timestamp = new Date().toISOString();
    console.log(`Starting update at ${timestamp}`);
    
    const usedPsychologists = new Set();
    const pages = [1, 2, 3, 4, 5];
    
    for (const pageNum of pages) {
        // 1. Select Psychologist
        let psychologist;
        let attempts = 0;
        do {
            psychologist = PSYCHOLOGISTS[getRandomInt(PSYCHOLOGISTS.length)];
            attempts++;
        } while (usedPsychologists.has(psychologist) && attempts < 20);
        usedPsychologists.add(psychologist);
        
        // Generate Avatar if missing
        await generateAvatar(psychologist);
        
        // 2. Select Scenario
        const scenario = SCENARIOS[getRandomInt(SCENARIOS.length)];
        
        // 3. Generate Content
        let rawHtml = scenario.template(psychologist);
        let localizedHtml = localizeText(rawHtml);
        
        // 4. Generate Image
        const imageFilename = `header-page${pageNum}-${Date.now()}.webp`;
        const imageData = await generateImage(imageFilename);
        
        // 5. WhatsApp Message Logic
        const msgContent = `你好！今期 ${psychologist} 分享關於 ${scenario.keywords[0]} 的睇法... 點開舊鏈接查看更多: https://your-domain.com/page${pageNum} 💛✨👫`;
        console.log('[WHATSAPP_MSG]', msgContent);
        
        // 6. Save Data
        const pageData = {
            html: localizedHtml,
            bgImageUrl: imageData.url,
            bgImageSrcSet: imageData.srcSet,
            deployTimestamp: timestamp,
            msgVersion: `v-${Date.now()}`,
            psychologist: psychologist,
            scenarioId: scenario.id
        };
        
        fs.writeFileSync(path.join(DATA_DIR, `page${pageNum}.json`), JSON.stringify(pageData, null, 2));
        console.log(`Updated Page ${pageNum} with ${psychologist} and ${scenario.id}`);
    }
    
    console.log('Update complete.');
}

updatePages().catch(console.error);
