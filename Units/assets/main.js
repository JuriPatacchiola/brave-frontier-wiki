let allUnits = [];
let currentFilteredUnits = [];
let activeElement = null;
let currentUnitOpen = null;
let isFullArtOpen = false;

// Variabili per lo slider delle varianti Full Art
let currentFullArtImages = [];
let currentFullArtIndex = 0;
let fullArtQuoteStep = 0; // 0 = summon, 1 = fusion, 2 = nessuna frase

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
    const currentLang = getCurrentLang();
    if (u.names && u.names[currentLang]) {
        return u.names[currentLang];
    }
    return u.name;
}

function formatEvolutionNumber(value) {
    return Number(value || 0).toLocaleString('it-IT');
}

// Trova un'unità a partire dal suo realId
function findUnitByRealId(realId) {
    if (realId === undefined || realId === null || realId === '') return null;
    return allUnits.find(u => String(u.realId || u.id) === String(realId)) || null;
}

// Crea l'<img> di un'unità nella ricetta: se l'unità esiste ed è diversa da quella aperta, diventa cliccabile
function evoUnitImgHtml(src, realId, alt, currentUnit) {
    const target = findUnitByRealId(realId);
    const isSelf = target && currentUnit && String(target.realId) === String(currentUnit.realId);
    if (target && !isSelf) {
        const title = getActiveUnitName(target) || '';
        return `<img src="${src}" alt="${alt}" title="${title}" class="evo-recipe-unit evo-unit-link" data-unit-id="${target.realId}" loading="lazy" role="button" tabindex="0">`;
    }
    return `<img src="${src}" alt="${alt}" class="evo-recipe-unit" loading="lazy">`;
}

// Click sulle immagini laterali della ricetta: apre la modale di quell'unità
function initEvolutionLinks() {
    const container = document.getElementById('evolutionContainer');
    if (!container || container.dataset.linksReady) return;
    container.dataset.linksReady = '1';

    const openFromEl = (el) => {
        const target = findUnitByRealId(el.dataset.unitId);
        if (target) openModal(target);
    };

    container.addEventListener('click', (e) => {
        const el = e.target.closest('.evo-unit-link');
        if (el) openFromEl(el);
    });
    container.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const el = e.target.closest('.evo-unit-link');
        if (el) { e.preventDefault(); openFromEl(el); }
    });
}

// Traduzione dei testi dell'interfaccia (dizionario in script.js)
function t(key, vars) {
    return (window.SiteLang && window.SiteLang.t) ? window.SiteLang.t(key, vars) : key;
}

function renderEvolutionRecipes(unit) {
    const container = document.getElementById('evolutionContainer');
    if (!container) return;

    container.innerHTML = '';
    const evoKeys = Object.keys(unit).filter(key => key.startsWith('evolution'));

    evoKeys.sort((a, b) => {
        if (a === 'evolution') return -1;
        if (b === 'evolution') return 1;
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    if (evoKeys.length === 0) {
        container.innerHTML = `
            <div class="evo-recipe-empty">
                <div class="evo-recipe-result notranslate">${t('evo.none')}</div>
            </div>`;
        return;
    }

    const seenTargets = new Set();
    const uniqueEvolutions = [];

    evoKeys.forEach(key => {
        const evoData = unit[key];
        if (!evoData) return;

        const targetIdentifier = evoData.nextId || evoData.nextImage;
        if (targetIdentifier) {
            if (!seenTargets.has(targetIdentifier)) {
                seenTargets.add(targetIdentifier);
                uniqueEvolutions.push({ key, evoData });
            }
        } else {
            uniqueEvolutions.push({ key, evoData });
        }
    });

    let htmlContent = '';

    uniqueEvolutions.forEach((item, index) => {
        const evolution = item.evoData;
        const recipe = evolution.recipe || {};
        const currentImage = evolution.prevImage || unit.image || '';
        const nextImage = evolution.nextImage || '';
        const altName = getActiveUnitName(unit) || 'Unità';

        if (!recipe || !nextImage) return;

        const targetId = evolution.nextId || evolution.id;
        const targetUnit = allUnits.find(u => String(u.realId || u.id) === String(targetId));

        let rarityDisplay = '';
        const directTargetRarity = String(evolution.targetRarity || recipe.targetRarity || '').trim().toLowerCase();
        const targetUnitRarity = targetUnit ? String(targetUnit.rarity || '').trim().toLowerCase() : '';

        if (directTargetRarity === 'omni' || directTargetRarity === 'dream' || targetUnitRarity === 'omni' || targetUnitRarity === 'dream') {
            rarityDisplay = `<img src="https://static.wikia.nocookie.net/bravefrontierglobal/images/f/f8/Phantom_icon.png" class="omni-icon" style="width:18px; vertical-align:middle; display:inline-block;"> Omni`;
        } else if (directTargetRarity) {
            rarityDisplay = `${directTargetRarity}★`;
        } else if (targetUnit && targetUnit.rarity) {
            rarityDisplay = `${targetUnit.rarity}★`;
        } else {
            const currentRarityNum = parseInt(unit.rarity, 10);
            if (!isNaN(currentRarityNum)) {
                rarityDisplay = `${currentRarityNum + index + 1}★`;
            } else {
                rarityDisplay = `${index + 2}★`;
            }
        }

        const levelTitle = t('evo.to', { r: rarityDisplay });
        const materials = Array.isArray(recipe.materials) ? recipe.materials : [];
        const materialHtml = materials.length
            ? materials.map((matSrc, mIndex) => `<img src="${matSrc}" class="mat-icon evo-recipe-material" loading="lazy" alt="${t('evo.material', { n: mIndex + 1 })}">`).join('')
            : `<span class="evo-no-materials notranslate">${t('evo.noMaterials')}</span>`;

        const zelImage = recipe.zelImage || '../img/Money/Zell.png';
        const karmaImage = recipe.karmaImage || '../img/Money/Karma.png';
        const karmaHtml = Number(recipe.karma) > 0
            ? `<div class="evo-currency"><img src="${karmaImage}" alt="Karma"><span>${formatEvolutionNumber(recipe.karma)}</span></div>`
            : '';

        htmlContent += `
            <div class="evolution-step-block">
                <h4 class="notranslate" style="color: #d4af37; margin: 0 0 8px 0; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">${levelTitle}</h4>
                <div class="evolution-recipe-panel">
                    <div class="evo-recipe-unit-wrap">
                        ${evoUnitImgHtml(currentImage, evolution.prevId, altName, unit)}
                    </div>
                    <div class="evo-recipe-plus">+</div>
                    <div class="evo-recipe-requirements">
                        <div class="evo-recipe-materials">${materialHtml}</div>
                        <div class="evo-recipe-costs">
                            <div class="evo-currency"><img src="${zelImage}" alt="Zel"><span>${formatEvolutionNumber(recipe.zel)}</span></div>
                            ${karmaHtml}
                        </div>
                    </div>
                    <div class="evo-recipe-equals">=</div>
                    <div class="evo-recipe-unit-wrap">
                        ${evoUnitImgHtml(nextImage, targetId, t('evo.result'), unit)}
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = htmlContent || `
        <div class="evo-recipe-empty">
            <div class="evo-recipe-result notranslate">${t('evo.none')}</div>
        </div>`;
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

        // Apertura diretta da URL (?unit=nome&id=realId): non aggiunge una nuova voce alla cronologia
        const found = getUnitFromUrl();
        if (found) {
            window.history.replaceState({ unitId: String(found.realId) }, '', window.location.href);
            openModal(found, { pushHistory: false });
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
        if (container) container.scrollTop = 0;
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

/* ==========================================================================
   EFFETTO "FIGURA 3D" AL PASSAGGIO DEL MOUSE (solo PC)
   L'icona della card si ribalta e sparisce; al suo posto il personaggio (full art)
   sale con un piccolo rimbalzo, restando sempre DENTRO la card. All'uscita il contrario.
   ========================================================================== */
const FIGURE_DELAY_MS = 120;
const canHover = window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)') : null;
const failedFullArts = new Set();   // full art inesistenti: non le riproviamo

// Spazio per la figura: dal bordo alto della card fino al nome
function fitFigureBox(card) {
    const title = card.querySelector('.card-title');
    if (!title) return;
    card.style.setProperty('--figure-box-h', `${Math.max(60, title.offsetTop - 10)}px`);
}

function attachCardArt(card, u) {
    const img = card.querySelector('.card-figure');
    if (!img) return;
    const realId = String(u.realId || u.id);
    let timer = null;
    let hovering = false;

    const show = () => {
        if (!hovering) return;
        fitFigureBox(card);
        card.classList.add('show-art');
    };

    card.addEventListener('mouseenter', () => {
        if (canHover && !canHover.matches) return;
        if (failedFullArts.has(realId)) return;
        hovering = true;
        clearTimeout(timer);
        timer = setTimeout(async () => {
            if (!hovering) return;
            if (img.dataset.loaded === '1') { show(); return; }
            const arts = await getValidFullArts(realId);
            const src = arts && arts[0];
            if (!src) return;
            img.onload = () => { img.dataset.loaded = '1'; show(); };
            img.onerror = () => { failedFullArts.add(realId); img.removeAttribute('src'); };
            img.src = src;
        }, FIGURE_DELAY_MS);
    });

    card.addEventListener('mouseleave', () => {
        hovering = false;
        clearTimeout(timer);
        card.classList.remove('show-art');
    });
}

function displayUnits(appendOnly = false) {
    const container = document.getElementById('gridContainer');
    if (!container) return;

    if (scrollObserver) scrollObserver.disconnect();
    const oldSentinel = document.getElementById('scrollSentinel');
    if (oldSentinel) oldSentinel.remove();

    let startIndex = appendOnly ? (displayedCount - BATCH_SIZE) : 0;
    if (!appendOnly) container.innerHTML = '';

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
                <div class="card-figure-box" aria-hidden="true"><img class="card-figure" alt="" decoding="async"></div>
                <div class="card-icon"><img class="card-thumb" src="${u.image}" loading="lazy" decoding="async" width="60" height="60"></div>
                <div class="card-title notranslate">${displayName}</div>
                <div class="card-rarity">${rarityHTML}</div>
            `;
        }

        card.onclick = () => openModal(u);
        if (!isMobile) attachCardArt(card, u);
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

function getUnitSlug(u) {
    return getActiveUnitName(u).trim().toLowerCase().replace(/\s+/g, '-');
}

// Legge l'unità dall'URL corrente: prima l'id (univoco), poi il nome come fallback per i vecchi link
function getUnitFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const byId = findUnitByRealId(params.get('id'));
    if (byId) return byId;
    const slug = params.get('unit');
    if (!slug) return null;
    return allUnits.find(u => getUnitSlug(u) === slug) || null;
}

// Tasto "indietro"/"avanti" del browser: riapre l'unità della voce di cronologia o chiude la modale
window.addEventListener('popstate', (event) => {
    if (allUnits.length === 0) return;
    const unit = findUnitByRealId(event.state && event.state.unitId) || getUnitFromUrl();
    if (unit) {
        openModal(unit, { pushHistory: false });
    } else {
        closeModal({ pushHistory: false });
    }
});

function openModal(u, options = {}) {
    const pushHistory = options.pushHistory !== false;
    closeFullArtModal();

    currentUnitOpen = u;
    isFullArtOpen = false;

    const randomIndex = Math.floor(Math.random() * arenaBackgrounds.length);
    const unitBoxTop = document.querySelector('.unit_box_top');
    if (unitBoxTop) {
        unitBoxTop.style.backgroundImage = `url('${arenaBackgrounds[randomIndex]}')`;
    }

    const currentLang = getCurrentLang();
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
    document.getElementById('unitLore').innerText = localizedTexts.lore || t('unit.loreMissing');

    ['ls', 'bb', 'sbb', 'ubb'].forEach(s => {
        const nameEl = document.getElementById(`${s}Name`);
        const descEl = document.getElementById(`${s}Desc`);
        if (nameEl) nameEl.innerText = u.skills?.[s]?.name || "N/A";
        if (descEl) descEl.innerText = u.skills?.[s]?.desc || "";
    });

    renderEvolutionRecipes(u);

    // Ogni unità si apre sulle animazioni normali; btm6 compare solo se ha effetti
    exitEffectMode(false);
    currentEffect = 'atk';
    updateEffectsButton();

    const btnBtm5 = document.getElementById('btn_btm5');
    if (btnBtm5) btnBtm5.classList.remove('active');

    changeType('base');
    if (pushHistory) {
        const isSameEntry = window.history.state && String(window.history.state.unitId) === String(u.realId);
        if (!isSameEntry) {
            const newUrl = window.location.pathname + "?unit=" + encodeURIComponent(getUnitSlug(u)) + "&id=" + encodeURIComponent(u.realId);
            window.history.pushState({ unitId: String(u.realId) }, '', newUrl);
        }
    }

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

async function getValidFullArts(unitId) {
    const strId = String(unitId);
    let validImages = [];

    // Se l'ID inizia con "7", appartiene alle unità europee nella cartella specifica
    if (strId.startsWith('7')) {
        validImages.push(`../img/Unit/img Europe/Full Art/Unit_ills_full_${strId}.png`);
    } else {
        // Altrimenti appartiene alle unità standard nella cartella Full Art
        validImages.push(`../img/Unit/Full Art/unit_ills_full_${strId}.png`);
    }

    // Gestione varianti secondarie (_2) se previste
    const unitsWithVariant2 = [
        '10017', '10257', '20017', '20157', '30017', '30447', '30566', '40017', '40117',
        '50017', '50166', '60017', '60116', '60257', '60666', '61097', '810508', '810628',
        '810758', '810828', '820568', '820758', '820828', '830288', '830328', '830518',
        '830528', '830558', '830598', '830758', '830798', '830818', '840257', '840278',
        '840508', '840758', '840798', '840828', '850018', '850278', '850568', '850628',
        '850788', '850828', '860018', '860158', '860257', '860258', '860688', '860758',
        '860798', '860828'
    ];

    if (unitsWithVariant2.includes(strId)) {
        if (strId.startsWith('7')) {
            validImages.push(`../img/Unit/img Europe/Full Art/Unit_ills_full_${strId}_2.png`);
        } else {
            validImages.push(`../img/Unit/Full Art/unit_ills_full_${strId}_2.png`);
        }
    }

    return validImages;
}

function closeFullArtModal() {
    if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur();
    }

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

    const fxCircle = document.getElementById('fullArtEvocationCircle');
    const fxStars = document.getElementById('fullArtStars');
    if (fxCircle) {
        fxCircle.onerror = null;
        fxCircle.removeAttribute('src');
    }
    if (fxStars) fxStars.replaceChildren();
    fullArtQuoteStep = 0;
    renderFullArtQuote();

    if (button) button.classList.remove('active');
    isFullArtOpen = false;
    currentFullArtImages = [];
    currentFullArtIndex = 0;
}

function setupFullArtEvocationFx(unit) {
    const fx = document.getElementById('fullArtEvocationFx');
    const circle = document.getElementById('fullArtEvocationCircle');
    const stars = document.getElementById('fullArtStars');
    if (!fx || !circle || !stars || !unit) return;

    const rarity = String(unit.rarity || '').trim().toLowerCase();
    let className = 'rarity-rainbow';

    if (rarity === '1' || rarity === '2') {
        className = 'rarity-white';
    } else if (rarity === '3') {
        className = 'rarity-gold';
    } else if (rarity === '4') {
        className = 'rarity-red';
    } else {
        className = 'rarity-rainbow';
    }

    fx.classList.remove('rarity-white', 'rarity-gold', 'rarity-red', 'rarity-rainbow');
    fx.classList.add(className);

    circle.src = getEvocationCircle(unit.rarity);
    circle.onerror = function () { circle.style.display = 'none'; };
    circle.onload = function () { circle.style.display = 'block'; };

    stars.replaceChildren();
    for (let i = 0; i < 36; i++) {
        const star = document.createElement('span');
        star.className = 'fullart-star';
        star.style.setProperty('--x', `${Math.random() * 80 + 10}%`);
        star.style.setProperty('--size', `${Math.random() * 3 + 1.5}px`);
        star.style.setProperty('--duration', `${Math.random() * 2.5 + 2}s`);
        star.style.setProperty('--delay', `${Math.random() * 3}s`);
        stars.appendChild(star);
    }
}

function getFullArtQuoteData() {
    const unit = currentUnitOpen;
    if (!unit) return { summon: '', fusion: '' };
    const lang = getCurrentLang();
    const localized = unit.textData && (unit.textData[lang] || unit.textData.en || unit.textData.it);
    const summon = localized?.summonQuote ?? (lang === 'en' ? unit.summonQuote : '');
    const fusion = localized?.fusionQuote ?? (lang === 'en' ? unit.fusionQuote : '');
    return { summon: String(summon || '').trim(), fusion: String(fusion || '').trim() };
}

function renderFullArtQuote() {
    const panel = document.getElementById('fullArtQuotePanel');
    const text = document.getElementById('fullArtQuoteText');
    if (!panel || !text) return;
    const quotes = getFullArtQuoteData();
    let quote = '';
    if (fullArtQuoteStep === 0) quote = quotes.summon;
    else if (fullArtQuoteStep === 1) quote = quotes.fusion;

    if (fullArtQuoteStep === 2 || !quote || quote === '---') {
        panel.classList.remove('is-visible');
        text.textContent = '';
        return;
    }
    text.textContent = quote;
    panel.classList.add('is-visible');
}

function cycleFullArtQuote() {
    if (!isFullArtOpen) return;
    fullArtQuoteStep = (fullArtQuoteStep + 1) % 3;
    renderFullArtQuote();
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

    setupFullArtEvocationFx(currentUnitOpen);
    fullArtQuoteStep = 0;
    renderFullArtQuote();

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

    image.onerror = null;
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

    if (touchEndX < touchStartX - swipeThreshold) nextFullArt();
    if (touchEndX > touchStartX + swipeThreshold) prevFullArt();
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
                    if (imgTag.getAttribute('src') !== src) imgTag.src = src;
                }
            }
        } else {
            if (container) container.style.display = 'none';
            if (btn) btn.style.display = 'none';
            if (videoTag) {
                videoTag.pause();
                videoTag.removeAttribute('src');
            }
            if (imgTag) imgTag.removeAttribute('src');
        }
    });
}

/* ==========================================================================
   VIDEO EFFETTI (btm6): Attack / BB
   Nel JSON: "effects": { "atk": "percorso/Atk.mp4", "bb": "percorso/BBAtk.mp4" }
   ========================================================================== */
const EFFECT_TYPES = ['atk', 'bb'];
let effectMode = false;
let currentEffect = 'atk';

// Percorsi delle immagini dei bottoni effetti
const EFFECT_BUTTON_IMAGES = {
    toggle: '../img/Button For Change/btm6.png',   // bottone "effects"
    atk: '../img/Button For Change/Atk.png',      // bottone verde "Attack"
    bb: '../img/Button For Change/BBAtk.png'        // bottone blu "BB"
};

// Crea nella modale gli elementi degli effetti se l'HTML non li contiene già
function ensureEffectsUI() {
    const gif = document.querySelector('.unit_gif');
    if (gif && !document.getElementById('container_effect')) {
        const box = document.createElement('div');
        box.id = 'container_effect';
        box.className = 'anim-container';
        box.style.display = 'none';
        box.innerHTML = '<video id="video_effect" loop muted playsinline webkit-playsinline class="unit-media-style"></video><div class="shadow"></div>';
        gif.appendChild(box);
    }
    // immagine per gli effetti in GIF (o WebP/PNG animati)
    const fxBox = document.getElementById('container_effect');
    if (fxBox && !document.getElementById('img_effect')) {
        const img = document.createElement('img');
        img.id = 'img_effect';
        img.className = 'unit-media-style';
        img.alt = '';
        img.style.display = 'none';
        fxBox.insertBefore(img, fxBox.querySelector('.shadow'));
    }

    const top = document.querySelector('.unit_box_top');
    if (top && !document.getElementById('btn_btm6_container')) {
        const btn = document.createElement('div');
        btn.className = 'btn_effects';
        btn.id = 'btn_btm6_container';
        btn.style.display = 'none';
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-label', 'Effects');
        btn.innerHTML = `<img src="${EFFECT_BUTTON_IMAGES.toggle}" id="btn_btm6" alt="Effects">`;
        top.appendChild(btn);
    }

    const group = document.querySelector('.bottom_buttons_group');
    if (group && !document.getElementById('effectChoice')) {
        const choice = document.createElement('div');
        choice.className = 'effect_choice';
        choice.id = 'effectChoice';
        choice.style.display = 'none';
        choice.innerHTML = `
            <button type="button" class="btn_effect_type" data-effect="atk" aria-label="Attack"><img src="${EFFECT_BUTTON_IMAGES.atk}" alt="Attack"></button>
            <button type="button" class="btn_effect_type" data-effect="bb" aria-label="BB"><img src="${EFFECT_BUTTON_IMAGES.bb}" alt="BB"></button>`;
        const motion = group.querySelector('.btn_motion');
        if (motion && motion.nextSibling) group.insertBefore(choice, motion.nextSibling);
        else group.appendChild(choice);
    }
}

function getUnitEffects(u) {
    const fx = (u && u.effects) || {};
    return EFFECT_TYPES.filter(type => fx[type]);
}

// Mostra btm6 solo se l'unità ha almeno un video effetto
function updateEffectsButton() {
    const btn = document.getElementById('btn_btm6_container');
    if (btn) btn.style.display = getUnitEffects(currentUnitOpen).length ? 'flex' : 'none';
}

function stopEffectVideo() {
    const video = document.getElementById('video_effect');
    const img = document.getElementById('img_effect');
    if (video) { video.pause(); video.removeAttribute('src'); video.load(); video.style.display = 'none'; }
    if (img) { img.removeAttribute('src'); img.style.display = 'none'; }
}

// true se il file è un video (mp4/webm/mov), false se è un'immagine animata (gif/webp/png)
function isVideoFile(src) {
    return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(String(src || ''));
}

function stopMotionVideos() {
    ['default', 'idle', 'atk'].forEach(type => {
        const container = document.getElementById(`container_${type}`);
        const video = document.getElementById(`video_${type}`);
        const img = document.getElementById(`img_${type}`);
        if (container) container.style.display = 'none';
        if (video) { video.pause(); video.removeAttribute('src'); }
        if (img) img.removeAttribute('src');
    });
}

function selectEffect(type) {
    if (!currentUnitOpen) return;
    const src = currentUnitOpen.effects && currentUnitOpen.effects[type];
    if (!src) return;
    currentEffect = type;

    const container = document.getElementById('container_effect');
    const video = document.getElementById('video_effect');
    const img = document.getElementById('img_effect');
    if (container) container.style.display = 'block';

    if (isVideoFile(src) || !img) {
        // MP4 / WebM
        if (img) { img.removeAttribute('src'); img.style.display = 'none'; }
        if (video) {
            video.style.display = 'block';
            video.muted = true;
            video.playsInline = true;
            video.loop = true;
            if (video.getAttribute('src') !== src) {
                video.src = src;
                video.load();
            }
            video.currentTime = 0;
            video.play().catch(() => { });
        }
    } else {
        // GIF (o WebP/PNG animati): si rimette il src così riparte dal primo fotogramma
        if (video) { video.pause(); video.removeAttribute('src'); video.style.display = 'none'; }
        img.style.display = 'block';
        img.removeAttribute('src');
        void img.offsetWidth;
        img.src = src;
    }

    document.querySelectorAll('.btn_effect_type').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.effect === type);
    });
}

function enterEffectMode(type) {
    const available = getUnitEffects(currentUnitOpen);
    if (!available.length) return;
    effectMode = true;
    stopMotionVideos();

    const motionBtn = document.querySelector('.btn_motion');
    const choice = document.getElementById('effectChoice');
    if (motionBtn) motionBtn.style.display = 'none';
    if (choice) choice.style.display = 'flex';
    // mostra solo i bottoni degli effetti che l'unità ha davvero
    document.querySelectorAll('.btn_effect_type').forEach(btn => {
        btn.style.display = available.includes(btn.dataset.effect) ? '' : 'none';
    });

    const btm6 = document.getElementById('btn_btm6');
    if (btm6) btm6.classList.add('active');

    selectEffect(available.includes(type) ? type : available[0]);
}

// Esce dalla modalità effetti; se restoreMotion è true torna all'animazione "default"
function exitEffectMode(restoreMotion = true) {
    effectMode = false;
    stopEffectVideo();
    const container = document.getElementById('container_effect');
    const motionBtn = document.querySelector('.btn_motion');
    const choice = document.getElementById('effectChoice');
    const btm6 = document.getElementById('btn_btm6');
    if (container) container.style.display = 'none';
    if (motionBtn) motionBtn.style.display = '';
    if (choice) choice.style.display = 'none';
    if (btm6) btm6.classList.remove('active');
    if (restoreMotion && currentUnitOpen) showMotion('default');
}

function toggleEffects() {
    if (!currentUnitOpen || isFullArtOpen) return;
    if (effectMode) exitEffectMode(true);
    else enterEffectMode(currentEffect);
}

function toggleImg() {
    if (isFullArtOpen || effectMode) return;
    const dCont = document.getElementById('container_default');
    const iCont = document.getElementById('container_idle');
    if (dCont && dCont.style.display !== 'none') showMotion('idle');
    else if (iCont && iCont.style.display !== 'none') showMotion('atk');
    else showMotion('default');
}

function closeModal(options = {}) {
    // Se chiamata dall'onclick della X arriva un evento, non un oggetto opzioni
    const pushHistory = !(options && options.pushHistory === false);
    closeFullArtModal();

    const modalEl = document.getElementById('unitModal');
    if (modalEl) modalEl.style.display = 'none';
    document.body.classList.remove('modal-open');

    isFullArtOpen = false;
    exitEffectMode(false);

    ['default', 'idle', 'atk'].forEach(t => {
        const v = document.getElementById(`video_${t}`);
        const img = document.getElementById(`img_${t}`);
        if (v) { v.pause(); v.removeAttribute('src'); }
        if (img) img.removeAttribute('src');
    });

    currentUnitOpen = null;
    if (pushHistory) window.history.pushState({}, '', window.location.pathname);
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
    if (btm4Container) btm4Container.onclick = changeArenaBackground;

    const btm5Btn = document.getElementById('btn_btm5_container') || document.getElementById('btn_btm5');
    if (btm5Btn) btm5Btn.onclick = toggleFullArt;

    // btm6: entra/esce dalla modalità effetti (crea i pulsanti se l'HTML non li ha)
    ensureEffectsUI();
    const btm6Btn = document.getElementById('btn_btm6_container');
    if (btm6Btn) {
        btm6Btn.onclick = toggleEffects;
        btm6Btn.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleEffects(); }
        };
    }

    // Bottoni Attack (verde) / BB (blu)
    document.querySelectorAll('.btn_effect_type').forEach(btn => {
        btn.onclick = () => selectEffect(btn.dataset.effect);
    });

    const closeFullArtBtn = document.getElementById('closeFullArtModal');
    const fullArtModal = document.getElementById('fullArtModal');

    if (closeFullArtBtn) closeFullArtBtn.onclick = closeFullArtModal;

    if (fullArtModal) {
        fullArtModal.onclick = function (event) {
            if (event.target === fullArtModal) closeFullArtModal();
        };
    }

    initFullArtSwipe();
    initEvolutionLinks();

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (document.getElementById('fullArtModal')?.classList.contains('is-open')) closeFullArtModal();
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

// La lingua è gestita da script.js (condiviso da tutto il sito).
// Qui aggiorniamo solo i contenuti della pagina quando l'utente la cambia.
function getCurrentLang() {
    return (window.SiteLang && window.SiteLang.get()) || 'it';
}

window.addEventListener('sitelanguagechange', () => {
    if (allUnits.length > 0) applyFilters(false);
    if (isFullArtOpen) renderFullArtQuote();

    const modal = document.getElementById('unitModal');
    if (currentUnitOpen && modal && modal.style.display === 'block') {
        openModal(currentUnitOpen, { pushHistory: false });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const fullArtImage = document.getElementById('fullArtModalImage');
    if (fullArtImage) {
        fullArtImage.addEventListener('click', cycleFullArtQuote);
        fullArtImage.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); cycleFullArtQuote(); }
        });
        fullArtImage.tabIndex = 0;
    }
});

window.addEventListener('resize', () => {
    if (allUnits.length > 0) applyFilters(false);
});

startApp();