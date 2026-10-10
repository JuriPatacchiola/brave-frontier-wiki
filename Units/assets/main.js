let allUnits = [];
let currentFilteredUnits = [];
let activeElement = null;
let currentUnitOpen = null;
let isFullArtOpen = false;

// Variabili per lo slider delle varianti Full Art
let currentFullArtImages = [];
let currentFullArtIndex = 0;

// Variabili per il rilevamento dello Swipe Touch
let touchStartX = 0;
let touchEndX = 0;

let displayedCount = 40;
const BATCH_SIZE = 40;
let scrollObserver = null;

// Array completo di tutte le arene estratte dal video
const arenaBackgrounds = [
    '../img/Arena Battle/dungeon_battle_10100.jpg',
    '../img/Arena Battle/dungeon_battle_10200.jpg',
    '../img/Arena Battle/dungeon_battle_10300.jpg',
    '../img/Arena Battle/dungeon_battle_10400.jpg',
    '../img/Arena Battle/dungeon_battle_10500.jpg',
    '../img/Arena Battle/dungeon_battle_20200.jpg',
    '../img/Arena Battle/dungeon_battle_20300.jpg',
    '../img/Arena Battle/dungeon_battle_20400.jpg',
    '../img/Arena Battle/dungeon_battle_20500.jpg',
    '../img/Arena Battle/dungeon_battle_20600.jpg',
    '../img/Arena Battle/dungeon_battle_20700.jpg',
    '../img/Arena Battle/dungeon_battle_30100.jpg',
    '../img/Arena Battle/dungeon_battle_30300.jpg',
    '../img/Arena Battle/dungeon_battle_30400.jpg',
    '../img/Arena Battle/dungeon_battle_30500.jpg',
    '../img/Arena Battle/dungeon_battle_30600.jpg',
    '../img/Arena Battle/dungeon_battle_30700.jpg',
    '../img/Arena Battle/dungeon_battle_40100.jpg',
    '../img/Arena Battle/dungeon_battle_40200.jpg',
    '../img/Arena Battle/dungeon_battle_40300.jpg',
    '../img/Arena Battle/dungeon_battle_40400.jpg',
    '../img/Arena Battle/dungeon_battle_40500.jpg',
    '../img/Arena Battle/dungeon_battle_40600.jpg',
    '../img/Arena Battle/dungeon_battle_40700.jpg',
    '../img/Arena Battle/dungeon_battle_50100.jpg',
    '../img/Arena Battle/dungeon_battle_50200.jpg',
    '../img/Arena Battle/dungeon_battle_50300.jpg',
    '../img/Arena Battle/dungeon_battle_50400.jpg',
    '../img/Arena Battle/dungeon_battle_50500.jpg',
    '../img/Arena Battle/dungeon_battle_50600.jpg',
    '../img/Arena Battle/dungeon_battle_60100.jpg',
    '../img/Arena Battle/dungeon_battle_60200.jpg',
    '../img/Arena Battle/dungeon_battle_60300.jpg',
    '../img/Arena Battle/dungeon_battle_60400.jpg',
    '../img/Arena Battle/dungeon_battle_60500.jpg',
    '../img/Arena Battle/dungeon_battle_60600.jpg',
    '../img/Arena Battle/dungeon_battle_60700.jpg',
    '../img/Arena Battle/dungeon_battle_70100.jpg',
    '../img/Arena Battle/dungeon_battle_70200.jpg',
    '../img/Arena Battle/dungeon_battle_70300.jpg',
    '../img/Arena Battle/dungeon_battle_70400.jpg',
    '../img/Arena Battle/dungeon_battle_70500.jpg',
    '../img/Arena Battle/dungeon_battle_70600.jpg',
    '../img/Arena Battle/dungeon_battle_80000.jpg',
    '../img/Arena Battle/dungeon_battle_80001.jpg',
    '../img/Arena Battle/dungeon_battle_80002.jpg',
    '../img/Arena Battle/dungeon_battle_80003.jpg',
    '../img/Arena Battle/dungeon_battle_80004.jpg',
    '../img/Arena Battle/dungeon_battle_80005.jpg',
    '../img/Arena Battle/dungeon_battle_80006.jpg',
    '../img/Arena Battle/dungeon_battle_80007.jpg',
    '../img/Arena Battle/dungeon_battle_80010.jpg',
    '../img/Arena Battle/dungeon_battle_80011.jpg',
    '../img/Arena Battle/dungeon_battle_80012.jpg',
    '../img/Arena Battle/dungeon_battle_80013.jpg',
    '../img/Arena Battle/dungeon_battle_80014.jpg',
    '../img/Arena Battle/dungeon_battle_80015.jpg',
    '../img/Arena Battle/dungeon_battle_80016.jpg',
    '../img/Arena Battle/dungeon_battle_80020.jpg',
    '../img/Arena Battle/dungeon_battle_80021.jpg',
    '../img/Arena Battle/dungeon_battle_80022.jpg',
    '../img/Arena Battle/dungeon_battle_80023.jpg',
    '../img/Arena Battle/dungeon_battle_80024.jpg',
    '../img/Arena Battle/dungeon_battle_80025.jpg',
    '../img/Arena Battle/dungeon_battle_80026.jpg',
    '../img/Arena Battle/dungeon_battle_80030.jpg',
    '../img/Arena Battle/dungeon_battle_80031.jpg',
    '../img/Arena Battle/dungeon_battle_80032.jpg',
    '../img/Arena Battle/dungeon_battle_80033.jpg',
    '../img/Arena Battle/dungeon_battle_80034.jpg',
    '../img/Arena Battle/dungeon_battle_80035.jpg',
    '../img/Arena Battle/dungeon_battle_80036.jpg',
    '../img/Arena Battle/dungeon_battle_80040.jpg',
    '../img/Arena Battle/dungeon_battle_80041.jpg',
    '../img/Arena Battle/dungeon_battle_80042.jpg',
    '../img/Arena Battle/dungeon_battle_80043.jpg',
    '../img/Arena Battle/dungeon_battle_80044.jpg',
    '../img/Arena Battle/dungeon_battle_80045.jpg',
    '../img/Arena Battle/dungeon_battle_80046.jpg',
    '../img/Arena Battle/dungeon_battle_80050.jpg',
    '../img/Arena Battle/dungeon_battle_80051.jpg',
    '../img/Arena Battle/dungeon_battle_80052.jpg',
    '../img/Arena Battle/dungeon_battle_80053.jpg',
    '../img/Arena Battle/dungeon_battle_80054.jpg',
    '../img/Arena Battle/dungeon_battle_80055.jpg',
    '../img/Arena Battle/dungeon_battle_80056.jpg',
    '../img/Arena Battle/dungeon_battle_80060.jpg',
    '../img/Arena Battle/dungeon_battle_80061.jpg',
    '../img/Arena Battle/dungeon_battle_80062.jpg',
    '../img/Arena Battle/dungeon_battle_80063.jpg',
    '../img/Arena Battle/dungeon_battle_80064.jpg',
    '../img/Arena Battle/dungeon_battle_80065.jpg',
    '../img/Arena Battle/dungeon_battle_80066.jpg',
    '../img/Arena Battle/dungeon_battle_80067.jpg',
    '../img/Arena Battle/dungeon_battle_80068.jpg',
    '../img/Arena Battle/dungeon_battle_80070.jpg',
    '../img/Arena Battle/dungeon_battle_80071.jpg',
    '../img/Arena Battle/dungeon_battle_80072.jpg',
    '../img/Arena Battle/dungeon_battle_80073.jpg',
    '../img/Arena Battle/dungeon_battle_80074.jpg',
    '../img/Arena Battle/dungeon_battle_80075.jpg',
    '../img/Arena Battle/dungeon_battle_80076.jpg',
    '../img/Arena Battle/dungeon_battle_80077.jpg',
    '../img/Arena Battle/dungeon_battle_80080.jpg',
    '../img/Arena Battle/dungeon_battle_80081.jpg',
    '../img/Arena Battle/dungeon_battle_80082.jpg',
    '../img/Arena Battle/dungeon_battle_80083.jpg',
    '../img/Arena Battle/dungeon_battle_80084.jpg',
    '../img/Arena Battle/dungeon_battle_80087.jpg',
    '../img/Arena Battle/dungeon_battle_80090.jpg',
    '../img/Arena Battle/dungeon_battle_80091.jpg',
    '../img/Arena Battle/dungeon_battle_80092.jpg',
    '../img/Arena Battle/dungeon_battle_80100.jpg',
    '../img/Arena Battle/dungeon_battle_80101.jpg',
    '../img/Arena Battle/dungeon_battle_80102.jpg',
    '../img/Arena Battle/dungeon_battle_80103.jpg',
    '../img/Arena Battle/dungeon_battle_80104.jpg',
    '../img/Arena Battle/dungeon_battle_80105.jpg',
    '../img/Arena Battle/dungeon_battle_80106.jpg',
    '../img/Arena Battle/dungeon_battle_80107.jpg',
    '../img/Arena Battle/dungeon_battle_80108.jpg',
    '../img/Arena Battle/dungeon_battle_80110.jpg',
    '../img/Arena Battle/dungeon_battle_80111.jpg',
    '../img/Arena Battle/dungeon_battle_80112.jpg',
    '../img/Arena Battle/dungeon_battle_80113.jpg',
    '../img/Arena Battle/dungeon_battle_80114.jpg',
    '../img/Arena Battle/dungeon_battle_80115.jpg',
    '../img/Arena Battle/dungeon_battle_80116.jpg',
    '../img/Arena Battle/dungeon_battle_80117.jpg',
    '../img/Arena Battle/dungeon_battle_80120.jpg',
    '../img/Arena Battle/dungeon_battle_80121.jpg',
    '../img/Arena Battle/dungeon_battle_80122.jpg',
    '../img/Arena Battle/dungeon_battle_80123.jpg',
    '../img/Arena Battle/dungeon_battle_80124.jpg',
    '../img/Arena Battle/dungeon_battle_80125.jpg',
    '../img/Arena Battle/dungeon_battle_80126.jpg',
    '../img/Arena Battle/dungeon_battle_80127.jpg',
    '../img/Arena Battle/dungeon_battle_80130.jpg',
    '../img/Arena Battle/dungeon_battle_80131.jpg',
    '../img/Arena Battle/dungeon_battle_80132.jpg',
    '../img/Arena Battle/dungeon_battle_80133.jpg',
    '../img/Arena Battle/dungeon_battle_80134.jpg',
    '../img/Arena Battle/dungeon_battle_80135.jpg',
    '../img/Arena Battle/dungeon_battle_80136.jpg',
    '../img/Arena Battle/dungeon_battle_80140.jpg',
    '../img/Arena Battle/dungeon_battle_80141.jpg',
    '../img/Arena Battle/dungeon_battle_80142.jpg',
    '../img/Arena Battle/dungeon_battle_80143.jpg',
    '../img/Arena Battle/dungeon_battle_80144.jpg',
    '../img/Arena Battle/dungeon_battle_80145.jpg',
    '../img/Arena Battle/dungeon_battle_80146.jpg',
    '../img/Arena Battle/dungeon_battle_80147.jpg',
    '../img/Arena Battle/dungeon_battle_80150.jpg',
    '../img/Arena Battle/dungeon_battle_80151.jpg',
    '../img/Arena Battle/dungeon_battle_80152.jpg',
    '../img/Arena Battle/dungeon_battle_80153.jpg',
    '../img/Arena Battle/dungeon_battle_80154.jpg',
    '../img/Arena Battle/dungeon_battle_80155.jpg',
    '../img/Arena Battle/dungeon_battle_80156.jpg',
    '../img/Arena Battle/dungeon_battle_80157.jpg',
    '../img/Arena Battle/dungeon_battle_80160.jpg',
    '../img/Arena Battle/dungeon_battle_80161.jpg',
    '../img/Arena Battle/dungeon_battle_80162.jpg',
    '../img/Arena Battle/dungeon_battle_80163.jpg',
    '../img/Arena Battle/dungeon_battle_80166.jpg',
    '../img/Arena Battle/dungeon_battle_80167.jpg',
    '../img/Arena Battle/dungeon_battle_80170.jpg',
    '../img/Arena Battle/dungeon_battle_80171.jpg',
    '../img/Arena Battle/dungeon_battle_80172.jpg',
    '../img/Arena Battle/dungeon_battle_80173.jpg',
    '../img/Arena Battle/dungeon_battle_80174.jpg',
    '../img/Arena Battle/dungeon_battle_80175.jpg',
    '../img/Arena Battle/dungeon_battle_80176.jpg',
    '../img/Arena Battle/dungeon_battle_80177.jpg',
    '../img/Arena Battle/dungeon_battle_80180.jpg',
    '../img/Arena Battle/dungeon_battle_80181.jpg',
    '../img/Arena Battle/dungeon_battle_80182.jpg',
    '../img/Arena Battle/dungeon_battle_80183.jpg',
    '../img/Arena Battle/dungeon_battle_80184.jpg',
    '../img/Arena Battle/dungeon_battle_80185.jpg',
    '../img/Arena Battle/dungeon_battle_80186_01.jpg',
    '../img/Arena Battle/dungeon_battle_80186_02.jpg',
    '../img/Arena Battle/dungeon_battle_80186_03.jpg',
    '../img/Arena Battle/dungeon_battle_80187.jpg',
    '../img/Arena Battle/dungeon_battle_80190.jpg',
    '../img/Arena Battle/dungeon_battle_80191.jpg',
    '../img/Arena Battle/dungeon_battle_80192.jpg',
    '../img/Arena Battle/dungeon_battle_80193.jpg',
    '../img/Arena Battle/dungeon_battle_80194.jpg',
    '../img/Arena Battle/dungeon_battle_80195.jpg',
    '../img/Arena Battle/dungeon_battle_80801.jpg',
    '../img/Arena Battle/dungeon_battle_80802.jpg',
    '../img/Arena Battle/dungeon_battle_89001.jpg',
    '../img/Arena Battle/dungeon_battle_89002.jpg',
    '../img/Arena Battle/dungeon_battle_81000.jpg',
    '../img/Arena Battle/dungeon_battle_81001.jpg',
    '../img/Arena Battle/dungeon_battle_81002.jpg',
    '../img/Arena Battle/dungeon_battle_81003.jpg',
    '../img/Arena Battle/dungeon_battle_81004.jpg',
    '../img/Arena Battle/dungeon_battle_81005.jpg',
    '../img/Arena Battle/dungeon_battle_81006.jpg',
    '../img/Arena Battle/dungeon_battle_81007.jpg',
    '../img/Arena Battle/dungeon_battle_81010.jpg',
    '../img/Arena Battle/dungeon_battle_81011.jpg',
    '../img/Arena Battle/dungeon_battle_81012.jpg',
    '../img/Arena Battle/dungeon_battle_81013.jpg',
    '../img/Arena Battle/dungeon_battle_81014.jpg',
    '../img/Arena Battle/dungeon_battle_81015.jpg',
    '../img/Arena Battle/dungeon_battle_81016.jpg',
    '../img/Arena Battle/dungeon_battle_81017.jpg',
    '../img/Arena Battle/dungeon_battle_81018.jpg',
    '../img/Arena Battle/dungeon_battle_81019.jpg',
    '../img/Arena Battle/dungeon_battle_81020.jpg',
    '../img/Arena Battle/dungeon_battle_81021.jpg',
    '../img/Arena Battle/dungeon_battle_81022.jpg',
    '../img/Arena Battle/dungeon_battle_81023.jpg',
    '../img/Arena Battle/dungeon_battle_81024.jpg',
    '../img/Arena Battle/dungeon_battle_81025.jpg',
    '../img/Arena Battle/dungeon_battle_81026.jpg',
    '../img/Arena Battle/dungeon_battle_81027.jpg',
    '../img/Arena Battle/dungeon_battle_81028.jpg',
    '../img/Arena Battle/dungeon_battle_81029.jpg',
    '../img/Arena Battle/dungeon_battle_81030.jpg',
    '../img/Arena Battle/dungeon_battle_81031.jpg',
    '../img/Arena Battle/dungeon_battle_81032.jpg',
    '../img/Arena Battle/dungeon_battle_81033.jpg',
    '../img/Arena Battle/dungeon_battle_81034.jpg',
    '../img/Arena Battle/dungeon_battle_81035.jpg',
    '../img/Arena Battle/dungeon_battle_81036.jpg',
    '../img/Arena Battle/dungeon_battle_81037.jpg',
    '../img/Arena Battle/dungeon_battle_81040.jpg',
    '../img/Arena Battle/dungeon_battle_81041.jpg',
    '../img/Arena Battle/dungeon_battle_81042.jpg',
    '../img/Arena Battle/dungeon_battle_81043.jpg',
    '../img/Arena Battle/dungeon_battle_81044.jpg',
    '../img/Arena Battle/dungeon_battle_81045.jpg',
    '../img/Arena Battle/dungeon_battle_81046.jpg',
    '../img/Arena Battle/dungeon_battle_81047.jpg',
    '../img/Arena Battle/dungeon_battle_81048.jpg',
    '../img/Arena Battle/dungeon_battle_81049.jpg',
    '../img/Arena Battle/dungeon_battle_81050.jpg',
    '../img/Arena Battle/dungeon_battle_81060.jpg',
    '../img/Arena Battle/dungeon_battle_81061.jpg',
    '../img/Arena Battle/dungeon_battle_81062.jpg',
    '../img/Arena Battle/dungeon_battle_81063.jpg',
    '../img/Arena Battle/dungeon_battle_81064.jpg',
    '../img/Arena Battle/dungeon_battle_81065.jpg',
    '../img/Arena Battle/dungeon_battle_81066.jpg',
    '../img/Arena Battle/dungeon_battle_100000.jpg',
    '../img/Arena Battle/dungeon_battle_100100.jpg',
    '../img/Arena Battle/dungeon_battle_100200.jpg',
    '../img/Arena Battle/dungeon_battle_100300.jpg',
    '../img/Arena Battle/dungeon_battle_100400.jpg',
    '../img/Arena Battle/dungeon_battle_100500.jpg',
    '../img/Arena Battle/dungeon_battle_100600.jpg',
    '../img/Arena Battle/dungeon_battle_100800.jpg',
    '../img/Arena Battle/dungeon_battle_101400.jpg',
    '../img/Arena Battle/dungeon_battle_101401.jpg',
    '../img/Arena Battle/dungeon_battle_101402.jpg',
    '../img/Arena Battle/dungeon_battle_101403.jpg',
    '../img/Arena Battle/dungeon_battle_101404.jpg',
    '../img/Arena Battle/dungeon_battle_101500.jpg',
    '../img/Arena Battle/dungeon_battle_101600.jpg',
    '../img/Arena Battle/dungeon_battle_101700.jpg',
    '../img/Arena Battle/dungeon_battle_101800.jpg',
    '../img/Arena Battle/dungeon_battle_101900.jpg',
    '../img/Arena Battle/dungeon_battle_102000.jpg',
    '../img/Arena Battle/dungeon_battle_102100.jpg',
    '../img/Arena Battle/dungeon_battle_102200.jpg',
    '../img/Arena Battle/dungeon_battle_102300.jpg',
    '../img/Arena Battle/dungeon_battle_102400.jpg',
    '../img/Arena Battle/dungeon_battle_102500.jpg',
    '../img/Arena Battle/dungeon_battle_102600.jpg',
    '../img/Arena Battle/dungeon_battle_102700.jpg',
    '../img/Arena Battle/dungeon_battle_102701.jpg',
    '../img/Arena Battle/dungeon_battle_102702.jpg',
    '../img/Arena Battle/dungeon_battle_102800.jpg',
    '../img/Arena Battle/dungeon_battle_102900.jpg',
    '../img/Arena Battle/dungeon_battle_102901.jpg',
    '../img/Arena Battle/dungeon_battle_103001.jpg',
    '../img/Arena Battle/dungeon_battle_103010.jpg',
    '../img/Arena Battle/dungeon_battle_103011.jpg',
    '../img/Arena Battle/dungeon_battle_103012.jpg',
    '../img/Arena Battle/dungeon_battle_103013.jpg',
    '../img/Arena Battle/dungeon_battle_103014.jpg',
    '../img/Arena Battle/dungeon_battle_103015.jpg',
    '../img/Arena Battle/dungeon_battle_103020.jpg',
    '../img/Arena Battle/dungeon_battle_103021.jpg',
    '../img/Arena Battle/dungeon_battle_103030.jpg',
    '../img/Arena Battle/dungeon_battle_103042.jpg',
    '../img/Arena Battle/dungeon_battle_103050.jpg',
    '../img/Arena Battle/dungeon_battle_103070.jpg',
    '../img/Arena Battle/dungeon_battle_103071.jpg',
    '../img/Arena Battle/dungeon_battle_103072.jpg',
    '../img/Arena Battle/dungeon_battle_103080.jpg',
    '../img/Arena Battle/dungeon_battle_103081.jpg',
    '../img/Arena Battle/dungeon_battle_103082.jpg',
    '../img/Arena Battle/dungeon_battle_103083.jpg',
    '../img/Arena Battle/dungeon_battle_103090.jpg',
    '../img/Arena Battle/dungeon_battle_103091.jpg',
    '../img/Arena Battle/dungeon_battle_800117.jpg',
    '../img/Arena Battle/dungeon_battle_800118.jpg',
    '../img/Arena Battle/dungeon_battle_830124.jpg',
    '../img/Arena Battle/dungeon_battle_830125.jpg',
    '../img/Arena Battle/dungeon_battle_830127.jpg',
    '../img/Arena Battle/dungeon_battle_1000000.jpg',
    '../img/Arena Battle/dungeon_battle_2000000.jpg',
    '../img/Arena Battle/dungeon_battle_2001000.jpg',
    '../img/Arena Battle/dungeon_battle_2002000.jpg',
    '../img/Arena Battle/dungeon_battle_3000000.jpg',
    '../img/Arena Battle/dungeon_battle_3000001.jpg',
    '../img/Arena Battle/dungeon_battle_8000110.jpg',
    '../img/Arena Battle/dungeon_battle_8000120.jpg',
    '../img/Arena Battle/dungeon_battle_8000130.jpg',
    '../img/Arena Battle/dungeon_battle_8001422.jpg',
    '../img/Arena Battle/dungeon_battle_8001423.jpg',
    '../img/Arena Battle/dungeon_battle_8001431.jpg',
    '../img/Arena Battle/dungeon_battle_8001432.jpg',
    '../img/Arena Battle/dungeon_battle_8300101.jpg',
    '../img/Arena Battle/dungeon_battle_8300102.jpg',
    '../img/Arena Battle/dungeon_battle_8300103.jpg',
    '../img/Arena Battle/dungeon_battle_8300104.jpg',
    '../img/Arena Battle/dungeon_battle_8300105.jpg',
    '../img/Arena Battle/dungeon_battle_8300106.jpg',
    '../img/Arena Battle/dungeon_battle_8300107.jpg',
    '../img/Arena Battle/dungeon_battle_8300108.jpg',
    '../img/Arena Battle/dungeon_battle_8300109.jpg',
    '../img/Arena Battle/dungeon_battle_8300110.jpg',
    '../img/Arena Battle/dungeon_battle_8300111.jpg',
    '../img/Arena Battle/dungeon_battle_8300112.jpg',
    '../img/Arena Battle/dungeon_battle_8300113.jpg',
    '../img/Arena Battle/dungeon_battle_8300114.jpg',
    '../img/Arena Battle/dungeon_battle_8300115.jpg',
    '../img/Arena Battle/dungeon_battle_8300116.jpg',
    '../img/Arena Battle/dungeon_battle_8300117.jpg',
    '../img/Arena Battle/dungeon_battle_8301200.jpg',
    '../img/Arena Battle/dungeon_battle_8310060.jpg',
    '../img/Arena Battle/dungeon_battle_8320060.jpg',
    '../img/Arena Battle/dungeon_battle_8330060.jpg',
    '../img/Arena Battle/dungeon_battle_8340060.jpg',
    '../img/Arena Battle/dungeon_battle_8350060.jpg',
    '../img/Arena Battle/dungeon_battle_8360060.jpg',
    '../img/Arena Battle/dungeon_battle_8510001.jpg',
    '../img/Arena Battle/dungeon_battle_8510002.jpg'
];

function getEvocationCircle(rarity) {
    const r = String(rarity || '').trim();
    if (r === '1' || r === '2') {
        return '../img/Evocation%20Circle/Circle_aquirem.png';
    } else if (r === '3') {
        return '../img/Evocation%20Circle/Rare_circle.png';
    } else if (r === '4') {
        return '../img/Evocation%20Circle/Super_rare_circle.png';
    } else {
        return '../img/Evocation%20Circle/Mega_rare_circle.png';
    }
}

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
            container.scrollTop = 0;
        }
        window.scrollTo(0, 0);
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
        card.className = `unit-card ${elementClass}`;

        if (isMobile) {
            card.innerHTML = `
                <img src="${u.image}" class="mobile-unit-img" loading="lazy" decoding="async">
                <div class="card-id">#${u.realId}</div>
            `;
        } else {
            card.innerHTML = `
                <div class="card-icon"><img src="${u.image}" loading="lazy" decoding="async" width="60" height="60"></div>
                <div class="card-title notranslate">${displayName}</div>
                <div class="card-rarity">${rarityHTML}</div>
            `;
        }

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
    closeFullArtModal();

    currentUnitOpen = u;
    isFullArtOpen = false;

    const circleImg = document.getElementById('evocation_circle');
    if (circleImg) {
        circleImg.src = getEvocationCircle(u.rarity);
    }

    const randomIndex = Math.floor(Math.random() * arenaBackgrounds.length);
    const unitBoxTop = document.querySelector('.unit_box_top');
    if (unitBoxTop) {
        unitBoxTop.style.backgroundImage = `url('${arenaBackgrounds[randomIndex]}')`;
    }

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

    const btnBtm5 = document.getElementById('btn_btm5');
    if (btnBtm5) btnBtm5.classList.remove('active');

    changeType('base');
    const unitSlug = getActiveUnitName(u).trim().toLowerCase().replace(/\s+/g, '-');
    window.history.pushState({ unitName: getActiveUnitName(u) }, '', window.location.pathname + "?unit=" + unitSlug);

    const modalEl = document.getElementById('unitModal');
    if (modalEl) modalEl.style.display = 'block';
    document.body.classList.add('modal-open');

    setTimeout(() => {
        showMotion('default');
    }, 50);
    resetModalScrolls();
}

function changeArenaBackground() {
    const randomIndex = Math.floor(Math.random() * arenaBackgrounds.length);
    const unitBoxTop = document.querySelector('.unit_box_top');
    if (unitBoxTop) {
        unitBoxTop.style.backgroundImage = `url('${arenaBackgrounds[randomIndex]}')`;
    }
}

// --- GESTIONE MODALE FULL ART, SLIDER VARIANTI & SWIPE TOUCH ---

function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

async function getValidFullArts(unitId) {
    const suffixes = ['', '_2', '_3', '_4'];
    let validImages = [];
    for (let suf of suffixes) {
        let url = `../img/Unit/Full Art/unit_ills_full_${unitId}${suf}.png`;
        let exists = await checkImageExists(url);
        if (exists) {
            validImages.push(url);
        }
    }
    return validImages;
}

function closeFullArtModal() {
    const modal = document.getElementById('fullArtModal');
    const image = document.getElementById('fullArtModalImage');
    const button = document.getElementById('btn_btm5');

    if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    }

    if (image) {
        image.onerror = null;
        image.removeAttribute('src');
    }

    if (button) button.classList.remove('active');
    isFullArtOpen = false;
    currentFullArtImages = [];
    currentFullArtIndex = 0;
}

async function toggleFullArt() {
    if (!currentUnitOpen) return;

    const modal = document.getElementById('fullArtModal');
    const button = document.getElementById('btn_btm5');

    if (!modal) return;

    if (modal.classList.contains('is-open')) {
        closeFullArtModal();
        return;
    }

    const unitId = currentUnitOpen.realId || currentUnitOpen.id;
    if (unitId === undefined || unitId === null || unitId === '') return;

    currentFullArtImages = await getValidFullArts(unitId);
    currentFullArtIndex = 0;

    if (currentFullArtImages.length === 0) return;

    updateFullArtDisplay();

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    isFullArtOpen = true;

    if (button) button.classList.add('active');
}

function updateFullArtDisplay() {
    const image = document.getElementById('fullArtModalImage');
    const prevBtn = document.getElementById('fullArtPrev');
    const nextBtn = document.getElementById('fullArtNext');
    const counter = document.getElementById('fullArtCounter');

    if (!image) return;

    image.src = currentFullArtImages[currentFullArtIndex];

    const total = currentFullArtImages.length;
    if (total > 1) {
        if (window.innerWidth > 1024) {
            if (prevBtn) prevBtn.style.display = 'block';
            if (nextBtn) nextBtn.style.display = 'block';
        } else {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        }

        if (counter) {
            counter.style.display = 'block';
            counter.innerText = `${currentFullArtIndex + 1} / ${total}`;
        }
    } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (counter) counter.style.display = 'none';
    }
}

function nextFullArt() {
    if (currentFullArtImages.length <= 1) return;
    currentFullArtIndex = (currentFullArtIndex + 1) % currentFullArtImages.length;
    updateFullArtDisplay();
}

function prevFullArt() {
    if (currentFullArtImages.length <= 1) return;
    currentFullArtIndex = (currentFullArtIndex - 1 + currentFullArtImages.length) % currentFullArtImages.length;
    updateFullArtDisplay();
}

function initFullArtSwipe() {
    const modalContent = document.querySelector('.fullart-modal-content');
    if (!modalContent) return;

    modalContent.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalContent.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, { passive: true });
}

function handleSwipeGesture() {
    const swipeThreshold = 40;
    if (currentFullArtImages.length <= 1) return;

    if (touchEndX < touchStartX - swipeThreshold) {
        nextFullArt();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        prevFullArt();
    }
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
                imgTag.removeAttribute('src');
            }
        }
    });
}

function toggleImg() {
    if (isFullArtOpen) return;
    const dCont = document.getElementById('container_default');
    const iCont = document.getElementById('container_idle');
    if (dCont && dCont.style.display !== 'none') showMotion('idle');
    else if (iCont && iCont.style.display !== 'none') showMotion('atk');
    else showMotion('default');
}

function closeModal() {
    closeFullArtModal();

    const modalEl = document.getElementById('unitModal');
    if (modalEl) modalEl.style.display = 'none';
    document.body.classList.remove('modal-open');

    isFullArtOpen = false;

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

    const btm4Container = document.getElementById('btn_btm4_container');
    if (btm4Container) {
        btm4Container.onclick = changeArenaBackground;
    }

    const btm5Btn = document.getElementById('btn_btm5_container') || document.getElementById('btn_btm5');
    if (btm5Btn) {
        btm5Btn.onclick = toggleFullArt;
    }

    const closeFullArtBtn = document.getElementById('closeFullArtModal');
    const fullArtModal = document.getElementById('fullArtModal');

    if (closeFullArtBtn) {
        closeFullArtBtn.onclick = closeFullArtModal;
    }

    if (fullArtModal) {
        fullArtModal.onclick = function (event) {
            if (event.target === fullArtModal) {
                closeFullArtModal();
            }
        };
    }

    initFullArtSwipe();

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (document.getElementById('fullArtModal')?.classList.contains('is-open')) {
                closeFullArtModal();
            }
        }
        if (document.getElementById('fullArtModal')?.classList.contains('is-open')) {
            if (event.key === 'ArrowLeft') prevFullArt();
            if (event.key === 'ArrowRight') nextFullArt();
        }
    });

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