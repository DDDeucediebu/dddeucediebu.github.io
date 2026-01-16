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
        "sample_more_hint": "点击例图可以查看更多同类型例图",

        // 详情页 (sample-a ~ e)
        "sample_detail_placeholder": "此页面内容待布置",
        "sample_a_title": "作品 A 详情页",
        "sample_b_title": "作品 B 详情页",
        "sample_c_title": "作品 C 详情页",
        "sample_d_title": "作品 D 详情页",
        "sample_e_title": "作品 E 详情页",

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
        "sample_price_label": "価格：",
        "sample_more_hint": "画像をクリックして、同じタイプの例をさらに表示します",

        // 详情页
        "sample_detail_placeholder": "このページの内容は準備中です",
        "sample_a_title": "作品 A 詳細ページ",
        "sample_b_title": "作品 B 詳細ページ",
        "sample_c_title": "作品 C 詳細ページ",
        "sample_d_title": "作品 D 詳細ページ",
        "sample_e_title": "作品 E 詳細ページ",

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
        "sample_price_label": "Price:",
        "sample_more_hint": "Click the sample image to see more examples of the same type",

        // 详情页
        "sample_detail_placeholder": "Content for this page is coming soon",
        "sample_a_title": "Artwork A Details",
        "sample_b_title": "Artwork B Details",
        "sample_c_title": "Artwork C Details",
        "sample_d_title": "Artwork D Details",
        "sample_e_title": "Artwork E Details",

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
    }
}

/**
 * 初始化作品展示页 (sample.html) 的胶囊切换交互
 */
function initSamplePage() {
    // 初始状态
    let currentState = 'A'; // 'A' 或 'B'

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
    setState(currentState);

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
    function setState(state) {
        currentState = state;

        // 1. 更新切换器样式 (胶囊底座移动)
        pillToggle.className = `pill-toggle pill-toggle-state-${state}`;
        if (!pillToggle.classList.contains('initialized')) {
            pillToggle.classList.add('initialized');
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

        // 3. 延迟更新内容显示 (文字内容)
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
        }, 300); // 配合动画时间稍作延迟
    }
}

// ======================================================================================
// 3. 页面事件监听区 (初始化代码)
// ======================================================================================

document.addEventListener('DOMContentLoaded', function () {
    // 1. 初始化语言
    const savedLang = localStorage.getItem('selectedLang') || 'CN';
    switchLanguage(savedLang);

    // 2. 绑定语言切换按钮点击事件
    const langButtons = document.querySelectorAll('.lang-link');
    langButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // 3. 音频播放器错误处理
    const audioPlayer = document.querySelector('.audio-player');
    if (audioPlayer) {
        audioPlayer.addEventListener('error', function (e) {
            console.log('音频加载失败，请检查文件路径。');
        }, true);
    }

    // 4. 初始化作品展示页逻辑 (如果是 sample 页面)
    // 4. 初始化作品展示页逻辑 (如果是 sample 页面)
    initSamplePage();
    initCarousel();
});

/**
 * 初始化图片轮播组件 (Carousel)
 */
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return; // 如果找不到轮播轨道，直接返回

    // 轮播数据配置 (A-E)
    // 这里的 slideClass 用于对应 CSS 中的颜色样式
    const slidesData = [
        { id: 'A', class: 'slide-color-a', price: '100' },
        { id: 'B', class: 'slide-color-b', price: '200' },
        { id: 'C', class: 'slide-color-c', price: '150' },
        { id: 'D', class: 'slide-color-d', price: '300' },
        { id: 'E', class: 'slide-color-e', price: '250' }
    ];

    let currentIndex = 0; // 当前选中的索引 (0-4)
    const totalSlides = slidesData.length;

    // 获取 DOM 元素
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    // 底部详情元素
    const titleEl = document.getElementById('sampleTitleLarge');
    const priceEl = document.getElementById('samplePrice');

    // 1. 渲染滑块 DOM
    renderSlides();

    // 2. 初始化显示状态
    updateCarouselState();

    // 3. 绑定事件
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            // 循环逻辑: 如果是第0张，减1变成 -1，加上长度变成 last index
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarouselState();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // 循环逻辑: 模运算实现无限循环
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarouselState();
        });
    }

    /**
     * 内部函数: 渲染所有滑块元素
     */
    function renderSlides() {
        track.innerHTML = ''; // 清空内容
        slidesData.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${item.class}`;
            slide.textContent = item.id; // 显示字符 A-E
            slide.setAttribute('data-index', index);
            track.appendChild(slide);
        });
    }

    /**
     * 内部函数: 更新轮播状态 (位置、透明度、详情文字)
     */
    function updateCarouselState() {
        const slides = document.querySelectorAll('.carousel-slide');

        slides.forEach((slide, index) => {
            // 重置所有类
            slide.classList.remove('slide-active', 'slide-prev', 'slide-next', 'slide-hidden');

            // 计算相对位置
            if (index === currentIndex) {
                slide.classList.add('slide-active');
                // 为激活的滑块添加点击事件 (导航到对应详情页)
                slide.onclick = () => {
                    const itemId = slidesData[currentIndex].id;
                    window.location.href = `sample-${itemId.toLowerCase()}.html`;
                };
            }
            else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
                slide.classList.add('slide-prev');
                slide.onclick = null; // 移除非激活滑块的点击事件
            }
            else if (index === (currentIndex + 1) % totalSlides) {
                slide.classList.add('slide-next');
                slide.onclick = null;
            }
            else {
                slide.classList.add('slide-hidden');
                slide.onclick = null;
            }
        });

        // 更新底部文字详情
        const currentItem = slidesData[currentIndex];
        if (titleEl) titleEl.textContent = currentItem.id;
        if (priceEl) priceEl.textContent = currentItem.price;
    }
}
