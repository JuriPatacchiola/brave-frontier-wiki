let allUnits = [];
let currentFilteredUnits = [];
let activeElement = null;
let currentUnitOpen = null;

let displayedCount = 40;
const BATCH_SIZE = 40;
let scrollObserver = null;

function getActiveUnitName(u) {
    const langSelector = document.getElementById('customLangSelector');
    const currentLang = langSelector ? langSelector.value : 'it';
    if (u.names && u.names[currentLang]) {
        return u.names[currentLang];
    }
    return u.name;
}

async function startApp() {
    try {
        const res = await fetch('../data/units.json?t=' + new Date().getTime());
        const rawData = await res.json();

        allUnits = rawData.map(u => {
            if (u.name) u.name = u.name.replace(/,/g, '');
            return u;
        });

        initListeners();
        applyFilters(false);

        const urlParams = new URLSearchParams(window.location.search);
        const unitSlugFromUrl = urlParams.get('unit');
        if (unitSlugFromUrl) {
            const found = allUnits.find(u => getActiveUnitName(u).trim().toLowerCase().replace(/\s+/g, '-') === unitSlugFromUrl);
            if (found) openModal(found);
        }
    } catch (err) {
        console.error("Errore nel caricamento dati:", err);
    }
}

function applyFilters(shouldScroll = false) {
    const search = document.getElementById('mainSearch');
    const raritySel = document.getElementById('raritySelector');

    const q = (search?.value || '').toLowerCase().trim();
    const r = raritySel ? raritySel.value : 'all';

    currentFilteredUnits = allUnits.filter(u => {
        const displayName = getActiveUnitName(u).toLowerCase();
        const nMatch = displayName.includes(q) || String(u.realId).includes(q);
        const rMatch = (r === 'all') || (u.rarity === r) || (r === 'Omni' && (u.rarity === 'Omni' || u.rarity === 'Dream'));
        const eMatch = !activeElement || u.element === activeElement;
        return nMatch && rMatch && eMatch;
    });

    displayedCount = BATCH_SIZE;
    displayUnits(false);

    if (shouldScroll) {
        const container = document.getElementById('gridContainer');
        if (container) {
            container.scrollTop = 0; // Riporta in cima il contenitore con lo scroll
        }
        window.scrollTo(0, 0); // Riporta in cima la pagina principale
    }
}

function setupObserver() {
    if (scrollObserver) scrollObserver.disconnect();

    scrollObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            if (displayedCount < currentFilteredUnits.length) {
                displayedCount += BATCH_SIZE;
                displayUnits(true);
            }
        }
    }, {
        rootMargin: '1500px 0px',
        threshold: 0
    });
}

function displayUnits(appendOnly = false) {
    const container = document.getElementById('gridContainer');
    if (!container) return;

    if (scrollObserver) scrollObserver.disconnect();
    const oldSentinel = document.getElementById('scrollSentinel');
    if (oldSentinel) oldSentinel.remove();

    let startIndex = 0;
    if (appendOnly) {
        startIndex = displayedCount - BATCH_SIZE;
    } else {
        container.innerHTML = '';
    }

    const isMobile = window.innerWidth <= 600;
    const unitsToRender = currentFilteredUnits.slice(startIndex, displayedCount);
    const fragment = document.createDocumentFragment();

    unitsToRender.forEach(u => {
        const elementClass = (u.element || 'Fire').replace('Element ', '').toLowerCase();
        let rarityHTML = (u.rarity === "Omni" || u.rarity === "Dream") ?
            `<img src="https://static.wikia.nocookie.net/bravefrontierglobal/images/f/f8/Phantom_icon.png" class="omni-icon" loading="lazy" decoding="async">` :
            `${u.rarity || "1"}★`;

        const displayName = getActiveUnitName(u);
        const card = document.createElement('div');
        card.className = isMobile ? `card-icon ${elementClass}` : `unit-card ${elementClass}`;

        card.innerHTML = isMobile ? `<img src="${u.image}" loading="lazy" decoding="async" width="60" height="60">` : `
            <div class="card-icon"><img src="${u.image}" loading="lazy" decoding="async" width="60" height="60"></div>
            <div class="card-title notranslate">${displayName}</div>
            <div class="card-rarity">${rarityHTML}</div>`;
        card.onclick = () => openModal(u);

        fragment.appendChild(card);
    });

    container.appendChild(fragment);

    if (displayedCount < currentFilteredUnits.length) {
        const sentinel = document.createElement('div');
        sentinel.id = 'scrollSentinel';
        sentinel.style.cssText = 'height: 10px; width: 100%; pointer-events: none;';
        container.appendChild(sentinel);
        scrollObserver.observe(sentinel);
    }
}

function resetModalScrolls() {
    const modalEl = document.getElementById('unitModal');
    if (!modalEl) return;
    modalEl.scrollTop = 0;
    modalEl.querySelectorAll('*').forEach(el => {
        if (el.scrollTop > 0) el.scrollTop = 0;
    });
}

function openModal(u) {
    currentUnitOpen = u;

    const langSelector = document.getElementById('customLangSelector');
    const currentLang = langSelector ? langSelector.value : 'it';
    let localizedTexts = u.textData?.[currentLang] || u.textData?.['en'] || {
        summonQuote: u.summonQuote, fusionQuote: u.fusionQuote, evolveQuote: u.evolveQuote, lore: u.lore
    };

    const modalNameEl = document.getElementById('modalName');
    if (modalNameEl) {
        modalNameEl.innerText = getActiveUnitName(u);
        modalNameEl.classList.add('notranslate');
    }
    document.getElementById('modalId').innerText = `ID: #${u.realId}`;

    let rarityModalHTML = (u.rarity === "Omni" || u.rarity === "Dream") ?
        `<img src="https://static.wikia.nocookie.net/bravefrontierglobal/images/f/f8/Phantom_icon.png" style="width:20px; vertical-align:middle;"> Omni` :
        `${u.rarity || "1"}★`;
    document.getElementById('modalRarity').innerHTML = rarityModalHTML;

    document.getElementById('summonQuote').innerText = localizedTexts.summonQuote || "---";
    document.getElementById('fusionQuote').innerText = localizedTexts.fusionQuote || "---";
    document.getElementById('evolveQuote').innerText = localizedTexts.evolveQuote || "---";
    document.getElementById('unitLore').innerText = localizedTexts.lore || "Story not available.";

    ['ls', 'bb', 'sbb', 'ubb'].forEach(s => {
        const nameEl = document.getElementById(`${s}Name`);
        const descEl = document.getElementById(`${s}Desc`);
        if (nameEl) nameEl.innerText = u.skills?.[s]?.name || "N/A";
        if (descEl) descEl.innerText = u.skills?.[s]?.desc || "";
    });

    document.getElementById('prevEvo').innerHTML = u.evolution?.prevImage ? `<img src="${u.evolution.prevImage}" class="evo-icon" loading="lazy">` : '---';
    document.getElementById('nextEvo').innerHTML = u.evolution?.nextImage ? `<img src="${u.evolution.nextImage}" class="evo-icon" loading="lazy">` : 'MAX';

    const matCont = document.getElementById('evoMats');
    matCont.innerHTML = '';
    if (u.evolution?.materials) {
        u.evolution.materials.forEach(m => { matCont.innerHTML += `<img src="${m}" class="mat-icon" loading="lazy">`; });
    } else { matCont.innerText = '---'; }

    changeType('base');
    const unitSlug = getActiveUnitName(u).trim().toLowerCase().replace(/\s+/g, '-');
    window.history.pushState({ unitName: getActiveUnitName(u) }, '', window.location.pathname + "?unit=" + unitSlug);

    const modalEl = document.getElementById('unitModal');
    if (modalEl) modalEl.style.display = 'block';
    document.body.classList.add('modal-open');

    // Attende che la modale si sia aperta prima di decodificare la GIF
    setTimeout(() => {
        showMotion('default');
    }, 50);
    resetModalScrolls();
}

function showMotion(type) {
    if (!currentUnitOpen) return;
    const motions = ['default', 'idle', 'atk'];

    motions.forEach(t => {
        const container = document.getElementById(`container_${t}`);
        const btn = document.getElementById(`btn_${t}`);
        const videoTag = document.getElementById(`video_${t}`);
        const imgTag = document.getElementById(`img_${t}`);

        if (t === type) {
            if (container) container.style.display = 'block';
            if (btn) btn.style.display = 'inline';

            const src = currentUnitOpen.animations?.[t] || "";

            if (src.toLowerCase().endsWith('.mp4')) {
                if (videoTag) {
                    videoTag.style.display = 'block';
                    videoTag.muted = true;
                    videoTag.playsInline = true;
                    videoTag.loop = true;
                    if (videoTag.src !== src) {
                        videoTag.src = src;
                        videoTag.load();
                    }
                    videoTag.play().catch(() => { });
                }
                if (imgTag) imgTag.style.display = 'none';
            } else if (src) {
                if (videoTag) {
                    videoTag.style.display = 'none';
                    videoTag.removeAttribute('src');
                }
                if (imgTag) {
                    imgTag.style.display = 'block';
                    // Assegna la GIF solo quando il contenitore diventa visibile
                    if (imgTag.getAttribute('src') !== src) {
                        imgTag.src = src;
                    }
                }
            }
        } else {
            if (container) container.style.display = 'none';
            if (btn) btn.style.display = 'none';

            if (videoTag) {
                videoTag.pause();
                videoTag.removeAttribute('src');
            }
            if (imgTag) {
                // Rimuove lo src della GIF nascosta per liberare la memoria della CPU su Safari
                imgTag.removeAttribute('src');
            }
        }
    });
}

function toggleImg() {
    const dCont = document.getElementById('container_default');
    const iCont = document.getElementById('container_idle');
    if (dCont && dCont.style.display !== 'none') showMotion('idle');
    else if (iCont && iCont.style.display !== 'none') showMotion('atk');
    else showMotion('default');
}

function closeModal() {
    const modalEl = document.getElementById('unitModal');
    if (modalEl) modalEl.style.display = 'none';
    document.body.classList.remove('modal-open');

    ['default', 'idle', 'atk'].forEach(t => {
        const v = document.getElementById(`video_${t}`);
        const img = document.getElementById(`img_${t}`);
        if (v) {
            v.pause();
            v.removeAttribute('src');
        }
        if (img) {
            img.removeAttribute('src');
        }
    });

    currentUnitOpen = null;
    window.history.pushState({}, '', window.location.pathname);
}

function changeType(type) {
    document.querySelectorAll('.btn-type').forEach(btn => btn.classList.remove('active'));
    const target = document.querySelector(`.btn-type.${type}`);
    if (target) target.classList.add('active');

    if (!currentUnitOpen) return;
    const stats = currentUnitOpen.stats || {};
    const s = stats[type] || stats['lord'] || { hp: '---', atk: '---', def: '---', rec: '---' };

    document.getElementById('statHp').innerText = s.hp || '---';
    document.getElementById('statAtk').innerText = s.atk || '---';
    document.getElementById('statDef').innerText = s.def || '---';
    document.getElementById('statRec').innerText = s.rec || '---';
}

function initListeners() {
    const search = document.getElementById('mainSearch');
    const raritySel = document.getElementById('raritySelector');

    if (search) search.oninput = () => applyFilters(true);
    if (raritySel) raritySel.onchange = () => applyFilters(true);

    document.querySelectorAll('.btn-elem').forEach(btn => {
        btn.onclick = () => {
            activeElement = (activeElement === btn.dataset.elem) ? null : btn.dataset.elem;
            document.querySelectorAll('.btn-elem').forEach(b => b.classList.toggle('active', b.dataset.elem === activeElement));
            applyFilters(true);
        };
    });

    setupObserver();
}

window.changeLanguage = function (langCode) {
    const langSelector = document.getElementById('customLangSelector');
    if (langSelector) langSelector.value = langCode;

    var domain = window.location.hostname;
    document.cookie = "googtrans=/en/" + langCode + "; path=/; domain=" + domain;
    document.cookie = "googtrans=/en/" + langCode + "; path=/;";

    if (allUnits.length > 0) applyFilters(true);

    const modal = document.getElementById('unitModal');
    if (currentUnitOpen && modal && modal.style.display === 'block') {
        openModal(currentUnitOpen);
    }

    var googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
        googleSelect.value = langCode;
        googleSelect.dispatchEvent(new Event('change'));
    } else {
        location.reload();
    }
};

window.addEventListener('resize', () => {
    if (allUnits.length > 0) applyFilters(false);
});

startApp();