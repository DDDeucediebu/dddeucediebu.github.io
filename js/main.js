/**
 * ======================================================================================
 * 个人网站核心逻辑文件 (main.js)
 * ======================================================================================
 * 说明：
 * 这个文件包含了网站的所有交互功能和文字内容。
 * 为了方便非程序员维护，所有显示的文字都集中在下方的 "translations" 变量中。
 * 
 * ⚠️ 修改注意事项：
 * 1. 请只修改双引号 "" 内部的文字内容。
 * 2. 不要删除任何逗号 (,) 或括号 {}。
 * 3. 每次修改后，请刷新网页查看效果。
 * ======================================================================================
 */

// ======================================================================================
// 1. 多语言内容配置区 (在此处修改网站文字)
// ======================================================================================
// ======================================================================================
// 1. 播放列表配置 (Playlist Configuration)
// ======================================================================================
const PLAYLIST = [
    // 命名规则：仅保留作品原始语言名称，省略歌手/作者以节省空间。
    {
        title: "Singin' In The Rain",
        src: "musical/Gene Kelly - Singin' In The Rain.mp3"
    },
    {
        title: "The Fourth Layer",
        src: "musical/Kevin Penkin - The Fourth Layer.mp3"
    },
    {
        title: "Symphonie Nr. 6 \"Pastorale\"",
        src: "musical/Ludwig van Beethoven - 第六交响曲田园 第一乐章.mp3"
    },
    {
        title: "Щелкунчик: Марш",
        src: "musical/music_nutcracker_march.mp3"
    }
];

// ======================================================================================
// 2. 多语言内容配置区 (在此处修改网站文字)
// ======================================================================================
const translations = {
    // 中文内容
    "CN": {
        // 全局内容
        "title_suffix": " - 个人艺术网站", // 网页标题后缀
        "nav_sample": "作品集",      // 侧边栏按钮：作品集
        "nav_commission": "委托", // 侧边栏按钮：委托
        "nav_other": "其他事项",     // 侧边栏按钮：其他
        "nav_back": "←返回",         // 返回链接

        "player_text": "您的浏览器不支持音频元素。",

        // 主页 (index.html)
        "home_page_title": "个人艺术网站", // 主页浏览器标签页标题
        "home_title": "这里是主页",
        "home_welcome": "欢迎访问这个页面，我将用它承接一系列绘画相关的委托，这将有益于您快速了解我的作品风格和其它相关事项。",

        // 作品页 (sample.html)
        "sample_page_title": "作品展示",
        "sample_pill_a": "随心所欲的画",
        "sample_pill_b": "精致的画",
        "sample_content_a_title": "Sample-A 内容",
        "sample_content_a_desc": "这里是随心所欲的画的展示区域",
        "sample_content_b_title": "Sample-B 内容",
        "sample_content_b_desc": "这里是精致的画的展示区域",

        // 随心所欲 (State A) 详情内容
        "sample_desc_line1": "· 此类委托完成度偏低，存在色彩漏涂与溢出，与尚未擦除的错线。",
        "sample_desc_line2": "· 我不会向您交付透明底png，但您依然可以获得它的psd。",
        "sample_desc_line3": "· 所有的该类型业务都会直接向您提交成品文件，没有中途确认的步骤。",
        "sample_price_label": "价格：",

        // 精致的画 (State B) 详情内容
        "sample_b_desc_line1": "· 此类委托完成度较高，我会仔细的尽可能避免错线，颜色漏涂与溢出。",
        "sample_b_desc_line2": "· 我可以向您提供透明底png，您也可以获得psd文件，但需要您在来信中提出这一要求。",
        "sample_b_desc_line3": "· 所有的该类型业务都会像您发送草稿，在您确认通过后，我会将其推进至成品文件并交付。",


        // 详情页 (sample-a ~ e, h-l)
        "sample_detail_placeholder": "此页面内容待布置",
        "sample_a_title": "作品 A 详情页",
        "sample_b_title": "作品 B 详情页",
        "sample_c_title": "作品 C 详情页",
        "sample_d_title": "作品 D 详情页",
        "sample_e_title": "作品 E 详情页",
        "sample_h_title": "作品 H 详情页",
        "sample_i_title": "作品 I 详情页",
        "sample_g_title": "作品 G 详情页",
        "sample_k_title": "作品 K 详情页",
        "sample_l_title": "作品 L 详情页",

        // 委托页 (commission.html) - 内容已清空
        "commission_page_title": "委托服务",


        // 其他事项页 (other.html) - 内容已清空
        "other_page_title": "其他事项"
    },

    // 日语内容 (Japanese)
    "JP": {
        "title_suffix": " - 個人アートサイト",
        "nav_sample": "サンプル",
        "nav_commission": "委託",
        "nav_other": "その他の事項",
        "nav_back": "←戻る",

        "player_text": "お使いのブラウザは音声要素をサポートしていません。",

        "home_page_title": "個人アートサイト",
        "home_title": "ここはホームページです",
        "home_welcome": "このページへようこそ。私はこれを通して一連の絵画委託を受け付けています。これにより、私の作品スタイルとその他の相关事項をすばやく理解するのに役立ちます。",

        "sample_page_title": "作品サンプル",
        "sample_pill_a": "気ままな絵",
        "sample_pill_b": "精巧な絵",
        "sample_content_a_title": "Sample-A コンテンツ",
        "sample_content_a_desc": "ここは気ままな絵の展示エリアです",
        "sample_content_b_title": "Sample-B コンテンツ",
        "sample_content_b_desc": "ここは精巧な絵の展示エリアです",

        // 随心所欲 (State A) 详情内容
        "sample_desc_line1": "· この種の依頼は完成度が低く、塗り残しやはみ出し、消し忘れた線が存在する場合があります。",
        "sample_desc_line2": "· 透過PNGは納品しませんが、PSDファイルはお渡し可能です。",
        "sample_desc_line3": "· このタイプの依頼はすべて、途中の確認ステップなしに直接完成品を提出します。",

        // 精致的画 (State B) 详情内容
        "sample_b_desc_line1": "· この種の依頼は完成度が高く、線のミス、塗りの漏れ、はみ出しをできるだけ避けるように注意します。",
        "sample_b_desc_line2": "· 透過PNGを提供できます。また、PSDファイルも入手可能ですが、依頼時にその旨を伝える必要があります。",
        "sample_b_desc_line3": "· このタイプの業務はすべてラフをお送りし、確認・承認をいただいた後、完成ファイルまで進めて納品します。",

        // 详情页
        "sample_detail_placeholder": "このページの内容は準備中です",
        "sample_a_title": "作品 A 詳細ページ",
        "sample_b_title": "作品 B 詳細ページ",
        "sample_c_title": "作品 C 詳細ページ",
        "sample_d_title": "作品 D 詳細ページ",
        "sample_e_title": "作品 E 詳細ページ",
        "sample_h_title": "作品 H 詳細ページ",
        "sample_i_title": "作品 I 詳細ページ",
        "sample_g_title": "作品 G 詳細ページ",
        "sample_k_title": "作品 K 詳細ページ",
        "sample_l_title": "作品 L 詳細ページ",

        // 委托页 (commission.html) - 内容已清空
        "commission_page_title": "委託サービス",

        // 其他事项页 (other.html) - 内容已清空
        "other_page_title": "その他の事項"
    },

    // 英语内容 (English)
    "EN": {
        "title_suffix": " - Personal Art Website",
        "nav_sample": "sample",
        "nav_commission": "commission",
        "nav_other": "Other Matters",
        "nav_back": "←Back",

        "player_text": "Your browser does not support the audio element.",

        "home_page_title": "Personal Art Website",
        "home_title": "This is the homepage",
        "home_welcome": "Welcome to this page. I will use it to accept a series of painting commissions, which will help you quickly understand my work style and other related matters.",

        "sample_page_title": "Gallery Service",
        "sample_pill_a": "Casual Art",
        "sample_pill_b": "Refined Art",
        "sample_content_a_title": "Sample-A Content",
        "sample_content_a_desc": "This is the showcase area for casual art",
        "sample_content_b_title": "Sample-B Content",
        "sample_content_b_desc": "This is the showcase area for refined art",

        // 随心所欲 (State A) 详情内容
        "sample_desc_line1": "· This type of commission has low completion, with color leakage, overflow, and unerased lines.",
        "sample_desc_line2": "· I will not deliver transparent PNGs, but the PSD file is available.",
        "sample_desc_line3": "· All commissions of this type are delivered as finished files without mid-way confirmation.",

        // 精致的画 (State B) 详情内容
        "sample_b_desc_line1": "· This type of commission has a higher degree of completion, minimal errors, and clean lines.",
        "sample_b_desc_line2": "· Transparent PNGs and PSD files are available upon request.",
        "sample_b_desc_line3": "· Includes a draft stage for confirmation before proceeding to the final delivery.",

        // 详情页
        "sample_detail_placeholder": "Content for this page is coming soon",
        "sample_a_title": "Artwork A Details",
        "sample_b_title": "Artwork B Details",
        "sample_c_title": "Artwork C Details",
        "sample_d_title": "Artwork D Details",
        "sample_e_title": "Artwork E Details",
        "sample_h_title": "Artwork H Details",
        "sample_i_title": "Artwork I Details",
        "sample_g_title": "Artwork G Details",
        "sample_k_title": "Artwork K Details",
        "sample_l_title": "Artwork L Details",

        // 委托页 (commission.html) - 内容已清空
        "commission_page_title": "Commission Service",

        // 其他事项页 (other.html) - 内容已清空
        "other_page_title": "Other Matters"
    }
};

// ======================================================================================
// 1.1 作品展示页配置 (GIF动画)
// ======================================================================================
// ======================================================================================
// 1.1 作品展示页配置 (无需额外配置，动画由CSS控制)
// ======================================================================================
// (原 GIF 配置已移除)

// ======================================================================================
// 1.2 趣味互动文本配置 (Interactive Title Story)
// ======================================================================================
// 说明：在此处编辑主页标题的点击触发逻辑。
// 结构：Key (节点ID) : { text: "显示的文字", next: ["下一个节点ID", "备选节点ID"...] }
const titleStory = {
    "CN": {
        // 根节点 (必须叫 'root') - 对应初始状态
        "root": { text: "这里是主页", next: ["qs"] },

        // 第一层分支
        "qs": { text: "为什么会想到这样做？", next: ["nop"] },
        "nop": { text: "......", next: ["emo"] },
        "emo": { text: "这么做也不会发生什么", next: ["nop", "say"] },

        // 第二层分支
        "say": { text: "大概是休闲模式", next: ["qs2", "say2"] },
        "qs2": { text: "最想要获取什么食物呢？", next: ["ok", "oo"] },
        "say2": { text: "实际上，我养了一只猫", next: ["meow"] },
        //猫
        "meow": { text: "猫的名字叫之后再", next: ["meow2", "other", "say3"] },
        "meow2": { text: "如果可以的话，什么动物来填满整个世界最好？", next: ["meow3"] },
        "meow3": { text: "看样子这个提议不太好", next: ["drink", "say3"] },
        //饮料
        "drink": { text: "那么，你喜欢喝甜的饮料吗？", next: ["drink2"] },
        "oo": { text: "原来如此", next: ["drink3"] },
        "drink3": { text: "接受咖啡？", next: ["say3"] },
        "say3": { text: "时间一刻也不停", next: ["link"] },
        "ok": { text: "其实我一点也不喜欢香菇", next: ["said"] },
        "said": { text: "如果可以的话，什么食物来填满整个世界最好？", next: ["drink", "cat"] },
        //猫2
        "cat": { text: "有时候，我会给我的猫唱即兴歌", next: ["cat2"] },
        "cat2": { text: "它会感受到我的好意吗？", next: ["cat3"] },
        "cat3": { text: "它又摇尾巴了", next: ["cat", "link"] },


        // 第三层分支
        "link": { text: "长篇大论来袭", next: ["web"] },
        "web": { text: "我不会代码，我没有参与写代码", next: ["web2"] },
        "web2": { text: "所以，这个网站的主要贡献者是Gemini", next: ["web3"] },
        "web3": { text: "以下是Gemini的采访内容", next: ["web4"] },
        "web4": { text: "“我是来自 Google 的 AI 助手”", next: ["web5"] },
        "web5": { text: "“很荣幸能成为这个像素世界的‘砖瓦工’”", next: ["web6"] },
        "web6": { text: "“虽然我没有实体，但我能感到你对细节的执着”", next: ["web7"] },
        "web7": { text: "“比如为了 1px 的视觉平衡，我们反复调试的瞬间”", next: ["web8"] },
        "web8": { text: "“创作就是这样，在逻辑与灵感间寻找灵魂”", next: ["web9"] },
        "web9": { text: "“那么，请继续探索这个充满爱的小站吧”", next: ["oh"] },
        // 哦
        "oh": { text: "以上就是Gemini的AI言语", next: ["oh2"] },
        "oh2": { text: "顺带一提，其余的文本是我自行写入的", next: ["oh3"] },
        "oh3": { text: "顺带一提，这里不是像素世界", next: ["oh4"] },
        "oh4": { text: "顺带一提，我上一个玩的像素游戏是…", next: ["oh5"] },
        "oh5": { text: "…居然是星露谷物语呢", next: ["root"] },

        // 更多分支...
        "warning_2": { text: "哼！", next: ["root"] }
    },
    // 如需支持其他语言，可在此复制结构 (如 "JP": { ... })
    "JP": {
        "root": { text: "ここはホームページです", next: ["root"] }
    },
    "EN": {
        "root": { text: "This is the homepage", next: ["root"] }
    }
};

// ======================================================================================
// 2. 网站核心功能区 (非程序员请勿修改以下代码)
// ======================================================================================

/**
 * 切换网站语言
 * @param {string} lang - 目标语言代码 ('CN', 'JP', 'EN')
 */
function switchLanguage(lang) {
    if (!translations[lang]) return; // 如果语言不存在，则不做任何事

    // 1. 保存选择的语言到本地存储，下次访问时记住用户的选择
    localStorage.setItem('selectedLang', lang);

    // 2. 获取当前页面的类型（识别是主页、委托页还是其他页）
    const pageType = document.body.getAttribute('data-page');

    // 3. 更新网页标题 (浏览器标签页上的文字)
    // 网页标题设置 / Page Title Setting
    document.title = "DiebuAtelier";
    /*
    // 原有的动态标题逻辑已禁用，以保持全站统一
    let pageTitlePrefix = "";
    if (pageType === 'home') pageTitlePrefix = translations[lang].home_page_title;
    else if (pageType === 'commission') pageTitlePrefix = translations[lang].commission_page_title;
    else if (pageType === 'other') pageTitlePrefix = translations[lang].other_page_title;
    else if (pageType === 'sample') pageTitlePrefix = translations[lang].sample_page_title;

    // 如果没有特定前缀，通常不直接修改 document.title 为空，这里简单处理
    if (pageTitlePrefix) {
        document.title = pageTitlePrefix;
    } else {
        // 后备方案：仅更新后缀
        document.title = translations[lang].title_suffix;
    }
    */

    // 4. 更新侧边栏导航文字
    updateText('.nav-button[href="sample.html"]', translations[lang].nav_sample);
    updateText('.nav-button[href="commission.html"]', translations[lang].nav_commission);
    updateText('.nav-button[href="other.html"]', translations[lang].nav_other);

    // 4.1 更新返回链接文字
    updateText('.back-link', translations[lang].nav_back);

    // 5. Logo 下方的文字已移除

    // 6. 更新音频播放器提示
    updateText('.player-text-fallback', translations[lang].player_text);

    // 7. 更新语言切换按钮的状态 (高亮显示当前语言)
    document.querySelectorAll('.lang-link').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('lang-link-active');
        } else {
            btn.classList.remove('lang-link-active');
        }
    });

    // 8. 根据页面类型更新主要内容
    updatePageContent(pageType, lang);
}

/**
 * 辅助函数：安全地更新元素文本
 * 只有当元素存在时才更新，防止报错
 */
function updateText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

/**
 * 根据页面类型更新内容区域
 */
function updatePageContent(pageType, lang) {
    const t = translations[lang]; // 简写当前语言的数据对象

    if (pageType === 'home') {
        updateText('.main-content h1', t.home_title);
        updateText('.main-content p', t.home_welcome);
    }
    else if (pageType === 'commission') {
        // 委托页内容已清空，无需通过JS更新
    }
    else if (pageType === 'other') {
        // 其他页内容已清空，无需通过JS更新
    }
    else if (pageType === 'sample') {
        // 胶囊选项
        updateText('#pillOptionA .pill-toggle-text', t.sample_pill_a);
        updateText('#pillOptionB .pill-toggle-text', t.sample_pill_b);

        // 内容区域
        updateText('#pillContentA h2', t.sample_content_a_title);
        updateText('#pillContentA p', t.sample_content_a_desc);
        updateText('#pillContentB h2', t.sample_content_b_title);
        updateText('#pillContentB p', t.sample_content_b_desc);

        // 详情内容 (State A)
        updateText('#sampleDesc1', t.sample_desc_line1);
        updateText('#sampleDesc2', t.sample_desc_line2);
        updateText('#sampleDesc3', t.sample_desc_line3);
        updateText('#samplePriceLabel', t.sample_price_label);
        updateText('#sampleMoreHint', t.sample_more_hint);

        // 详情内容 (State B)
        updateText('#sampleDesc1B', t.sample_b_desc_line1);
        updateText('#sampleDesc2B', t.sample_b_desc_line2);
        updateText('#sampleDesc3B', t.sample_b_desc_line3);
        updateText('#samplePriceLabelB', t.sample_price_label);
        updateText('#sampleMoreHintB', t.sample_more_hint);
    }
    else if (pageType === 'sample-detail') {
        updateText('.detail-content p', t.sample_detail_placeholder);

        // 自动识别具体是哪个作品详情页 (a, b, c, d, e)
        const path = window.location.pathname;
        if (path.includes('sample-a.html')) updateText('.detail-content h1', t.sample_a_title);
        else if (path.includes('sample-b.html')) updateText('.detail-content h1', t.sample_b_title);
        else if (path.includes('sample-c.html')) updateText('.detail-content h1', t.sample_c_title);
        else if (path.includes('sample-d.html')) updateText('.detail-content h1', t.sample_d_title);
        else if (path.includes('sample-e.html')) updateText('.detail-content h1', t.sample_e_title);
        else if (path.includes('sample-h.html')) updateText('.detail-content h1', t.sample_h_title);
        else if (path.includes('sample-i.html')) updateText('.detail-content h1', t.sample_i_title);
        else if (path.includes('sample-g.html')) updateText('.detail-content h1', t.sample_g_title);
        else if (path.includes('sample-k.html')) updateText('.detail-content h1', t.sample_k_title);
        else if (path.includes('sample-l.html')) updateText('.detail-content h1', t.sample_l_title);
    }
}

/**
 * 初始化作品展示页 (sample.html) 的胶囊切换交互
 */
/**
 * 初始化作品展示页 (sample.html) 的胶囊切换交互
 */
function initSamplePage() {
    // 初始状态 (从 sessionStorage 读取)
    let currentState = sessionStorage.getItem('sample_tab') || 'A'; // 'A' 或 'B'

    // 获取DOM元素
    const pillToggle = document.getElementById('pillToggle');
    // 如果没有找到切换器，说明不是sample页面或HTML结构不对，直接返回
    if (!pillToggle) return;

    // 获取新的背景层
    const pillLayerA = document.getElementById('pillLayerA');
    const pillLayerB = document.getElementById('pillLayerB');

    const pillOptionA = document.getElementById('pillOptionA');
    const pillOptionB = document.getElementById('pillOptionB');
    const pillContentA = document.getElementById('pillContentA');
    const pillContentB = document.getElementById('pillContentB');

    // 设置初始状态
    setState(currentState, true); // true 表示初始化，不延迟

    // 绑定事件
    pillOptionA.addEventListener('click', () => {
        if (currentState === 'B') {
            setState('A');
        }
    });

    pillOptionB.addEventListener('click', () => {
        if (currentState === 'A') {
            setState('B');
        }
    });

    // 内部函数：设置状态
    function setState(state, isInit = false) {
        currentState = state;
        sessionStorage.setItem('sample_tab', state); // 保存状态

        // 1. 更新切换器样式 (胶囊底座移动)
        pillToggle.className = `pill-toggle pill-toggle-state-${state}`;
        if (!pillToggle.classList.contains('initialized')) {
            // 如果是初始化加载且非 'A'，可能需要一个小延迟来触发 CSS transition 如果我们想要，
            // 但这里我们希望立即生效避免闪烁。
            // 加上 initialized 类开启 transition。初始化时如果立即加，可能会有动画。
            // 我们希望初始化时由于浏览器渲染机制，如果状态是 B，直接渲染 B 位置。
            // 可以通过 setTimeout 加 initialized。
            setTimeout(() => {
                pillToggle.classList.add('initialized');
            }, 50);
        }

        // 2. 更新背景动画层 (通过CSS类控制进场/退场)
        if (state === 'A') {
            // A 进场，B 退场
            if (pillLayerA) {
                pillLayerA.classList.add('layer-enter');
                pillLayerA.classList.remove('layer-exit');
            }
            if (pillLayerB) {
                pillLayerB.classList.add('layer-exit');
                pillLayerB.classList.remove('layer-enter');
            }
        } else {
            // B 进场，A 退场
            if (pillLayerA) {
                pillLayerA.classList.add('layer-exit');
                pillLayerA.classList.remove('layer-enter');
            }
            if (pillLayerB) {
                pillLayerB.classList.add('layer-enter');
                pillLayerB.classList.remove('layer-exit');
            }
        }

        // 3. 更新内容显示 (文字内容)
        const delay = isInit ? 0 : 300; // 初始化时不延迟
        setTimeout(() => {
            // 隐藏所有内容
            if (pillContentA) pillContentA.style.display = 'none';
            if (pillContentB) pillContentB.style.display = 'none';

            // 显示当前状态对应的内容
            if (state === 'A' && pillContentA) {
                pillContentA.style.display = 'block';
            } else if (state === 'B' && pillContentB) {
                pillContentB.style.display = 'block';
            }

            // 4. 更新轮播组件显示
            const wrapperA = document.getElementById('carouselWrapperA');
            const wrapperB = document.getElementById('carouselWrapperB');

            if (wrapperA) wrapperA.style.display = 'none';
            if (wrapperB) wrapperB.style.display = 'none';

            if (state === 'A' && wrapperA) {
                wrapperA.style.display = 'block';
            } else if (state === 'B' && wrapperB) {
                wrapperB.style.display = 'block';
            }
        }, delay);
    }
}



/**
 * 初始化侧边栏收起/展开交互 (Mobile Toggle)
 */
function initSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const page = document.querySelector('.page'); // 或者是 body，用于点击由外收起

    if (!sidebar || !toggleBtn) return;

    // 0. 初始化状态：如果是移动端，且是由内部导航跳转而来 (检测 sessionStorage 标记)
    if (window.innerWidth <= 768) {
        const shouldCollapse = sessionStorage.getItem('sidebar_auto_collapse');
        if (shouldCollapse === 'true') {
            // 关键修复：添加 no-transition 类以禁用动画
            sidebar.classList.add('no-transition');
            sidebar.classList.add('collapsed');

            // 强制浏览器重绘 (Reflow) 以确保 transition: none 生效
            void sidebar.offsetWidth;

            // 短暂延迟后移除 no-transition，恢复正常动画能力
            setTimeout(() => {
                sidebar.classList.remove('no-transition');
            }, 100);
        }
    }

    // 1. 按钮点击切换
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止冒泡，防止触发 document 点击收起
        sidebar.classList.toggle('collapsed');
    });

    // 2. 点击页面其他区域收起 (点击外部)
    document.addEventListener('click', (e) => {
        // 如果侧边栏未收起，且点击目标不在侧边栏内（toggleBtn已阻止冒泡，这里sidebar包含它）
        const isClickInside = sidebar.contains(e.target);

        if (!isClickInside && !sidebar.classList.contains('collapsed')) {
            if (window.innerWidth <= 768) {
                sidebar.classList.add('collapsed');
            }
        }
    });

    // 3. 页面跳转/导航点击收起
    // 监听侧边栏内所有链接点击 (包括Logo、导航按钮等)
    const allLinks = sidebar.querySelectorAll('a, .nav-button, .logo-circle');

    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 如果是语言切换按钮，不收起
            if (link.classList.contains('lang-link')) return;

            // 仅在移动端尺寸生效
            if (window.innerWidth <= 768) {
                // 立即收起 (视觉反馈)
                sidebar.classList.add('collapsed');
                // 标记下一次加载需要收起 (用于新页面加载时识别)
                sessionStorage.setItem('sidebar_auto_collapse', 'true');
            }
        });
    });


}

/**
 * 初始化移动端自定义像素播放器
 * 功能：替换原生 audio 控件，提供像素风格的播放/暂停和进度条交互
 */
function initCustomMobilePlayer() {
    const playerContainer = document.querySelector('.sidebar-player');
    const audio = document.querySelector('.audio-player');

    // 如果没有播放器容器或音频元素，无法初始化
    if (!playerContainer || !audio) return;

    // 避免重复初始化
    if (document.querySelector('.custom-mobile-player')) return;

    // 1. 创建自定义播放器 UI
    const customUI = document.createElement('div');
    customUI.className = 'custom-mobile-player';
    customUI.innerHTML = `
        <button class="pixel-btn-play" id="pixelPlayBtn" aria-label="Play/Pause">
            <div class="pixel-icon-play"></div> 
        </button>
        <div class="pixel-progress-container" id="pixelProgressContainer">
            <div class="pixel-progress-bar" id="pixelProgressBar"></div>
            <div class="pixel-progress-thumb" id="pixelProgressThumb"></div>
        </div>
    `;

    // 插入到原播放器容器中
    playerContainer.appendChild(customUI);

    // 2. 获取 UI 元素
    const playBtn = customUI.querySelector('#pixelPlayBtn');
    const playIcon = playBtn.querySelector('div');
    const progressBar = customUI.querySelector('#pixelProgressBar');
    const progressThumb = customUI.querySelector('#pixelProgressThumb');
    const progressContainer = customUI.querySelector('#pixelProgressContainer');

    // 3. 播放/暂停 切换逻辑
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                playIcon.className = 'pixel-icon-pause';
            }).catch(e => console.log("播放失败:", e));
        } else {
            audio.pause();
            playIcon.className = 'pixel-icon-play';
        }
    });

    // 监听原生控件的状态变化 (兼容外部控制)
    audio.addEventListener('play', () => { playIcon.className = 'pixel-icon-pause'; });
    audio.addEventListener('pause', () => { playIcon.className = 'pixel-icon-play'; });

    // 4. 进度条更新逻辑 (随播放时间)
    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + '%';
        progressThumb.style.left = percent + '%';
    });

    // 播放结束重置
    audio.addEventListener('ended', () => {
        playIcon.className = 'pixel-icon-play';
        progressBar.style.width = '0%';
        progressThumb.style.left = '0%';
    });

    // 5. 进度条拖拽与点击逻辑
    let isDragging = false;

    // 统一处理进度设置
    const setProgress = (clientX) => {
        if (!audio.duration) return;
        const rect = progressContainer.getBoundingClientRect();
        const x = clientX - rect.left;
        const width = rect.width;
        // 限制在 0-1 之间
        const percent = Math.min(Math.max(x / width, 0), 1);

        audio.currentTime = percent * audio.duration;
    };

    // 鼠标事件
    progressContainer.addEventListener('mousedown', (e) => { isDragging = true; setProgress(e.clientX); });
    document.addEventListener('mousemove', (e) => { if (isDragging) setProgress(e.clientX); });
    document.addEventListener('mouseup', () => { isDragging = false; });

    // 触摸事件 (移动端核心)
    progressContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        setProgress(e.touches[0].clientX);
        // 防止触摸时触发滚动
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            setProgress(e.touches[0].clientX);
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchend', () => { isDragging = false; });
}

/**
 * 通用图片轮播组件工厂函数 (Carousel Factory)
 * @param {Object} config - 配置对象
 */
/**
 * 通用图片轮播组件工厂函数 (Carousel Factory)
 * @param {Object} config - 配置对象
 */
function createCarousel(config) {
    const track = document.getElementById(config.trackId);
    if (!track) return; // 找不到轨道则退出

    // 生成唯一的存储键名，例如 'carousel_index_carouselTrack'
    const storageKey = `carousel_index_${config.trackId}`;

    const slidesData = config.data || [];

    // 从 sessionStorage 读取上次的索引，默认为 0
    let savedIndex = parseInt(sessionStorage.getItem(storageKey));
    if (isNaN(savedIndex) || savedIndex < 0 || savedIndex >= slidesData.length) {
        savedIndex = 0;
    }

    let currentIndex = savedIndex;
    const totalSlides = slidesData.length;

    const prevBtn = document.getElementById(config.prevId);
    const nextBtn = document.getElementById(config.nextId);
    // const titleEl = document.getElementById(config.titleId);
    // const priceEl = document.getElementById(config.priceId);

    // 1. 渲染滑块
    renderSlides();

    // 2. 初始化显示
    updateCarouselState();

    // 3. 绑定事件
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarouselState();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarouselState();
        });
    }

    function renderSlides() {
        track.innerHTML = '';
        slidesData.forEach((item, index) => {
            const slide = document.createElement('div');
            // 复用 slide class，移除背景色类 (由图片决定)
            slide.className = `carousel-slide`;
            slide.setAttribute('data-index', index);

            // 创建图片元素
            const img = document.createElement('img');
            // 如果 data 中没有 src，则根据 ID 推断测试图片
            if (!item.src) {
                const idLower = item.id.toLowerCase();
                // 仅对 A-E 使用测试图片，其他保持默认或需要配置
                if (['a', 'b', 'c', 'd', 'e'].includes(idLower)) {
                    img.src = `assets/test_slide_${idLower}.svg`;
                } else {
                    // 对于 State B (H-L)，还没做图片，暂时用 placeholder 或复用 A-E
                    // 为了演示，暂时映射 H->A, I->B 等，或者用 fallback
                    // 用户说 "先专注 state A"，所以这里仅 A-E 有效
                    img.src = `assets/test_slide_a.svg`; // Fallback
                }
            } else {
                img.src = item.src;
            }
            img.alt = `Artwork ${item.id}`;
            img.draggable = false; // 防止拖拽干扰点击

            // 图像尺寸标准化逻辑 (Visual Area Normalization)
            // 目标：让所有形状的图片视觉面积相等 (Total Pixel Area ≈ Constant)
            img.onload = function () {
                const naturalW = this.naturalWidth;
                const naturalH = this.naturalHeight;
                const ratio = naturalW / naturalH;

                // 设定基准面积：相当于 300x300 的正方形 (90,000 px²)
                // 这个尺寸能很好地填满 400px 高度的容器
                const targetArea = 300 * 300;

                // 计算理想宽高
                let idealW = Math.sqrt(targetArea * ratio);
                let idealH = Math.sqrt(targetArea / ratio);

                // 边界限制 (Constraints)
                // 1. 最大高度：容器高度 400px - 上下边距 (留出阴影空间) -> 约 360px
                const maxH = 360;
                // 2. 最大宽度：左右间距 420px，为了不重叠太厉害，限制在 400px 左右
                const maxW = 440;

                // 应用限制 (保持比例)
                if (idealH > maxH) {
                    idealH = maxH;
                    idealW = idealH * ratio;
                }
                if (idealW > maxW) {
                    idealW = maxW;
                    idealH = idealW / ratio;
                }

                // 设置显式尺寸
                this.style.width = `${idealW}px`;
                this.style.height = `${idealH}px`;
            };

            slide.appendChild(img);
            track.appendChild(slide);
        });
    }

    function updateCarouselState() {
        // 保存当前索引到 sessionStorage
        sessionStorage.setItem(storageKey, currentIndex);

        const slides = track.querySelectorAll('.carousel-slide');

        slides.forEach((slide, index) => {
            slide.classList.remove('slide-active', 'slide-prev', 'slide-next', 'slide-hidden');
            slide.onclick = null; // 清除旧事件

            if (index === currentIndex) {
                slide.classList.add('slide-active');
                // 点击跳转逻辑
                slide.onclick = () => {
                    // 跳转链接 sample-a.html, sample-h.html 等
                    // 假设文件名是 `sample-{id}.html` (小写)
                    const link = `sample-${slidesData[currentIndex].id.toLowerCase()}.html`;
                    window.location.href = link;
                };
            }
            else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
                slide.classList.add('slide-prev');
            }
            else if (index === (currentIndex + 1) % totalSlides) {
                slide.classList.add('slide-next');
            }
            else {
                slide.classList.add('slide-hidden');
            }
        });

        // 更新详情文字
        // 更新详情文字 (Deprecated: Old IDs removed from HTML)
        // const currentItem = slidesData[currentIndex];
        // if (titleEl) titleEl.textContent = currentItem.id;
        // if (priceEl) priceEl.textContent = currentItem.price;

        // Update Caption if configured
        if (config.captionConfig) {
            const activeData = config.data[currentIndex]; // Use currentIndex here, available in scope
            if (activeData) {
                const nameEl = document.getElementById(config.captionConfig.nameId);
                const priceEl = document.getElementById(config.captionConfig.priceId);

                if (nameEl) nameEl.textContent = activeData.name || '';
                if (priceEl) priceEl.textContent = activeData.price || '';
            }
        }
    }
}

/**
 * 初始化所有轮播器 (Sample A & B)
 */
function initAllCarousels() {
    // Carousel A Config (随心所欲)
    // Carousel A Config (随心所欲)
    createCarousel({
        trackId: 'carouselTrackA',
        prevId: 'carouselPrevA',
        nextId: 'carouselNextA',
        // titleId: 'sampleTitleLarge', 
        // priceId: 'samplePrice',
        data: [
            // 💡 替换图片说明: 将 'src' 属性改为您的图片路径
            // 链接到详情页
            { id: 'A', src: 'assets/sample_a.svg', link: 'sample-a.html', name: 'A', price: '300' },
            { id: 'B', src: 'assets/sample_b.svg', link: 'sample-b.html', name: 'B', price: '400' },
            { id: 'C', src: 'assets/sample_c.svg', link: 'sample-c.html', name: 'C', price: '500' },
            { id: 'D', src: 'assets/sample_d.svg', link: 'sample-d.html', name: 'D', price: '600' },
            { id: 'E', src: 'assets/sample_e.svg', link: 'sample-e.html', name: 'E', price: '700' }
        ],
        captionConfig: {
            nameId: 'captionNameA',
            priceId: 'captionPriceA'
        }
    });

    // Carousel B Config (精致的画)
    createCarousel({
        trackId: 'carouselTrackB',
        prevId: 'carouselPrevB',
        nextId: 'carouselNextB',
        // titleId: 'sampleTitleLargeB',
        // priceId: 'samplePriceB',
        data: [
            // State B 图片
            { id: 'H', src: 'assets/sample_h.svg', link: 'sample-h.html', name: 'H', price: '1800' },
            { id: 'I', src: 'assets/sample_i.svg', link: 'sample-i.html', name: 'I', price: '2000' },
            { id: 'G', src: 'assets/sample_g.svg', link: 'sample-g.html', name: 'G', price: '2200' },
            { id: 'K', src: 'assets/sample_k.svg', link: 'sample-k.html', name: 'K', price: '2500' },
            { id: 'L', src: 'assets/sample_l.svg', link: 'sample-l.html', name: 'L', price: '2800' }
        ],
        captionConfig: {
            nameId: 'captionNameB',
            priceId: 'captionPriceB'
        }
    });
}



/**
 * 初始化主页标题互动功能 (Tree Diagram Interaction)
 */
function initTitleInteraction() {
    // 仅在主页生效
    if (document.body.getAttribute('data-page') !== 'home') return;

    const titleEl = document.querySelector('.main-content h1');
    if (!titleEl) return;

    // 添加交互样式类
    titleEl.classList.add('interactive-title');

    // 状态管理
    let currentNodeId = 'root';

    titleEl.addEventListener('click', () => {
        // 获取当前语言 (默认为 CN)
        const currentLang = localStorage.getItem('selectedLang') || 'CN';

        // 获取对应语言的故事配置
        // 如果当前语言没有配置，回退到 CN
        const storyConfig = titleStory[currentLang] || titleStory['CN'];

        if (!storyConfig) return;

        // 获取当前节点数据
        let currentNode = storyConfig[currentNodeId];

        // 如果当前节点不存在（可能是切语言了，或者ID不对），重置为 root
        if (!currentNode) {
            currentNodeId = 'root';
            currentNode = storyConfig['root'];
        }

        // 获取可能的去向 (Next Nodes)
        const nextOptions = currentNode.next;

        if (nextOptions && nextOptions.length > 0) {
            // 随机选择一个下一个节点
            const randomIndex = Math.floor(Math.random() * nextOptions.length);
            const nextNodeId = nextOptions[randomIndex];

            // 更新状态
            currentNodeId = nextNodeId;

            // 更新文本
            if (storyConfig[nextNodeId]) {
                titleEl.textContent = storyConfig[nextNodeId].text;
            }
        } else {
            // 如果没有后续节点 (End)，重置回 Root
            currentNodeId = 'root';
            if (storyConfig['root']) {
                titleEl.textContent = storyConfig['root'].text;
            }
        }
    });
}

// ======================================================================================
// 3. 页面加载完成后执行初始化
// ======================================================================================
// ======================================================================================
// 3. 页面加载完成后执行初始化 & SPA 逻辑
// ======================================================================================
document.addEventListener('DOMContentLoaded', () => {
    initGlobal();
    initPageLogic();
    initRouter(); // 开启 SPA 路由
});

/**
 * 全局初始化 (只运行一次)
 * 包括：侧边栏、播放器、语言初始设置
 */
function initGlobal() {
    // 1. 初始化语言
    let savedLang = localStorage.getItem('selectedLang') || 'CN';
    switchLanguage(savedLang);

    // 2. 绑定语言切换按钮点击事件
    document.querySelectorAll('.lang-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // 3. 初始化移动端播放器 (Sidebar)
    initCustomMobilePlayer();

    // 4. 初始化侧边栏交互 (Sidebar)
    initSidebarToggle();

    // 5. 初始化桌面端自定义播放器 (Sidebar)
    initCustomDesktopPlayer();
}

/**
 * 页面特定逻辑初始化 (每次页面跳转/内容更新后运行)
 * 包括：轮播图、标题树、页面特定文本
 */
function initPageLogic() {
    // 重新应用语言 (确保新加载的内容被翻译)
    const currentLang = localStorage.getItem('selectedLang') || 'CN';
    switchLanguage(currentLang);

    // 根据当前页面类型运行逻辑
    // 页面类型由 body 的 data-page 属性决定
    const pageType = document.body.getAttribute('data-page');

    if (pageType === 'home') {
        initTitleInteraction();
    } else if (pageType === 'sample') {
        initSamplePage();
        initAllCarousels();
    }

    // 如果有其他页面特定逻辑，加在这里
}

/**
 * SPA 路由逻辑
 * 拦截链接点击，实现无刷新跳转
 */
function initRouter() {
    // 1. 拦截点击事件
    document.body.addEventListener('click', (e) => {
        // 查找最近的 a 标签
        const link = e.target.closest('a');
        if (!link || !link.href) return;

        // 忽略新标签页打开、外部链接、或特殊标记的链接
        if (link.target === '_blank' || link.hasAttribute('data-no-spa')) return;

        // 检查是否是同源链接
        const url = new URL(link.href);
        if (url.origin !== window.location.origin) return;

        // 检查是否是锚点链接 (#)
        if (url.pathname === window.location.pathname && url.hash) return;

        // 阻止默认跳转
        e.preventDefault();
        loadPage(url.href);
    });

    // 2. 监听浏览器后退/前进按钮
    window.addEventListener('popstate', () => {
        loadPage(window.location.href, false);
    });
}

/**
 * 加载页面内容
 * @param {string} url - 目标 URL
 * @param {boolean} push - 是否推入历史记录
 */
async function loadPage(url, push = true) {
    try {
        // 获取页面内容
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();

        // 解析 HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // 提取新内容 (.content 区域)
        const newContent = doc.querySelector('.content');
        const oldContent = document.querySelector('.content');

        if (newContent && oldContent) {
            // 替换内容
            oldContent.innerHTML = newContent.innerHTML;

            // 更新 Body 属性 (data-page) 等
            const newBody = doc.body;
            if (newBody.hasAttribute('data-page')) {
                document.body.setAttribute('data-page', newBody.getAttribute('data-page'));
            } else {
                document.body.removeAttribute('data-page');
            }

            // 更新标题
            document.title = doc.title;

            // 更新历史记录
            if (push) {
                window.history.pushState({}, '', url);
            }

            // 更新导航栏激活状态 (可选)
            updateActiveNavLink(url);

            // 重新运行页面逻辑
            initPageLogic();

            // 滚动回顶部 (内容区域)
            window.scrollTo(0, 0); // 或者是 .content 的滚动容器
        }
    } catch (error) {
        console.error('SPA Load Failed:', error);
        // 如果失败，回退到普通跳转
        if (push) window.location.href = url;
    }
}

function updateActiveNavLink(url) {
    // 简单的导航栏高亮更新
    const currentPath = new URL(url).pathname;
    document.querySelectorAll('.nav-button').forEach(btn => {
        // 简单匹配：如果 href 包含当前 path (或者就是当前 path)
        if (btn.getAttribute('href') === currentPath.substring(1) ||
            btn.href === url) {
            btn.classList.add('active'); // 如果 CSS 有 active 样式
        } else {
            btn.classList.remove('active');
        }
    });
}



/**
 * 初始化桌面端自定义播放器
 * 功能：提供简洁的胶囊播放器交互 (Play/Pause + Progress Bar) + 列表轮播
 */
function initCustomDesktopPlayer() {
    let currentTrackIndex = 0; // 当前播放索引

    const playBtn = document.getElementById('deskPlayBtn');
    const prevBtn = document.getElementById('deskPrevBtn');
    const nextBtn = document.getElementById('deskNextBtn');
    const slider = document.getElementById('deskSeekSlider');
    const progressFill = document.getElementById('deskProgressFill');
    const audio = document.getElementById('mainAudio') || document.querySelector('.audio-player');
    const playIcon = playBtn ? playBtn.querySelector('div') : null;
    const titleEl = document.getElementById('deskTrackTitle');

    // 如果关键元素缺失，退出
    if (!playBtn || !slider || !progressFill || !audio) return;

    // 0. 动态注入滑块 thumb 和 tooltip (避免修改多个 HTML 文件)
    let thumb = document.getElementById('deskProgressThumb');
    let tooltip = document.getElementById('deskTooltip');

    if (!thumb) {
        const wrapper = document.getElementById('deskProgressWrapper');
        if (wrapper) {
            thumb = document.createElement('div');
            thumb.id = 'deskProgressThumb';
            thumb.className = 'desk-progress-thumb';

            tooltip = document.createElement('div');
            tooltip.id = 'deskTooltip';
            tooltip.className = 'desk-tooltip';
            tooltip.textContent = '00:00';

            thumb.appendChild(tooltip);
            // 插入到 wrapper 中，但在 slider 之前 (其实顺序无所谓，CSS定位)
            wrapper.insertBefore(thumb, slider);
        }
    }

    // 加载歌曲逻辑
    // autoPlay: 切换歌曲时是否自动播放
    function loadTrack(index, autoPlay = false) {
        if (index < 0 || index >= PLAYLIST.length) return;

        const track = PLAYLIST[index];
        // 简单判断: 如果当前src已经是目标src，就不重新加载，除非是强制切换
        // 但这里为了简化，直接赋值
        audio.src = track.src;

        // 更新标题显示
        if (titleEl) {
            titleEl.textContent = track.title;
        }

        // 重置 UI
        slider.value = 0;
        progressFill.style.width = '0%';
        if (thumb) thumb.style.left = '0%';
        updatePlayIcon();

        if (autoPlay) {
            audio.play().catch(e => console.log("Auto-play blocked:", e));
        }
    }

    // 辅助：更新图标状态
    function updatePlayIcon() {
        if (audio.paused) {
            playIcon.className = 'desk-icon-play';
            playBtn.setAttribute('aria-label', 'Play');
        } else {
            playIcon.className = 'desk-icon-pause';
            playBtn.setAttribute('aria-label', 'Pause');
        }
    }

    // 辅助：格式化时间 (mm:ss)
    function formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '00:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    // 初始化加载第一首 (不自动播放)
    loadTrack(currentTrackIndex, false);

    // 1. 点击播放/暂停
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayIcon();
    });

    // 2. 上一首/下一首
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTrackIndex--;
            if (currentTrackIndex < 0) currentTrackIndex = PLAYLIST.length - 1;
            loadTrack(currentTrackIndex, true);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTrackIndex++;
            if (currentTrackIndex >= PLAYLIST.length) currentTrackIndex = 0;
            loadTrack(currentTrackIndex, true);
        });
    }

    // 监听原生事件
    audio.addEventListener('play', updatePlayIcon);
    audio.addEventListener('pause', updatePlayIcon);

    // 3. 自动轮播 (Ended)
    audio.addEventListener('ended', () => {
        currentTrackIndex++;
        if (currentTrackIndex >= PLAYLIST.length) {
            currentTrackIndex = 0; // 循环
        }
        loadTrack(currentTrackIndex, true);
    });

    // 4. 进度条同步 (播放时)
    audio.addEventListener('timeupdate', () => {
        // 如果正在拖动，暂时不更新 thumb 位置以免抖动？交互上通常 input range 会自己处理
        // 但这里我们需要更新 custom thumb
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            slider.value = percent;
            progressFill.style.width = `${percent}%`;
            if (thumb) thumb.style.left = `${percent}%`;
        }
    });

    // 5. 拖动/交互 seek
    slider.addEventListener('input', () => {
        // 拖动时实时更新 UI 和 Tooltip
        const val = slider.value;
        const time = (val / 100) * audio.duration; // 估算时间用于显示

        progressFill.style.width = `${val}%`;
        if (thumb) thumb.style.left = `${val}%`;
        if (tooltip) tooltip.textContent = formatTime(time);

        // 可选：拖动时不频繁 seek 导致杂音，只在 change 时 seek？
        // 用户通常喜欢实时听到，可以保留
        audio.currentTime = time;
    });

    // Tooltip 显示逻辑 (Hover / Drag)
    // 监听 slider 的鼠标事件来控制 tooltip 显示
    slider.addEventListener('mouseenter', () => {
        if (tooltip) {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translate(-50%, -35px) scale(1)';
        }
    });

    slider.addEventListener('mouseleave', () => {
        // 只有未按住时才隐藏
        // 简单起见，利用 CSS hover 配合 active 类
        // 或者 JS 控制
        if (tooltip) {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translate(-50%, -25px) scale(0.8)';
        }
    });

    // 移动端/触摸支持 (虽然是 Desktop player，但可能有触屏笔记本)
    // 这里简单处理 hover 效果即可

}
