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

// Nome nella modale: su PC e tablet va a capo ogni 3 parole, così non finisce sotto la croce di chiusura.
// Su telefono (fino a 600px) resta su una riga come prima.
const MODAL_NAME_WORDS_PER_LINE = 3;

function setModalName(el, name) {
    const fullName = String(name || '').trim();
    el.dataset.fullName = fullName;
    el.title = fullName;
    if (window.innerWidth <= 600) {
        el.innerText = fullName;
        return;
    }
    const words = fullName.split(/\s+/).filter(Boolean);
    const lines = [];
    for (let i = 0; i < words.length; i += MODAL_NAME_WORDS_PER_LINE) {
        lines.push(words.slice(i, i + MODAL_NAME_WORDS_PER_LINE).join(' '));
    }
    el.innerText = lines.join('\n');
}

// Se la finestra passa da telefono a PC/tablet (o viceversa), il nome si risistema
window.addEventListener('resize', () => {
    const el = document.getElementById('modalName');
    if (el && el.dataset.fullName !== undefined) setModalName(el, el.dataset.fullName);
});

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

/* ==========================================================================
   FASI EVOLUTIVE: UNITÀ IN PIEDI SULLA BASE DELLA SUA RARITÀ
   Al posto dell'icona quadrata, ogni unità della ricetta sta sopra una base colorata:
     1★ e 2★ = argento, 3★ = oro, 4★ = rossa, 5★ 6★ 7★ = arcobaleno, Omni e Dream = nera e oro.
   Sopra la base si muove l'animazione "idle" dell'unità (se manca, il "default").
   Qui si usa la .webp su tutti i dispositivi: è leggera (possono essere tante insieme)
   e si vede uguale su iPhone, tablet e PC.
   Se l'unità non ha ancora l'animazione, sulla base compare la sua icona quadrata.
   I piedi (o l'ombra) del personaggio vanno al centro del vetro della base.
   PIXEL NETTI: ogni pixel del disegno diventa esattamente 1 pixel dello schermo (o 2, 3
   sui telefoni con schermo più fitto). L'unità non viene mai rimpicciolita più di così,
   quindi non si perde nessun pixel, nemmeno facendo zoom: se un'unità è molto grande,
   è il riquadro che diventa più grande.
   ========================================================================== */
const EVO_BASE_FOLDER = '../img/piatform/';
// freccia animata delle fasi evolutive sul telefono (una .webp va bene su tutti i dispositivi)
const EVO_ARROW_SRC = '../video/Evolution arrow/Arrow-evolution.webp';
const EVO_BASE_FILES = {
    silver: 'weapon_table_1.png',    // 1★ e 2★
    gold: 'weapon_table_2.png',      // 3★
    red: 'weapon_table_0.png',       // 4★
    rainbow: 'weapon_table_3.png',   // 5★, 6★ e 7★
    omni: 'weapon_table_4.png'       // Omni e Dream
};
// riquadro dell'unità (in px): misura minima e margine attorno al personaggio.
// La base si vede larga 97px (metà del file 194x104, come gli sprite). Il punto dove va
// il centro dell'ombra (il puntino giallo, al centro del vetro) è 30px sopra il fondo:
// questi numeri sono anche nel CSS.
const EVO_STAGE_MIN_W = 104;
const EVO_STAGE_MIN_H = 120;
const EVO_STAGE_MIN_H_PHONE = 84;
const EVO_STAGE_FOOT = 30;
const EVO_STAGE_PAD = 6;

// tipo di base per la rarità: silver, gold, red, rainbow o omni (serve anche al CSS per il colore dell'alone)
/* ==========================================================================
   UNITÀ DA INGRANDIRE
   Alcune animazioni del gioco hanno il personaggio disegnato più piccolo delle altre
   forme della stessa unità. Qui si può ingrandire un'unità: numero dell'unità (realId)
   e quante volte ingrandirla. Vale SOLO per le fasi evolutive (sulle basi):
   l'animazione grande in alto resta sempre della sua misura.
   Esempio: '20016': 1.25 = Ice Legend Selena un quarto più grande.
   Per aggiungerne un'altra: copia una riga, cambia il numero e la grandezza.
   ========================================================================== */
const UNIT_SPRITE_SCALE = {
    '20016': 1.20,   // Ice Legend Selena
    '20017': 1.20,  // Algor Halcyon Selena
    '30015': 1.15,
    '30016': 1.15,
    '30017': 1.25,
    '40015': 1.15,
    '40016': 1.30,
    '40017': 1.30,
    '50015': 1.15,
    '50016': 1.20,
    '50017': 1.20,
    '60013': 1.1,
    '60014': 1.1,
    '60015': 1.1,
    '60016': 1.1,
    '60017': 1.13,
    '10025': 1.20,
    '20025': 1.20,
    '30025': 1.20,
    '40025': 1.20,
    '50025': 1.20,
    '60025': 1.20,
    '60027': 1.20,
};

function unitSpriteScale(unit) {
    if (!unit) return 1;
    const scale = parseFloat(UNIT_SPRITE_SCALE[String(unit.realId || unit.id)]);
    return scale > 0 ? scale : 1;
}

function getEvoBaseKind(rarity) {
    const r = String(rarity || '').trim().toLowerCase();
    if (r === '1' || r === '2') return 'silver';
    if (r === '3') return 'gold';
    if (r === '4') return 'red';
    if (r === 'omni' || r === 'dream') return 'omni';
    return 'rainbow';
}

function getEvoBaseImage(rarity) {
    return EVO_BASE_FOLDER + EVO_BASE_FILES[getEvoBaseKind(rarity)];
}

// .webp dell'idle dell'unità (o del default se l'idle manca); '' se non c'è nessuna animazione
function getEvoIdleSrc(target) {
    const anims = target && target.animations;
    const src = anims ? (anims.idle || anims.default || '') : '';
    if (!src) return '';
    return String(src).replace(/\.(webm|mov|gif|webp)(\?.*)?$/i, '.webp');
}

function escapeAttr(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Base + animazione di un'unità nella ricetta: se l'unità esiste ed è diversa da quella aperta, è cliccabile
function evoUnitStageHtml(thumbSrc, realId, alt, currentUnit, fallbackRarity) {
    const target = findUnitByRealId(realId);
    const isSelf = target && currentUnit && String(target.realId) === String(currentUnit.realId);
    const rarity = (target && target.rarity) || fallbackRarity || '';
    const idleSrc = getEvoIdleSrc(target);
    const unitHtml = idleSrc
        ? `<img src="${escapeAttr(idleSrc)}" data-thumb="${escapeAttr(thumbSrc)}" data-unit-scale="${unitSpriteScale(target)}" alt="${escapeAttr(alt)}" class="evo-stage-unit" draggable="false">`
        : `<img src="${escapeAttr(thumbSrc)}" alt="${escapeAttr(alt)}" class="evo-stage-thumb" loading="lazy" draggable="false">`;
    const linkAttrs = (target && !isSelf)
        ? ` evo-unit-link" data-unit-id="${escapeAttr(target.realId)}" title="${escapeAttr(getActiveUnitName(target))}" role="button" tabindex="0"`
        : `"`;
    return `<div class="evo-stage evo-base-${getEvoBaseKind(rarity)}${linkAttrs}>
                <img src="${getEvoBaseImage(rarity)}" alt="" class="evo-stage-base" draggable="false">
                ${unitHtml}
            </div>`;
}

// Gli sprite del gioco sono disegnati "a pixel doppi": ogni pixel del disegno è un quadratino
// 2x2 di pixel uguali nel file. Qui si controlla quanto è grande quel quadratino (1, 2, 3 o 4),
// così l'unità si mostra con 1 pixel del disegno = 1 pixel dello schermo.
function blocksAreUniform(px, w, h, k, ox, oy) {
    let visible = 0, bad = 0;
    for (let by = oy; by + k <= h; by += k) {
        for (let bx = ox; bx + k <= w; bx += k) {
            const i0 = (by * w + bx) * 4;
            let seen = false, diff = false;
            for (let y = 0; y < k && !diff; y++) {
                for (let x = 0; x < k; x++) {
                    const i = ((by + y) * w + bx + x) * 4;
                    if (px[i + 3]) seen = true;
                    if (Math.abs(px[i] - px[i0]) > 8 || Math.abs(px[i + 1] - px[i0 + 1]) > 8 ||
                        Math.abs(px[i + 2] - px[i0 + 2]) > 8 || Math.abs(px[i + 3] - px[i0 + 3]) > 8) { diff = true; break; }
                }
            }
            if (!seen && !diff) continue;
            visible++;
            if (diff) {
                bad++;
                if (bad > 50 && bad > visible * 0.03) return false;   // si vede già che non va: inutile continuare
            }
        }
    }
    return visible > 0 && bad / visible < 0.03;
}

function detectArtPixelSize(img) {
    const w = img.naturalWidth, h = img.naturalHeight;
    if (!w || !h || w * h > 4000000) return 1;
    try {
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0);
        const px = ctx.getImageData(0, 0, w, h).data;
        // i quadratini possono partire dal primo pixel o qualche pixel più in là
        // (dipende da come è stato ritagliato il file): si provano tutte le partenze
        for (const k of [4, 3, 2]) {
            for (let oy = 0; oy < k; oy++) {
                for (let ox = 0; ox < k; ox++) {
                    if (blocksAreUniform(px, w, h, k, ox, oy)) return k;
                }
            }
        }
    } catch (err) {
        console.warn('Controllo dei pixel non riuscito:', err);
    }
    return 1;
}

// Un'animazione .webp si muove: ali, mantelli e armi possono uscire dalla sagoma del primo
// fotogramma. Dentro il file ogni fotogramma dice in quale rettangolo cambia qualcosa:
// unendo questi rettangoli si sa fin dove arriva l'animazione intera (si legge solo
// l'intestazione del file, che il telefono ha già scaricato).
const webpFramesCache = new Map();

function parseWebpFrames(buffer) {
    const b = new Uint8Array(buffer);
    const tag = i => String.fromCharCode(b[i], b[i + 1], b[i + 2], b[i + 3]);
    const u24 = i => b[i] | (b[i + 1] << 8) | (b[i + 2] << 16);
    const u32 = i => (b[i] | (b[i + 1] << 8) | (b[i + 2] << 16) | (b[i + 3] << 24)) >>> 0;
    if (b.length < 16 || tag(0) !== 'RIFF' || tag(8) !== 'WEBP') return null;
    let i = 12, cw = 0, ch = 0;
    const rects = [];
    while (i + 8 <= b.length) {
        const name = tag(i), size = u32(i + 4), d = i + 8;
        if (name === 'VP8X' && size >= 10) {
            cw = 1 + u24(d + 4);
            ch = 1 + u24(d + 7);
        } else if (name === 'ANMF' && size >= 16) {
            rects.push({ x: 2 * u24(d), y: 2 * u24(d + 3), w: 1 + u24(d + 6), h: 1 + u24(d + 9) });
        }
        i = d + size + (size & 1);
    }
    return cw && ch ? { cw, ch, rects } : null;
}

function readWebpFrames(src) {
    if (!webpFramesCache.has(src)) {
        webpFramesCache.set(src, fetch(src)
            .then(r => (r.ok ? r.arrayBuffer() : null))
            .then(buf => (buf ? parseWebpFrames(buf) : null))
            .catch(() => null));
    }
    return webpFramesCache.get(src);
}

// spazio che serve all'unità sopra il puntino e ai lati, dati i bordi (in frazioni del file)
function setEvoNeeds(stage, img, box) {
    const k = parseFloat(img.dataset.artPx) || 1;
    const w = parseFloat(img.dataset.fileW), h = parseFloat(img.dataset.fileH);
    const sx = parseFloat(img.dataset.standX), sy = parseFloat(img.dataset.standY);
    stage.dataset.up = String(Math.max(0, sy - box.top) * h / k);
    stage.dataset.side = String(Math.max(sx - box.left, box.right - sx, 0) * w / k);
}

// Mette l'animazione con i piedi al centro del vetro, a pixel netti (1 pixel del disegno = 1px).
function placeEvoUnit(img) {
    const stage = img.closest('.evo-stage');
    const m = stage ? measureCharacter(img) : null;
    if (!m) return;
    const k = detectArtPixelSize(img);
    // il centro dell'ombra va sul puntino; se il file non si è potuto leggere, resta centrato
    const sx = m.standX !== undefined ? m.standX : 0.5;
    const sy = m.standY !== undefined ? m.standY : 0.5;
    img.style.setProperty('--char-x', ((0.5 - sx) * 100).toFixed(2));
    img.style.setProperty('--char-y', ((0.5 - sy) * 100).toFixed(2));
    // unità da ingrandire (elenco UNIT_SPRITE_SCALE): un pixel del file diventa più grande
    const px = k / (parseFloat(img.dataset.unitScale) || 1);
    Object.assign(img.dataset, { artPx: px, fileW: m.w, fileH: m.h, standX: sx, standY: sy, fullW: m.w / px });
    // bordi del primo fotogramma
    const box = m.fullLeft !== undefined
        ? { left: m.fullLeft, right: m.fullRight, top: m.fullTop }
        : { left: 0, right: 1, top: 0 };
    setEvoNeeds(stage, img, box);
    img.classList.add('is-placed');
    const panel = stage.closest('.evolution-recipe-panel');
    fitEvoPanel(panel);

    // poi i bordi di tutta l'animazione (tutti i fotogrammi)
    readWebpFrames(img.src).then(info => {
        if (!info || !img.isConnected) return;
        const later = info.rects.slice(1);
        if (!later.length) return;                       // immagine ferma: basta il primo fotogramma
        const fullFrames = later.every(r => r.x === 0 && r.y === 0 && r.w >= info.cw && r.h >= info.ch);
        if (fullFrames) {
            // il file non dice dove cambia: si lascia un margine del 15%
            const mw = (box.right - box.left) * 0.15, mh = (sy - box.top) * 0.15;
            box.left -= mw; box.right += mw; box.top -= mh;
        } else {
            later.forEach(r => {
                box.left = Math.min(box.left, r.x / info.cw);
                box.right = Math.max(box.right, (r.x + r.w) / info.cw);
                box.top = Math.min(box.top, r.y / info.ch);
            });
        }
        setEvoNeeds(stage, img, box);
        fitEvoPanel(panel);
    });
}

// Spazio in larghezza per le unità sul telefono, dove la ricetta è in colonna (un'unità per riga).
// Su PC e tablet c'è posto per tutte: Infinity.
function evoPhoneRoom(panel) {
    if (!window.matchMedia('(max-width: 600px)').matches) return Infinity;
    const cs = getComputedStyle(panel);
    const inner = panel.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    return inner >= 120 ? inner : Infinity;   // riquadro non ancora visibile: si rifà dopo
}

// Rimpicciolimento per le unità troppo larghe per il telefono, solo "a gradini interi":
// ogni pixel del disegno resta 2 pixel pieni dello schermo (o 1), quindi non se ne perde nessuno.
function evoPixelSafeScale(needW, room) {
    if (needW <= room) return 1;
    const dpr = window.devicePixelRatio || 1;
    let scale = 1;
    for (let n = Math.ceil(dpr) - 1; n >= 1; n--) {
        const s = n / dpr;
        if (s < 0.5) break;          // non più piccole della metà
        scale = s;
        if (needW * s <= room) break;
    }
    return scale;
}

// Le due unità di una ricetta hanno riquadri uguali, grandi quanto serve alla più grande.
// Sul telefono la ricetta è in colonna (prima unità sopra, freccia, unità evoluta sotto),
// così ogni unità ha tutta la larghezza dello schermo e resta grande come su PC.
function fitEvoPanel(panel) {
    if (!panel) return;
    const items = [];
    panel.querySelectorAll('.evo-stage').forEach(stage => {
        const img = stage.querySelector('.evo-stage-unit.is-placed');
        if (!img) return;
        items.push({
            img,
            up: parseFloat(stage.dataset.up) || 0,
            needW: 2 * (parseFloat(stage.dataset.side) || 0) + EVO_STAGE_PAD,
            unitScale: parseFloat(img.dataset.unitScale) || 1
        });
    });
    const room = evoPhoneRoom(panel);
    // sul telefono (ricetta in colonna) il riquadro è alto solo quanto serve: niente spazi vuoti
    let w = EVO_STAGE_MIN_W, h = room !== Infinity ? EVO_STAGE_MIN_H_PHONE : EVO_STAGE_MIN_H;
    items.forEach(it => {
        // se non ci sta nemmeno così: le unità ingrandite (UNIT_SPRITE_SCALE) si rimpiccioliscono
        // solo quel tanto che serve, le altre "a gradini interi" per tenere i pixel netti
        let scale = 1;
        if (it.needW > room) {
            scale = it.unitScale > 1
                ? Math.max(room / it.needW, 0.5 / it.unitScale)
                : evoPixelSafeScale(it.needW, room);
        }
        it.img.style.width = (parseFloat(it.img.dataset.fullW) * scale) + 'px';
        w = Math.max(w, Math.ceil(it.needW * scale));
        h = Math.max(h, Math.ceil(EVO_STAGE_FOOT + it.up * scale + EVO_STAGE_PAD));
    });
    if (room !== Infinity) w = Math.min(w, Math.floor(room));
    panel.style.setProperty('--stage-w', w + 'px');
    panel.style.setProperty('--stage-h', h + 'px');
}

// quando si gira il telefono o cambia la finestra, le unità si risistemano
let evoResizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(evoResizeTimer);
    evoResizeTimer = setTimeout(() => {
        document.querySelectorAll('#evolutionContainer .evolution-recipe-panel').forEach(fitEvoPanel);
    }, 150);
});

// Animazione che non esiste (ancora): al suo posto l'icona quadrata dell'unità
function evoUnitFallback(img) {
    img.classList.remove('evo-stage-unit', 'is-placed');
    img.classList.add('evo-stage-thumb');
    if (img.dataset.thumb) img.src = img.dataset.thumb;
    else img.style.visibility = 'hidden';
}

/* Telefono: bottone "Vedi tutte le fasi / Una alla volta" accanto al titolo "Evoluzione".
   Normalmente si apre una fase alla volta; con "Vedi tutte le fasi" si aprono tutte insieme
   (e ognuna si può chiudere da sola). "Una alla volta" torna al funzionamento normale e
   rimette com'era la fase aperta prima di "Vedi tutte le fasi" (o nessuna, se erano chiuse).
   La scelta resta valida anche aprendo altre unità. */
let evoShowAll = false;
const EVO_TOGGLE_ICON = '<svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">' +
    '<path d="M2 2.5l4 3 4-3M2 6.5l4 3 4-3" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';

// testo tradotto (dizionario in script.js), con l'italiano se manca la traduzione
function tr(key, fallback) {
    const text = t(key);
    return text && text !== key ? text : fallback;
}

function setStepOpen(block, open) {
    block.classList.toggle('is-open', open);
    const title = block.querySelector('.evo-step-title');
    if (title) title.setAttribute('aria-expanded', String(open));
}

function updateEvoToggleAll(container) {
    const area = container.closest('.evolution-recipe-area');
    if (!area) return;
    let btn = area.querySelector('.evo-toggle-all');
    if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'evo-toggle-all';
        btn.innerHTML = EVO_TOGGLE_ICON + '<span class="evo-toggle-label"></span>';
        area.insertBefore(btn, area.firstChild);
        btn.addEventListener('click', () => {
            const blocks = [...container.querySelectorAll('.evolution-step-block')];
            if (!evoShowAll) {
                // si ricorda quale fase era aperta (-1 = nessuna) per rimetterla dopo
                container.dataset.singleOpen = String(blocks.findIndex(b => b.classList.contains('is-open')));
                evoShowAll = true;
                blocks.forEach(block => {
                    setStepOpen(block, true);
                    fitEvoPanel(block.querySelector('.evolution-recipe-panel'));
                });
            } else {
                evoShowAll = false;
                const keep = parseInt(container.dataset.singleOpen, 10);
                blocks.forEach((block, index) => setStepOpen(block, index === keep));
                if (blocks[keep]) fitEvoPanel(blocks[keep].querySelector('.evolution-recipe-panel'));
            }
            updateEvoToggleAll(container);
        });
    }
    btn.hidden = container.querySelectorAll('.evolution-step-block').length < 2;
    btn.classList.toggle('is-all', evoShowAll);
    btn.setAttribute('aria-pressed', String(evoShowAll));
    const key = evoShowAll ? 'evo.closeAll' : 'evo.openAll';
    const label = btn.querySelector('.evo-toggle-label');
    label.setAttribute('data-i18n', key);
    label.textContent = tr(key, evoShowAll ? 'Una alla volta' : 'Vedi tutte le fasi');
}

// Click sulle unità laterali della ricetta: apre la modale di quell'unità
function initEvolutionLinks() {
    const container = document.getElementById('evolutionContainer');
    if (!container || container.dataset.linksReady) return;
    container.dataset.linksReady = '1';

    // le animazioni delle basi: quando arrivano si mettono al loro posto, se mancano si usa l'icona
    container.addEventListener('load', (e) => {
        const el = e.target;
        if (el.classList && el.classList.contains('evo-stage-unit')) placeEvoUnit(el);
    }, true);
    container.addEventListener('error', (e) => {
        const el = e.target;
        if (!el.classList) return;
        if (el.classList.contains('evo-stage-unit')) evoUnitFallback(el);
        else if (el.classList.contains('evo-stage-thumb')) el.style.visibility = 'hidden';
        // freccia animata non trovata: al suo posto torna la freccia dorata disegnata
        else if (el.classList.contains('evo-arrow-img') && el.parentElement) el.parentElement.classList.add('arrow-missing');
    }, true);

    const openFromEl = (el) => {
        const target = findUnitByRealId(el.dataset.unitId);
        if (target) openModal(target);
    };

    // telefono: il titolo di ogni fase apre e chiude la fase (su PC e tablet le fasi sono sempre aperte).
    // Di solito se ne apre una alla volta: aprendone una, quella aperta prima si chiude.
    // Con "Apri tutte" invece ogni fase si apre e si chiude per conto suo.
    const toggleStep = (title) => {
        if (!window.matchMedia('(max-width: 600px)').matches) return;
        const block = title.closest('.evolution-step-block');
        if (!block) return;
        const open = !block.classList.contains('is-open');
        if (!evoShowAll) {
            container.querySelectorAll('.evolution-step-block.is-open').forEach(other => setStepOpen(other, false));
        }
        setStepOpen(block, open);
        if (open) {
            fitEvoPanel(block.querySelector('.evolution-recipe-panel'));
            // chiudendo la fase di sopra il titolo potrebbe essere salito fuori dallo schermo
            title.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    };

    container.addEventListener('click', (e) => {
        const title = e.target.closest('.evo-step-title');
        if (title) { toggleStep(title); return; }
        const el = e.target.closest('.evo-unit-link');
        if (el) openFromEl(el);
    });
    container.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const title = e.target.closest('.evo-step-title');
        if (title) { e.preventDefault(); toggleStep(title); return; }
        const el = e.target.closest('.evo-unit-link');
        if (el) { e.preventDefault(); openFromEl(el); }
    });
}

// Traduzione dei testi dell'interfaccia (dizionario in script.js)
function t(key, vars) {
    return (window.SiteLang && window.SiteLang.t) ? window.SiteLang.t(key, vars) : key;
}

// Cartella delle immagini degli oggetti evolutivi (pietre ecc.)
const EVO_ITEM_FOLDER = '../img/Material Evolve/';
// Nome del file per ogni oggetto. Se un oggetto non è in elenco si usa "<nome oggetto>.png"
const EVO_ITEM_FILES = {
    // pietre semplici (ordine elementi: Fuoco, Acqua, Terra, Tuono, Luce, Oscurità)
    'Ruby': 'item_thum_110000.png',
    'Sapphire': 'item_thum_110010.png',
    'Emerald': 'item_thum_110020.png',
    'Topaz': 'item_thum_110030.png',
    'Opal': 'item_thum_110040.png',
    'Amethyst': 'item_thum_110050.png',
    'Garnet': 'item_thum_110080.png',
    // pietre "Grand"
    'Grand Ruby': 'item_thum_110100.png',
    'Grand Sapphire': 'item_thum_110110.png',
    'Grand Emerald': 'item_thum_110120.png',
    'Grand Topaz': 'item_thum_110130.png',
    'Grand Opal': 'item_thum_110140.png',
    'Grand Amethyst': 'item_thum_110150.png',
    'Grand Garnet': 'item_thum_110160.png',
    // speciali
    'Twin Stones': 'item_thum_110190.png',
    'Legend Stone': 'item_thum_111000.png',
    'Love Crystal': 'Item_thum_700042.png'
};

function getEvoItemImage(name) {
    return EVO_ITEM_FOLDER + (EVO_ITEM_FILES[name] || `${name}.png`);
}

function renderEvolutionRecipes(unit) {
    const container = document.getElementById('evolutionContainer');
    if (!container) return;
    initEvolutionLinks();

    container.innerHTML = '';
    // la sezione "Evoluzione" si vede solo se l'unità ha davvero delle evoluzioni
    const area = container.closest('.evolution-recipe-area');
    const showArea = visible => { if (area) area.style.display = visible ? '' : 'none'; };
    showArea(true);
    const evoKeys = Object.keys(unit).filter(key => key.startsWith('evolution'));

    evoKeys.sort((a, b) => {
        if (a === 'evolution') return -1;
        if (b === 'evolution') return 1;
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    if (evoKeys.length === 0) {
        showArea(false);
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

    // sul telefono ogni fase è un bottone che si apre e si chiude: all'inizio è aperta solo
    // la fase che porta all'unità aperta (o, per la prima forma, la sua prima evoluzione)
    const sameId = (a, b) => a !== undefined && a !== null && String(a) === String(unit.realId || unit.id);
    let openIndex = uniqueEvolutions.findIndex(it => sameId(it.evoData.nextId || it.evoData.id));
    if (openIndex < 0) openIndex = uniqueEvolutions.findIndex(it => sameId(it.evoData.prevId));
    if (openIndex < 0) openIndex = 0;
    // con "Vedi tutte le fasi" attivo, "Una alla volta" riaprirà questa fase
    container.dataset.singleOpen = String(openIndex);

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

        // rarità per il colore delle basi (se l'unità non è nell'elenco)
        const nextRarity = directTargetRarity || targetUnitRarity;
        const prevUnit = findUnitByRealId(evolution.prevId);
        const prevRarity = prevUnit ? prevUnit.rarity : (!evolution.prevId ? unit.rarity : '');

        const levelTitle = t('evo.to', { r: rarityDisplay });
        const materials = Array.isArray(recipe.materials) ? recipe.materials : [];
        const items = Array.isArray(recipe.items) ? recipe.items.filter(Boolean) : [];
        const materialImgs = materials.map((matSrc, mIndex) => `<img src="${matSrc}" class="mat-icon evo-recipe-material" loading="lazy" alt="${t('evo.material', { n: mIndex + 1 })}">`);
        // Oggetti evolutivi (es. "Legend Stone"): immagine = cartella oggetti + nome + .png
        const itemImgs = items.map(name => `<img src="${getEvoItemImage(name)}" class="mat-icon evo-recipe-material evo-recipe-item" loading="lazy" alt="${name}" title="${name}">`);
        const materialHtml = (materialImgs.length || itemImgs.length)
            ? materialImgs.concat(itemImgs).join('')
            : `<span class="evo-no-materials notranslate">${t('evo.noMaterials')}</span>`;

        const zelImage = recipe.zelImage || '../img/Money/Zell.png';
        const karmaImage = recipe.karmaImage || '../img/Money/Karma.png';
        const karmaHtml = Number(recipe.karma) > 0
            ? `<div class="evo-currency"><img src="${karmaImage}" alt="Karma"><span>${formatEvolutionNumber(recipe.karma)}</span></div>`
            : '';

        htmlContent += `
            <div class="evolution-step-block${(evoShowAll || index === openIndex) ? ' is-open' : ''}">
                <h4 class="evo-step-title notranslate" role="button" tabindex="0" aria-expanded="${evoShowAll || index === openIndex}">
                    <span class="evo-step-name">${levelTitle}</span>
                    <span class="evo-step-thumbs" aria-hidden="true">
                        <img src="${escapeAttr(currentImage)}" alt="" loading="lazy" draggable="false">
                        <span class="evo-step-thumb-arrow"></span>
                        <img src="${escapeAttr(nextImage)}" alt="" loading="lazy" draggable="false">
                    </span>
                    <span class="evo-step-chevron" aria-hidden="true"></span>
                </h4>
                <div class="evolution-recipe-panel">
                    <div class="evo-recipe-unit-wrap evo-recipe-prev">
                        ${evoUnitStageHtml(currentImage, evolution.prevId, altName, unit, prevRarity)}
                    </div>
                    <div class="evo-recipe-plus">+</div>
                    <div class="evo-recipe-requirements">
                        <div class="evo-recipe-materials">${materialHtml}</div>
                        <div class="evo-recipe-costs">
                            <div class="evo-currency"><img src="${zelImage}" alt="Zel"><span>${formatEvolutionNumber(recipe.zel)}</span></div>
                            ${karmaHtml}
                        </div>
                    </div>
                    <div class="evo-recipe-equals"><span class="evo-eq-sign">=</span><img class="evo-arrow-img" src="${EVO_ARROW_SRC}" alt="" draggable="false"></div>
                    <div class="evo-recipe-arrow-small" aria-hidden="true"><img class="evo-arrow-img" src="${EVO_ARROW_SRC}" alt="" draggable="false"></div>
                    <div class="evo-recipe-unit-wrap evo-recipe-next">
                        ${evoUnitStageHtml(nextImage, targetId, t('evo.result'), unit, nextRarity)}
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = htmlContent;
    if (!htmlContent) showArea(false);
    updateEvoToggleAll(container);
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
        setModalName(modalNameEl, getActiveUnitName(u));
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

    renderSkills(u);
    renderHowToObtain(u);

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

/* ==========================================================================
   SKILL (Leader Skill, Extra Skill, BB, SBB, UBB) NELLA LINGUA SCELTA
   Nel JSON:  "bb": { "name": { "en": "...", "it": "...", ... }, "desc": { "en": "...", ... } }
   Funziona anche con il vecchio formato  "bb": { "name": "...", "desc": "..." }
   L'Extra Skill sta in "skills.extra" e compare solo se l'unità ce l'ha davvero
   ========================================================================== */
const SKILL_TYPES = ['ls', 'extra', 'bb', 'sbb', 'ubb'];

// Quali skill ha un'unità in base alla rarità (stessa regola dei bottoni effetti)
function getSkillTypesForRarity(rarity) {
    const r = String(rarity || '').trim().toLowerCase();
    if (r === '7' || r === 'omni' || r === 'dream') return ['ls', 'bb', 'sbb', 'ubb'];
    if (r === '6') return ['ls', 'bb', 'sbb'];
    return ['ls', 'bb'];
}

// Testo nella lingua attuale: lingua scelta -> inglese -> italiano -> prima disponibile
function getLocalizedText(value) {
    if (value === undefined || value === null) return '';
    if (typeof value === 'string') return value.trim() === '---' ? '' : value;
    const lang = getCurrentLang();
    return value[lang] || value.en || value.it || Object.values(value).find(v => v) || '';
}

function hasSkillContent(skill) {
    if (!skill) return false;
    const has = v => v && (typeof v === 'string' ? v.trim() && v.trim() !== '---' : Object.values(v).some(x => x && String(x).trim()));
    return has(skill.name) || has(skill.desc);
}

function renderSkills(u) {
    // skill previste dalla rarità + eventuali altre che hanno già un testo nel JSON
    const allowed = getSkillTypesForRarity(u.rarity)
        .concat(SKILL_TYPES.filter(t => hasSkillContent(u.skills && u.skills[t])));
    SKILL_TYPES.forEach(type => {
        const nameEl = document.getElementById(`${type}Name`);
        const descEl = document.getElementById(`${type}Desc`);
        const block = nameEl ? nameEl.closest('.skill_block') : null;

        // SBB / UBB nascosti nelle unità che per rarità non li hanno, Extra Skill nascosta se manca
        if (block) block.style.display = allowed.includes(type) ? '' : 'none';
        if (!allowed.includes(type)) return;

        const skill = (u.skills && u.skills[type]) || {};
        const name = getLocalizedText(skill.name);
        const desc = getLocalizedText(skill.desc);
        // se la descrizione esiste già tradotta nella lingua scelta, Google Translate non la ritocca
        const hasOwnTranslation = skill.desc && typeof skill.desc === 'object' && skill.desc[getCurrentLang()];

        if (nameEl) nameEl.innerText = name || '---';
        if (descEl) {
            descEl.innerText = desc || '---';
            descEl.classList.toggle('notranslate', !!hasOwnTranslation || !desc);
        }
    });
}

/* ==========================================================================
   COME OTTENERLA (in fondo alla modale, dopo le evoluzioni)
   Tabella: Tipo | Evento | Banner. Nel JSON:
   "howToObtain": [
     { "type": "Vortex",
       "event": { "en": "...", "it": "...", ... },   (oppure una stringa semplice)
       "banner": "../img/Bunner Vortex/sp_quest_banner_801006.png" }
   ]
   Se l'unità non ha "howToObtain" la sezione resta nascosta
   ========================================================================== */
const OBTAIN_TEXTS = {
    title: { it: 'Come ottenerla', en: 'How to obtain', es: 'Cómo obtenerla', fr: "Comment l'obtenir", 'zh-CN': '获取方式', ja: '入手方法' },
    type: { it: 'Tipo', en: 'Type', es: 'Tipo', fr: 'Type', 'zh-CN': '类型', ja: '種類' },
    event: { it: 'Evento', en: 'Event', es: 'Evento', fr: 'Événement', 'zh-CN': '活动', ja: 'イベント' },
    banner: { it: 'Banner', en: 'Banner', es: 'Banner', fr: 'Bannière', 'zh-CN': '横幅', ja: 'バナー' }
};

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderHowToObtain(u) {
    const area = document.getElementById('obtainArea');
    const body = document.getElementById('obtainBody');
    if (!area || !body) return;

    // intestazioni nella lingua scelta
    const setText = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = getLocalizedText(OBTAIN_TEXTS[key]); };
    setText('obtainTitle', 'title');
    setText('obtainHeadType', 'type');
    setText('obtainHeadEvent', 'event');
    setText('obtainHeadBanner', 'banner');

    const rows = Array.isArray(u && u.howToObtain) ? u.howToObtain.filter(Boolean) : [];
    if (rows.length === 0) {
        area.style.display = 'none';
        body.innerHTML = '';
        return;
    }

    body.innerHTML = rows.map(r => {
        const type = escapeHtml(getLocalizedText(r.type) || '—');
        const event = escapeHtml(getLocalizedText(r.event) || '—');
        const banner = String(r.banner || '').trim();
        const bannerHtml = banner
            ? `<img class="obtain-banner" src="${escapeHtml(banner)}" alt="${event}" loading="lazy" onerror="this.replaceWith(document.createTextNode('—'))">`
            : '—';
        return `<tr>
            <td class="obtain-type notranslate">${type}</td>
            <td class="obtain-event notranslate">${event}</td>
            <td class="obtain-banner-cell">${bannerHtml}</td>
        </tr>`;
    }).join('');
    area.style.display = '';
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
    text.scrollTop = 0; // ogni nuova frase riparte dall'inizio
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

/* ==========================================================================
   ANIMAZIONI SU IPHONE / IPAD / SAFARI -> .WEBP ANIMATA
   Safari (e tutti i browser su iPhone/iPad, che usano lo stesso motore) non mostra
   la trasparenza dei video .webm: il personaggio comparirebbe su un riquadro NERO.
   I .mov funzionano solo se codificati in HEVC con canale alfa (si fanno solo su Mac),
   quindi su questi dispositivi si usa un'immagine animata con trasparenza:
     la .webp con lo stesso nome (es. Fencer-Vargas-idle.webp), nella stessa cartella del .webm.
   Su PC e Android si usa il .webm.
   Le .gif NON vengono mai usate, su nessun dispositivo:
     - se nel JSON c'è un .webm: iPhone/iPad/Safari usano la .webp, PC e Android il .webm
     - se nel JSON c'è una .gif: tutti usano la .webp con lo stesso nome nella stessa cartella
   Se il file manca, l'animazione resta vuota.
   ========================================================================== */
const NO_WEBM_ALPHA = (() => {
    const ua = navigator.userAgent || '';
    const isIOS = /iP(hone|ad|od)/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMacSafari = /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android/i.test(ua);
    return isIOS || isMacSafari;
})();

const WEBM_RE = /\.webm(\?.*)?$/i;
const MOV_RE = /\.mov(\?.*)?$/i;

function withExtension(src, ext) {
    return WEBM_RE.test(src || '') ? String(src).replace(WEBM_RE, ext) : '';
}

function toGifPath(src) {
    const base = MOV_RE.test(src || '') ? String(src).replace(MOV_RE, '.webm') : src;
    return withExtension(base, '.gif');
}

// Elenco dei file da provare, in ordine, per un'animazione del JSON
// (nel JSON va bene anche il .mov: viene trattato come il .webm con lo stesso nome)
function getAnimationCandidates(src) {
    if (!src) return [];
    // .gif nel JSON: si usa sempre la .webp con lo stesso nome, mai la .gif
    if (/\.gif(\?.*)?$/i.test(src)) return [String(src).replace(/\.gif(\?.*)?$/i, '.webp')];
    const base = MOV_RE.test(src) ? String(src).replace(MOV_RE, '.webm') : src;
    if (!WEBM_RE.test(base)) return [src];
    return NO_WEBM_ALPHA
        ? [withExtension(base, '.webp')]   // iPhone, iPad, Safari: solo la .webp
        : [base];                          // PC e Android: solo il .webm
}

function pickAnimationSrc(src) {
    return getAnimationCandidates(src)[0] || '';
}

/* ==========================================================================
   GIF ALLINEATE AI .WEBM
   Le regole CSS di posizione (#container_... img/video) sono regolate sui .webm (tela 2614x1535).
   Le .gif hanno una tela diversa (1197x750) con il personaggio in un altro punto: con le stesse
   regole finirebbero piccole in basso nell'angolo. Qui ogni .gif viene spostata e ingrandita
   in automatico per stare nello stesso posto del .webm, su PC, tablet e telefono.
   Le piccole correzioni a mano si fanno nel CSS con --gif-scale, --gif-x e --gif-y.
   ========================================================================== */
// posizione della tela della gif dentro la tela del webm (misurata sulle unità, 0.1 = 10%)
const GIF_IN_WEBM = { left: -0.1377, top: -0.0912, width: 0.8838 };
const WEBM_ASPECT = 2614 / 1535;
const GIF_RE = /\.gif(\?.*)?$/i;

// rettangolo occupato da un contenuto con proporzioni "aspect" dentro un box (object-fit: contain)
function containRect(boxW, boxH, aspect) {
    let w = boxW, h = boxW / aspect;
    if (h > boxH) { h = boxH; w = boxH * aspect; }
    return { x: (boxW - w) / 2, y: (boxH - h) / 2, w, h };
}

function readCssNumber(el, name, fallback) {
    const v = parseFloat(getComputedStyle(el).getPropertyValue(name));
    return Number.isFinite(v) ? v : fallback;
}

function fitGifLikeWebm(img) {
    if (!img) return;
    const src = img.getAttribute('src') || '';
    if (!GIF_RE.test(src) || img.style.display === 'none') {
        img.classList.remove('is-gif');
        img.style.transform = '';
        img.style.transformOrigin = '';
        return;
    }
    img.classList.add('is-gif');
    const BW = img.clientWidth, BH = img.clientHeight;
    if (!BW || !BH) return;   // ancora nascosta: ci pensa il ResizeObserver quando compare
    const gifAspect = (img.naturalWidth && img.naturalHeight) ? img.naturalWidth / img.naturalHeight : 1197 / 750;
    const extraScale = readCssNumber(img, '--gif-scale', 1);
    const extraX = readCssNumber(img, '--gif-x', 0) / 100;
    const extraY = readCssNumber(img, '--gif-y', 0) / 100;

    const webm = containRect(BW, BH, WEBM_ASPECT);   // dove si vede il .webm
    const gif = containRect(BW, BH, gifAspect);      // dove la gif si disegnerebbe da sola
    const s = (GIF_IN_WEBM.width * webm.w / gif.w) * extraScale;
    // il centro della gif va sul centro calcolato dentro il webm (+ correzioni dal CSS)
    const gifH = GIF_IN_WEBM.width * webm.w / gifAspect;
    const cx = webm.x + (GIF_IN_WEBM.left + extraX) * webm.w + GIF_IN_WEBM.width * webm.w / 2;
    const cy = webm.y + (GIF_IN_WEBM.top + extraY) * webm.h + gifH / 2;
    const dx = cx - s * (gif.x + gif.w / 2);
    const dy = cy - s * (gif.y + gif.h / 2);
    img.style.transformOrigin = '0 0';
    img.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) scale(${s.toFixed(4)})`;
}

/* ==========================================================================
   CENTRATURA AUTOMATICA DEL PERSONAGGIO (tablet e telefono)
   Ogni unità è disegnata in un punto diverso della tela: qui si legge il primo
   fotogramma, si trova dove sono i pixel non trasparenti e si passa al CSS lo
   spostamento per portarli al centro del riquadro (--char-x e --char-y).
   ========================================================================== */
const CENTER_SAMPLE_WIDTH = 2700;   // i video .webm si leggono interi (rimpiccioliti, l'ombra si confonde e l'unità si sposta)
const CENTER_SAMPLE_WIDTH_IMG = 2600;   // le .webp si leggono intere, pixel per pixel (anche quelle molto larghe)
const CENTER_MIN_ALPHA = 40;       // sotto questo valore il pixel è considerato trasparente
const CENTER_TRIM = 0.02;
const GROUND_TRIM = 0.003;         // per il bordo basso si ignora pochissimo, così l'ombra resta dentro
const GROUND_BAND = 0.12;          // la "parte bassa" usata per il centro orizzontale: 12% dell'altezza

/* L'OMBRA sotto i piedi: pixel scuri e semitrasparenti nella metà bassa del personaggio.
   Se c'è, il punto a terra è il centro della sua parte bassa: così fiamme, spade o
   effetti che scendono più in basso dei piedi non spostano l'unità. */
const SHADOW_RATIO = 3.3;   // le ombre del gioco sono ellissi circa 3,3 volte più larghe che alte

// relaxed = seconda prova, per le ombre "colorate": quando l'ombra è disegnata sopra un cerchio
// magico o un effetto di luce prende un po' del suo colore (es. blu scuro su Leviathan Sage Elimo).
// Allora conta quanto è scura (luminosità), non solo se è grigia/nera.
function findShadowGround(pixels, cw, ch, top, bottom, charWidth, relaxed = false) {
    const isShadow = i => {
        const a = pixels[i + 3];
        if (a < 25 || a > 235) return false;
        if (relaxed) return 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2] <= 70;
        return Math.max(pixels[i], pixels[i + 1], pixels[i + 2]) <= 60;
    };
    const alphaAt = (x, y) => pixels[(y * cw + x) * 4 + 3];
    const start = top + Math.floor((bottom - top) * 0.5);
    const rows = new Array(ch).fill(0);
    for (let y = start; y < ch; y++) {
        for (let x = 0; x < cw; x++) if (isShadow((y * cw + x) * 4)) rows[y]++;
    }
    // la fascia di righe consecutive con più pixel d'ombra
    let best = null;
    for (let y = start; y < ch;) {
        if (rows[y] > 0) {
            const s = y; let tot = 0;
            while (y < ch && rows[y] > 0) { tot += rows[y]; y++; }
            if (!best || tot > best.tot) best = { s, e: y, tot };
        } else y++;
    }
    if (!best) return null;
    // bordi dell'ombra riga per riga. Un bordo è "libero" se accanto c'è il vuoto;
    // se invece accanto c'è il personaggio o un effetto (ali, scie di luce), quel pezzo
    // d'ombra è coperto e il vero bordo non si vede.
    let minX = cw, maxX = -1, freeLeft = false, freeRight = false;
    const mids = [];
    for (let y = best.s; y < best.e; y++) {
        let l = -1, r = -1;
        for (let x = 0; x < cw; x++) {
            if (isShadow((y * cw + x) * 4)) { if (l < 0) l = x; r = x; }
        }
        if (l < 0) continue;
        if (l < minX) minX = l;
        if (r > maxX) maxX = r;
        const lf = l < 2 || (alphaAt(l - 1, y) < 25 && alphaAt(l - 2, y) < 25);
        const rf = r > cw - 3 || (alphaAt(r + 1, y) < 25 && alphaAt(r + 2, y) < 25);
        if (lf) freeLeft = true;
        if (rf) freeRight = true;
        if (lf && rf) mids.push((l + r + 1) / 2);
    }
    const width = maxX - minX + 1, height = best.e - best.s;
    // deve sembrare un'ombra: abbastanza larga e più larga che alta
    if (best.tot < 12 || width < 6 || width < 0.12 * charWidth || height > 0.6 * width) return null;
    // nella seconda prova l'ombra deve essere anche bassa (non una zona scura qualsiasi del disegno)
    if (relaxed && height > 40) return null;
    let cx;
    if (mids.length) {
        // righe con tutti e due i bordi visibili: il centro è a metà (si prende il valore di mezzo)
        mids.sort((a, b) => a - b);
        const k = mids.length >> 1;
        cx = mids.length % 2 ? mids[k] : (mids[k - 1] + mids[k]) / 2;
    } else {
        // un lato è sempre coperto: la larghezza vera si stima dall'altezza dell'ombra
        const est = Math.max(width, SHADOW_RATIO * height);
        if (freeLeft && !freeRight) cx = minX + est / 2;
        else if (freeRight && !freeLeft) cx = maxX + 1 - est / 2;
        else cx = (minX + maxX + 1) / 2;
    }
    // y = bordo basso dell'ombra, cy = centro dell'ombra.
    // Se si vede solo una striscia sottile in fondo (il resto è coperto, per esempio da cristalli
    // o da un vestito lungo), il centro vero è più in alto: si stima dalla larghezza dell'ombra.
    let cy = (best.s + best.e) / 2;
    const expectedHeight = width / SHADOW_RATIO;
    if (height < 10 && height < 0.6 * expectedHeight) cy = best.e - expectedHeight / 2;
    return { x: cx / cw, y: best.e / ch, cy: cy / ch };
}

// Unità senza ombra ma con un alone luminoso sul terreno (es. Lux Halcyon Atro): la parte più bassa
// è tutta semitrasparente e il punto più basso è il bordo dell'alone, non i piedi.
// Il centro dell'alone si stima come per le ombre (ellisse 3,3 volte più larga che alta).
// Restituisce null se in basso ci sono i piedi o il corpo (pixel pieni).
function groundGlowCenter(pixels, cw, ch, top, lowest, bottom) {
    // "lowest" = ultima riga con qualcosa (per vedere se in fondo c'è solo luce trasparente),
    // "bottom" = bordo basso senza le punte isolate (per stimare il centro dell'alone)
    const thin = Math.max(2, Math.round((lowest - top) * 0.06));
    let vis = 0, soft = 0;
    for (let y = Math.max(0, lowest - thin); y < lowest; y++) {
        for (let x = 0; x < cw; x++) {
            const a = pixels[(y * cw + x) * 4 + 3];
            if (a >= CENTER_MIN_ALPHA) { vis++; if (a < 235) soft++; }
        }
    }
    if (!vis || soft / vis < 0.8) return null;
    const h = bottom - top;
    const band = Math.max(2, Math.round(h * GROUND_BAND));
    let maxW = 0;
    for (let y = Math.max(0, bottom - band); y < bottom; y++) {
        let l = -1, r = -1;
        for (let x = 0; x < cw; x++) {
            if (pixels[(y * cw + x) * 4 + 3] >= CENTER_MIN_ALPHA) { if (l < 0) l = x; r = x; }
        }
        if (l >= 0) maxW = Math.max(maxW, r - l + 1);
    }
    if (!maxW) return null;
    return Math.max(top, bottom - maxW / SHADOW_RATIO / 2) / ch;
}

// Ombra "piena": su alcune unità l'ombra è disegnata sopra un alone di luce e nel file è diventata
// una macchia scura NON trasparente sotto i piedi. Si cerca, nella parte bassa, la fascia di righe
// con una lunga striscia orizzontale di pixel scuri (più lunga di stivali e contorni).
function findDarkShadow(pixels, cw, ch, top, bottom, charWidth) {
    const isDark = i => pixels[i + 3] >= 200 && Math.max(pixels[i], pixels[i + 1], pixels[i + 2]) <= 100;
    const minRun = Math.max(8, 0.1 * charWidth);
    const start = Math.max(0, bottom - Math.floor((bottom - top) * 0.35));
    const rows = [];
    for (let y = start; y < bottom; y++) {
        // la striscia scura più lunga della riga (si saltano buchi di 1-2 pixel)
        let best = { n: 0, s: -1, e: -1 }, s = -1, last = -10;
        for (let x = 0; x < cw; x++) {
            if (!isDark((y * cw + x) * 4)) continue;
            if (s < 0 || x - last > 3) {
                if (s >= 0 && last - s + 1 > best.n) best = { n: last - s + 1, s, e: last };
                s = x;
            }
            last = x;
        }
        if (s >= 0 && last - s + 1 > best.n) best = { n: last - s + 1, s, e: last };
        rows.push({ y, ...best });
    }
    // la fascia di righe consecutive con le strisce lunghe
    let pick = null, cur = [];
    const close = () => {
        if (cur.length >= 3) {
            const tot = cur.reduce((t, r) => t + r.n, 0);
            if (!pick || tot > pick.tot) pick = { tot, rows: cur };
        }
        cur = [];
    };
    rows.forEach(r => { if (r.n >= minRun) cur.push(r); else close(); });
    close();
    if (!pick) return null;
    const mids = pick.rows.map(r => (r.s + r.e + 1) / 2).sort((a, b) => a - b);
    const k = mids.length >> 1;
    const cx = mids.length % 2 ? mids[k] : (mids[k - 1] + mids[k]) / 2;
    const first = pick.rows[0].y, last = pick.rows[pick.rows.length - 1].y + 1;
    // y = bordo basso della macchia, cy = suo centro (come per le ombre normali)
    return { x: cx / cw, y: last / ch, cy: (first + last) / 2 / ch };
}

// prima e ultima riga (o colonna) occupate dal personaggio, ignorando i puntini isolati ai bordi
function trimmedRange(counts, total, trim = CENTER_TRIM) {
    const skip = total * trim;
    let seen = 0, first = 0, last = counts.length - 1;
    for (let i = 0; i < counts.length; i++) {
        seen += counts[i];
        if (seen > skip) { first = i; break; }
    }
    seen = 0;
    for (let i = counts.length - 1; i >= 0; i--) {
        seen += counts[i];
        if (seen > skip) { last = i; break; }
    }
    return { first, last };
}

function trimmedCenter(counts, total) {
    const { first, last } = trimmedRange(counts, total);
    return (first + last + 1) / 2 / counts.length;
}

/* ==========================================================================
   STESSA GRANDEZZA SU TUTTI I FORMATI (tablet e telefono)
   Le .gif di tutte le unità sono disegnate alla stessa scala: sono il riferimento.
   I .webm invece hanno tele diverse:
     - tela 2127x1866: stessa scala delle .gif
     - tela 2614x1535: personaggio circa 1,9 volte più grande
   Le .webp vanno esportate alla stessa scala della .gif (senza ingrandirle).
   Qui ogni file riceve --px-scale = --pixel-scale del CSS x la sua scala,
   così un personaggio è grande uguale su iPhone (.webp), PC/Android (.webm) e con la .gif.
   ========================================================================== */
const PIXEL_FIT_MAX = 0.9;   // il personaggio non supera mai il 90% del riquadro
const WEBM_PER_GIF = [
    { width: 2127, scale: 1 },
    { width: 2614, scale: GIF_IN_WEBM.width * 2614 / 1197 }   // circa 1,93
];

// quanto va ridotto o ingrandito questo file per avere la scala delle .gif (0 = regola di prima)
function pixelFileScale(el, width) {
    if (el.tagName === 'VIDEO') {
        // i vecchi .webm con tela 2614x1535 sono ingranditi: si riducono; tutti gli altri sono 1:1
        const family = WEBM_PER_GIF.find(f => Math.abs(width - f.width) <= 4);
        return family ? 1 / family.scale : 1;
    }
    const src = (el.getAttribute('src') || '').split('?')[0].toLowerCase();
    return /\.(gif|webp)$/.test(src) ? 1 : 0;
}

function applyPixelScale(el) {
    if (!el) return;
    const fileScale = parseFloat(el.dataset.fileScale);
    const baseScale = readCssNumber(el, '--pixel-scale', 0);   // c'è solo su tablet e telefono
    if (!fileScale || !baseScale) {
        el.removeAttribute('data-pixel-fit');
        el.style.removeProperty('--px-scale');
        return;
    }
    let scale = baseScale * fileScale;
    const box = el.parentElement;
    const charW = parseFloat(el.dataset.charW);
    const charH = parseFloat(el.dataset.charH);
    const charUp = parseFloat(el.dataset.charUp);       // altezza sopra il punto a terra
    const charSide = parseFloat(el.dataset.charSide);   // larghezza dal punto a terra al lato più lontano
    const ground = readCssNumber(el, '--ground-y', 67) / 100;
    if (box && box.clientWidth && box.clientHeight && charUp && charSide) {
        scale = Math.min(scale,
            PIXEL_FIT_MAX * box.clientHeight * ground / charUp,
            PIXEL_FIT_MAX * box.clientWidth / 2 / charSide);
    } else if (box && box.clientWidth && box.clientHeight && charW && charH) {
        scale = Math.min(scale,
            PIXEL_FIT_MAX * box.clientWidth / charW,
            PIXEL_FIT_MAX * box.clientHeight / charH);
    }
    el.style.setProperty('--px-scale', scale.toFixed(4));
    el.setAttribute('data-pixel-fit', '');
}

// Misura il personaggio sul primo fotogramma del file: punto a terra (ombra o piedi) e grandezza.
// Restituisce null se il file non è ancora pronto. Si usa per l'animazione grande e per le basi delle evoluzioni.
function measureCharacter(el) {
    const w = el.naturalWidth || el.videoWidth;
    const h = el.naturalHeight || el.videoHeight;
    if (!w || !h) return null;
    const m = { w, h };

    try {
        const canvas = document.createElement('canvas');
        canvas.width = Math.min(w, el.tagName === 'IMG' ? CENTER_SAMPLE_WIDTH_IMG : CENTER_SAMPLE_WIDTH);
        canvas.height = Math.max(1, Math.round(canvas.width * h / w));
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        const cols = new Array(canvas.width).fill(0);
        const rows = new Array(canvas.height).fill(0);
        let total = 0;
        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                if (pixels[(y * canvas.width + x) * 4 + 3] >= CENTER_MIN_ALPHA) {
                    cols[x]++; rows[y]++; total++;
                }
            }
        }
        // tela vuota o senza trasparenza: resta centrata la tela intera
        if (total && total < canvas.width * canvas.height) {
            const cr = trimmedRange(cols, total);
            const rr = trimmedRange(rows, total);
            // PUNTO A TERRA: il bordo più basso del personaggio (piedi o ombra) e,
            // in orizzontale, il centro della sua parte più bassa. È questo punto che
            // il CSS mette sul "pavimento" del riquadro (--ground-y).
            const bottom = trimmedRange(rows, total, GROUND_TRIM).last + 1;
            const band = Math.max(2, Math.round((bottom - rr.first) * GROUND_BAND));
            let sumX = 0, count = 0;
            for (let y = Math.max(0, bottom - band); y < bottom; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    if (pixels[(y * canvas.width + x) * 4 + 3] >= CENTER_MIN_ALPHA) { sumX += x + 0.5; count++; }
                }
            }
            let groundX = count ? sumX / count / canvas.width : trimmedCenter(cols, total);
            let groundY = bottom / canvas.height;
            const shadow = findShadowGround(pixels, canvas.width, canvas.height, rr.first, bottom, cr.last - cr.first + 1)
                || findShadowGround(pixels, canvas.width, canvas.height, rr.first, bottom, cr.last - cr.first + 1, true);
            if (shadow) { groundX = shadow.x; groundY = shadow.y; }
            // senza ombra trasparente ma con un alone sul terreno: forse l'ombra è "fusa" con l'alone
            // (macchia scura piena sotto i piedi, come Ice Legend Selena)
            // (qui si usa il bordo basso vero, senza togliere le punte sottili dell'alone)
            const lowest = trimmedRange(rows, total, 0).last + 1;
            const glowY = shadow ? null : groundGlowCenter(pixels, canvas.width, canvas.height, rr.first, lowest, bottom);
            const blob = glowY === null ? null : findDarkShadow(pixels, canvas.width, canvas.height, rr.first, lowest, cr.last - cr.first + 1);
            if (blob) { groundX = blob.x; groundY = blob.y; }
            // per le basi delle evoluzioni: il centro dell'ombra (o i piedi, se l'ombra non c'è)
            m.standX = groundX;
            m.standY = shadow ? shadow.cy : (blob ? blob.cy : (glowY !== null ? glowY : groundY));
            m.left = cr.first / canvas.width;
            m.right = (cr.last + 1) / canvas.width;
            m.top = rr.first / canvas.height;
            // bordi completi (anche punte sottili, scintille): per non far uscire niente dai riquadri
            const fullC = trimmedRange(cols, total, 0);
            const fullR = trimmedRange(rows, total, 0);
            m.fullLeft = fullC.first / canvas.width;
            m.fullRight = (fullC.last + 1) / canvas.width;
            m.fullTop = fullR.first / canvas.height;
            m.fullBottom = (fullR.last + 1) / canvas.height;
            m.charX = ((0.5 - groundX) * 100).toFixed(2);
            m.charY = ((0.5 - groundY) * 100).toFixed(2);
            // grandezza del personaggio nel file, per non farlo uscire dal riquadro
            m.charW = ((cr.last - cr.first + 1) / canvas.width * w).toFixed(1);
            m.charH = ((rr.last - rr.first + 1) / canvas.height * h).toFixed(1);
            m.charUp = Math.max(1, (groundY - rr.first / canvas.height) * h).toFixed(1);
            m.charSide = Math.max(1, Math.max(groundX - cr.first / canvas.width, (cr.last + 1) / canvas.width - groundX) * w).toFixed(1);
        }
    } catch (err) {
        console.warn('Centratura automatica non riuscita:', err);
    }
    return m;
}

function centerOnCharacter(el) {
    if (!el) return;
    el.style.removeProperty('--char-x');
    el.style.removeProperty('--char-y');
    el.style.removeProperty('--canvas-ratio');
    delete el.dataset.charW;
    delete el.dataset.charH;
    delete el.dataset.charUp;
    delete el.dataset.charSide;
    delete el.dataset.fileScale;

    const m = measureCharacter(el);
    if (!m) { applyPixelScale(el); return; }
    const { w, h } = m;
    el.style.setProperty('--canvas-ratio', `${w} / ${h}`);
    el.dataset.fileScale = String(pixelFileScale(el, w));
    if (m.charX !== undefined) {
        el.style.setProperty('--char-x', m.charX);
        el.style.setProperty('--char-y', m.charY);
        el.dataset.charW = m.charW;
        el.dataset.charH = m.charH;
        el.dataset.charUp = m.charUp;
        el.dataset.charSide = m.charSide;
    }

    useStandingAnchor(el, w, h);
    applyPixelScale(el);
}

/* ==========================================================================
   STESSA POSIZIONE IN DEFAULT, IDLE E ATK
   Come nel gioco, il personaggio deve stare nello stesso punto in tutte e tre
   le animazioni (l'attacco parte da lì e si muove da lì).
   La posizione del personaggio fermo si misura sul "default" (o sull'"idle" se il
   default manca) e si usa uguale per le altre animazioni della stessa unità.
   Funziona quando i tre file di un'unità hanno la stessa tela (stesse dimensioni):
   i .webm del gioco e le .webp ritagliate tutte insieme. Se le dimensioni sono
   diverse, ogni animazione si centra sul suo primo fotogramma.
   ========================================================================== */
let standingAnchor = null;

function useStandingAnchor(el, w, h) {
    const motion = (el.id || '').split('_').pop();            // default, idle o atk
    const unitKey = currentUnitOpen ? JSON.stringify(currentUnitOpen.animations || {}) : '';
    const sameUnit = standingAnchor && standingAnchor.unitKey === unitKey;
    const isAnchor = motion === 'default' || (motion === 'idle' && !(sameUnit && standingAnchor.motion === 'default'));

    if (isAnchor) {
        standingAnchor = {
            unitKey, motion, tag: el.tagName, w, h,
            charX: el.style.getPropertyValue('--char-x'),
            charY: el.style.getPropertyValue('--char-y'),
            charW: el.dataset.charW,
            charUp: el.dataset.charUp,
            charSide: el.dataset.charSide,
            charH: el.dataset.charH
        };
        return;
    }
    if (!sameUnit || standingAnchor.tag !== el.tagName || standingAnchor.w !== w || standingAnchor.h !== h) return;
    if (standingAnchor.charX) el.style.setProperty('--char-x', standingAnchor.charX);
    if (standingAnchor.charY) el.style.setProperty('--char-y', standingAnchor.charY);
    if (standingAnchor.charW) el.dataset.charW = standingAnchor.charW;
    if (standingAnchor.charH) el.dataset.charH = standingAnchor.charH;
    if (standingAnchor.charUp) el.dataset.charUp = standingAnchor.charUp;
    if (standingAnchor.charSide) el.dataset.charSide = standingAnchor.charSide;
}

['video_default', 'video_idle', 'video_atk'].forEach(id => {
    const video = document.getElementById(id);
    if (video) video.addEventListener('loadeddata', () => centerOnCharacter(video));
});

const MOTION_IMG_IDS = ['img_default', 'img_idle', 'img_atk'];
const MOTION_MEDIA_IDS = MOTION_IMG_IDS.concat(['video_default', 'video_idle', 'video_atk']);
function fitVisibleGifs() {
    MOTION_IMG_IDS.forEach(id => fitGifLikeWebm(document.getElementById(id)));
    MOTION_MEDIA_IDS.forEach(id => applyPixelScale(document.getElementById(id)));
}
// quando un'animazione compare (o il riquadro cambia misura) la grandezza viene ricalcolata
const pixelResizeObserver = ('ResizeObserver' in window) ? new ResizeObserver(entries => entries.forEach(en => applyPixelScale(en.target))) : null;
if (pixelResizeObserver) {
    MOTION_MEDIA_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) pixelResizeObserver.observe(el);
    });
}
window.addEventListener('resize', fitVisibleGifs);
const gifResizeObserver = ('ResizeObserver' in window) ? new ResizeObserver(entries => entries.forEach(en => fitGifLikeWebm(en.target))) : null;
MOTION_IMG_IDS.forEach(id => {
    const img = document.getElementById(id);
    if (!img) return;
    img.addEventListener('load', () => {
        fitGifLikeWebm(img);
        centerOnCharacter(img);
    });
    if (gifResizeObserver) gifResizeObserver.observe(img);
});

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

            const originalSrc = currentUnitOpen.animations?.[t] || "";
            const candidates = getAnimationCandidates(originalSrc);
            let attempt = 0;

            // mostra il file numero "attempt" dell'elenco: video (webm/mp4) in <video>, immagini (webp/gif/png) in <img>
            const showCandidate = () => {
                const src = candidates[attempt];
                if (!src) {
                    // file mancante: riquadro vuoto invece dell'icona dell'immagine rotta
                    if (imgTag) { imgTag.style.display = 'none'; imgTag.removeAttribute('src'); }
                    if (videoTag) { videoTag.pause(); videoTag.removeAttribute('src'); videoTag.style.display = 'none'; }
                    return;
                }
                if (isVideoFile(src) && videoTag) {
                    if (imgTag) { imgTag.style.display = 'none'; imgTag.removeAttribute('src'); }
                    // i .webm hanno una dimensione regolabile dal CSS (--webm-scale)
                    videoTag.classList.toggle('is-webm', WEBM_RE.test(src));
                    videoTag.style.display = 'block';
                    videoTag.muted = true;
                    videoTag.playsInline = true;
                    videoTag.loop = true;
                    if (videoTag.getAttribute('src') !== src) {
                        videoTag.src = src;
                        videoTag.load();
                    }
                    videoTag.play().catch(() => { });
                } else if (imgTag) {
                    if (videoTag) { videoTag.pause(); videoTag.removeAttribute('src'); videoTag.style.display = 'none'; }
                    imgTag.style.display = 'block';
                    if (imgTag.getAttribute('src') !== src) imgTag.src = src;
                    fitGifLikeWebm(imgTag);
                }
            };

            // se un file manca o non si può riprodurre si passa al successivo dell'elenco
            const tryNext = (e) => {
                if (currentUnitOpen?.animations?.[t] !== originalSrc) return;
                // conta solo l'errore del file che si sta mostrando adesso
                if (!e || !e.target || e.target.getAttribute('src') !== candidates[attempt]) return;
                attempt++;
                showCandidate();
            };
            if (videoTag) videoTag.onerror = tryNext;
            if (imgTag) imgTag.onerror = tryNext;

            showCandidate();
        } else {
            if (container) container.style.display = 'none';
            if (btn) btn.style.display = 'none';
            if (videoTag) {
                videoTag.onerror = null;
                videoTag.pause();
                videoTag.removeAttribute('src');
            }
            if (imgTag) {
                imgTag.onerror = null;
                imgTag.removeAttribute('src');
            }
        }
    });
}

/* ==========================================================================
   VIDEO EFFETTI (btm6): Attack / BB
   Nel JSON: "effects": { "atk": "percorso/Atk.webm", "bb": "percorso/BBAtk.webm" }
   Come per le animazioni: PC e Android usano il .webm, iPhone/iPad/Safari la .webp
   con lo stesso nome nella stessa cartella (vanno messi tutti e due).
   ========================================================================== */
const EFFECT_TYPES = ['atk', 'bb', 'sbb', 'ubb'];
let effectMode = false;
let currentEffect = 'atk';

// Percorsi delle immagini dei bottoni effetti
const EFFECT_BUTTON_IMAGES = {
    toggle: '../img/Button For Change/btm6.png',   // bottone "effects"
    atk: '../img/Button For Change/Atk.png',      // bottone verde "Attack"
    bb: '../img/Button For Change/BBAtk.png',     // bottone blu "BB"
    sbb: '../img/Button For Change/SBBAtk.png',   // bottone "SBB" (dal 6★)
    ubb: '../img/Button For Change/UBBAtk.png'    // bottone "UBB" (dal 7★ a Omni)
};

// Quali effetti può avere un'unità in base alla rarità
//  1★–5★: Atk, BB  |  6★: Atk, BB, SBB  |  7★ / Omni / Dream: Atk, BB, SBB, UBB
function getEffectTypesForRarity(rarity) {
    const r = String(rarity || '').trim().toLowerCase();
    if (r === '7' || r === 'omni' || r === 'dream') return ['atk', 'bb', 'sbb', 'ubb'];
    if (r === '6') return ['atk', 'bb', 'sbb'];
    return ['atk', 'bb'];
}

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
            <button type="button" class="btn_effect_type" data-effect="bb" aria-label="BB"><img src="${EFFECT_BUTTON_IMAGES.bb}" alt="BB"></button>
            <button type="button" class="btn_effect_type" data-effect="sbb" aria-label="SBB"><img src="${EFFECT_BUTTON_IMAGES.sbb}" alt="SBB"></button>
            <button type="button" class="btn_effect_type" data-effect="ubb" aria-label="UBB"><img src="${EFFECT_BUTTON_IMAGES.ubb}" alt="UBB"></button>`;
        const motion = group.querySelector('.btn_motion');
        if (motion && motion.nextSibling) group.insertBefore(choice, motion.nextSibling);
        else group.appendChild(choice);
    }
}

// Effetti disponibili: quelli previsti dalla rarità E con un video già inserito nel JSON
// (un campo vuoto "" = video non ancora pronto, il bottone non compare)
function getUnitEffects(u) {
    const fx = (u && u.effects) || {};
    const allowed = getEffectTypesForRarity(u && u.rarity);
    return EFFECT_TYPES.filter(type => allowed.includes(type) && String(fx[type] || '').trim());
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
    const jsonSrc = currentUnitOpen.effects && currentUnitOpen.effects[type];
    if (!jsonSrc) return;
    // stessa regola delle animazioni: nel JSON il .webm, su iPhone/iPad/Safari la .webp con lo stesso nome
    const src = pickAnimationSrc(jsonSrc);
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

    // Frase lunga: si scorre dentro la cornice. Un tocco/click sulla frase passa alla frase successiva,
    // e lo scorrimento della frase non fa cambiare immagine (swipe) per sbaglio
    const quoteText = document.getElementById('fullArtQuoteText');
    if (quoteText) {
        quoteText.addEventListener('click', cycleFullArtQuote);
        quoteText.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
        quoteText.addEventListener('touchend', (e) => e.stopPropagation(), { passive: true });
    }
});

window.addEventListener('resize', () => {
    if (allUnits.length > 0) applyFilters(false);
});

startApp();

/* ==========================================================================
   PROTEZIONE DI IMMAGINI E ANIMAZIONI
   Blocca il menu del tasto destro ("Salva immagine/video con nome...") e il
   trascinamento su immagini, video, riquadro dell'animazione, Full Art e card.
   ========================================================================== */
(function protectMedia() {
    const PROTECTED = 'img, video, .unit_box_top, .fullart-media-box, .unit-card';
    const isProtected = target => !!(target && target.closest && target.closest(PROTECTED));
    document.addEventListener('contextmenu', e => { if (isProtected(e.target)) e.preventDefault(); });
    document.addEventListener('dragstart', e => { if (isProtected(e.target)) e.preventDefault(); });
    document.querySelectorAll('video').forEach(v => {
        v.disablePictureInPicture = true;
        v.setAttribute('controlslist', 'nodownload');
    });
})();