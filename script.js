/* ==========================================================================
   SCRIPT CONDIVISO DA TUTTE LE PAGINE DEL SITO
   - Menu hamburger
   - Lingua del sito: scelta una volta, ricordata su tutte le pagine
   Per usarlo in una nuova pagina basta: <script src="(percorso)/script.js"></script>
   ========================================================================== */

(function () {
    'use strict';

    /* ---------------------------------------------------------------------
       1. CONFIGURAZIONE LINGUE
       --------------------------------------------------------------------- */
    const LANGUAGES = [
        { code: 'it', flag: '🇮🇹', label: 'Italiano' },
        { code: 'en', flag: '🇬🇧', label: 'English' },
        { code: 'es', flag: '🇪🇸', label: 'Español' },
        { code: 'fr', flag: '🇫🇷', label: 'Français' },
        { code: 'zh-CN', flag: '🇨🇳', label: '中文' },
        { code: 'ja', flag: '🇯🇵', label: '日本語' }
    ];
    const STORAGE_KEY = 'bf_site_lang';
    const PAGE_SOURCE_LANG = 'en';   // lingua di partenza dichiarata a Google Translate
    const DEFAULT_LANG = 'it';

    /* ---------------------------------------------------------------------
       DIZIONARIO DEI TESTI DEL SITO
       Ordine delle lingue: [it, en, es, fr, zh-CN, ja]
       Per aggiungere un testo: nuova chiave qui + data-i18n="chiave" nell'HTML
       (oppure SiteLang.t('chiave') nel JavaScript).
       {r} {n} ecc. sono segnaposto sostituiti dal codice.
       --------------------------------------------------------------------- */
    const I18N_ORDER = ['it', 'en', 'es', 'fr', 'zh-CN', 'ja'];
    const I18N = {
        // Menu
        'nav.units': ['Unità', 'Units', 'Unidades', 'Unités', '单位', 'ユニット'],
        'nav.story': ['Storia', 'Story', 'Historia', 'Histoire', '故事', 'ストーリー'],
        'nav.events': ['Eventi', 'Events', 'Eventos', 'Événements', '活动', 'イベント'],
        'nav.items': ['Oggetti', 'Items', 'Objetos', 'Objets', '道具', 'アイテム'],
        'nav.sphere': ['Sfere', 'Spheres', 'Esferas', 'Sphères', '球体', 'スフィア'],

        // Home
        'home.title': ["Benvenuto nell'Archivio di Grand Gaia", 'Welcome to the Grand Gaia Archive', 'Bienvenido al Archivo de Grand Gaia', 'Bienvenue dans les Archives de Grand Gaia', '欢迎来到格兰盖亚档案馆', 'グランガイア・アーカイブへようこそ'],
        'home.units': ['Lista Unità', 'Units List', 'Lista de Unidades', 'Liste des Unités', '单位列表', 'ユニット一覧'],

        // Filtri lista unità
        'filter.search': ['Cerca Unità (Nome o ID)...', 'Search Units (Name or ID)...', 'Buscar unidades (nombre o ID)...', 'Rechercher une unité (nom ou ID)...', '搜索单位（名称或ID）...', 'ユニット検索（名前またはID）...'],
        'filter.allRarities': ['Tutte le Rarità', 'All Rarities', 'Todas las rarezas', 'Toutes les raretés', '全部稀有度', '全レアリティ'],
        'element.fire': ['Fuoco', 'Fire', 'Fuego', 'Feu', '火', '火'],
        'element.water': ['Acqua', 'Water', 'Agua', 'Eau', '水', '水'],
        'element.earth': ['Terra', 'Earth', 'Tierra', 'Terre', '木', '木'],
        'element.thunder': ['Tuono', 'Thunder', 'Trueno', 'Foudre', '雷', '雷'],
        'element.light': ['Luce', 'Light', 'Luz', 'Lumière', '光', '光'],
        'element.dark': ['Oscurità', 'Dark', 'Oscuridad', 'Ténèbres', '暗', '闇'],

        // Modale unità
        'unit.summonQuote': ['Frase di Evocazione', 'Summon Quote', 'Frase de invocación', "Réplique d'invocation", '召唤台词', '召喚時のセリフ'],
        'unit.fusionQuote': ['Frase di Fusione', 'Fusion Quote', 'Frase de fusión', 'Réplique de fusion', '合成台词', '合成時のセリフ'],
        'unit.evolveQuote': ['Frase di Evoluzione', 'Evolution Quote', 'Frase de evolución', "Réplique d'évolution", '进化台词', '進化時のセリフ'],
        'unit.lore': ['Storia', 'Lore', 'Historia', 'Histoire', '背景故事', 'ユニット設定'],
        'unit.loreMissing': ['Storia non disponibile.', 'Story not available.', 'Historia no disponible.', 'Histoire non disponible.', '暂无背景故事。', '設定はまだありません。'],
        'unit.leaderSkill': ['Abilità Leader', 'Leader Skill', 'Habilidad de líder', 'Compétence de chef', '队长技能', 'リーダースキル'],
        'unit.evolution': ['Evoluzione', 'Evolution', 'Evolución', 'Évolution', '进化', '進化'],
        'evo.select': ["Seleziona un'unità per visualizzare i materiali e i costi di evoluzione.", 'Select a unit to see evolution materials and costs.', 'Selecciona una unidad para ver los materiales y costes de evolución.', "Sélectionnez une unité pour voir les matériaux et coûts d'évolution.", '选择一个单位以查看进化材料和费用。', 'ユニットを選ぶと進化素材と費用が表示されます。'],
        'evo.to': ['Evoluzione a {r}', 'Evolution to {r}', 'Evolución a {r}', 'Évolution en {r}', '进化至 {r}', '{r}へ進化'],
        'evo.none': ['Nessuna evoluzione successiva disponibile.', 'No further evolution available.', 'No hay más evoluciones disponibles.', 'Aucune évolution supplémentaire disponible.', '没有后续进化。', 'これ以上の進化はありません。'],
        'evo.noMaterials': ['Materiali non specificati', 'Materials not specified', 'Materiales no especificados', 'Matériaux non précisés', '未指定材料', '素材未設定'],
        'evo.result': ['Unità evoluta', 'Evolved unit', 'Unidad evolucionada', 'Unité évoluée', '进化后单位', '進化後ユニット'],
        'evo.material': ['Materiale {n}', 'Material {n}', 'Material {n}', 'Matériau {n}', '材料 {n}', '素材 {n}']
    };

    const isSupported = (code) => LANGUAGES.some(l => l.code === code);

    function readSaved() {
        try {
            const v = localStorage.getItem(STORAGE_KEY);
            if (isSupported(v)) return v;
        } catch (e) { /* storage non disponibile */ }
        // Fallback: cookie (utile se localStorage è bloccato)
        const m = document.cookie.match(new RegExp('(?:^|; )' + STORAGE_KEY + '=([^;]*)'));
        if (m && isSupported(decodeURIComponent(m[1]))) return decodeURIComponent(m[1]);
        return null;
    }

    function guessFromBrowser() {
        const nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        const lower = nav.toLowerCase();
        if (lower.startsWith('zh')) return 'zh-CN';
        const short = lower.split('-')[0];
        return isSupported(short) ? short : DEFAULT_LANG;
    }

    function saveLang(code) {
        try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* ignora */ }
        document.cookie = STORAGE_KEY + '=' + encodeURIComponent(code) + '; path=/; max-age=31536000; SameSite=Lax';
    }

    // Cookie letto da Google Translate per tradurre automaticamente ogni pagina
    function setGoogTransCookie(code) {
        const host = window.location.hostname;
        const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
        // pulizia di eventuali cookie vecchi (con e senza dominio)
        document.cookie = 'googtrans=; path=/; ' + expired;
        if (host) {
            document.cookie = 'googtrans=; path=/; domain=' + host + '; ' + expired;
            document.cookie = 'googtrans=; path=/; domain=.' + host + '; ' + expired;
        }
        if (code === PAGE_SOURCE_LANG) return; // lingua originale: nessuna traduzione
        const value = '/' + PAGE_SOURCE_LANG + '/' + code;
        document.cookie = 'googtrans=' + value + '; path=/';
        if (host && host.includes('.')) document.cookie = 'googtrans=' + value + '; path=/; domain=' + host;
    }

    let currentLang = readSaved() || guessFromBrowser();
    const hasSavedChoice = !!readSaved();
    setGoogTransCookie(currentLang);
    document.documentElement.lang = currentLang;

    // Restituisce il testo tradotto per una chiave (fallback: inglese, poi italiano, poi la chiave stessa)
    function translate(key, vars) {
        const row = I18N[key];
        let text = key;
        if (row) {
            const idx = I18N_ORDER.indexOf(currentLang);
            text = (idx >= 0 && row[idx]) || row[I18N_ORDER.indexOf('en')] || row[0] || key;
        }
        if (vars) Object.keys(vars).forEach(k => { text = text.split('{' + k + '}').join(vars[k]); });
        return text;
    }

    // Applica le traduzioni a tutti gli elementi con data-i18n / data-i18n-placeholder / data-i18n-title
    function applyTranslations(root) {
        const scope = root || document;
        scope.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = translate(el.getAttribute('data-i18n'));
            el.classList.add('notranslate'); // Google non deve ritradurre testi già tradotti da noi
        });
        scope.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.setAttribute('placeholder', translate(el.getAttribute('data-i18n-placeholder')));
            el.classList.add('notranslate');
        });
        scope.querySelectorAll('[data-i18n-title]').forEach(el => {
            el.setAttribute('title', translate(el.getAttribute('data-i18n-title')));
        });
    }

    /* ---------------------------------------------------------------------
       2. API PUBBLICA: window.SiteLang
       - SiteLang.get()          -> codice lingua attuale ('it', 'en', ...)
       - SiteLang.set('en')      -> cambia lingua su tutto il sito
       - evento 'sitelanguagechange' su window (event.detail.lang)
       --------------------------------------------------------------------- */
    function setLanguage(code) {
        if (!isSupported(code)) return;
        const changed = code !== currentLang;
        currentLang = code;
        saveLang(code);
        setGoogTransCookie(code);
        document.documentElement.lang = code;
        syncSelectors();
        applyTranslations();

        if (!changed) return;
        window.dispatchEvent(new CustomEvent('sitelanguagechange', { detail: { lang: code } }));

        // Applica subito la traduzione Google senza ricaricare, se possibile
        const combo = document.querySelector('.goog-te-combo');
        if (code === PAGE_SOURCE_LANG) {
            // tornare alla lingua originale richiede un ricaricamento pulito
            window.location.reload();
        } else if (combo) {
            combo.value = code;
            combo.dispatchEvent(new Event('change'));
        } else {
            window.location.reload();
        }
    }

    window.SiteLang = {
        languages: LANGUAGES.slice(),
        get: () => currentLang,
        set: setLanguage,
        t: translate,
        apply: applyTranslations
    };
    // Compatibilità con il vecchio codice (onchange="changeLanguage(this.value)")
    window.changeLanguage = setLanguage;

    /* ---------------------------------------------------------------------
       3. SELETTORE LINGUA NELL'HEADER (creato in automatico su ogni pagina)
       --------------------------------------------------------------------- */
    function buildSelect(id) {
        const select = document.createElement('select');
        select.id = id;
        select.className = 'site-lang-select notranslate';
        select.setAttribute('aria-label', 'Lingua / Language');
        LANGUAGES.forEach(l => {
            const opt = document.createElement('option');
            opt.value = l.code;
            opt.textContent = l.flag + ' ' + l.label;
            select.appendChild(opt);
        });
        select.value = currentLang;
        select.addEventListener('change', () => setLanguage(select.value));
        return select;
    }

    function syncSelectors() {
        document.querySelectorAll('.site-lang-select').forEach(s => { s.value = currentLang; });
    }

    function injectStyles() {
        if (document.getElementById('site-lang-styles')) return;
        const style = document.createElement('style');
        style.id = 'site-lang-styles';
        style.textContent = `
            .site-lang-wrap { display: flex; align-items: center; gap: 12px; }
            .site-lang-select {
                -webkit-appearance: none; -moz-appearance: none; appearance: none;
                background: #1a1a1a url('data:image/svg+xml;utf8,<svg fill="%23d4af37" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 8px center;
                color: #fff; border: 1px solid #d4af37; border-radius: 6px;
                padding: 7px 32px 7px 10px; font-size: 0.9rem; font-weight: bold;
                cursor: pointer; outline: none; color-scheme: dark; font-family: inherit;
            }
            .site-lang-select:hover, .site-lang-select:focus-visible { box-shadow: 0 0 10px rgba(212,175,55,0.4); }

            /* Nasconde barra e popup di Google Translate su tutte le pagine */
            .goog-te-banner-frame, iframe.skiptranslate, .VIpgJd-yA0ebn-i42vf-fir42d,
            #goog-gt-tt, .goog-te-balloon-frame { display: none !important; visibility: hidden !important; }
            body { top: 0 !important; }
            font { background: transparent !important; box-shadow: none !important; }
            #google_translate_element { position: absolute; left: -9999px; top: -9999px; width: 1px; height: 1px; overflow: hidden; }

            /* Scelta lingua al primo accesso */
            .lang-welcome {
                position: fixed; inset: 0; z-index: 100000;
                display: flex; align-items: center; justify-content: center; padding: 16px;
                background: rgba(0,0,0,0.88); backdrop-filter: blur(6px);
            }
            .lang-welcome-box {
                width: 100%; max-width: 520px; text-align: center;
                background: #111; border: 2px solid #d4af37; border-radius: 14px;
                padding: 28px 22px; box-shadow: 0 0 40px rgba(212,175,55,0.25);
            }
            .lang-welcome-box h2 { color: #d4af37; margin: 0 0 6px; font-size: 1.5rem; letter-spacing: 1px; }
            .lang-welcome-box p { color: #bbb; margin: 0 0 22px; font-size: 0.95rem; }
            .lang-welcome-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
            .lang-welcome-btn {
                background: #1a1a1a; color: #fff; border: 1px solid #444; border-radius: 10px;
                padding: 14px 8px; cursor: pointer; font: inherit; font-weight: bold;
                display: flex; flex-direction: column; align-items: center; gap: 6px;
                transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
            }
            .lang-welcome-btn .flag { font-size: 1.8rem; line-height: 1; }
            .lang-welcome-btn:hover, .lang-welcome-btn:focus-visible { border-color: #d4af37; background: #222; transform: translateY(-2px); outline: none; }
            .lang-welcome-btn.is-suggested { border-color: #d4af37; }

            @media (max-width: 600px) {
                .site-lang-select { padding: 6px 28px 6px 8px; font-size: 0.8rem; }
                .lang-welcome-grid { grid-template-columns: repeat(2, 1fr); }
            }
        `;
        document.head.appendChild(style);
    }

    function injectHeaderSelector() {
        if (document.querySelector('.site-lang-select')) return;
        const container = document.querySelector('.header-container');
        if (!container) return;
        const hamburger = container.querySelector('.hamburger');
        const wrap = document.createElement('div');
        wrap.className = 'site-lang-wrap';
        wrap.appendChild(buildSelect('siteLangSelector'));
        // Mette selettore + (eventuale) hamburger insieme a destra del logo
        const nav = container.querySelector('.main-nav');
        if (nav) wrap.insertBefore(nav, wrap.firstChild);
        if (hamburger) wrap.appendChild(hamburger);
        container.appendChild(wrap);
    }

    /* ---------------------------------------------------------------------
       4. POPUP DI SCELTA LINGUA AL PRIMO ACCESSO
          Compare solo nelle pagine con <body data-ask-language>
          e solo se l'utente non ha ancora scelto una lingua.
       --------------------------------------------------------------------- */
    function showWelcomePicker() {
        const suggested = guessFromBrowser();
        const overlay = document.createElement('div');
        overlay.className = 'lang-welcome notranslate';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.innerHTML = `
            <div class="lang-welcome-box">
                <h2>Scegli la lingua</h2>
                <p>Choose your language · Elige tu idioma · Choisissez votre langue</p>
                <div class="lang-welcome-grid"></div>
            </div>`;
        const grid = overlay.querySelector('.lang-welcome-grid');
        LANGUAGES.forEach(l => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'lang-welcome-btn' + (l.code === suggested ? ' is-suggested' : '');
            btn.innerHTML = `<span class="flag">${l.flag}</span><span>${l.label}</span>`;
            btn.addEventListener('click', () => {
                overlay.remove();
                if (l.code === currentLang) {
                    saveLang(l.code);   // conferma la lingua già attiva
                } else {
                    setLanguage(l.code);
                }
            });
            grid.appendChild(btn);
        });
        document.body.appendChild(overlay);
        const first = grid.querySelector('.is-suggested') || grid.querySelector('button');
        if (first) first.focus();
    }

    /* ---------------------------------------------------------------------
       5. GOOGLE TRANSLATE (caricato in automatico, non serve metterlo nelle pagine)
       --------------------------------------------------------------------- */
    function loadGoogleTranslate() {
        if (!document.getElementById('google_translate_element')) {
            const el = document.createElement('div');
            el.id = 'google_translate_element';
            document.body.appendChild(el);
        }
        if (window.google && window.google.translate) return;
        if (document.querySelector('script[src*="translate_a/element.js"]')) return;

        window.googleTranslateElementInit = function () {
            new google.translate.TranslateElement({
                pageLanguage: PAGE_SOURCE_LANG,
                includedLanguages: LANGUAGES.map(l => l.code).join(','),
                autoDisplay: false
            }, 'google_translate_element');
        };
        const s = document.createElement('script');
        s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        s.async = true;
        document.body.appendChild(s);
    }

    /* ---------------------------------------------------------------------
       6. MENU HAMBURGER
       --------------------------------------------------------------------- */
    function initHamburger() {
        const hamburger = document.getElementById('hamburger');
        const mainNav = document.getElementById('mainNav');
        if (!hamburger || !mainNav) return;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('active');
            // Blocca lo scroll della pagina quando il menu è aperto
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---------------------------------------------------------------------
       AVVIO
       --------------------------------------------------------------------- */
    function init() {
        injectStyles();
        injectHeaderSelector();
        syncSelectors();
        applyTranslations();
        loadGoogleTranslate();
        initHamburger();
        if (!hasSavedChoice && document.body.hasAttribute('data-ask-language')) {
            showWelcomePicker();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();