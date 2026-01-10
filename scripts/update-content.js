import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import * as OpenCC from 'opencc-js';

// Configuration
const DATA_DIR = path.join(process.cwd(), 'data');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'header-bg');
const AVATARS_DIR = path.join(process.cwd(), 'public', 'images', 'avatars');

// Colors for image generation (Warm, Healing, Low Saturation)
const PALETTES = [
    { bg: '#F9F5F0', shapes: ['#E8D5C4', '#D4C4B7'] }, // Warm Gray/Beige
    { bg: '#FFF8F0', shapes: ['#F2D7D5', '#E6B0AA'] }, // Pale Pink
    { bg: '#F4F6F6', shapes: ['#D5DBDB', '#ABB2B9'] }, // Cool Gray (Soft)
    { bg: '#FEF9E7', shapes: ['#F9E79F', '#F7DC6F'] }, // Pale Yellow
    { bg: '#F5EEF8', shapes: ['#E8DAEF', '#D7BDE2'] }  // Pale Purple
];

// Content Library (HK Traditional Chinese Native)
const PSYCHOLOGISTS_DATA = [
    {
        name: '維琴尼亞·薩提亞',
        title: '家庭治療先驅',
        id: 'satir',
        quote: '關係的真諦，是兩個身心整合的人，創造彼此被看見、被理解的空間',
        theory: '薩提亞模式核心是「身心整合，內外一致」，強調改善溝通、提升自尊，而非消除表面症狀。',
        scenarios: {
            'default': {
                caseContent: '阿玲同先生結婚8年，每次爭執都會用「沉默冷戰」回應，先生覺得她不夠在乎，她卻只是怕說錯話傷感情。原來阿玲成長中習慣了「壓抑感受」，遇到矛盾就自動封閉，導致夫妻間誤會越積越深，連周末出行計劃都常因為冷戰泡湯。',
                methodStep: '「三句表達法」—— 先說事實（「今日你忘記我們約好去買菜」），再說感受（「我有啲失落同失望」），最後說需求（「希望你下次記得後可以提前同我講」），避免壓抑或指責。',
                reminder: '每種溝通模式背後，都藏著渴望被理解的心意，學會真實表達，關係才會慢慢流動起來 ✨'
            }
        }
    },
    {
        name: '約翰·戈特曼',
        title: '婚姻關係研究權威',
        id: 'gottman',
        quote: '幸福的婚姻，不是沒有衝突，而是有修復衝突的能力',
        theory: '戈特曼通過40年研究，發現夫妻間「5:1的積極互動比率」是關係穩定的關鍵，積極回應伴侶的連接嘗試更能鞏固感情。',
        scenarios: {
            'default': {
                caseContent: '阿強每日返工疲憊，太太分享同事趣事時，他總是一邊刷手機一邊敷衍回應；太太抱怨家務分工不均，他就反駁「我賺錢更辛苦」。慢慢太太不再主動分享生活，兩人睡前只剩沉默，甚至懷疑彼此是否還適合。其實太太只是渴望阿強的關注，而阿強沒有意識到，敷衍回應正在消耗彼此的感情。',
                methodStep: '「每日3分鐘傾聽儀式」—— 睡前各自分享1件當日小事，傾聽方不打斷、不辯解，只說1句認可的話（「原來你今日處理咗咁多麻煩事，真係好叻」），累積積極互動。',
                reminder: '感情的溫度，藏在每一次認真回應裡，小小的積極互動，就能築起堅固的關係防線 💛'
            }
        }
    },
    {
        name: '阿爾弗雷德·阿德勒',
        title: '個體心理學之父',
        id: 'adler',
        quote: '所有煩惱，都是人際關係的煩惱；但所有喜悅，也來自人際關係',
        theory: '阿德勒心理學強調「課題分離」與「共同體感覺」，認為我們不應被過去的創傷定義，而應著眼於未來的目的，在關係中建立橫向的平等連結。',
        scenarios: {
            'default': {
                caseContent: '偉明在公司升職後壓力大增，返到屋企經常將工作情緒發洩在太太身上。太太試圖關心，偉明卻覺得是干涉。其實偉明陷入了「證明自己」的焦慮，忘記了家是放鬆的地方，而非另一個戰場。他需要明白，工作評價是別人的課題，如何對待家人是自己的課題。',
                methodStep: '「課題分離練習」—— 當感到煩躁時，在心中畫一條線：這是工作的壓力（別人的課題），還是我對家人的態度（我的課題）？深呼吸，選擇只處理屬於自己的部分，回家後給太太一個擁抱。',
                reminder: '勇氣不是不害怕，而是即使害怕，依然選擇信任與連結。放下防衛，愛自然會進來 🌿'
            }
        }
    },
    {
        name: '埃裡希·弗洛姆',
        title: '人本主義哲學家',
        id: 'fromm',
        quote: '愛不是一種感覺，而是一種能力；是一門需要學習與練習的藝術',
        theory: '弗洛姆在《愛的藝術》中指出，成熟的愛是「保留自己完整性的情況下與他人合一」，包含關心、責任、尊重與了解四個要素。',
        scenarios: {
            'default': {
                caseContent: '家寶覺得同先生激情不再，日子過得好平淡，懷疑愛已經消失。其實家寶期待的是「被愛」的感覺，而忽略了愛是主動的「給予」。當我們只等待對方付出時，關係就會枯竭。真正的愛，是在平淡的煮飯、晾衫中，依然保持對對方生命的好奇與關懷。',
                methodStep: '「主動愛之行動」—— 今日嘗試做一件平時少做但對方會開心的事（例如主動洗碗、為他泡杯茶），專注於「給予」的過程，觀察對方反應，重新啟動愛的循環。',
                reminder: '愛不是名詞，是動詞。在每一個微小的行動中，我們都在重新創造愛 💞'
            }
        }
    },
    {
        name: '約翰·鮑爾比',
        title: '依附理論創始人',
        id: 'bowlby',
        quote: '親密關係是我們探索世界的安全基地；安全感來自可回應的情感連結',
        theory: '鮑爾比發現成人的親密關係重演了童年的依附模式。建立「安全型依附」，關鍵在於當伴侶發出情感需求時，我們能及時且溫暖地回應。',
        scenarios: {
            'default': {
                caseContent: '敏儀好怕先生遲覆 WhatsApp，一找不到人就會奪命追魂 call，搞到先生好大壓力，甚至想逃避。敏儀的焦慮源於「焦慮型依附」，深怕被拋棄。先生的冷處理反而加劇了她的恐慌。其實敏儀需要的是確認「你在這裡」，而先生需要的是「信任空間」。',
                methodStep: '「情感確認法」—— 敏儀感到焦慮時，直接表達需求而非指責：「我依家有啲不安，想你覆一句知道。」先生則練習回應：「我收到，正在忙，今晚返黎詳談。」建立安全的回應機制。',
                reminder: '安全感不是束縛對方，而是即使不在身邊，心也知道彼此相連 🏠'
            }
        }
    },
    {
        name: '羅洛·梅',
        title: '存在主義心理學家',
        id: 'may',
        quote: '愛與意志是不可分割的；愛是意志的行動，意志是愛的堅持',
        theory: '羅洛梅強調在焦慮時代，我們需要勇氣去愛。愛不是衝動，而是一種決心，是在面對不確定性時，依然選擇對另一個生命負責。',
        scenarios: {
            'default': {
                caseContent: '志強同太太因為買樓問題意見不合，陷入冷戰。志強覺得太太不切實際，太太覺得志強沒有承擔。兩人都等著對方妥協。其實這是一種權力鬥爭。愛需要意志來跨越分歧，不是要贏過對方，而是為了共同的未來，願意放下部分的自我中心。',
                methodStep: '「共同意願清單」—— 坐下來，不是討論誰對誰錯，而是寫下「我們共同想要的生活」。找出雙方願景的重疊處（例如：都想有個安穩的家），以此為基點重新協商。',
                reminder: '愛是即使在風雨中，依然選擇緊握對方的手，共同面對未知的勇氣 🌪️'
            }
        }
    },
    {
        name: '卡爾·榮格',
        title: '分析心理學創始人',
        id: 'jung',
        quote: '與其做好人，我寧願做一個完整的人；接納陰影，才能擁抱光明',
        theory: '榮格認為親密關係是「個體化」的最佳修煉場。伴侶往往是我們「陰影」的投射，我們討厭對方的特質，往往是自己潛意識中壓抑的部分。',
        scenarios: {
            'default': {
                caseContent: '思雅最受不了先生做事拖拉、優柔寡斷，每次見到都無名火起。其實思雅自己是一個急性子、強迫症的人，她潛意識裡壓抑了「放鬆、隨性」的一面。她對先生的憤怒，其實是對自己無法放鬆的投射。接納先生的慢，其實是接納自己的內在需求。',
                methodStep: '「陰影對話」—— 當你想指責對方時，停一停，問自己：「這個特質我身上有嗎？還是我渴望擁有？」試著欣賞對方的不同，例如：「多謝你提醒我可以慢下來。」',
                reminder: '在彼此的眼光中看見完整的自己，愛讓我們成為更好、更真實的人 🌓'
            }
        }
    },
    {
        name: '李中瑩',
        title: 'NLP 執行師',
        id: 'lee',
        quote: '溝通的意義決定於對方的回應；沒有兩個人是一樣的，所以沒有兩個人對同一件事的看法絕對一致',
        theory: '李中瑩強調「地圖不是疆域」，每個人都有自己的內在運作模式。尊重對方的世界觀，是有效溝通的前提。',
        scenarios: {
            'default': {
                caseContent: '家明覺得週末應該在家休息打機，太太卻想出去行山。兩人都覺得對方「自私」。其實這只是價值觀排序不同，沒有對錯。家明重視「放鬆」，太太重視「體驗」。強求一致只會帶來痛苦，尊重差異才能找到共贏方案。',
                methodStep: '「價值觀交換」—— 試著說：「我理解你想行山是為了健康和樂趣，而我想打機是為了釋放壓力。」然後尋找第三選擇：「不如星期六行半日山，星期日我全日打機？」',
                reminder: '愛不是要改變對方，而是懂得欣賞那份與你不同的獨特風景 🗺️'
            }
        }
    },
    {
        name: '斯蒂芬·卡普曼',
        title: '戲劇三角理論創始人',
        id: 'karpman',
        quote: '跳出受害者、迫害者、拯救者的遊戲，建立成人式的平等關係',
        theory: '卡普曼發現許多不健康的關係都在「戲劇三角」中輪迴。要打破循環，我們需要覺察自己的角色，轉向「創造者、挑戰者、教練」的賦能三角。',
        scenarios: {
            'default': {
                caseContent: '美玲經常向先生抱怨工作辛苦（受害者），希望先生安慰。先生給建議時，她又覺得先生不理解（迫害者）。先生覺得好無奈（受害者），最後不想理她。這就是典型的三角遊戲。美玲需要為自己的情緒負責，而不是等待拯救；先生需要傾聽而非說教。',
                methodStep: '「去角色化練習」—— 當發現自己在抱怨時，轉念一想：「我可以做什麼來改善現狀？」直接提出具體請求：「我現在只需要一個擁抱，不需要建議。」',
                reminder: '成熟的愛，是兩個獨立的靈魂，選擇並肩同行，而非互相依賴 🎭'
            }
        }
    }
];

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
if (!fs.existsSync(AVATARS_DIR)) fs.mkdirSync(AVATARS_DIR, { recursive: true });

// Converter
const converter = OpenCC.Converter({ from: 'cn', to: 'hk' });

function localizeText(text) {
    let converted = converter(text);
    // Fix OpenCC artifacts
    converted = converted.replace(/黑麪/g, '黑面');
    converted = converted.replace(/麪/g, '面');
    converted = converted.replace(/説/g, '說');
    converted = converted.replace(/温/g, '溫');
    // Forbidden words replacement
    converted = converted.replace(/老公/g, '先生');
    converted = converted.replace(/老婆/g, '太太');
    return converted;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Generate Abstract SVG
function generateAbstractSvg(palette, width, height) {
    const { bg, shapes } = palette;
    
    // Simple abstract shapes: flowing curves or soft circles
    const shape1Color = shapes[0];
    const shape2Color = shapes[1];
    
    // Random positions for shapes
    const cx1 = Math.random() * width;
    const cy1 = Math.random() * height;
    const r1 = 100 + Math.random() * 200;
    
    const cx2 = Math.random() * width;
    const cy2 = Math.random() * height;
    const r2 = 150 + Math.random() * 250;

    const pathD = `M0,${height} C${width/3},${height/2} ${width/2},${height/3} ${width},${height/2} V${height} Z`;

    return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${bg}"/>
        <circle cx="${cx1}" cy="${cy1}" r="${r1}" fill="${shape1Color}" opacity="0.6"/>
        <circle cx="${cx2}" cy="${cy2}" r="${r2}" fill="${shape2Color}" opacity="0.5"/>
        <path d="${pathD}" fill="${shape1Color}" opacity="0.3"/>
    </svg>
    `;
}

async function generateImage(filename) {
    const palette = PALETTES[getRandomInt(PALETTES.length)];
    const width = 750;
    const height = 400;
    
    const svgBuffer = Buffer.from(generateAbstractSvg(palette, width, height));
    
    // Main image
    await sharp(svgBuffer)
        .webp({ quality: 75 })
        .toFile(path.join(IMAGES_DIR, filename));
    
    // Small image
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

async function generateAvatar(name, initials) {
    const filePath = path.join(AVATARS_DIR, `${name}.webp`);
    if (fs.existsSync(filePath)) return;

    // Generate text-based avatar
    const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#F2D7D5"/>
        <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="40" fill="#922B21" text-anchor="middle" font-weight="bold">${initials}</text>
    </svg>
    `;

    await sharp(Buffer.from(svg))
        .webp({ quality: 80 })
        .toFile(filePath);
}

async function updatePages() {
    const timestamp = new Date().toISOString();
    console.log(`Starting update at ${timestamp}`);
    
    // Shuffle Psychologists
    const shuffled = [...PSYCHOLOGISTS_DATA].sort(() => 0.5 - Math.random());
    const selectedPsychologists = shuffled.slice(0, 5); // Pick 5 unique
    
    for (let i = 0; i < 5; i++) {
        const pageNum = i + 1;
        const data = selectedPsychologists[i];
        const scenario = data.scenarios['default']; // Use default scenario for now
        
        // Localize content
        const localizedName = localizeText(data.name);
        const localizedTitle = localizeText(data.title);
        const localizedQuote = localizeText(data.quote);
        const localizedTheory = localizeText(data.theory);
        const localizedCase = localizeText(scenario.caseContent);
        const localizedMethod = localizeText(scenario.methodStep);
        const localizedReminder = localizeText(scenario.reminder);

        // Generate Avatar (using first char as initial)
        await generateAvatar(data.id, localizedName.charAt(0));

        // Generate Image
        const imageFilename = `header-page${pageNum}-${Date.now()}.webp`;
        const imageData = await generateImage(imageFilename);

        // WhatsApp Message
        const msgContent = `你好！今期 ${localizedName} 分享：${localizedQuote.substring(0, 20)}... 點開舊鏈接查看更多: https://your-domain.com/page${pageNum} 💛✨👫`;
        console.log('[WHATSAPP_MSG]', msgContent);

        // Structured Data for Page Component
        const pageData = {
            psychologist: {
                name: localizedName,
                title: localizedTitle,
                avatar: `/images/avatars/${data.id}.webp`
            },
            content: {
                quote: localizedQuote,
                theory: localizedTheory,
                case: localizedCase,
                method: localizedMethod,
                reminder: localizedReminder
            },
            bgImageUrl: imageData.url,
            bgImageSrcSet: imageData.srcSet,
            deployTimestamp: timestamp,
            msgVersion: `v-${Date.now()}`
        };

        fs.writeFileSync(path.join(DATA_DIR, `page${pageNum}.json`), JSON.stringify(pageData, null, 2));
        console.log(`Updated Page ${pageNum} with ${data.name}`);
    }
    
    console.log('Update complete.');
}

updatePages().catch(console.error);
