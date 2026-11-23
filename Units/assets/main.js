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
    '../img/Arena Battle/dungeon_battle_8301200.png',
    '../img/Arena Battle/dungeon_battle_8310060.jpg',
    '../img/Arena Battle/dungeon_battle_8320060.jpg',
    '../img/Arena Battle/dungeon_battle_8330060.jpg',
    '../img/Arena Battle/dungeon_battle_8340060.jpg',
    '../img/Arena Battle/dungeon_battle_8350060.jpg',
    '../img/Arena Battle/dungeon_battle_8360060.jpg',
    '../img/Arena Battle/dungeon_battle_8510001.jpg',
    '../img/Arena Battle/dungeon_battle_8510002.jpg',
    // sfondi che erano nella cartella ma non nella lista (hanno anche le animazioni)
    '../img/Arena Battle/dungeon_battle_103041.jpg',
    '../img/Arena Battle/dungeon_battle_10600.jpg',
    '../img/Arena Battle/dungeon_battle_10700.jpg',
    '../img/Arena Battle/dungeon_battle_10800.jpg',
    '../img/Arena Battle/dungeon_battle_20100.jpg',
    '../img/Arena Battle/dungeon_battle_30200.jpg',
    '../img/Arena Battle/dungeon_battle_50700.jpg',
    '../img/Arena Battle/dungeon_battle_70700.jpg',
    '../img/Arena Battle/dungeon_battle_80085.jpg',
    '../img/Arena Battle/dungeon_battle_80086.jpg',
    '../img/Arena Battle/dungeon_battle_80137.jpg',
    '../img/Arena Battle/dungeon_battle_80164.jpg',
    '../img/Arena Battle/dungeon_battle_80165.jpg',
    '../img/Arena Battle/dungeon_battle_80901.jpg',
    '../img/Arena Battle/dungeon_battle_80902.jpg'
];

/* Colori delle particelle della Full Art per ogni rarità (palline di luce sfocate).
   Per cambiarli basta cambiare i colori qui. */
const FULLART_PARTICLE_COLORS = {
    white: ['#ffffff', '#e6efff', '#c9dcff', '#f4f8ff'],                     // 1★ e 2★
    gold: ['#ffd700', '#ffe680', '#ffbf2e', '#fff3c4'],                      // 3★
    red: ['#ff3b3b', '#ff6a5a', '#ff9a8a', '#ffd0c8'],                       // 4★
    rainbow: ['#ff4d4d', '#ffd700', '#7dff6b', '#4da6ff', '#ff7de9', '#bf7fff', '#ffffff', '#5fffe0'], // 5★-7★
    omni: ['#ff4d4d', '#ffd700', '#7dff6b', '#4da6ff', '#ff7de9', '#bf7fff', '#ffffff', '#9fd0ff']     // Omni e Dream
};

function getEvocationCircle(rarity) {
    const r = String(rarity || '').trim();
    if (r === '1' || r === '2') {
        return '../img/Evocation%20Circle/Circle_aquirem.png';
    } else if (r === '3') {
        return '../img/Evocation%20Circle/Rare_circle.png';
    } else if (r === '4') {
        return '../img/Evocation%20Circle/Super_rare_circle.png';
    } else if (r.toLowerCase() === 'omni' || r.toLowerCase() === 'dream') {
        return '../img/Evocation%20Circle/Omni_circle.png';
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
const EVO_ARROW_SRC = '../video/Evolution arrow/Arrow-evolution-right.webp';   // freccia del gioco (ArrowLeft) specchiata
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
// telefono: spazio minimo (in px) tra le due unità affiancate, così non si toccano mai
const EVO_PHONE_GAP = 10;

// tipo di base per la rarità: silver, gold, red, rainbow o omni (serve anche al CSS per il colore dell'alone)
/* ==========================================================================
   GRANDEZZA DELLE UNITÀ NELLE FASI EVOLUTIVE (solo sulle basi:
   l'animazione grande in alto resta sempre della sua misura)

   PC E TABLET (AUTOMATICO): le forme da 6★ in su (6★, 7★, Omni, Dream) sono piene
   di effetti e il personaggio in mezzo sembra piccolo. Per questo si ingrandiscono
   da sole di EVO_HIGH_RARITY_SCALE. Le forme da 1★ a 5★ restano della loro misura (1).
   Così una forma evoluta non è mai più piccola della prima fase dell'unità.
   Per cambiare quanto si ingrandiscono tutte: cambia solo questo numero.

   TELEFONO: le due unità sono affiancate e non c'è posto per ingrandirle, quindi
   TUTTE hanno la stessa grandezza: EVO_PHONE_SCALE (1 = misura normale, come
   Ice Legend Selena). Solo le unità troppo larghe per metà schermo si
   rimpiccioliscono, quel tanto che serve per non uscire dal riquadro.
   ========================================================================== */
const EVO_HIGH_RARITY_SCALE = 1.20;
const EVO_PHONE_SCALE = 1;

/* ECCEZIONI (solo PC e tablet): serve SOLO per le unità che vuoi di una misura diversa
   da quella automatica. Numero dell'unità (realId) e grandezza: questa vince sempre.
   Per aggiungerne una, scrivi una riga dentro le graffe, come questa:
       '20016': 1.25,  // Ice Legend Selena un quarto più grande
   Vuota = tutte le unità usano la grandezza automatica. */
const UNIT_SPRITE_SCALE = {
};

function isHighRarity(rarity) {
    const r = String(rarity || '').trim().toLowerCase();
    return r === 'omni' || r === 'dream' || parseFloat(r) >= 6;
}

function unitSpriteScale(unit) {
    if (!unit) return 1;
    const scale = parseFloat(UNIT_SPRITE_SCALE[String(unit.realId || unit.id)]);
    if (scale > 0) return scale;
    return isHighRarity(unit.rarity) ? EVO_HIGH_RARITY_SCALE : 1;
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
    if (!evoCanReadPixels(img)) return 1;      // file di un altro sito: i pixel non si possono leggere
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
    // quanto arriva a sinistra e a destra del puntino (per il telefono)
    stage.dataset.left = String(Math.max(0, sx - box.left) * w / k);
    stage.dataset.right = String(Math.max(0, box.right - sx) * w / k);
}

// Mette l'animazione con i piedi al centro del vetro, a pixel netti (1 pixel del disegno = 1px).
/* Animazioni prese da un altro sito (quasi tutte da library.bravefrontier.jp, quelle che
   non sono ancora nel tuo GitHub): il browser non lascia "leggere" i loro pixel, quindi
   non si trovano ombra, piedi e grandezza dei pixel. Quel sito non dà il permesso (CORS),
   quindi non si chiede nemmeno (chiederlo riempiva la console di errori rossi):
   l'unità si mette con i piedi dove stanno di solito (EVO_GUESS_X / EVO_GUESS_Y,
   misurati su 423 animazioni) e non può far diventare la riga più alta del normale.
   Quando l'animazione sarà nel tuo GitHub, si misurerà da sola come tutte le altre. */
const EVO_GUESS_X = 0.6;
const EVO_GUESS_Y = 0.88;

function evoCanReadPixels(el) {
    try {
        const c = document.createElement('canvas');
        c.width = c.height = 1;
        const ctx = c.getContext('2d');
        ctx.drawImage(el, 0, 0, 1, 1);
        ctx.getImageData(0, 0, 1, 1);
        return true;
    } catch (err) {
        return false;
    }
}

function placeEvoGuess(img, stage) {
    const w = img.naturalWidth, h = img.naturalHeight;
    if (!w || !h) return;
    const sx = EVO_GUESS_X, sy = EVO_GUESS_Y;
    img.style.setProperty('--char-x', ((0.5 - sx) * 100).toFixed(2));
    img.style.setProperty('--char-y', ((0.5 - sy) * 100).toFixed(2));
    const px = 1 / (parseFloat(img.dataset.unitScale) || 1);
    Object.assign(img.dataset, { artPx: px, fileW: w, fileH: h, standX: sx, standY: sy, fullW: w / px, guess: '1' });
    setEvoNeeds(stage, img, { left: 0, right: 1, top: 0 });
    img.classList.add('is-placed');
    fitEvoPanel(stage.closest('.evolution-recipe-panel'));
}

function placeEvoUnit(img, source = img) {
    const stage = img.closest('.evo-stage');
    if (!stage) return;
    if (source === img && img.naturalWidth && !evoCanReadPixels(img)) {
        placeEvoGuess(img, stage);
        return;
    }
    const m = measureCharacter(source);
    if (!m) return;
    delete img.dataset.guess;
    const k = detectArtPixelSize(source);
    // il centro dell'ombra va sul puntino; se il file non si è potuto leggere, resta centrato
    const sx = m.standX !== undefined ? m.standX : 0.5;
    const sy = m.standY !== undefined ? m.standY : 0.5;
    img.style.setProperty('--char-x', ((0.5 - sx) * 100).toFixed(2));
    img.style.setProperty('--char-y', ((0.5 - sy) * 100).toFixed(2));
    // unità da ingrandire (automatiche o elenco UNIT_SPRITE_SCALE): un pixel del file diventa più grande
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

function isEvoPhone() {
    return window.matchMedia('(max-width: 600px)').matches;
}

// PC e tablet: spazio in larghezza per ognuna delle due unità della ricetta.
// In riga ci sono anche il +, i materiali e il segno =: alle unità va metà di quello che resta.
function evoStageRoom(panel) {
    const cs = getComputedStyle(panel);
    const inner = panel.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    if (inner < 120) return Infinity;   // riquadro non ancora visibile: si rifà dopo
    const gap = parseFloat(cs.columnGap) || 0;
    let others = 0, shown = 0;
    Array.from(panel.children).forEach(child => {
        const s = getComputedStyle(child);
        if (s.display === 'none') return;
        shown++;
        if (child.classList.contains('evo-recipe-unit-wrap')) return;
        // il riquadro dei materiali si stringe fino alla sua larghezza minima
        others += child.classList.contains('evo-recipe-requirements')
            ? (parseFloat(s.minWidth) || child.getBoundingClientRect().width)
            : child.getBoundingClientRect().width;
    });
    return Math.max(EVO_STAGE_MIN_W, Math.floor((inner - others - gap * Math.max(0, shown - 1)) / 2));
}

function evoPanelItems(panel) {
    const items = [];
    panel.querySelectorAll('.evo-stage').forEach(stage => {
        const img = stage.querySelector('.evo-stage-unit.is-placed');
        const unitScale = img ? (parseFloat(img.dataset.unitScale) || 1) : 1;
        const up = parseFloat(stage.dataset.up) || 0;
        // unità che non si è potuta misurare: non deve far diventare la riga più alta del normale
        const guess = !!img && img.dataset.guess === '1';
        const upRoom = EVO_STAGE_MIN_H - EVO_STAGE_FOOT - EVO_STAGE_PAD;
        items.push({
            stage,
            img,
            up,
            left: parseFloat(stage.dataset.left) || 0,
            right: parseFloat(stage.dataset.right) || 0,
            needW: 2 * (parseFloat(stage.dataset.side) || 0) + EVO_STAGE_PAD,
            unitScale,
            minScale: guess ? 0 : 0.5 / unitScale,   // mai più piccola di metà della sua misura
            maxScale: guess && up > upRoom ? upRoom / up : Infinity
        });
    });
    return items;
}

// PC e tablet: le due unità di una ricetta hanno riquadri uguali, grandi quanto serve alla più grande.
// Se un'unità non ci sta, si rimpicciolisce solo quel tanto che serve.
function fitEvoPanel(panel) {
    if (!panel) return;
    if (isEvoPhone()) { fitEvoPanelPhone(panel); return; }
    const items = evoPanelItems(panel);
    const room = evoStageRoom(panel);
    let w = EVO_STAGE_MIN_W, h = EVO_STAGE_MIN_H;
    items.forEach(it => {
        // niente misure "da telefono": riquadri uguali e unità al centro
        it.stage.style.removeProperty('--stage-w');
        it.stage.style.removeProperty('--dot-x');
        if (!it.img) return;
        const scale = Math.min(it.needW > room ? Math.max(room / it.needW, it.minScale) : 1, it.maxScale);
        it.img.style.width = (parseFloat(it.img.dataset.fullW) * scale) + 'px';
        w = Math.max(w, Math.ceil(it.needW * scale));
        h = Math.max(h, Math.ceil(EVO_STAGE_FOOT + it.up * scale + EVO_STAGE_PAD));
    });
    if (room !== Infinity) w = Math.min(w, Math.floor(room));
    panel.style.setProperty('--stage-w', w + 'px');
    panel.style.setProperty('--stage-h', h + 'px');
}

/* Telefono: le due unità sono affiancate, tutte alla stessa grandezza (EVO_PHONE_SCALE),
   con la freccia SEMPRE al centro: ogni unità ha la sua metà del riquadro.
   - La base di ogni unità sta al centro della sua metà; si sposta solo se serve
     (per esempio una falce lunga verso il bordo).
   - Verso l'esterno l'unità resta sempre dentro il riquadro grigio.
   - Verso il centro le punte (falci, ali, effetti) possono passare DIETRO la freccia,
     che sta sopra le unità, ma tra le due unità restano sempre almeno EVO_PHONE_GAP px.
   Solo se nemmeno così ci stanno, le unità si rimpiccioliscono un poco, il meno possibile. */
function fitEvoPanelPhone(panel) {
    const cs = getComputedStyle(panel);
    const inner = panel.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    const arrow = panel.querySelector('.evo-recipe-equals');
    // larghezza della colonna della freccia (freccia + spazi ai lati)
    const middle = (arrow ? arrow.getBoundingClientRect().width : 0) + 2 * (parseFloat(cs.columnGap) || 0);
    const items = evoPanelItems(panel);
    const prev = items.find(it => it.stage.closest('.evo-recipe-prev'));
    const next = items.find(it => it.stage.closest('.evo-recipe-next'));
    if (!prev || !next) return;
    const pair = [prev, next];
    pair.forEach(it => { it.scale = it.img ? Math.min(EVO_PHONE_SCALE / it.unitScale, it.maxScale) : 1; });
    const halfW = (inner - middle) / 2;           // larghezza di ogni metà
    const baseHalf = EVO_STAGE_MIN_W / 2, pad = EVO_STAGE_PAD / 2, thumbHalf = 28;
    const leftOf = (it, s) => (it.img ? it.left * s : thumbHalf);
    const rightOf = (it, s) => (it.img ? it.right * s : thumbHalf);

    // Posizione dei due puntini (p a sinistra, q a destra, misurati dal bordo sinistro)
    // con le grandezze sp e sn. Restituisce null se così non ci stanno.
    const place = (sp, sn) => {
        const W = inner, leftEnd = halfW, rightStart = halfW + middle;
        // limiti: unità dentro il riquadro, base dentro la sua metà
        const pMin = Math.max(baseHalf, leftOf(prev, sp) + pad), pMax = leftEnd - baseHalf;
        const qMin = rightStart + baseHalf, qMax = Math.min(W - baseHalf, W - rightOf(next, sn) - pad);
        if (pMin > pMax || qMin > qMax) return null;
        // di solito al centro della propria metà
        let p = Math.min(pMax, Math.max(pMin, leftEnd / 2));
        let q = Math.min(qMax, Math.max(qMin, (rightStart + W) / 2));
        // spazio tra le due unità: se è poco, si allontanano verso i bordi (prima un po' tutte e due)
        let lack = EVO_PHONE_GAP - ((q - leftOf(next, sn)) - (p + rightOf(prev, sp)));
        if (lack > 0) {
            const mp = p - pMin, mq = qMax - q;
            let dp = Math.min(mp, lack / 2), dq = Math.min(mq, lack / 2);
            lack -= dp + dq;
            if (lack > 0) { const more = Math.min(mp - dp, lack); dp += more; lack -= more; }
            if (lack > 0) { const more = Math.min(mq - dq, lack); dq += more; lack -= more; }
            if (lack > 0.01) return null;
            p -= dp; q += dq;
        }
        return { p, q: q - rightStart };
    };

    // riquadro non ancora visibile: per ora misure normali, si rifà quando si vede
    if (inner < 120) {
        pair.forEach(it => {
            it.stage.style.removeProperty('--stage-w');
            it.stage.style.removeProperty('--dot-x');
            if (it.img) it.img.style.width = (parseFloat(it.img.dataset.fullW) * it.scale) + 'px';
        });
        return;
    }
    let spot = place(prev.scale, next.scale);
    if (!spot) {
        // non ci stanno: si rimpiccioliscono tutte e due della stessa percentuale, il meno possibile
        const base = pair.map(it => it.scale);
        const at = (it, j, t) => (it.img ? Math.max(it.minScale, base[j] * t) : 1);
        let lo = 0, hi = 1;
        for (let i = 0; i < 24; i++) {
            const t = (lo + hi) / 2;
            if (place(at(prev, 0, t), at(next, 1, t))) lo = t; else hi = t;
        }
        pair.forEach((it, j) => { it.scale = at(it, j, lo); });
        spot = place(prev.scale, next.scale) || { p: halfW / 2, q: halfW / 2 };
    }

    let h = EVO_STAGE_MIN_H_PHONE;
    pair.forEach(it => {
        it.stage.style.setProperty('--stage-w', halfW.toFixed(2) + 'px');
        it.stage.style.setProperty('--dot-x', (it === prev ? spot.p : spot.q).toFixed(1) + 'px');
        if (!it.img) return;
        it.img.style.width = (parseFloat(it.img.dataset.fullW) * it.scale) + 'px';
        h = Math.max(h, Math.ceil(EVO_STAGE_FOOT + it.up * it.scale + EVO_STAGE_PAD));
    });
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
            <div class="evolution-step-block">
                <h4 class="evo-step-title notranslate">${levelTitle}</h4>
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
                    <div class="evo-recipe-unit-wrap evo-recipe-next">
                        ${evoUnitStageHtml(nextImage, targetId, t('evo.result'), unit, nextRarity)}
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = htmlContent;
    if (!htmlContent) showArea(false);
}

async function startApp() {
    try {
        const res = await fetch('../data/units.json?t=' + new Date().getTime());
        const [rawData, battle] = await Promise.all([res.json(), loadBattleData()]);

        allUnits = rawData.map(u => {
            fixUnitData(u);
            addBattleData(u, battle);
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
/* Nomi delle immagini con la maiuscola sbagliata: su GitHub "Unit_ills_thum_10323.png"
   e "unit_ills_thum_10323.png" sono due file diversi. Se un'immagine non si trova,
   il sito riprova (una sola volta) con la prima lettera del nome cambiata
   (u -> U oppure U -> u). Così funzionano tutte, comunque sia scritto il nome. */
// tentativi alternativi per un'immagine che non si trova:
//  1) prima lettera del nome maiuscola/minuscola
//  2) cartella "img Europe" <-> cartella normale (alcune unità europee hanno i file nell'altra)
//  3) entrambe le cose insieme
function imageAlternatives(src) {
    const flipCase = s => {
        const m = s.match(/^(.*\/)([a-zA-Z])([^/]*)$/);
        if (!m) return null;
        const f = m[2] === m[2].toLowerCase() ? m[2].toUpperCase() : m[2].toLowerCase();
        return m[1] + f + m[3];
    };
    const swapFolder = s => {
        const rules = [
            [/img(?:%20| )Europe\/Squere(?:%20| )Img\//i, 'Squere Img/'],
            [/img(?:%20| )Europe\/Full(?:%20| )Art\//i, 'Full Art/'],
            [/\/Unit\/Squere(?:%20| )Img\//i, '/Unit/img Europe/Squere Img/'],
            [/\/Unit\/Full(?:%20| )Art\//i, '/Unit/img Europe/Full Art/']
        ];
        for (const [rx, to] of rules) if (rx.test(s)) return s.replace(rx, to);
        return null;
    };
    const out = [];
    const c = flipCase(src); if (c) out.push(c);
    const f = swapFolder(src);
    if (f) { out.push(f); const fc = flipCase(f); if (fc) out.push(fc); }
    return out;
}

window.addEventListener('error', (e) => {
    const el = e.target;
    if (!el || el.tagName !== 'IMG') return;
    const src = el.getAttribute('src') || '';
    if (!src) return;
    // primo errore per questo indirizzo: si preparano i tentativi
    if (!el.dataset.retryList || !JSON.parse(el.dataset.retryAll || '[]').includes(src)) {
        const alts = imageAlternatives(src);
        el.dataset.retryAll = JSON.stringify([src, ...alts]);
        el.dataset.retryList = JSON.stringify(alts);
    }
    const list = JSON.parse(el.dataset.retryList);
    const next = list.shift();
    el.dataset.retryList = JSON.stringify(list);
    if (!next) return;                       // finiti i tentativi: l'errore passa avanti
    e.stopPropagation();   // gli altri controlli "immagine mancante" aspettano l'ultimo tentativo
    el.src = next;
}, true);

const failedFullArts = new Set();   // full art inesistenti: non le riproviamo

// Spazio per la figura: dal bordo alto della card fino al nome
function fitFigureBox(card) {
    const title = card.querySelector('.card-title');
    if (!title) return;
    card.style.setProperty('--figure-box-h', `${Math.max(60, title.offsetTop - 10)}px`);
}

// La figura della card inquadra il disegno vero, senza i bordi trasparenti del file.
// Alcune Full Art (soprattutto quelle Europa) hanno tantissimo spazio vuoto intorno:
// con l'immagine intera il personaggio verrebbe piccolissimo. Così sono tutte grandi uguali.
function fitCardFigure(img) {
    const box = img.parentElement;
    if (!box || !img.naturalWidth) return;
    const bw = box.clientWidth, bh = box.clientHeight;
    if (!bw || !bh) return;
    const m = measureFullArt(img);
    if (!m) return;
    const bottom = m.fullBottom || m.bottom;
    const s = Math.min(bw / Math.max(1, m.right - m.left), bh / Math.max(1, bottom - m.top));
    const cx = (m.left + m.right) / 2;
    img.style.setProperty('--fig-left', (bw / 2 - cx * s).toFixed(1) + 'px');
    img.style.setProperty('--fig-top', (bh - bottom * s).toFixed(1) + 'px');
    img.style.setProperty('--fig-width', (img.naturalWidth * s).toFixed(1) + 'px');
    // il rimbalzo parte dal fondo del disegno, non dal fondo del file
    img.style.setProperty('--fig-origin', `${(cx * s).toFixed(1)}px ${(bottom * s).toFixed(1)}px`);
    img.classList.add('is-fitted');
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
        fitCardFigure(img);
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
            // i bordi delle Full Art sono nel file dei centri (si scarica una volta sola)
            const [arts] = await Promise.all([getValidFullArts(realId), loadFullArtCenters()]);
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
        startDungeonFx(arenaBackgrounds[randomIndex]);   // le animazioni di quello sfondo
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
    renderBattleData(u);
    renderImps(u);
    renderSpSkills(u);
    renderOmniPlus(u);
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
   DATI DI BATTAGLIA: combo, Cristalli di Battaglia (BC) e statistiche
   Stanno in data/unit-battle.json (presi dai dati del gioco), una riga per unità:
     "10011": { "stats": { "base": {"hp":1030,...}, "lord": {...}, ... },
                "atk": { "hits": 3, "dc": 2 },              attacco normale
                "bb":  { "cost": 15, "hits": 5, "dc": 1 },   (anche "sbb" e "ubb")
                "cost": 2, "imp": { "hp": 400, "atk": 160, "def": 80, "rec": 80 } }
   hits = combo (colpi), dc = Drop Check (BC che può far cadere ogni colpo),
   cost = BC che servono per lanciare la BB. BC massimi = combo x DC.
   Le statistiche scritte a mano in units.json vincono sempre: quelle del file
   servono solo per le unità che in units.json le hanno vuote.
   ========================================================================== */
const BATTLE_DATA_URL = '../data/unit-battle.json';
const STAT_TYPES = ['base', 'lord', 'anima', 'breaker', 'guardian', 'oracle'];

const BATTLE_TEXTS = {
    title: { it: 'Dati di battaglia', en: 'Battle data', es: 'Datos de combate', fr: 'Données de combat', 'zh-CN': '战斗数据', ja: 'バトルデータ' },
    normal: { it: 'Attacco normale', en: 'Normal attack', es: 'Ataque normal', fr: 'Attaque normale', 'zh-CN': '普通攻击', ja: '通常攻撃' },
    cost: { it: 'Costo CB', en: 'BC cost', es: 'Coste BC', fr: 'Coût BC', 'zh-CN': 'BC消耗', ja: '消費BC' },
    hits: { it: 'Combo', en: 'Hits', es: 'Combos', fr: 'Combos', 'zh-CN': '连击数', ja: 'ヒット数' },
    dc: { it: 'DC', en: 'DC', es: 'DC', fr: 'DC', 'zh-CN': 'DC', ja: 'DC' },
    maxBc: { it: 'CB max', en: 'Max BC', es: 'BC máx.', fr: 'BC max', 'zh-CN': '最多BC', ja: '最大BC' },
    unitCost: { it: 'Costo unità', en: 'Unit cost', es: 'Coste de unidad', fr: "Coût d'unité", 'zh-CN': '单位消耗', ja: 'ユニットコスト' },
    imps: { it: 'Imp massimi', en: 'Max Imps', es: 'Imps máximos', fr: 'Imps max', 'zh-CN': '最大Imp', ja: 'インプ上限' },
    legend: {
        it: 'CB = Cristalli di Battaglia (riempiono la barra della BB). Combo = colpi dell’attacco. DC = CB che può far cadere ogni colpo. CB max = Combo × DC.',
        en: 'BC = Battle Crystals (they fill the BB gauge). Hits = number of hits. DC = drop checks, BC each hit can drop. Max BC = Hits × DC.',
        es: 'BC = Cristales de Batalla (llenan la barra de BB). Combos = golpes del ataque. DC = BC que puede soltar cada golpe. BC máx. = Combos × DC.',
        fr: 'BC = Cristaux de Combat (ils remplissent la jauge de BB). Combos = coups de l’attaque. DC = BC que chaque coup peut faire tomber. BC max = Combos × DC.',
        'zh-CN': 'BC = 战斗水晶（填充BB槽）。连击数 = 攻击次数。DC = 每次攻击可掉落的BC数。最多BC = 连击数 × DC。',
        ja: 'BC = バトルクリスタル（BBゲージを溜める）。ヒット数 = 攻撃回数。DC = 1ヒットで落とせるBCの数。最大BC = ヒット数 × DC。'
    }
};

// si scarica insieme a units.json; se manca il sito funziona lo stesso (senza questi dati)
async function loadBattleData() {
    try {
        const res = await fetch(BATTLE_DATA_URL);
        if (!res.ok) return {};
        return await res.json();
    } catch (err) {
        console.warn('Dati di battaglia non caricati:', err);
        return {};
    }
}

function statIsEmpty(v) {
    return v === undefined || v === null || String(v).trim() === '' || String(v).trim() === '---';
}

// 1030 -> "1,030" (stesso formato di units.json)
function formatStat(n) {
    return (typeof n === 'number') ? n.toLocaleString('en-US') : String(n);
}

/* CORREZIONI AUTOMATICHE DEI DATI
   1) Evoluzioni sbagliate in units.json: questi passaggi non esistono nel gioco
      (l'unità di arrivo non è l'evoluzione di quella di partenza), quindi non si mostrano.
      Formato: 'ID di partenza>ID di arrivo'
   2) Icona sbagliata: se "image" punta all'icona di un'altra unità, si usa quella giusta. */
const EVOLUTION_WRONG_STEPS = [
    '720255>720257',   // Tiara Apostolo della festa -> Natasha Pugile Rapido (Natasha non ha fasi)
    '730285>730287',   // Dilma Pugno della festa -> Frigg Dea Preveggente (Frigg non ha fasi)
    '750315>750317'    // Lilith -> Odin Dio della Creazione
];

function fixUnitData(u) {
    Object.keys(u).forEach(key => {
        if (!key.startsWith('evolution')) return;
        const evo = u[key];
        if (evo && EVOLUTION_WRONG_STEPS.includes(`${evo.prevId}>${evo.nextId}`)) u[key] = null;
    });
    // restano solo i passaggi collegati a questa unità (la sua linea evolutiva)
    const keys = Object.keys(u).filter(k => k.startsWith('evolution') && u[k] && u[k].prevId);
    const linked = new Set([String(u.realId)]);
    let grew = true;
    while (grew) {
        grew = false;
        keys.forEach(k => {
            const a = String(u[k].prevId), z = String(u[k].nextId);
            if ((linked.has(a) || linked.has(z)) && !(linked.has(a) && linked.has(z))) { linked.add(a); linked.add(z); grew = true; }
        });
    }
    keys.forEach(k => { if (!linked.has(String(u[k].prevId))) u[k] = null; });
    const img = String(u.image || '');
    const m = img.match(/^(.*thum_)(\d+)(\.\w+)$/i);
    if (m && m[2] !== String(u.realId) && /^\d+$/.test(String(u.realId))) {
        u.image = m[1] + u.realId + m[3];
    }
}

// icona quadrata di un'unità (le unità Europa stanno in un'altra cartella)
function unitThumbPath(id) {
    const s = String(id);
    return s.startsWith('7')
        ? `../img/Unit/img Europe/Squere Img/unit_ills_thum_${s}.png`
        : `../img/Unit/Squere Img/unit_ills_thum_${s}.png`;
}

// materiali evolutivi vuoti in units.json: si prendono dai dati del gioco ("evo" in unit-battle.json)
function addEvolutionMaterials(u, battle) {
    Object.keys(u).forEach(key => {
        if (!key.startsWith('evolution')) return;
        const evo = u[key];
        const r = evo && evo.recipe;
        if (!r || (Array.isArray(r.materials) && r.materials.length) || (Array.isArray(r.items) && r.items.length)) return;
        const prev = battle && battle[String(evo.prevId)];
        const src = prev && prev.evo;
        if (!src || String(src.to) !== String(evo.nextId)) return;
        r.materials = (src.units || []).map(unitThumbPath);
        r.items = (src.items || []).slice();
        if (!r.zel && src.zel) r.zel = src.zel;
    });
}

function addBattleData(u, battle) {
    addEvolutionMaterials(u, battle);
    const data = battle && battle[String(u.realId)];
    if (!data) return;
    u.battle = data;
    // skill vuote in units.json: si usano quelle dei dati del gioco (in inglese)
    if (data.fill) {
        u.skills = u.skills || {};
        Object.keys(data.fill).forEach(type => {
            const f = data.fill[type];
            const cur = u.skills[type];
            if (cur && hasSkillContent(cur)) return;
            u.skills[type] = { name: { en: f.name || '' }, desc: { en: f.desc || '' } };
        });
    }
    if (!data.stats) return;
    u.stats = u.stats || {};
    STAT_TYPES.forEach(type => {
        const from = data.stats[type];
        if (!from) return;
        const to = u.stats[type] = u.stats[type] || {};
        ['hp', 'atk', 'def', 'rec'].forEach(k => {
            if (statIsEmpty(to[k]) && from[k] !== undefined && from[k] !== null) to[k] = formatStat(from[k]);
        });
    });
}

function battleText(key) {
    return getLocalizedText(BATTLE_TEXTS[key]);
}

// crea la sezione la prima volta (subito dopo le skill)
function ensureBattleArea() {
    let area = document.getElementById('battleArea');
    if (area) return area;
    const skills = document.querySelector('.skills_container');
    if (!skills) return null;
    area = document.createElement('div');
    area.id = 'battleArea';
    area.className = 'info_section battle_area';
    skills.parentNode.insertBefore(area, skills.nextSibling);
    initUnitLinks(area);
    return area;
}

function renderBattleData(u) {
    const area = ensureBattleArea();
    if (!area) return;
    const b = u && u.battle;
    if (!b) { area.style.display = 'none'; area.innerHTML = ''; return; }

    const num = v => (v === undefined || v === null || v === '') ? '—' : escapeHtml(formatStat(v));
    const maxBc = r => (r && r.hits && r.dc) ? r.hits * r.dc : null;
    const row = (label, r, cost) => `<tr>
            <th scope="row" class="notranslate">${label}</th>
            <td>${cost}</td>
            <td>${num(r.hits)}</td>
            <td>${num(r.dc)}</td>
            <td class="battle-max">${num(maxBc(r))}</td>
        </tr>`;

    // stesse skill che si vedono nel riquadro delle skill (in base alla rarità)
    const allowed = getSkillTypesForRarity(u.rarity)
        .concat(['sbb', 'ubb'].filter(t => hasSkillContent(u.skills && u.skills[t])));
    let rows = '';
    if (b.atk) rows += row(escapeHtml(battleText('normal')), b.atk, '—');
    ['bb', 'sbb', 'ubb'].forEach(t => {
        if (b[t] && allowed.includes(t)) rows += row(t.toUpperCase(), b[t], num(b[t].cost));
    });

    const chips = [];
    if (b.cost) chips.push(`<span class="battle-chip"><span>${escapeHtml(battleText('unitCost'))}</span> <b>${num(b.cost)}</b></span>`);

    area.innerHTML = `<h3>${escapeHtml(battleText('title'))}</h3>
        <div class="battle-table-wrap">
            <table class="battle-table">
                <thead><tr>
                    <th></th>
                    <th>${escapeHtml(battleText('cost'))}</th>
                    <th>${escapeHtml(battleText('hits'))}</th>
                    <th class="notranslate">${escapeHtml(battleText('dc'))}</th>
                    <th>${escapeHtml(battleText('maxBc'))}</th>
                </tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
        ${chips.length ? `<div class="battle-chips">${chips.join('')}</div>` : ''}
        <p class="battle-legend">${escapeHtml(battleText('legend'))}</p>`;
    area.classList.add('notranslate');   // testi già tradotti: Google Translate non li tocca
    area.style.display = '';
}

/* --------------------------------------------------------------------------
   IMP: quanti ne servono per arrivare al massimo (sotto le statistiche)
   Ogni Imp, fuso nell'unità, aumenta per sempre le statistiche:
     Molin (40432) PS +50 · Pakpak (10452) ATT +20 · Ganju (20442) DIF +20
     Fwahl (30432) REC +20 · Arton (50612) PS +150, ATT +60, DIF +60, REC +60
   Per Arton il numero è quello che serve per arrivare al massimo in TUTTE le statistiche.
   -------------------------------------------------------------------------- */
const IMP_UNITS = [
    { id: '40432', boost: { hp: 50 } },                              // Vigor Imp Molin
    { id: '10452', boost: { atk: 20 } },                             // Power Imp Pakpak
    { id: '20442', boost: { def: 20 } },                             // Guard Imp Ganju
    { id: '30432', boost: { rec: 20 } },                             // Healing Imp Fwahl
    { id: '50612', boost: { hp: 150, atk: 60, def: 60, rec: 60 } }   // Almighty Imp Arton
];
const IMP_THUMB = id => `../img/Unit/Squere Img/unit_ills_thum_${id}.png`;
const STAT_LABELS = {
    hp: { it: 'PS', en: 'HP', es: 'PV', fr: 'PV', 'zh-CN': 'HP', ja: 'HP' },
    atk: { it: 'ATT', en: 'ATK', es: 'ATQ', fr: 'ATQ', 'zh-CN': '攻击', ja: '攻撃' },
    def: { it: 'DIF', en: 'DEF', es: 'DEF', fr: 'DÉF', 'zh-CN': '防御', ja: '防御' },
    rec: { it: 'REC', en: 'REC', es: 'REC', fr: 'REC', 'zh-CN': '回复', ja: '回復' }
};
const IMP_TEXTS = {
    title: { it: 'Imp per il massimo', en: 'Imps to max out', es: 'Imps para el máximo', fr: 'Imps pour le maximum', 'zh-CN': '加满所需Imp', ja: '上限までのインプ' },
    show: { it: 'Mostra gli Imp', en: 'Show Imps', es: 'Mostrar Imps', fr: 'Afficher les Imps', 'zh-CN': '显示Imp', ja: 'インプを表示' },
    almighty: { it: 'tutte', en: 'all', es: 'todas', fr: 'toutes', 'zh-CN': '全部', ja: '全て' }
};

function statLabel(k) { return getLocalizedText(STAT_LABELS[k]) || k.toUpperCase(); }

function renderImps(u) {
    const grid = document.querySelector('.unit_stats_side .stats_grid');
    if (!grid) return;
    let area = document.getElementById('impArea');
    if (!area) {
        area = document.createElement('div');
        area.id = 'impArea';
        area.className = 'imp-block';
        grid.parentNode.insertBefore(area, grid.nextSibling);
        initUnitLinks(area);
        initImpToggle(area);
    }
    setImpOpen(area, false, true);   // ogni unità si apre con la tendina chiusa
    const imp = u && u.battle && u.battle.imp;
    if (!imp || !['hp', 'atk', 'def', 'rec'].some(k => imp[k] > 0)) { area.style.display = 'none'; area.innerHTML = ''; return; }

    const items = IMP_UNITS.map(x => {
        const stats = Object.keys(x.boost).filter(k => imp[k] > 0);
        if (!stats.length) return '';
        // quanti ne servono: per Arton il più alto tra tutte le statistiche
        const count = Math.max(...stats.map(k => Math.ceil(imp[k] / x.boost[k])));
        const unit = findUnitByRealId(x.id);
        const name = unit ? getActiveUnitName(unit) : '';
        const label = stats.length > 1
            ? escapeHtml(getLocalizedText(IMP_TEXTS.almighty))
            : `${escapeHtml(statLabel(stats[0]))} +${escapeHtml(formatStat(imp[stats[0]]))}`;
        return `<button type="button" class="imp-item" data-open-unit="${x.id}" title="${escapeHtml(name)}" aria-label="${escapeHtml(name)}">
                <img src="${escapeHtml(IMP_THUMB(x.id))}" alt="" loading="lazy" draggable="false">
                <span class="imp-count">×${count}</span>
                <span class="imp-stat">${label}</span>
            </button>`;
    }).join('');

    area.innerHTML = `<button type="button" class="imp-toggle" aria-expanded="false" title="${escapeHtml(getLocalizedText(IMP_TEXTS.show))}">
            <span class="imp-title">${escapeHtml(getLocalizedText(IMP_TEXTS.title))}</span>
            <span class="imp-chevron" aria-hidden="true"></span>
        </button>
        <div class="imp-panel"><div class="imp-panel-inner"><div class="imp-row">${items}</div></div></div>`;
    area.classList.add('notranslate');
    area.style.display = '';
}

/* Tendina degli Imp: si apre e si chiude con un clic, in modo morbido.
   Quando si scorre la scheda verso il basso (o verso l'alto) si richiude da sola. */
const IMP_SCROLL_CLOSE = 24;   // pixel di scorrimento dopo i quali la tendina si chiude
let impScrollStart = null;     // posizione di scorrimento quando è stata aperta

function scrollPosOf(target) {
    if (!target || target === document || target === document.documentElement || target === document.body) {
        return { el: document, top: window.scrollY || document.documentElement.scrollTop || 0 };
    }
    return { el: target, top: target.scrollTop || 0 };
}

function setImpOpen(area, open, instant = false) {
    if (!area) return;
    if (instant) area.classList.add('no-anim');
    area.classList.toggle('open', open);
    const btn = area.querySelector('.imp-toggle');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    impScrollStart = open ? new Map() : null;
    if (instant) requestAnimationFrame(() => requestAnimationFrame(() => area.classList.remove('no-anim')));
}

function initImpToggle(area) {
    area.addEventListener('click', (e) => {
        if (!e.target.closest('.imp-toggle')) return;
        setImpOpen(area, !area.classList.contains('open'));
    });
    // qualsiasi scorrimento (pagina o scheda) richiude la tendina
    document.addEventListener('scroll', (e) => {
        if (!impScrollStart || !area.classList.contains('open')) return;
        const pos = scrollPosOf(e.target);
        if (area.contains(pos.el)) return;
        if (!impScrollStart.has(pos.el)) { impScrollStart.set(pos.el, pos.top); return; }
        if (Math.abs(pos.top - impScrollStart.get(pos.el)) > IMP_SCROLL_CLOSE) setImpOpen(area, false);
    }, { capture: true, passive: true });
}

// clic su un Imp (o sulla copia dell'unità negli Omni+): si apre quella unità
function initUnitLinks(area) {
    if (!area || area.dataset.linksReady) return;
    area.dataset.linksReady = '1';
    area.addEventListener('click', (e) => {
        const el = e.target.closest('[data-open-unit]');
        if (!el) return;
        const target = findUnitByRealId(el.dataset.openUnit);
        if (target && target !== currentUnitOpen) openModal(target);
    });
}

/* ==========================================================================
   ABILITÀ SP (solo Omni): data/unit-sp.json, una lista per unità:
     "860018": [ ["param", 10, "testo in inglese", -1], ... ]
   = [categoria, costo in SP, descrizione, posizione dell'abilità richiesta (-1 = nessuna)]
   Le traduzioni stanno in data/sp-text/<lingua>.json  { "testo inglese": "traduzione" }
   (se una lingua non ha ancora il suo file, resta l'inglese e Google Translate lo traduce)
   ========================================================================== */
const SP_DATA_URL = '../data/unit-sp.json';
const SP_TEXT_URL = lang => `../data/sp-text/${lang}.json`;
const SP_CATEGORY_ORDER = ['param', 'attack', 'spark', 'critical', 'reduction', 'bbgauge', 'heal', 'ailres', 'ailinf', 'drop', 'special'];
const SP_CATEGORIES = {
    param: { it: 'Potenziamento parametri', en: 'Parameter Boost', es: 'Mejora de parámetros', fr: 'Bonus de paramètres', 'zh-CN': '能力提升', ja: 'ステアップ系' },
    attack: { it: 'Potenziamento attacco', en: 'Attack Boost', es: 'Mejora de ataque', fr: "Bonus d'attaque", 'zh-CN': '攻击强化', ja: '攻撃強化系' },
    spark: { it: 'Scintilla', en: 'Spark', es: 'Chispa', fr: 'Étincelle', 'zh-CN': '火花', ja: 'スパーク系' },
    critical: { it: 'Colpo critico', en: 'Critical Hit', es: 'Golpe crítico', fr: 'Coup critique', 'zh-CN': '暴击', ja: 'クリティカル系' },
    reduction: { it: 'Riduzione danni', en: 'Damage Reduction', es: 'Reducción de daño', fr: 'Réduction des dégâts', 'zh-CN': '伤害减轻', ja: 'ダメージ軽減系' },
    bbgauge: { it: 'Barra BB', en: 'BB Gauge', es: 'Barra de BB', fr: 'Jauge de BB', 'zh-CN': 'BB槽', ja: 'ＢＢゲージ系' },
    heal: { it: 'Recupero PS', en: 'HP Recovery', es: 'Recuperación de PV', fr: 'Récupération de PV', 'zh-CN': 'HP回复', ja: 'ＨＰ回復系' },
    ailres: { it: 'Resistenza alle anomalie', en: 'Ailment Resistance', es: 'Resistencia a estados', fr: 'Résistance aux altérations', 'zh-CN': '异常抗性', ja: '異常耐性系' },
    ailinf: { it: 'Infliggere anomalie', en: 'Ailment Infliction', es: 'Infligir estados', fr: 'Infliger des altérations', 'zh-CN': '附加异常状态', ja: '状態異常付与系' },
    drop: { it: 'Ricompense', en: 'Drops', es: 'Botín', fr: 'Butin', 'zh-CN': '掉落', ja: 'ドロップ系' },
    special: { it: 'Speciale', en: 'Special', es: 'Especial', fr: 'Spécial', 'zh-CN': '特殊', ja: '特殊' }
};
const SP_TEXTS = {
    title: { it: 'Abilità SP', en: 'SP Enhancements', es: 'Mejoras SP', fr: 'Améliorations SP', 'zh-CN': 'SP强化', ja: 'SP強化' },
    total: { it: 'SP per sbloccarle tutte', en: 'SP to unlock all', es: 'SP para desbloquear todas', fr: 'SP pour tout débloquer', 'zh-CN': '全部解锁所需SP', ja: '全解放に必要なSP' },
    requires: { it: 'Richiede', en: 'Requires', es: 'Requiere', fr: 'Nécessite', 'zh-CN': '需要', ja: '必要' }
};
let spDataPromise = null;
const spTextCache = {};

function loadSpData() {
    if (!spDataPromise) {
        spDataPromise = fetch(SP_DATA_URL).then(r => (r.ok ? r.json() : {})).catch(() => ({}));
    }
    return spDataPromise;
}

function loadSpText(lang) {
    if (lang === 'en') return Promise.resolve({});
    if (!spTextCache[lang]) {
        spTextCache[lang] = fetch(SP_TEXT_URL(lang)).then(r => (r.ok ? r.json() : {})).catch(() => ({}));
    }
    return spTextCache[lang];
}

function isOmniUnit(u) {
    const r = String(u && u.rarity || '').trim().toLowerCase();
    return r === 'omni' || r === 'dream';
}

// crea una sezione vuota subito dopo un'altra
function ensureSectionAfter(id, afterEl, className) {
    let area = document.getElementById(id);
    if (area) return area;
    if (!afterEl || !afterEl.parentNode) return null;
    area = document.createElement('div');
    area.id = id;
    area.className = className;
    area.style.display = 'none';
    afterEl.parentNode.insertBefore(area, afterEl.nextSibling);
    return area;
}

// testo SP: "<br>" del file diventa un vero a capo, il resto è testo semplice
function spTextHtml(text) {
    return String(text || '').split(/<br\s*\/?>/i).map(escapeHtml).join('<br>');
}

async function renderSpSkills(u) {
    const after = document.getElementById('battleArea') || document.querySelector('.skills_container');
    const area = ensureSectionAfter('spArea', after, 'info_section sp_area');
    if (!area) return;
    if (!isOmniUnit(u)) { area.style.display = 'none'; area.innerHTML = ''; return; }

    const lang = getCurrentLang();
    const [all, tr] = await Promise.all([loadSpData(), loadSpText(lang)]);
    if (currentUnitOpen !== u) return;   // nel frattempo è stata aperta un'altra unità
    const rows = all[String(u.realId)];
    if (!rows || !rows.length) { area.style.display = 'none'; area.innerHTML = ''; return; }

    const text = en => tr[en] || en;
    const translated = en => !!tr[en] || lang === 'en';
    const total = rows.reduce((sum, r) => sum + (Number(r[1]) || 0), 0);

    const groups = SP_CATEGORY_ORDER.map(cat => {
        const items = rows.filter(r => r[0] === cat);
        if (!items.length) return '';
        const list = items.map(r => {
            const dep = r[3] >= 0 && rows[r[3]] ? rows[r[3]][2] : '';
            const req = dep
                ? `<small class="sp-req"><span class="notranslate">${escapeHtml(getLocalizedText(SP_TEXTS.requires))}:</span> <span${translated(dep) ? ' class="notranslate"' : ''}>${spTextHtml(text(dep))}</span></small>`
                : '';
            return `<li class="sp-item">
                    <span class="sp-cost notranslate">${escapeHtml(String(r[1]))} SP</span>
                    <span class="sp-desc"><span${translated(r[2]) ? ' class="notranslate"' : ''}>${spTextHtml(text(r[2]))}</span>${req}</span>
                </li>`;
        }).join('');
        return `<div class="sp-group">
                <h4 class="notranslate">${escapeHtml(getLocalizedText(SP_CATEGORIES[cat]))}</h4>
                <ul class="sp-list">${list}</ul>
            </div>`;
    }).join('');

    area.innerHTML = `<h3 class="notranslate">${escapeHtml(getLocalizedText(SP_TEXTS.title))}</h3>
        <p class="sp-total notranslate">${escapeHtml(getLocalizedText(SP_TEXTS.total))}: <b>${total} SP</b></p>
        ${groups}`;
    area.style.display = '';
}

/* ==========================================================================
   OMNI+ (le 3 evoluzioni extra delle unità Omni: Omni+1, Omni+2, Omni+3)
   Non cambiano la rarità: aumentano statistiche e limite SP.
   Due modi per farle:
     - con i materiali: Frammenti dell'elemento + Elementum Tome + Zel + Karma
     - con un doppione: 1 copia della stessa unità + Geminus Tome
   Le unità con costo 45 ne chiedono meno (seconda tabella).
   Le icone dei materiali vanno in img/Material Evolve/ con questi nomi:
     item_thum_800901.png ... item_thum_800906.png (Frammenti: Ignis, Algor, Terra, Fulgur, Lux, Umbra)
     item_thum_800907.png (Elementum Tome)   item_thum_800908.png (Geminus Tome)
   Se un'icona manca, si vede lo stesso il nome del materiale.
   ========================================================================== */
const OMNI_PLUS_LEVELS = [
    { sp: 5, hp: 150, atk: 60, def: 60, rec: 60 },
    { sp: 5, hp: 300, atk: 120, def: 120, rec: 120 },
    { sp: 10, hp: 450, atk: 180, def: 180, rec: 180 }
];
const OMNI_PLUS_COST = {
    normal: [   // unità con costo maggiore di 45
        { shards: 100, tomes: 10, zel: 4000000, karma: 1500000, geminus: 5 },
        { shards: 200, tomes: 20, zel: 5000000, karma: 2500000, geminus: 10 },
        { shards: 500, tomes: 50, zel: 7000000, karma: 3500000, geminus: 25 }
    ],
    cost45: [   // unità con costo 45
        { shards: 50, tomes: 5, zel: 4000000, karma: 1500000, geminus: 0 },
        { shards: 100, tomes: 10, zel: 5000000, karma: 2500000, geminus: 0 },
        { shards: 250, tomes: 25, zel: 7000000, karma: 3500000, geminus: 5 }
    ]
};
const OMNI_SHARDS = {
    fire: { id: '800901', name: 'Ignis Shard' },
    water: { id: '800902', name: 'Algor Shard' },
    earth: { id: '800903', name: 'Terra Shard' },
    thunder: { id: '800904', name: 'Fulgur Shard' },
    light: { id: '800905', name: 'Lux Shard' },
    dark: { id: '800906', name: 'Umbra Shard' }
};
/* UNITÀ CHE SI OTTENGONO UNA SOLA VOLTA IN TUTTO IL GIOCO
   Per queste non si può fare l'Omni+ con un doppione: resta solo il modo con i materiali.
   Basta scrivere qui il loro ID (tra apici e separati da virgole), per esempio:
       const OMNI_ONE_COPY_UNITS = ['10017', '60027'];
   In alternativa, in units.json si può mettere nell'unità:  "oneCopy": true  */
const OMNI_ONE_COPY_UNITS = [];

function isOneCopyUnit(u) {
    return !!(u && (u.oneCopy === true || OMNI_ONE_COPY_UNITS.includes(String(u.realId))));
}

const OMNI_TOMES = { elementum: { id: '800907', name: 'Elementum Tome' }, geminus: { id: '800908', name: 'Geminus Tome' } };
const OMNI_PLUS_TEXTS = {
    title: { it: 'Evoluzioni Omni+', en: 'Omni+ Boost', es: 'Mejora Omni+', fr: 'Bonus Omni+', 'zh-CN': 'Omni+强化', ja: 'オムニ＋強化' },
    intro: {
        it: 'Le unità Omni hanno 3 evoluzioni extra. Non cambiano la rarità: aumentano statistiche e limite SP. Ogni livello si può fare con i materiali oppure con un doppione.',
        en: 'Omni units have 3 extra evolutions. They do not change the rarity: they raise stats and the SP limit. Each level can be done with materials or with a duplicate.',
        es: 'Las unidades Omni tienen 3 evoluciones extra. No cambian la rareza: aumentan las estadísticas y el límite de SP. Cada nivel se puede hacer con materiales o con un duplicado.',
        fr: "Les unités Omni ont 3 évolutions supplémentaires. Elles ne changent pas la rareté : elles augmentent les stats et la limite de SP. Chaque niveau se fait avec des matériaux ou avec un doublon.",
        'zh-CN': 'Omni单位有3次额外进化。不会改变稀有度，但会提升能力值和SP上限。每一级都可以使用素材或重复单位完成。',
        ja: 'オムニユニットには3段階の追加進化があります。レアリティは変わらず、ステータスとSP上限が上がります。各段階は素材または同じユニットで行えます。'
    },
    gains: { it: 'Aumenti', en: 'Gains', es: 'Mejoras', fr: 'Gains', 'zh-CN': '提升', ja: '上昇値' },
    spLimit: { it: 'Limite SP', en: 'SP limit', es: 'Límite SP', fr: 'Limite SP', 'zh-CN': 'SP上限', ja: 'SP上限' },
    withMats: { it: 'Con i materiali', en: 'With materials', es: 'Con materiales', fr: 'Avec des matériaux', 'zh-CN': '使用素材', ja: '素材で強化' },
    withDupe: { it: 'Con un doppione', en: 'With a duplicate', es: 'Con un duplicado', fr: 'Avec un doublon', 'zh-CN': '使用重复单位', ja: '同ユニットで強化' },
    oneCopy: {
        it: 'Non disponibile: questa unità si ottiene una sola volta in tutto il gioco, quindi si può fare solo con i materiali.',
        en: 'Not available: this unit can only be obtained once in the whole game, so only the materials option can be used.',
        es: 'No disponible: esta unidad solo se puede obtener una vez en todo el juego, así que solo se puede usar la opción con materiales.',
        fr: "Indisponible : cette unité ne s'obtient qu'une seule fois dans tout le jeu, donc seule l'option avec matériaux est possible.",
        'zh-CN': '不可用：此单位在整个游戏中只能获得一次，因此只能使用素材强化。',
        ja: '利用不可：このユニットはゲーム中で1体しか入手できないため、素材での強化のみ可能です。'
    },
    copy: { it: 'copia della stessa unità', en: 'copy of the same unit', es: 'copia de la misma unidad', fr: 'copie de la même unité', 'zh-CN': '相同单位', ja: '同じユニット' }
};

function unitElementKey(u) {
    return String(u && u.element || '').replace(/^Element\s+/i, '').trim().toLowerCase();
}

function omniMatHtml(img, name, count, extraClass = '') {
    return `<span class="op-mat ${extraClass}">
            <span class="op-icon">${img ? `<img src="${escapeHtml(img)}" alt="" loading="lazy" draggable="false" onerror="this.remove()">` : ''}</span>
            <span class="op-mat-name notranslate">${escapeHtml(name)}</span>
            <b class="notranslate">×${escapeHtml(formatStat(count))}</b>
        </span>`;
}

function renderOmniPlus(u) {
    const after = document.getElementById('spArea') || document.getElementById('battleArea') || document.querySelector('.skills_container');
    const area = ensureSectionAfter('omniPlusArea', after, 'info_section omni_plus_area');
    if (!area) return;
    // Omni+ esiste solo per le unità di rarità Omni
    if (String(u && u.rarity || '').trim().toLowerCase() !== 'omni') { area.style.display = 'none'; area.innerHTML = ''; return; }

    const T = k => escapeHtml(getLocalizedText(OMNI_PLUS_TEXTS[k]));
    const costTable = (u.battle && Number(u.battle.cost) === 45) ? OMNI_PLUS_COST.cost45 : OMNI_PLUS_COST.normal;
    const elemKey = unitElementKey(u);
    const shard = OMNI_SHARDS[elemKey] || null;
    const itemImg = id => `${EVO_ITEM_FOLDER}item_thum_${id}.png`;
    const unitThumb = u.image || IMP_THUMB(u.realId);
    const oneCopy = isOneCopyUnit(u);

    const cards = OMNI_PLUS_LEVELS.map((lv, i) => {
        const c = costTable[i];
        const gains = `<span>${T('spLimit')} +${lv.sp}</span>` +
            ['hp', 'atk', 'def', 'rec'].map(k => ` · <span>${escapeHtml(statLabel(k))} +${escapeHtml(formatStat(lv[k]))}</span>`).join('');
        const mats = [
            shard ? omniMatHtml(itemImg(shard.id), shard.name, c.shards, `op-shard op-${elemKey}`) : '',
            omniMatHtml(itemImg(OMNI_TOMES.elementum.id), OMNI_TOMES.elementum.name, c.tomes, 'op-tome'),
            omniMatHtml('../img/Money/Zell.png', 'Zel', c.zel, 'op-money'),
            omniMatHtml('../img/Money/Karma.png', 'Karma', c.karma, 'op-money')
        ].join('');
        const dupe = oneCopy ? `<p class="op-unavailable">${T('oneCopy')}</p>` : `<button type="button" class="op-mat op-unit" data-open-unit="${escapeHtml(String(u.realId))}">
                <span class="op-icon"><img src="${escapeHtml(unitThumb)}" alt="" loading="lazy" draggable="false" onerror="this.remove()"></span>
                <span class="op-mat-name">${T('copy')}</span>
                <b>×1</b>
            </button>` + (c.geminus ? omniMatHtml(itemImg(OMNI_TOMES.geminus.id), OMNI_TOMES.geminus.name, c.geminus, 'op-tome') : '');
        return `<div class="op-card">
                <div class="op-head">Omni+${i + 1}</div>
                <p class="op-gains"><span class="op-label">${T('gains')}:</span> ${gains}</p>
                <div class="op-way"><span class="op-label">${T('withMats')}</span><div class="op-mats">${mats}</div></div>
                <div class="op-way${oneCopy ? ' is-unavailable' : ''}"><span class="op-label">${T('withDupe')}</span><div class="op-mats">${dupe}</div></div>
            </div>`;
    }).join('');

    area.innerHTML = `<h3>${T('title')}</h3>
        <p class="op-intro">${T('intro')}</p>
        <div class="op-cards">${cards}</div>`;
    area.classList.add('notranslate');
    initUnitLinks(area);
    area.style.display = '';
}

/* ==========================================================================
   COME OTTENERLA (in fondo alla modale, dopo le evoluzioni)
   Tabella: Tipo | Dove | Banner.
   1) Se l'unità ha "howToObtain" in units.json si usa quello (scritto a mano):
      "howToObtain": [
        { "type": "Vortex",
          "event": { "en": "...", "it": "...", ... },   (oppure una stringa semplice)
          "banner": "../img/Bunner Vortex/sp_quest_banner_801006.png" }
      ]
   2) Altrimenti si usa data/unit-obtain.json, preso dalla wiki globale (inglese)
      e dalla wiki italiana di Fandom:
      "10011": { "en": [["starter", "Starter Unit"], ["honor", "Honor Summon"], ...],
                 "it": [["event", "Eroe di Agni"], ...],      (wiki italiana + righe generiche tradotte)
                 "itx": [...] }                                 (lista globale tradotta, se manca "it")
      In italiano si usa "it" (o "itx"), nelle altre lingue la lista globale.
   3) Se non c'è niente la sezione resta nascosta (le evoluzioni non ripetono
      come si ottiene l'unità di prima).
   La colonna Banner compare solo se almeno una riga ha un'immagine.
   ========================================================================== */
const OBTAIN_DATA_URL = '../data/unit-obtain.json';
const OBTAIN_TEXTS = {
    title: { it: 'Come ottenerla', en: 'How to obtain', es: 'Cómo obtenerla', fr: "Comment l'obtenir", 'zh-CN': '获取方式', ja: '入手方法' },
    type: { it: 'Tipo', en: 'Type', es: 'Tipo', fr: 'Type', 'zh-CN': '类型', ja: '種類' },
    event: { it: 'Dove', en: 'Where', es: 'Dónde', fr: 'Où', 'zh-CN': '地点', ja: '入手場所' },
    banner: { it: 'Banner', en: 'Banner', es: 'Banner', fr: 'Bannière', 'zh-CN': '横幅', ja: 'バナー' },
    evolveOf: { it: 'Evoluzione di', en: 'Evolution of', es: 'Evolución de', fr: 'Évolution de', 'zh-CN': '进化自', ja: '進化元' }
};
const OBTAIN_TYPES = {
    summon: { it: 'Evocazione rara', en: 'Rare Summon', es: 'Invocación rara', fr: 'Invocation rare', 'zh-CN': '稀有召唤', ja: 'レア召喚' },
    honor: { it: 'Evocazione Onore', en: 'Honor Summon', es: 'Invocación de honor', fr: "Invocation d'honneur", 'zh-CN': '荣誉召唤', ja: 'フレンドガチャ' },
    story: { it: 'Missione', en: 'Quest', es: 'Misión', fr: 'Quête', 'zh-CN': '任务', ja: 'クエスト' },
    event: { it: 'Evento', en: 'Event', es: 'Evento', fr: 'Événement', 'zh-CN': '活动', ja: 'イベント' },
    gq: { it: 'Grand Quest', en: 'Grand Quest', es: 'Grand Quest', fr: 'Grand Quest', 'zh-CN': '大型任务', ja: 'グランドクエスト' },
    trial: { it: 'Prova', en: 'Trial', es: 'Prueba', fr: 'Épreuve', 'zh-CN': '试炼', ja: '試練' },
    raid: { it: 'Raid', en: 'Raid', es: 'Raid', fr: 'Raid', 'zh-CN': '突袭', ja: 'レイド' },
    arena: { it: 'Sfide e Arena', en: 'Challenges & Arena', es: 'Desafíos y Arena', fr: 'Défis et Arène', 'zh-CN': '挑战与竞技场', ja: 'チャレンジ・アリーナ' },
    reward: { it: 'Ricompensa', en: 'Reward', es: 'Recompensa', fr: 'Récompense', 'zh-CN': '奖励', ja: '報酬' },
    starter: { it: 'Unità iniziale', en: 'Starter unit', es: 'Unidad inicial', fr: 'Unité de départ', 'zh-CN': '初始单位', ja: '初期ユニット' },
    evolve: { it: 'Evoluzione', en: 'Evolution', es: 'Evolución', fr: 'Évolution', 'zh-CN': '进化', ja: '進化' }
};
// le frasi più comuni della wiki globale, tradotte (le altre restano come sulla wiki)
const OBTAIN_PHRASES = {
    'Rare Summon': { it: 'Evocazione rara', es: 'Invocación rara', fr: 'Invocation rare', 'zh-CN': '稀有召唤', ja: 'レアガチャ' },
    'Super Rare Summon (Event Only)': { it: 'Evocazione super rara (solo durante eventi)', es: 'Invocación súper rara (solo en eventos)', fr: 'Invocation super rare (événements uniquement)', 'zh-CN': '超稀有召唤（仅限活动）', ja: 'スーパーレアガチャ（イベント限定）' },
    'Divine Summon': { it: 'Evocazione divina', es: 'Invocación divina', fr: 'Invocation divine', 'zh-CN': '神圣召唤', ja: 'ディバインガチャ' },
    'Honor Summon': { it: 'Evocazione Onore', es: 'Invocación de honor', fr: "Invocation d'honneur", 'zh-CN': '荣誉召唤', ja: 'フレンドガチャ' },
    'Super Honor Summon': { it: 'Evocazione Super Onore', es: 'Invocación de súper honor', fr: "Invocation super honneur", 'zh-CN': '超级荣誉召唤', ja: 'スーパーフレンドガチャ' },
    'Summer Omni+ Summon (Limited Time)': { it: 'Evocazione Omni+ estiva (a tempo limitato)', es: 'Invocación Omni+ de verano (tiempo limitado)', fr: "Invocation Omni+ d'été (durée limitée)", 'zh-CN': '夏季Omni+召唤（限时）', ja: 'サマーOmni+ガチャ（期間限定）' },
    'Starter Unit': { it: 'Unità iniziale', es: 'Unidad inicial', fr: 'Unité de départ', 'zh-CN': '初始单位', ja: '初期ユニット' },
    'Vortex Arena Summon': { it: 'Evocazione Arena Vortice', es: 'Invocación Arena Vórtice', fr: 'Invocation Arène Vortex', 'zh-CN': '漩涡竞技场召唤', ja: 'ヴォルテックスアリーナガチャ' },
    'Daily Spin': { it: 'Ruota giornaliera', es: 'Giro diario', fr: 'Roue quotidienne', 'zh-CN': '每日转盘', ja: 'デイリースピン' },
    'Colosseum': { it: 'Colosseo', es: 'Coliseo', fr: 'Colisée', 'zh-CN': '斗技场', ja: 'コロシアム' },
    'Various events in Event Bazaar': { it: 'Vari eventi nell’Event Bazaar', es: 'Varios eventos en el Event Bazaar', fr: "Divers événements de l'Event Bazaar", 'zh-CN': '活动集市中的各种活动', ja: 'イベントバザーの各種イベント' }
};
let obtainDataPromise = null;

function loadObtainData() {
    if (!obtainDataPromise) {
        obtainDataPromise = fetch(OBTAIN_DATA_URL).then(r => (r.ok ? r.json() : {})).catch(() => ({}));
    }
    return obtainDataPromise;
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function renderHowToObtain(u) {
    const area = document.getElementById('obtainArea');
    const body = document.getElementById('obtainBody');
    if (!area || !body) return;

    // intestazioni nella lingua scelta
    const setText = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = getLocalizedText(OBTAIN_TEXTS[key]); };
    setText('obtainTitle', 'title');
    setText('obtainHeadType', 'type');
    setText('obtainHeadEvent', 'event');
    setText('obtainHeadBanner', 'banner');

    const lang = getCurrentLang();
    let rows = [];      // { type, event, banner, translated, unitId }

    const manual = Array.isArray(u && u.howToObtain) ? u.howToObtain.filter(Boolean) : [];
    if (manual.length) {
        rows = manual.map(r => ({
            type: getLocalizedText(r.type) || '—',
            event: getLocalizedText(r.event) || '—',
            banner: String(r.banner || '').trim(),
            translated: true
        }));
    } else {
        area.style.display = 'none';
        const data = await loadObtainData();
        if (currentUnitOpen !== u) return;   // nel frattempo è stata aperta un'altra unità
        const rec = data[String(u.realId)] || {};
        // italiano: lista della wiki italiana (completata con le righe generiche della globale),
        // oppure la lista globale già tradotta ("itx"); nelle altre lingue la lista globale
        const enList = rec.en || [];
        let list = enList, listLang = 'en';
        if (lang === 'it' && rec.it) { list = rec.it; listLang = 'it'; }
        else if (lang === 'it' && rec.itx) { list = rec.itx; listLang = 'itx'; }
        else if (!enList.length && rec.it) { list = rec.it; listLang = 'it'; }
        rows = list.map(([type, text], idx) => {
            const phrase = listLang === 'en' && OBTAIN_PHRASES[text];
            const tr = phrase && phrase[lang];
            const translated = listLang === 'itx'
                ? !(enList[idx] && enList[idx][1] === text)    // riga rimasta in inglese: la traduce Google
                : (!!tr || listLang === lang);
            return {
                type: getLocalizedText(OBTAIN_TYPES[type]) || type,
                event: tr || text,
                banner: '',
                translated
            };
        });
    }

    if (rows.length === 0) {
        area.style.display = 'none';
        body.innerHTML = '';
        return;
    }

    const hasBanner = rows.some(r => r.banner);
    area.classList.toggle('no-banner', !hasBanner);
    body.innerHTML = rows.map(r => {
        const type = escapeHtml(r.type);
        const eventText = escapeHtml(r.event);
        const eventHtml = r.unitId
            ? `<span class="obtain-unit-link evo-unit-link" data-unit-id="${escapeHtml(String(r.unitId))}" role="button" tabindex="0">${r.thumb ? `<img src="${escapeHtml(r.thumb)}" alt="" loading="lazy" draggable="false">` : ''}<span>${eventText}</span></span>`
            : eventText;
        const bannerHtml = r.banner
            ? `<img class="obtain-banner" src="${escapeHtml(r.banner)}" alt="${eventText}" loading="lazy" onerror="this.replaceWith(document.createTextNode('—'))">`
            : '—';
        return `<tr>
            <td class="obtain-type notranslate">${type}</td>
            <td class="obtain-event${r.translated ? ' notranslate' : ''}">${eventHtml}</td>
            ${hasBanner ? `<td class="obtain-banner-cell">${bannerHtml}</td>` : ''}
        </tr>`;
    }).join('');

    initObtainLinks(area);
    area.style.display = '';
}

// "Evoluzione di ...": clic (o Invio) apre l'unità di prima
function initObtainLinks(area) {
    if (area.dataset.linksReady) return;
    area.dataset.linksReady = '1';
    const open = (el) => { const t = findUnitByRealId(el.dataset.unitId); if (t) openModal(t); };
    area.addEventListener('click', (e) => { const el = e.target.closest('.obtain-unit-link'); if (el) open(el); });
    area.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const el = e.target.closest('.obtain-unit-link');
        if (el) { e.preventDefault(); open(el); }
    });
}

function changeArenaBackground() {
    const randomIndex = Math.floor(Math.random() * arenaBackgrounds.length);
    const unitBoxTop = document.querySelector('.unit_box_top');
    if (unitBoxTop) {
        unitBoxTop.style.backgroundImage = `url('${arenaBackgrounds[randomIndex]}')`;
        startDungeonFx(arenaBackgrounds[randomIndex]);   // le animazioni di quello sfondo
    }
}

/* ==========================================================================
   GUARDA L'ANIMAZIONE IN GRANDE (solo PC)
   Nella scheda resta il riquadro di sempre. Sotto le statistiche ci sono i
   bottoni "Media", "Grande" e "Schermo intero": aprono una finestra con
   l'animazione e lo sfondo del dungeon intero. La finestra ha sempre la forma
   dello sfondo (640x440): lo sfondo la riempie tutta, nitido, senza tagli,
   senza zoom e senza essere allungato.
   Come nel gioco TUTTE le unità stanno a DESTRA (gli attacchi vanno verso sinistra,
   dove starebbero i nemici): ANIM_VIEW_UNIT_X dice dove (0.5 = centro, 1 = bordo destro).
   Durante l'attacco chi si muove va verso il nemico e torna (vedi SPOSTAMENTO DURANTE L'ATTACCO).
   L'animazione dell'unità sta SEMPRE tutta dentro la finestra: quando la apri,
   il sito guarda tutti i fotogrammi di default, idle e atk (fino a dove arrivano
   gli attacchi) e poi mette l'unità nel punto giusto e alla grandezza giusta.
   Se un attacco andrebbe fuori, l'unità si sposta quanto basta; se non basta,
   l'unità diventa un po' più piccola.
   Il riquadro dell'animazione, con i suoi bottoni e le animazioni del dungeon,
   viene spostato nella finestra e poi rimesso al suo posto: così funziona tutto
   come nella scheda (cambio animazione, cambio sfondo, Full Art, effetti).
   Grandezze: quante volte lo sfondo originale (1 = 640x440), 0 = la più grande
   che entra. "Schermo intero" mette il browser a tutto schermo (come i video):
   con Esc si torna a "Grande", con un altro Esc si chiude.
   Se lo schermo è più piccolo, la finestra si riduce (sempre con la stessa forma).
   ========================================================================== */
const ANIM_VIEW_SIZES = {
    medium: 1,      // grande esattamente come l'immagine originale (640x440)
    large: 0,       // la più grande che entra nella finestra del browser
    full: 0         // tutto lo schermo (il browser va a schermo intero)
};
const ANIM_VIEW_PIXEL_SCALE = 0.85;   // grandezza dei personaggi nella scheda su PC (come --pixel-scale)
const ANIM_VIEW_UNIT_X = 0.68;        // dove sta l'unità, da sinistra (0.68 = a destra, come nel gioco)
const ANIM_FIT_FPS = 15;              // fotogrammi al secondo controllati per vedere dove arriva l'animazione
const ANIM_FIT_ALPHA = 24;            // pixel più trasparenti di così non contano (quasi invisibili)
const ANIM_FIT_MARGIN = 0.02;         // spazio libero tra l'animazione e il bordo della finestra (2%)
const ANIM_FIT_TIMEOUT = 15000;       // dopo 15 secondi senza misure l'unità si mostra comunque
const ANIM_VIEW_TEXTS = {
    title: { it: 'Guarda in grande', en: 'Bigger view', es: 'Ver en grande', fr: 'Voir en grand', 'zh-CN': '放大查看', ja: '大きく表示' },
    medium: { it: 'Media', en: 'Medium', es: 'Mediana', fr: 'Moyenne', 'zh-CN': '中', ja: '中' },
    large: { it: 'Grande', en: 'Large', es: 'Grande', fr: 'Grande', 'zh-CN': '大', ja: '大' },
    full: { it: 'Schermo intero', en: 'Full screen', es: 'Pantalla completa', fr: 'Plein écran', 'zh-CN': '全屏', ja: '全画面' },
    close: { it: 'Chiudi', en: 'Close', es: 'Cerrar', fr: 'Fermer', 'zh-CN': '关闭', ja: '閉じる' }
};
let animViewSize = '';     // grandezza aperta ('' = finestra chiusa)
let animViewHome = null;   // segnaposto nella scheda: lì torna il riquadro quando chiudi
let animViewGround = 67;   // il "pavimento" (--ground-y, in %)
let animViewFit = null;    // misure dell'unità aperta: { key, ext, ready }
const animExtentCache = new Map();   // misure già fatte, per file
const ANIM_VIEW_VARS = ['--viewer-scale', '--viewer-anim-x'];

// crea i bottoni sotto le statistiche e la finestra (una volta sola)
function ensureAnimViewerUI() {
    const side = document.querySelector('.unit_stats_side');
    if (side && !document.getElementById('animSizePicker')) {
        const picker = document.createElement('div');
        picker.id = 'animSizePicker';
        picker.className = 'anim-size-picker';
        side.appendChild(picker);
    }
    if (!document.getElementById('animViewer')) {
        const viewer = document.createElement('div');
        viewer.id = 'animViewer';
        viewer.className = 'anim-viewer';
        viewer.setAttribute('role', 'dialog');
        viewer.setAttribute('aria-modal', 'true');
        viewer.innerHTML = '<div class="anim-viewer-bar"><div class="anim-viewer-sizes"></div>'
            + '<button type="button" class="anim-viewer-close">&times;</button></div>'
            + '<div class="anim-viewer-stage"></div>';
        document.body.appendChild(viewer);
        viewer.querySelector('.anim-viewer-close').onclick = closeAnimViewer;
        // un click sul nero intorno chiude la finestra
        viewer.addEventListener('click', e => { if (e.target === viewer) closeAnimViewer(); });
    }
    updateAnimViewerTexts();
}

function animSizeButtonsHtml() {
    return Object.keys(ANIM_VIEW_SIZES).map(size =>
        `<button type="button" class="anim-size-btn notranslate" data-anim-size="${size}">${escapeHtml(getLocalizedText(ANIM_VIEW_TEXTS[size]))}</button>`
    ).join('');
}

// testi nella lingua scelta
function updateAnimViewerTexts() {
    const picker = document.getElementById('animSizePicker');
    if (picker) {
        picker.innerHTML = `<span class="anim-size-title notranslate">${escapeHtml(getLocalizedText(ANIM_VIEW_TEXTS.title))}</span>${animSizeButtonsHtml()}`;
    }
    const viewer = document.getElementById('animViewer');
    if (viewer) {
        viewer.querySelector('.anim-viewer-sizes').innerHTML = animSizeButtonsHtml();
        const close = viewer.querySelector('.anim-viewer-close');
        close.setAttribute('aria-label', getLocalizedText(ANIM_VIEW_TEXTS.close));
        close.title = getLocalizedText(ANIM_VIEW_TEXTS.close);
    }
    markAnimSizeButtons();
}

// il bottone della grandezza aperta resta acceso (dentro la finestra)
function markAnimSizeButtons() {
    document.querySelectorAll('.anim-viewer-sizes [data-anim-size]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.animSize === animViewSize);
    });
}

// sposta il riquadro senza fermare i video che stavano andando
function moveAnimBox(box, parent, before) {
    const playing = [...box.querySelectorAll('video')].filter(v => !v.paused);
    parent.insertBefore(box, before || null);
    playing.forEach(v => {
        const p = v.play();
        if (p && p.catch) p.catch(() => { /* il browser non vuole: resta ferma */ });
    });
}

function openAnimViewer(size) {
    if (!Object.prototype.hasOwnProperty.call(ANIM_VIEW_SIZES, size)) return;
    ensureAnimViewerUI();
    const viewer = document.getElementById('animViewer');
    const box = document.querySelector('.unit_box_top');
    if (!viewer || !box) return;
    if (!animViewHome) {
        animViewGround = readCssNumber(box.querySelector('.unit_gif') || box, '--ground-y', 67);
        animViewHome = document.createElement('div');
        animViewHome.className = 'unit_box_top-home';
        box.parentNode.insertBefore(animViewHome, box);
        moveAnimBox(box, viewer.querySelector('.anim-viewer-stage'));
        box.classList.add('is-viewer');
        viewer.classList.add('is-open');
        document.body.classList.add('anim-viewer-open');
        startAnimMove();   // chi si muove va verso il nemico durante l'attacco
    }
    animViewSize = size;
    markAnimSizeButtons();
    if (size === 'full') enterAnimFullscreen(viewer);
    else exitAnimFullscreen();
    fitAnimViewer();
    sizeAnimViewer();
}

// schermo intero del browser (se il browser non lo permette, la finestra resta grande)
function animFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function enterAnimFullscreen(el) {
    if (animFullscreenElement() === el) return;
    const request = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!request) return;
    try {
        const p = request.call(el);
        if (p && p.catch) p.catch(() => { /* non permesso: resta grande nella finestra */ });
    } catch (err) { /* non permesso: resta grande nella finestra */ }
}

function exitAnimFullscreen() {
    if (!animFullscreenElement()) return;
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    if (!exit) return;
    try {
        const p = exit.call(document);
        if (p && p.catch) p.catch(() => { });
    } catch (err) { /* già uscito */ }
}

function closeAnimViewer() {
    if (!animViewHome) return;
    stopAnimMove();
    exitAnimFullscreen();
    const viewer = document.getElementById('animViewer');
    const box = document.querySelector('.unit_box_top');
    if (box && animViewHome.parentNode) {
        moveAnimBox(box, animViewHome.parentNode, animViewHome);
        box.classList.remove('is-viewer', 'is-fitting');
        ANIM_VIEW_VARS.forEach(name => box.style.removeProperty(name));
    }
    animViewHome.remove();
    animViewHome = null;
    animViewSize = '';
    if (viewer) viewer.classList.remove('is-open');
    document.body.classList.remove('anim-viewer-open');
    markAnimSizeButtons();
    requestAnimationFrame(fitVisibleGifs);
}

// grandezza della finestra per la scelta fatta e per lo schermo
function sizeAnimViewer() {
    if (!animViewSize) return;
    const viewer = document.getElementById('animViewer');
    const box = document.querySelector('.unit_box_top');
    if (!viewer || !box) return;
    const stage = viewer.querySelector('.anim-viewer-stage');
    const bar = viewer.querySelector('.anim-viewer-bar');
    const cs = getComputedStyle(viewer);
    const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const gap = parseFloat(cs.rowGap) || 0;
    const border = stage.offsetWidth - stage.clientWidth || 4;
    const maxW = window.innerWidth - padX - border;
    const maxH = window.innerHeight - padY - bar.offsetHeight - gap - border;
    // stessa forma dello sfondo: il più grande possibile, ma non più della grandezza scelta
    let zoom = Math.min(maxW / DUNGEON_STAGE_W, maxH / DUNGEON_STAGE_H);
    const want = ANIM_VIEW_SIZES[animViewSize];
    if (want) zoom = Math.min(zoom, want);
    const w = Math.max(320, Math.floor(DUNGEON_STAGE_W * zoom));
    const h = Math.round(w * DUNGEON_STAGE_H / DUNGEON_STAGE_W);
    stage.style.width = (w + border) + 'px';
    stage.style.height = (h + border) + 'px';
    placeAnimInViewer(box, w, h);
    requestAnimationFrame(fitVisibleGifs);
}

// grandezza e posizione dell'unità: tutta l'animazione dentro la finestra
function placeAnimInViewer(box, w, h) {
    // grandezza normale: i personaggi crescono come lo sfondo (nella scheda lo sfondo è alto circa 430px)
    let scale = ANIM_VIEW_PIXEL_SCALE * h / 430;
    let x = w * ANIM_VIEW_UNIT_X - w / 2;   // a destra, come nel gioco
    const ext = animViewFit && animViewFit.ext;
    if (ext) {
        const mx = w * ANIM_FIT_MARGIN, my = h * ANIM_FIT_MARGIN;
        const ground = h * animViewGround / 100;
        // se l'animazione non entra, l'unità diventa più piccola
        // (anche quando dietro di lei andrebbe oltre il bordo destro: così non si sposta mai verso sinistra)
        scale = Math.min(scale,
            (w - 2 * mx) / Math.max(1, ext.left + ext.right),
            (w * (1 - ANIM_VIEW_UNIT_X) - mx) / Math.max(1, ext.right),
            (ground - my) / Math.max(1, ext.up),
            (h - ground - my) / Math.max(1, ext.down));
        // in orizzontale: a destra come nel gioco; se un attacco andrebbe oltre il bordo sinistro,
        // ancora un po' più a destra (mai più a sinistra)
        const minX = mx + scale * ext.left;
        const maxX = w - mx - scale * ext.right;
        x = Math.min(Math.max(w * ANIM_VIEW_UNIT_X, minX), maxX) - w / 2;
    }
    // per lo spostamento durante l'attacco: dove sta l'unità e fin dove può andare a sinistra
    animViewPlace = {
        w,
        home: x + w / 2,
        minSpot: ext ? w * ANIM_FIT_MARGIN + scale * ext.left : w * ANIM_FIT_MARGIN
    };
    box.style.setProperty('--viewer-scale', scale.toFixed(4));
    box.style.setProperty('--viewer-anim-x', x.toFixed(1) + 'px');
}

// misura l'unità aperta (una volta sola per unità)
function startAnimFit() {
    const unit = currentUnitOpen;
    if (!unit) return null;
    const key = JSON.stringify(unit.animations || {});
    if (!animViewFit || animViewFit.key !== key) {
        const fit = { key, ext: null, ready: false };
        animViewFit = fit;
        Promise.race([
            measureUnitAnimations(unit),
            new Promise(resolve => setTimeout(() => resolve(null), ANIM_FIT_TIMEOUT))
        ]).catch(() => null).then(ext => {
            fit.ext = ext;
            fit.ready = true;
            if (animViewFit !== fit) return;
            const box = document.querySelector('.unit_box_top');
            if (box) box.classList.remove('is-fitting');
            sizeAnimViewer();
        });
    }
    return animViewFit;
}

// nella finestra: finché le misure non sono pronte l'unità resta nascosta
function fitAnimViewer() {
    const box = document.querySelector('.unit_box_top');
    const fit = startAnimFit();
    if (box) box.classList.toggle('is-fitting', !!fit && !fit.ready);
}

// fin dove arrivano default, idle e atk, misurato dal "punto a terra" dell'unità
// (in pixel come nella scheda con --pixel-scale 1): { left, right, up, down }
async function measureUnitAnimations(unit) {
    const files = ['default', 'idle', 'atk'].map(t => pickAnimationSrc(unit.animations?.[t] || ''));
    const list = await Promise.all(files.map(measureAnimFile));
    // come nella scheda: il punto a terra è quello del default (o dell'idle), se la tela è uguale
    const anchor = list.find(m => m && m.ground);
    let ext = null;
    list.forEach(m => {
        if (!m || !m.fileScale) return;
        const g = (anchor && anchor.w === m.w && anchor.h === m.h) ? anchor.ground : m.ground;
        if (!g) return;
        const k = m.fileScale;
        const e = {
            left: (g.x - m.left) * m.w * k,
            right: (m.right - g.x) * m.w * k,
            up: (g.y - m.top) * m.h * k,
            down: (m.bottom - g.y) * m.h * k
        };
        ext = ext ? {
            left: Math.max(ext.left, e.left),
            right: Math.max(ext.right, e.right),
            up: Math.max(ext.up, e.up),
            down: Math.max(ext.down, e.down)
        } : e;
    });
    // quanto dura l'attacco (serve per trovare l'attacco dentro il default)
    if (ext && list[2] && list[2].duration) ext.atkDur = list[2].duration;
    return ext;
}

function measureAnimFile(src) {
    if (!src) return Promise.resolve(null);
    if (!animExtentCache.has(src)) {
        animExtentCache.set(src, (isVideoFile(src) ? measureAnimVideo(src) : measureAnimImage(src)).catch(() => null));
    }
    return animExtentCache.get(src);
}

// guarda tutti i fotogrammi e ricorda il rettangolo dove c'è qualcosa di visibile
function animFrameScanner(w, h) {
    const cw = Math.max(1, Math.min(w, 240));
    const ch = Math.max(1, Math.round(cw * h / w));
    const canvas = document.createElement('canvas');
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let minX = cw, maxX = -1, minY = ch, maxY = -1;
    return {
        add(frame) {
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(frame, 0, 0, cw, ch);
            const d = ctx.getImageData(0, 0, cw, ch).data;
            for (let y = 0; y < ch; y++) {
                const row = y * cw * 4;
                for (let x = 0; x < cw; x++) {
                    if (d[row + x * 4 + 3] < ANIM_FIT_ALPHA) continue;
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        },
        result() {
            if (maxX < 0) return null;
            return { left: minX / cw, right: (maxX + 1) / cw, top: minY / ch, bottom: (maxY + 1) / ch };
        }
    };
}

// punto a terra del primo fotogramma (lo stesso calcolo della scheda)
function animGroundOf(el) {
    const m = measureCharacter(el);
    if (!m || m.charX === undefined) return null;
    return { x: 0.5 - parseFloat(m.charX) / 100, y: 0.5 - parseFloat(m.charY) / 100 };
}

function seekVideo(v, t) {
    return new Promise(resolve => {
        const done = () => { clearTimeout(timer); v.removeEventListener('seeked', done); resolve(); };
        const timer = setTimeout(done, 2000);
        v.addEventListener('seeked', done);
        v.currentTime = t;
    });
}

// .webm (PC e Android): si salta da un fotogramma all'altro
function measureAnimVideo(src) {
    return new Promise(resolve => {
        const v = document.createElement('video');
        v.muted = true;
        v.playsInline = true;
        v.preload = 'auto';
        let finished = false;
        const finish = result => {
            if (finished) return;
            finished = true;
            clearTimeout(timer);
            v.removeAttribute('src');
            v.load();
            resolve(result);
        };
        const timer = setTimeout(() => finish(null), ANIM_FIT_TIMEOUT);
        v.onerror = () => finish(null);
        v.onloadeddata = async () => {
            v.onloadeddata = null;
            try {
                const w = v.videoWidth, h = v.videoHeight;
                if (!w || !h) { finish(null); return; }
                const ground = animGroundOf(v);
                const fileScale = pixelFileScale(v, w);
                // alcuni .webm non dicono quanto durano: si va alla fine per saperlo
                if (!Number.isFinite(v.duration)) await seekVideo(v, 1e5);
                const duration = Number.isFinite(v.duration) ? v.duration : 0;
                const scan = animFrameScanner(w, h);
                const steps = Math.min(600, Math.ceil(duration * ANIM_FIT_FPS));
                for (let i = 0; i <= steps; i++) {
                    await seekVideo(v, Math.min(Math.max(0, duration - 0.01), i / ANIM_FIT_FPS));
                    scan.add(v);
                }
                const box = scan.result();
                finish(box ? { w, h, ground, fileScale, duration, ...box } : null);
            } catch (err) {
                finish(null);
            }
        };
        v.src = src;
    });
}

// .webp e .gif animate: si leggono tutti i fotogrammi (dove il browser lo permette)
async function measureAnimImage(src) {
    if (!('ImageDecoder' in window)) return null;
    const img = new Image();
    img.src = src;
    await img.decode();
    const w = img.naturalWidth, h = img.naturalHeight;
    if (!w || !h) return null;
    const ground = animGroundOf(img);
    const fileScale = pixelFileScale(img, w);
    const resp = await fetch(src);
    if (!resp.ok) return null;
    const type = (resp.headers.get('content-type') || '').split(';')[0].trim()
        || (GIF_RE.test(src) ? 'image/gif' : 'image/webp');
    const decoder = new ImageDecoder({ data: await resp.arrayBuffer(), type });
    await decoder.tracks.ready;
    const count = decoder.tracks.selectedTrack ? decoder.tracks.selectedTrack.frameCount : 1;
    const scan = animFrameScanner(w, h);
    for (let i = 0; i < count; i++) {
        const { image } = await decoder.decode({ frameIndex: i });
        scan.add(image);
        image.close();
    }
    decoder.close();
    const box = scan.result();
    return box ? { w, h, ground, fileScale, ...box } : null;
}

document.addEventListener('click', e => {
    const btn = e.target.closest && e.target.closest('[data-anim-size]');
    if (btn) openAnimViewer(btn.dataset.animSize);
});

// appena il mouse arriva sui bottoni si comincia già a misurare: la finestra si apre prima pronta
document.addEventListener('pointerover', e => {
    if (e.target.closest && e.target.closest('#animSizePicker')) startAnimFit();
});

// Esc chiude la finestra (se è aperta la Full Art, Esc chiude prima quella)
window.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !animViewSize) return;
    if (document.getElementById('fullArtModal')?.classList.contains('is-open')) return;
    e.stopImmediatePropagation();
    closeAnimViewer();
}, true);

window.addEventListener('resize', sizeAnimViewer);
window.addEventListener('sitelanguagechange', updateAnimViewerTexts);

// uscito dallo schermo intero (Esc o tasto del browser): la finestra resta aperta, "Grande"
['fullscreenchange', 'webkitfullscreenchange'].forEach(name => document.addEventListener(name, () => {
    if (!animFullscreenElement() && animViewSize === 'full') {
        animViewSize = 'large';
        markAnimSizeButtons();
    }
    sizeAnimViewer();
}));

// la Full Art si apre sopra la scheda: prima si esce dallo schermo intero, se no non si vedrebbe
document.addEventListener('click', e => {
    if (animFullscreenElement() && e.target.closest && e.target.closest('#btn_btm5_container')) exitAnimFullscreen();
}, true);

/* ==========================================================================
   SPOSTAMENTO DURANTE L'ATTACCO (solo nella finestra "Guarda in grande")
   Come nel gioco:
     - le unità che si MUOVONO (spade, asce, lance, pugni...) nel default, quando
       parte l'attacco, scattano verso il nemico (a sinistra), attaccano e tornano
       al loro posto a destra; nell'atk stanno già a sinistra, davanti al nemico;
     - le unità che si TELETRASPORTANO nel default spariscono e ricompaiono davanti
       al nemico; nell'atk stanno già a sinistra;
     - le unità che NON si muovono (archi, magie...) attaccano ferme a destra.
   Il tipo di movimento è quello dei dati del gioco ("move type" dell'attacco):
   1 = si muove, 2 = teletrasporto, 3 = fermo. Qui sotto ci sono solo le unità
   2 e 3: tutte le altre si muovono.
   ========================================================================== */
const ANIM_MOVE_TELEPORT = new Set(('10181,10182,10302,10503,10504,10505,11096,11097,20365,20366,20644,20645,20646,20886,20887,21106,21107,'
    + '30424,30425,30624,30625,30626,30627,30822,30823,31066,31067,40233,40234,40235,40236,40313,40314,40315,40316,40423,40424,40425,'
    + '40473,40474,40475,40856,40857,50011,50012,50013,50014,50015,50112,50113,50114,50115,50116,50263,50264,50265,50333,50334,50413,'
    + '50414,50415,50525,50864,50865,50866,51106,51107,51147,51256,51257,51317,51336,51337,60084,60085,60095,60096,60097,60142,60143,'
    + '60144,60151,60152,60153,60154,60155,60175,60176,60177,60191,60192,60224,60273,60274,60275,60293,60294,60295,60533,60534,60535,'
    + '60536,60643,60644,60645,60914,60915,60916,61006,61007,61036,61086,61087,61125,61126,61196,61197,61207,61286,61287,720167,750122,'
    + '750166,750167,810108,810277,810278,810408,810418,810437,810438,810517,810518,810718,810798,820357,820358,820567,820568,820577,'
    + '820578,820668,820687,820688,820747,820748,820798,820898,820938,820948,830044,830045,830047,830048,830325,830326,830327,830328,'
    + '830408,830504,830505,830688,840325,840326,840327,840437,840438,850154,850155,850156,850157,850158,850328,850417,850418,850437,'
    + '850438,850568,850928,860034,860108,860148,860255,860256,860258,860356,860357,860417,860418,860437,860438,860517,860518,860547,'
    + '860548,860577,860578,861008').split(','));
const ANIM_MOVE_STAY = new Set(('10040,10041,10042,10081,10082,10083,10092,10093,10094,10095,10130,10131,10132,10133,10191,10222,10223,'
    + '10312,10313,10323,10324,10373,10374,10375,10452,10522,10563,10564,10612,10613,10704,10705,10855,10884,10885,10886,20040,20041,'
    + '20042,20081,20082,20083,20092,20093,20094,20095,20112,20113,20114,20115,20130,20131,20132,20133,20152,20153,20154,20155,20156,'
    + '20157,20162,20163,20164,20165,20191,20212,20213,20214,20215,20217,20253,20254,20255,20273,20274,20275,20276,20302,20433,20434,'
    + '20435,20442,20694,20695,20696,20704,20705,20706,20754,20755,20756,20804,20805,20806,21036,21037,21086,21087,30021,30022,30023,'
    + '30024,30025,30040,30041,30042,30050,30051,30052,30071,30072,30073,30081,30082,30083,30092,30093,30094,30095,30112,30113,30114,'
    + '30115,30116,30122,30123,30124,30125,30130,30131,30132,30133,30181,30182,30191,30293,30294,30295,30303,30304,30313,30314,30315,'
    + '30316,30393,30394,30432,30494,30495,30533,30534,30535,30674,30675,30676,30764,30765,30786,30907,30916,30917,30946,30947,30986,'
    + '30987,30996,30997,40021,40022,40023,40024,40025,40061,40062,40063,40081,40082,40083,40092,40093,40094,40095,40130,40131,40132,'
    + '40133,40162,40163,40164,40165,40166,40167,40191,40262,40283,40284,40285,40293,40294,40295,40343,40344,40345,40346,40353,40354,'
    + '40355,40432,40513,40514,40515,40714,40715,40716,40802,40803,40866,40867,41036,41037,50040,50041,50042,50071,50072,50073,50092,'
    + '50093,50094,50095,50102,50103,50104,50105,50106,50120,50121,50122,50123,50191,50242,50243,50253,50254,50255,50256,50344,50354,'
    + '50463,50464,50465,50612,50623,50624,50643,50644,50645,50672,50673,50682,50683,50786,50844,50845,50955,51075,51076,51112,51113,'
    + '51227,51367,60040,60041,60042,60061,60062,60063,60071,60072,60073,60092,60093,60094,60120,60121,60122,60123,60162,60163,60164,'
    + '60165,60201,60243,60244,60245,60425,60435,60445,60584,60585,60613,60614,60692,60693,60894,60895,60896,60974,60975,60976,61026,'
    + '61027,61107,710164,710165,710166,710176,710234,710237,720012,720153,720154,720155,720157,720217,720226,720227,720237,720244,'
    + '720247,720254,720255,730113,730114,730115,730125,730146,730186,730227,730257,730264,730302,740133,740134,740135,740176,740226,'
    + '740227,740284,740285,750003,750012,750136,750137,750153,750154,750155,750156,750186,760006,760153,760154,760164,760165,760166,'
    + '760247,760264,810003,810004,810005,810006,810034,810124,810125,810204,810205,810206,810265,810266,810337,810338,810427,810428,'
    + '810557,810558,810617,810618,810657,810658,810687,810688,810708,810900,820003,820004,820005,820006,820034,820044,820045,820047,'
    + '820048,820124,820125,820147,820148,820204,820205,820206,820287,820288,820437,820438,820507,820508,820547,820548,820657,820658,'
    + '820717,820718,820757,820758,820867,820868,820900,820958,830034,830124,830125,830134,830135,830146,830147,830148,830277,830278,'
    + '830297,830298,830377,830378,830437,830438,830525,830526,830527,830528,830557,830558,830587,830588,830597,830598,830628,830697,'
    + '830698,830757,830758,830798,830818,830827,830828,830838,830867,830868,830888,830900,830978,830998,840003,840004,840005,840006,'
    + '840034,840044,840045,840047,840048,840114,840115,840116,840117,840118,840148,840155,840156,840204,840205,840206,840287,840288,'
    + '840357,840358,840367,840368,840567,840568,840587,840627,840628,840657,840658,840688,840708,840748,840757,840758,840767,840768,'
    + '840788,840848,840868,840878,840888,840900,840998,850003,850004,850005,850006,850013,850014,850015,850017,850018,850034,850047,'
    + '850048,850134,850135,850146,850147,850148,850165,850166,850167,850196,850197,850198,850205,850206,850287,850288,850297,850298,'
    + '850315,850316,850317,850318,850357,850358,850397,850398,850547,850548,850557,850558,850627,850628,850637,850638,850647,850648,'
    + '850657,850658,850688,850808,850900,850958,850988,851018,860104,860105,860107,860127,860128,860156,860158,860165,860166,860167,'
    + '860377,860378,860568,860687,860688,860728,860757,860758,860787,860788,860798,860808,860867,860868,860900,860958,87102601,'
    + '87102602,87102603,87202601,87202602,87202603,87302601,87302602,87302603,87402601,87402602,87402603,87502601,87502602,87502603,'
    + '87602601,87602602,87602603').split(','));
const ANIM_MOVE_SPOT_X = 0.40;   // dove arriva chi si muove (0 = bordo sinistro, 1 = bordo destro)
const ANIM_MOVE_GO = 0.4;        // secondi per andare verso il nemico
const ANIM_MOVE_BACK = 0.35;     // secondi per tornare al proprio posto
let animViewPlace = null;        // posizione dell'unità nella finestra (la calcola placeAnimInViewer)
let animMove = null;             // movimento in corso

// 1 = si muove, 2 = teletrasporto, 3 = fermo
function unitMoveType(u) {
    const id = String(u && u.realId);
    if (ANIM_MOVE_STAY.has(id)) return 3;
    if (ANIM_MOVE_TELEPORT.has(id)) return 2;
    return 1;
}

// di quanti pixel si sposta verso sinistra (tutto l'attacco resta dentro la finestra)
function animMoveDistance() {
    const p = animViewPlace;
    if (!p) return 0;
    const spot = Math.max(p.w * ANIM_MOVE_SPOT_X, p.minSpot);
    return Math.max(0, p.home - spot);
}

function startAnimMove() {
    stopAnimMove();
    const run = { raf: 0, motion: null, phase: 'start', t0: 0, lastT: 0, offset: 0, paused: null };
    animMove = run;
    const tick = now => {
        if (animMove !== run) return;
        run.raf = requestAnimationFrame(tick);
        stepAnimMove(run, now);
    };
    run.raf = requestAnimationFrame(tick);
}

function stopAnimMove() {
    const run = animMove;
    if (!run) return;
    animMove = null;
    cancelAnimationFrame(run.raf);
    resetAnimMove(run);
}

// l'unità torna al suo posto e l'animazione riprende a girare da sola
function resetAnimMove(run) {
    ['default', 'atk'].forEach(type => {
        const c = document.getElementById(`container_${type}`);
        if (c) { c.style.removeProperty('transform'); c.style.removeProperty('opacity'); }
    });
    const v = run.paused;
    if (v && v.paused && v.getAttribute('src') && v.style.display !== 'none') {
        const p = v.play();
        if (p && p.catch) p.catch(() => { });
    }
    run.motion = null;
    run.phase = 'start';
    run.offset = 0;
    run.paused = null;
}

// quale animazione si vede: 'default' o 'atk' (nell'idle non c'è attacco)
function animMoveMotion() {
    for (const type of ['atk', 'default']) {
        const c = document.getElementById(`container_${type}`);
        const v = document.getElementById(`video_${type}`);
        if (c && c.style.display !== 'none' && v && v.style.display !== 'none' && v.getAttribute('src')
            && v.readyState >= 1 && Number.isFinite(v.duration) && v.duration > 0) return { type, c, v };
    }
    return null;
}

function stepAnimMove(run, now) {
    const shown = animViewSize ? animMoveMotion() : null;
    const type = unitMoveType(currentUnitOpen);
    const d = animMoveDistance();
    // il "default" è idle + attacco: l'attacco comincia quando mancano i secondi dell'atk
    const atkDur = animViewFit && animViewFit.ext && animViewFit.ext.atkDur;
    let atkStart = null;
    if (shown) {
        if (shown.type === 'atk') atkStart = 0;
        else if (atkDur && shown.v.duration > atkDur + 0.2) atkStart = shown.v.duration - atkDur;
    }
    if (!shown || atkStart === null || type === 3 || d < 2) {
        if (run.motion) resetAnimMove(run);
        return;
    }
    if (run.motion !== shown.type) {
        resetAnimMove(run);
        run.motion = shown.type;
    }
    const { c, v } = shown;
    const ease = p => p * p * (3 - 2 * p);
    const el = (now - run.t0) / 1000;
    const next = phase => { run.phase = phase; run.t0 = now; };
    const pause = t => { v.pause(); v.currentTime = t; run.paused = v; };
    const play = () => { run.paused = null; const p = v.play(); if (p && p.catch) p.catch(() => { }); };
    if (shown.type === 'atk') {
        // atk: chi si muove sta già davanti al nemico (a sinistra) e attacca senza spostarsi
        if (run.paused) play();
        run.phase = 'start';
        run.offset = d;
        c.style.transform = `translateX(${(-d).toFixed(1)}px)`;
        c.style.opacity = '';
        return;
    }
    let opacity = 1;
    switch (run.phase) {
        case 'start':
            run.offset = 0;
            next('idle');
            break;
        case 'idle':
            // si aspetta la fine dell'idle, poi si va verso il nemico
            run.offset = 0;
            if (v.paused) play();
            if (v.currentTime >= atkStart - 0.03) { pause(atkStart); next('go'); }
            break;
        case 'go': {
            const p = Math.min(1, el / ANIM_MOVE_GO);
            if (type === 2) { run.offset = p < 0.5 ? 0 : d; opacity = Math.abs(1 - 2 * p); }
            else run.offset = ease(p) * d;
            if (p >= 1) {
                run.offset = d;
                run.lastT = v.currentTime;
                play();
                next('hit');
            }
            break;
        }
        case 'hit':
            // l'attacco davanti al nemico, fino alla fine dell'animazione
            run.offset = d;
            if (el > 0.15 && (v.ended || v.currentTime + 0.05 < run.lastT)) {
                pause(0);
                next('back');
            } else {
                run.lastT = v.currentTime;
            }
            break;
        case 'back': {
            const p = Math.min(1, el / ANIM_MOVE_BACK);
            if (type === 2) { run.offset = p < 0.5 ? d : 0; opacity = Math.abs(1 - 2 * p); }
            else run.offset = (1 - ease(p)) * d;
            if (p >= 1) {
                run.offset = 0;
                play();
                next('idle');
            }
            break;
        }
    }
    c.style.transform = run.offset ? `translateX(${(-run.offset).toFixed(1)}px)` : '';
    c.style.opacity = opacity < 1 ? opacity.toFixed(2) : '';
}

/* ==========================================================================
   ANIMAZIONI DEI DUNGEON (le "micro animazioni" del gioco sopra gli sfondi)
   Ogni sfondo img/Arena Battle/dungeon_battle_<ID>.jpg può avere delle animazioni
   nella cartella video/battle dungeon/BattleDungeon<ID>...:
   nuvole, nebbia, luci, pioggia, farfalle, foglie, acqua, interi pezzi di scena...
   Sono i file originali del gioco: un file .sam (formato "SuperAnim", lo stesso che
   usa il gioco) e le immagini .png dei pezzi. Il sito li legge e li disegna da solo
   (niente video, niente .webp), seguendo le stesse regole del lettore originale:
   - ogni fotogramma dice quali pezzi togliere, quali aggiungere e dove spostarli;
   - quando un pezzo si sposta senza una nuova grandezza/rotazione, torna dritto e
     alla sua grandezza normale (come nel gioco);
   - tra un fotogramma e l'altro il movimento è morbido (posizione, grandezza e
     trasparenza a metà strada), come nel gioco;
   - la parte "loop" si ripete all'infinito.
   - Le cartelle di ogni sfondo sono elencate in data/dungeon-fx.json:
       "list": { "ID sfondo": [cartelle] }, "sam": { cartella: nome del .sam se è diverso }
   - Nel nome della cartella: "Front" = davanti all'unità, altrimenti dietro.
   - Come si disegna ogni pezzo lo decide il pezzo stesso:
       tutto nero (maschere e bande nere del gioco) -> non si disegna;
       immagine piena con lo sfondo nero (luci) -> si somma: il nero sparisce;
       luci leggere nelle cartelle "Add" -> si sommano;
       tutto il resto (scenari, cristalli, fuoco, nuvole...) -> normale, con la sua trasparenza.
   - La scena del gioco è 640x640 e lo sfondo 640x440 sta al centro (100 pixel più
     in basso): le animazioni seguono lo sfondo, stesso ritaglio e stessa grandezza.
   ========================================================================== */
const DUNGEON_FX_LIST_URL = '../data/dungeon-fx.json';
const DUNGEON_FX_FOLDER = '../video/battle dungeon/';
const DUNGEON_STAGE_W = 640;     // grandezza dello sfondo nel gioco
const DUNGEON_STAGE_H = 440;
const DUNGEON_STAGE_TOP = 100;   // lo sfondo comincia 100 pixel sotto il bordo della scena (640x640)
const DUNGEON_FX_FPS = 24;       // se il file non lo dice
const DUNGEON_TWIPS = 20;        // nei file .sam le misure sono in ventesimi di pixel

let dungeonFxList = null;
let dungeonFxListPromise = null;
const dungeonSamCache = new Map();     // cartella -> Promise(animazione pronta)
let dungeonFxRun = null;               // animazione in corso

function loadDungeonFxList() {
    if (!dungeonFxListPromise) {
        dungeonFxListPromise = fetch(DUNGEON_FX_LIST_URL)
            .then(r => (r.ok ? r.json() : {}))
            .catch(() => ({}))
            .then(data => { dungeonFxList = data || {}; return dungeonFxList; });
    }
    return dungeonFxListPromise;
}

/* Legge un file .sam esattamente come il lettore del gioco (SuperAnimCore).
   Ogni fotogramma diventa una lista di pezzi:
   [numero del pezzo, immagine, a, b, c, d, x, y, trasparenza]  (x e y in ventesimi di pixel)
   Quasi tutti i file hanno la grandezza della scena scritta in numeri corti (2 byte);
   alcuni (es. 8300104) in numeri lunghi (4 byte): si prova il primo modo e, se il file
   non torna alla perfezione, il secondo. */
function parseDungeonSam(buffer) {
    try {
        const anim = readDungeonSam(buffer, false);
        if (anim.complete) return anim;
    } catch (err) { /* si prova l'altro modo */ }
    return readDungeonSam(buffer, true);
}

function readDungeonSam(buffer, longHeader) {
    const v = new DataView(buffer);
    const u8 = new Uint8Array(buffer);
    let p = 0;
    const byte = () => u8[p++];
    const short = () => { const n = v.getInt16(p, true); p += 2; return n; };
    const ushort = () => { const n = v.getUint16(p, true); p += 2; return n; };
    const long = () => { const n = v.getInt32(p, true); p += 4; return n; };
    const text = () => { const n = ushort(); let s = ''; for (let i = 0; i < n; i++) s += String.fromCharCode(u8[p + i]); p += n; return s; };

    if (String.fromCharCode(u8[0], u8[1], u8[2], u8[3]) !== 'MAS.') throw new Error('file .sam non valido');
    p = 8;                                        // "MAS." + versione
    const fps = byte() || DUNGEON_FX_FPS;
    p += longHeader ? 16 : 8;                     // x, y, larghezza, altezza della scena (640x640)

    // immagini dei pezzi: nome, grandezza e posizione di base
    const nImg = ushort();
    const images = [];
    for (let i = 0; i < nImg; i++) {
        const name = text();
        const w = short(), h = short();
        const l0 = long(), l1 = long(), l2 = long(), l3 = long();
        const tx = short(), ty = short();
        // sul foglio (y verso il basso): a = l0, c = l1, b = l2, d = l3
        images.push({ name, w, h, a: l0 / 65536, b: l2 / 65536, c: l1 / 65536, d: l3 / 65536, tx, ty });
    }

    const nFrames = ushort();
    const objects = new Map();                    // pezzi sulla scena in questo momento
    const frames = [];
    const labels = {};
    for (let f = 0; f < nFrames && p < u8.length; f++) {
        const flags = byte();
        if (flags & 0x01) {                        // pezzi tolti
            const n = byte();
            for (let i = 0; i < n; i++) objects.delete(ushort());
        }
        if (flags & 0x02) {                        // pezzi aggiunti
            const n = byte();
            for (let i = 0; i < n; i++) {
                const id = ushort() & 0x07FF;
                const img = byte();
                const o = objects.get(id) || { a: 1, b: 0, c: 0, d: 1, x: 0, y: 0 };
                o.img = img;
                o.alpha = 1;
                objects.set(id, o);
            }
        }
        if (flags & 0x04) {                        // pezzi spostati
            const n = byte();
            for (let i = 0; i < n; i++) {
                const head = ushort();
                const id = head & 0x03FF;
                const o = objects.get(id) || { img: 0, alpha: 1 };
                // come nel gioco: senza grandezza o rotazione nuova il pezzo torna dritto
                o.a = 1; o.b = 0; o.c = 0; o.d = 1;
                if (head & 0x1000) {               // grandezza, rotazione e inclinazione
                    const l0 = long(), l1 = long(), l2 = long(), l3 = long();
                    o.a = l0 / 65536; o.c = l1 / 65536; o.b = l2 / 65536; o.d = l3 / 65536;
                } else if (head & 0x4000) {        // solo rotazione (millesimi di radiante)
                    const r = short() / 1000;
                    o.a = Math.cos(r); o.c = -Math.sin(r); o.b = Math.sin(r); o.d = Math.cos(r);
                }
                if (head & 0x0800) { o.x = long(); o.y = long(); }
                else { o.x = short(); o.y = short(); }
                if (head & 0x2000) {               // colore e trasparenza
                    p += 3;
                    o.alpha = byte() / 255;
                }
                objects.set(id, o);
            }
        }
        if (flags & 0x08) labels[text()] = f;      // nome del punto ("start", "loop")
        const list = [];
        [...objects.keys()].sort((x, y) => x - y).forEach(id => {
            const o = objects.get(id);
            if (images[o.img]) list.push([id, o.img, o.a, o.b, o.c, o.d, o.x, o.y, o.alpha]);
        });
        frames.push(list);
    }
    const loopFrame = Math.min(labels.loop !== undefined ? labels.loop : 0, Math.max(0, frames.length - 1));
    return { fps, images, frames, loopFrame, complete: p === u8.length && frames.length === nFrames };
}

/* Come si disegna un pezzo, guardando l'immagine (controllato su tutti i 348 dungeon):
   'skip'   = rettangolo tutto nero (maschere e bande nere del gioco): non si disegna
   'add'    = luce che si somma allo sfondo: il nero sparisce e resta la parte colorata.
              Solo nelle cartelle con "Add" nel nome, e solo per i pezzi che sono luci:
              trasparenti e leggeri, oppure scuri con dentro la luce (lens flare, raggi...)
   'normal' = tutto il resto (scenari, cristalli, nuvole, nebbia...), con la sua trasparenza */
function dungeonPieceBlend(pic, folderIsAdd) {
    try {
        const w = Math.max(1, Math.min(64, pic.naturalWidth)), h = Math.max(1, Math.min(64, pic.naturalHeight));
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const ctx = c.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(pic, 0, 0, w, h);
        const px = ctx.getImageData(0, 0, w, h).data;
        const total = w * h;
        let visible = 0, bright = 0, opaque = 0, alphaSum = 0, darkAlpha = 0, lumAlpha = 0;
        for (let i = 0; i < px.length; i += 4) {
            const a = px[i + 3];
            if (a < 8) continue;
            visible++;
            const m = Math.max(px[i], px[i + 1], px[i + 2]);
            if (m > 12) bright++;
            if (a > 250) opaque++;
            alphaSum += a;
            if (m < 40) darkAlpha += a;
            lumAlpha += a * (0.3 * px[i] + 0.59 * px[i + 1] + 0.11 * px[i + 2]);
        }
        if (visible > 0 && bright === 0 && opaque / total > 0.9) return 'skip';   // rettangolo nero
        if (!folderIsAdd) return 'normal';
        if (opaque / total < 0.12) return 'add';                                  // luce leggera
        const darkPart = alphaSum ? darkAlpha / alphaSum : 0;                     // quanto è scuro
        const lum = alphaSum ? lumAlpha / alphaSum : 0;                           // luminosità media
        if (darkPart > 0.6 || lum < 30) return 'add';                             // luce su fondo scuro
        return 'normal';
    } catch (err) {
        return 'normal';
    }
}

function loadDungeonAnim(folder, samName) {
    if (!dungeonSamCache.has(folder)) {
        const base = DUNGEON_FX_FOLDER + folder + '/';
        const folderIsAdd = /add/i.test(folder);
        const promise = fetch(base + (samName || folder + '.sam'))
            .then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
            .then(buffer => {
                const anim = parseDungeonSam(buffer);
                return Promise.all(anim.images.map(im => new Promise(resolve => {
                    const img = new Image();
                    img.decoding = 'async';
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(null);
                    img.src = base + im.name;
                }))).then(pics => {
                    anim.pics = pics;
                    anim.blend = pics.map(pic => (pic ? dungeonPieceBlend(pic, folderIsAdd) : 'skip'));
                    return anim;
                });
            })
            .catch(() => null);
        dungeonSamCache.set(folder, promise);
        // si tengono in memoria solo le ultime 40 animazioni usate
        while (dungeonSamCache.size > 40) dungeonSamCache.delete(dungeonSamCache.keys().next().value);
    }
    return dungeonSamCache.get(folder);
}

/* I quattro fogli dove si disegna:
   dietro l'unità (normale e luci) e davanti all'unità (normale e luci).
   I fogli delle luci si SOMMANO allo sfondo (come nel gioco): il nero non aggiunge
   niente, quindi sparisce e resta solo la parte colorata. */
const DUNGEON_FX_LAYERS = ['back', 'back-add', 'front', 'front-add'];

function dungeonFxCanvases(box) {
    const gif = box.querySelector(':scope > .unit_gif');
    const out = {};
    DUNGEON_FX_LAYERS.forEach(name => {
        let c = box.querySelector(`:scope > .dungeon-fx-${name}`);
        if (!c) {
            c = document.createElement('canvas');
            c.className = `dungeon-fx dungeon-fx-${name}`;
            if (name.startsWith('back')) {
                // dietro l'unità: prima dell'animazione dell'unità
                box.insertBefore(c, gif || box.firstChild);
            } else {
                // davanti all'unità: subito dopo
                const after = box.querySelector(':scope > .dungeon-fx-front') || gif;
                box.insertBefore(c, after ? after.nextSibling : null);
            }
        }
        out[name] = c;
    });
    return out;
}

function stopDungeonFx() {
    if (dungeonFxRun) {
        cancelAnimationFrame(dungeonFxRun.raf);
        dungeonFxRun.stopped = true;
        dungeonFxRun = null;
    }
    document.querySelectorAll('.dungeon-fx').forEach(c => {
        const ctx = c.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, c.width, c.height);
        c.classList.remove('is-on');
    });
}

// ID dello sfondo dal nome del file: ".../dungeon_battle_10100.jpg" -> "10100"
function dungeonIdFromBackground(src) {
    let s = String(src || '');
    try { s = decodeURIComponent(s); } catch (err) { /* già leggibile */ }
    const m = s.match(/dungeon_battle_([^/.'")]+)\.\w+/i);
    return m ? m[1] : '';
}

// fotogramma da mostrare al tempo t (secondi): numero intero + quanto manca al prossimo
function dungeonFramePos(anim, t) {
    const n = anim.frames.length;
    let pos = Math.max(0, t * anim.fps);
    if (pos >= n) {
        const loopLen = Math.max(1, n - anim.loopFrame);
        pos = anim.loopFrame + (pos - n) % loopLen;
    }
    const f = Math.min(n - 1, Math.floor(pos));
    return { f, frac: f >= n - 1 ? 0 : pos - f };
}

async function startDungeonFx(backgroundSrc) {
    stopDungeonFx();
    const box = document.querySelector('.unit_box_top');
    if (!box) return;
    const id = dungeonIdFromBackground(backgroundSrc);
    const data = await loadDungeonFxList();
    const list = ((data.list || data)[id]) || [];
    const samNames = data.sam || {};
    if (!list.length) return;
    const run = { stopped: false, raf: 0 };
    dungeonFxRun = run;
    const anims = (await Promise.all(list.map(folder => loadDungeonAnim(folder, samNames[folder]).then(anim => (anim ? { folder, anim } : null)))))
        .filter(Boolean);
    if (run.stopped || !anims.length) return;
    const canvases = dungeonFxCanvases(box);
    const used = new Set();
    anims.forEach(({ folder, anim }) => {
        const side = /front/i.test(folder) ? 'front' : 'back';
        anim.blend.forEach(b => { if (b !== 'skip') used.add(side + (b === 'add' ? '-add' : '')); });
    });
    DUNGEON_FX_LAYERS.forEach(name => canvases[name].classList.toggle('is-on', used.has(name)));
    const start = performance.now();

    const draw = now => {
        if (run.stopped) return;
        if (!box.isConnected || !box.offsetWidth) { run.raf = requestAnimationFrame(draw); return; }
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const W = box.clientWidth, H = box.clientHeight;
        // stesso ritaglio dello sfondo (background-size: cover, al centro)
        const s = Math.max(W / DUNGEON_STAGE_W, H / DUNGEON_STAGE_H);
        const ox = (W - DUNGEON_STAGE_W * s) / 2, oy = (H - DUNGEON_STAGE_H * s) / 2 - DUNGEON_STAGE_TOP * s;
        const k = s * dpr / DUNGEON_TWIPS;
        const t = Math.max(0, now - start) / 1000;
        const ctxs = {};
        const cw = Math.round(W * dpr), ch = Math.round(H * dpr);
        DUNGEON_FX_LAYERS.forEach(name => {
            const c = canvases[name];
            if (!used.has(name)) return;
            if (c.width !== cw || c.height !== ch) { c.width = cw; c.height = ch; }
            const ctx = c.getContext('2d');
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, cw, ch);
            ctxs[name] = ctx;
        });
        anims.forEach(({ folder, anim }) => {
            if (!anim.frames.length) return;
            const side = /front/i.test(folder) ? 'front' : 'back';
            const { f, frac } = dungeonFramePos(anim, t);
            const cur = anim.frames[f];
            // pezzi del fotogramma dopo, per il movimento morbido
            let next = null;
            if (frac > 0) {
                next = new Map();
                anim.frames[f + 1].forEach(o => next.set(o[0], o));
            }
            cur.forEach(o => {
                const im = o[1];
                const blend = anim.blend[im];
                if (blend === 'skip') return;
                const pic = anim.pics[im];
                if (!pic) return;
                let [, , a, b, c, d, x, y, alpha] = o;
                const n2 = next && next.get(o[0]);
                if (n2 && n2[1] === im) {
                    const q = frac, r = 1 - frac;
                    a = a * r + n2[2] * q; b = b * r + n2[3] * q; c = c * r + n2[4] * q; d = d * r + n2[5] * q;
                    x = x * r + n2[6] * q; y = y * r + n2[7] * q; alpha = alpha * r + n2[8] * q;
                }
                if (alpha <= 0.004) return;
                const ctx = ctxs[side + (blend === 'add' ? '-add' : '')];
                if (!ctx) return;
                const info = anim.images[im];
                ctx.globalCompositeOperation = blend === 'add' ? 'lighter' : 'source-over';
                ctx.globalAlpha = Math.min(1, alpha);
                ctx.setTransform(k, 0, 0, k, ox * dpr, oy * dpr);
                ctx.transform(a, b, c, d, x, y);
                ctx.transform(info.a, info.b, info.c, info.d, info.tx, info.ty);
                ctx.drawImage(pic, 0, 0);
            });
        });
        run.raf = requestAnimationFrame(draw);
    };
    run.raf = requestAnimationFrame(draw);
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
    } else if (rarity === 'omni' || rarity === 'dream') {
        className = 'rarity-omni';
    } else {
        className = 'rarity-rainbow';
    }

    fx.classList.remove('rarity-white', 'rarity-gold', 'rarity-red', 'rarity-rainbow', 'rarity-omni');
    fx.classList.add(className);

    circle.src = getEvocationCircle(unit.rarity);
    circle.onerror = function () { circle.style.display = 'none'; fx.classList.add('no-circle'); placeFullArt(); };
    circle.onload = function () { circle.style.display = 'block'; fx.classList.remove('no-circle'); placeFullArt(); };

    // luce che "respira" sul cerchio e onde di luce che si allargano (come nel gioco):
    // si creano una volta sola, il colore lo decide il CSS in base alla rarità
    if (!fx.querySelector('.fullart-circle-glow')) {
        const glow = document.createElement('span');
        glow.className = 'fullart-circle-glow';
        circle.after(glow);
        let last = glow;
        for (let i = 0; i < 3; i++) {
            const ring = document.createElement('span');
            ring.className = 'fullart-ripple';
            ring.style.animationDelay = `${i}s`;   // un'onda ogni secondo
            last.after(ring);
            last = ring;
        }
    }

    // particelle: palline di luce sfocate dei colori della rarità, intorno al cerchio, che salgono veloci;
    // le Omni/Dream hanno anche stelline che brillano. Il ritardo negativo fa partire
    // ogni particella "a metà": così ci sono già tutte appena si apre la Full Art.
    const phone = window.matchMedia('(max-width: 600px)').matches;
    const colors = FULLART_PARTICLE_COLORS[className.replace('rarity-', '')] || FULLART_PARTICLE_COLORS.white;
    const rand = (min, max) => min + Math.random() * (max - min);
    stars.replaceChildren();
    for (let i = 0; i < (phone ? 36 : 60); i++) {
        const dot = document.createElement('span');
        dot.className = 'fullart-bokeh';
        const big = Math.random() < 0.25;          // alcune più grandi e più sfocate
        const size = (big ? rand(16, 32) : rand(6, 14)) * (phone ? 0.75 : 1);
        const duration = rand(1, 2.2);
        dot.style.setProperty('--x', `${rand(0, 100)}%`);
        // più fitte vicino al cerchio (in basso nella zona), meno in alto
        dot.style.setProperty('--y', `${(100 - Math.pow(Math.random(), 1.6) * 100).toFixed(1)}%`);
        dot.style.setProperty('--size', `${size.toFixed(1)}px`);
        dot.style.setProperty('--c', colors[Math.floor(Math.random() * colors.length)]);
        dot.style.setProperty('--alpha', (big ? rand(0.4, 0.7) : rand(0.75, 1)).toFixed(2));
        dot.style.setProperty('--dx', `${rand(-20, 20).toFixed(0)}px`);
        dot.style.setProperty('--dy', `${(rand(-140, -40) * (phone ? 0.7 : 1)).toFixed(0)}px`);
        dot.style.setProperty('--duration', `${duration.toFixed(2)}s`);
        dot.style.setProperty('--delay', `${(-Math.random() * duration).toFixed(2)}s`);
        stars.appendChild(dot);
    }
    if (className === 'rarity-omni') {
        // stelline: partono dalla parte bassa (intorno al cerchio), salgono girando
        // e si rimpiccioliscono fino a sparire
        for (let i = 0; i < (phone ? 12 : 18); i++) {
            const star = document.createElement('span');
            star.className = 'fullart-sparkle';
            const duration = rand(1.6, 2.8);
            star.style.setProperty('--x', `${rand(3, 97)}%`);
            star.style.setProperty('--y', `${rand(60, 100)}%`);
            star.style.setProperty('--size', `${(rand(14, 28) * (phone ? 0.8 : 1)).toFixed(1)}px`);
            star.style.setProperty('--rise', `${(rand(140, 300) * (phone ? 0.7 : 1)).toFixed(0)}px`);
            star.style.setProperty('--spin', `${((Math.random() < 0.5 ? -1 : 1) * rand(240, 480)).toFixed(0)}deg`);
            star.style.setProperty('--duration', `${duration.toFixed(2)}s`);
            star.style.setProperty('--delay', `${(-Math.random() * duration).toFixed(2)}s`);
            stars.appendChild(star);
        }
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

    const [images] = await Promise.all([getValidFullArts(unitId), loadFullArtCenters()]);
    currentFullArtImages = images;
    currentFullArtIndex = 0;

    if (currentFullArtImages.length === 0) return;

    setupFullArtEvocationFx(currentUnitOpen);
    fullArtQuoteStep = 0;
    renderFullArtQuote();

    updateFullArtDisplay();

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    isFullArtOpen = true;
    // ora che la modale si vede, l'illustrazione si mette sul cerchio
    requestAnimationFrame(placeFullArt);

    if (button) button.classList.add('active');
}

/* ==========================================================================
   FULL ART: tutti i PERSONAGGI della stessa grandezza, con i piedi sul centro del
   cerchio evocativo (il puntino).
   - In orizzontale conta il personaggio, non la spada, la falce o le ali che vanno
     lontano da un lato: le gambe stanno intorno al centro.
   - La grandezza la decide l'altezza del personaggio (dalla cima della testa ai piedi),
     non quella di tutto il disegno: fantasmi, catene, fiamme ed effetti sopra o sotto
     non lo fanno più diventare piccolo.
   - Il personaggio è alto FULLART_CHAR_SIZE dello spazio tra il puntino e il bordo in
     alto (meno FULLART_TOP_MARGIN); su telefono e tablet in verticale, dove lo schermo
     è stretto, FULLART_CHAR_SIZE_NARROW.
   - Il disegno non viene mai tagliato: se uno con effetti enormi non ci sta,
     si rimpicciolisce quel tanto che serve (FULLART_EFFECT_OVERFLOW = 1).

   Per TUTTE le Full Art già presenti (normali ed Europa) i punti giusti sono già
   segnati e controllati una per una nel file data/fullart-centers.json:
   nome -> [sinistra, alto, destra, basso, centro del personaggio, piedi, cima della testa],
   tutti da 0 a 1 rispetto alla grandezza del file.
   Per le Full Art nuove, che non sono nel file, il sito lo calcola da solo.
   ========================================================================== */
const FULLART_TOP_MARGIN = 24;     // spazio libero sopra l'illustrazione (px)
const FULLART_MAX_UPSCALE = 2;     // un'immagine piccola si ingrandisce al massimo 2 volte
const FULLART_CHAR_SIZE = 0.7;         // altezza del personaggio su PC: 0.7 = 70% dello spazio sopra il puntino
const FULLART_CHAR_SIZE_NARROW = 0.58; // la stessa cosa su telefono e tablet in verticale
const FULLART_EFFECT_OVERFLOW = 1;     // quanto il disegno può uscire dallo schermo (1 = mai, niente tagli)
/* Quello che sta SOTTO i piedi (acqua, fuoco, onde) non deve uscire dal cerchio colorato:
   arriva al massimo a FULLART_BELOW_CIRCLE di metà altezza del cerchio.
   Se è troppo lungo, prima il personaggio si alza un po' sopra il puntino (fluttua, al massimo
   FULLART_MAX_LIFT di metà altezza del cerchio), e solo se non basta diventa più piccolo. */
const FULLART_BELOW_CIRCLE = 0.7;
const FULLART_MAX_LIFT = 0.5;
const fullArtMeasureCache = new Map();
const FULLART_CENTERS_URL = '../data/fullart-centers.json';
let fullArtCenters = null;          // dati di data/fullart-centers.json (quando arrivano)
let fullArtCentersPromise = null;

// si scarica una volta sola, la prima volta che si apre una Full Art
function loadFullArtCenters() {
    if (!fullArtCentersPromise) {
        fullArtCentersPromise = fetch(FULLART_CENTERS_URL)
            .then(r => (r.ok ? r.json() : {}))
            .catch(() => ({}))
            .then(data => { fullArtCenters = data || {}; return fullArtCenters; });
    }
    return fullArtCentersPromise;
}

// nome della Full Art nel file dei centri: "40014" oppure "eu/710145" per quelle Europa
function fullArtCenterKey(src) {
    let path = String(src || '');
    try { path = decodeURIComponent(path); } catch (err) { /* nome già leggibile */ }
    const m = path.match(/unit_ills_full_([^/?#]+?)\.png/i);
    if (!m) return '';
    return (/img Europe\//i.test(path) ? 'eu/' : '') + m[1];
}

/* SISTEMAZIONI A MANO: se un'illustrazione non viene centrata bene, qui si scrive dove
   deve andare il centro del cerchio, da 0 (bordo sinistro del file) a 1 (bordo destro).
   Il nome è quello del file senza "unit_ills_full_" e ".png" (per quelle Europa
   si mette davanti "eu/"). Vince sul file dei centri. Esempio:
       '40014': 0.62,
       'eu/710145': 0.48,
   Vuota = si usano il file dei centri e il calcolo automatico. */
const FULLART_CENTER_FIX = {
};

// Dove sta il personaggio in orizzontale (in pixel della copia piccola px, larga cw):
// 1) il viso: la zona color pelle più grande, compatta, nella parte alta e non ai bordi;
// 2) senza viso (armature, draghi, mostri): le gambe, cioè le strisce verticali lunghe
//    che arrivano fino in fondo al disegno;
// 3) altrimenti il centro del disegno.
// l, r, t, b = bordi del disegno (b = prima riga sotto il disegno).
function fullArtAnchorX(px, cw, ch, l, r, t, b) {
    const n = cw * ch;
    const W = r - l, H = b - t;
    const skin = new Uint8Array(n);
    let filled = 0;
    for (let i = 0; i < n; i++) {
        const R = px[i * 4], G = px[i * 4 + 1], B = px[i * 4 + 2], A = px[i * 4 + 3];
        if (A > 32) filled++;
        if (A > 200 && R >= 180 && G >= 130 && G <= 238 && B >= 100 && B <= 220 &&
            R - G >= 8 && R - G <= 75 && G - B >= 8 && G - B <= 70) skin[i] = 1;
    }
    const seen = new Uint8Array(n), stack = new Int32Array(n);
    const minArea = Math.max(6, filled * 0.004);
    let best = null;
    for (let i = 0; i < n; i++) {
        if (!skin[i] || seen[i]) continue;
        let sp = 0, area = 0, sumY = 0, x0 = cw, x1 = -1, y0 = ch, y1 = -1;
        stack[sp++] = i;
        seen[i] = 1;
        while (sp) {
            const j = stack[--sp], x = j % cw, y = (j - x) / cw;
            area++;
            sumY += y;
            if (x < x0) x0 = x;
            if (x > x1) x1 = x;
            if (y < y0) y0 = y;
            if (y > y1) y1 = y;
            if (x > 0 && skin[j - 1] && !seen[j - 1]) { seen[j - 1] = 1; stack[sp++] = j - 1; }
            if (x < cw - 1 && skin[j + 1] && !seen[j + 1]) { seen[j + 1] = 1; stack[sp++] = j + 1; }
            if (y > 0 && skin[j - cw] && !seen[j - cw]) { seen[j - cw] = 1; stack[sp++] = j - cw; }
            if (y < ch - 1 && skin[j + cw] && !seen[j + cw]) { seen[j + cw] = 1; stack[sp++] = j + cw; }
        }
        const bw = x1 - x0 + 1, bh = y1 - y0 + 1, cx = (x0 + x1 + 1) / 2;
        if (area < minArea) continue;                          // troppo piccola
        if (area / (bw * bh) < 0.35) continue;                 // pezzi sparsi (piume, effetti)
        if (bw > 0.3 * W || bh > 0.35 * H) continue;           // troppo grande per un viso
        if (sumY / area >= t + H * 0.75) continue;             // troppo in basso
        if (Math.abs(cx - (l + r) / 2) > 0.25 * W) continue;   // troppo di lato
        if (!best || area > best.area) best = { area, cx };
    }
    if (best) return best.cx;

    // gambe: pixel nella fascia in basso che fanno parte di strisce verticali lunghe
    const run = Math.max(3, Math.round(H * 0.5)), band = Math.max(3, Math.round(H * 0.1));
    let sum = 0, count = 0;
    for (let x = l; x < r; x++) {
        let y = 0;
        while (y < ch) {
            if (px[(y * cw + x) * 4 + 3] > 32) {
                const s0 = y;
                while (y < ch && px[(y * cw + x) * 4 + 3] > 32) y++;
                if (y - s0 >= run) {
                    const lo = Math.max(s0, b - band), hi = Math.min(y, b);
                    if (hi > lo) { sum += (x + 0.5) * (hi - lo); count += hi - lo; }
                }
            } else {
                y++;
            }
        }
    }
    return count ? sum / count : (l + r) / 2;
}

// bordi del disegno (senza la parte trasparente) e dove sta il personaggio, in pixel del file
function measureFullArt(img) {
    const key = img.currentSrc || img.src;
    if (fullArtMeasureCache.has(key)) return fullArtMeasureCache.get(key);
    const w = img.naturalWidth, h = img.naturalHeight;
    if (!w || !h) return null;
    let m = { left: 0, right: w, top: 0, bottom: h, anchorX: w / 2, head: 0 };
    // Full Art già controllata: i suoi numeri sono nel file dei centri
    const saved = fullArtCenters && fullArtCenters[fullArtCenterKey(key)];
    if (Array.isArray(saved) && saved.length >= 6) {
        m = {
            left: saved[0] * w, top: saved[1] * h, right: saved[2] * w,
            bottom: saved[5] * h,                 // i piedi (sotto possono esserci effetti)
            fullBottom: saved[3] * h,             // il bordo basso vero del disegno
            anchorX: saved[4] * w,
            head: (saved.length >= 7 ? saved[6] : saved[1]) * h   // cima della testa
        };
    } else try {
        const k = Math.min(1, 200 / Math.max(w, h));      // basta una copia piccola
        const cw = Math.max(1, Math.round(w * k)), ch = Math.max(1, Math.round(h * k));
        const canvas = document.createElement('canvas');
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, cw, ch);
        const px = ctx.getImageData(0, 0, cw, ch).data;
        let l = cw, r = -1, t = ch, b = -1;
        for (let y = 0; y < ch; y++) {
            for (let x = 0; x < cw; x++) {
                if (px[(y * cw + x) * 4 + 3] > 32) {
                    if (x < l) l = x;
                    if (x > r) r = x;
                    if (y < t) t = y;
                    b = y;
                }
            }
        }
        if (r >= 0) {
            m = {
                left: l / k, right: (r + 1) / k, top: t / k, bottom: (b + 1) / k,
                anchorX: fullArtAnchorX(px, cw, ch, l, r + 1, t, b + 1) / k,
                head: t / k,
                fullBottom: (b + 1) / k
            };
        }
    } catch (err) {
        console.warn('Misura della Full Art non riuscita:', err);
    }
    // sistemazione a mano (FULLART_CENTER_FIX), se c'è
    const fix = parseFloat(FULLART_CENTER_FIX[fullArtCenterKey(key)]);
    if (fix >= 0 && fix <= 1) m.anchorX = fix * w;
    fullArtMeasureCache.set(key, m);
    return m;
}

function placeFullArt() {
    const img = document.getElementById('fullArtModalImage');
    const circle = document.getElementById('fullArtEvocationCircle');
    const box = img && img.parentElement;
    if (!img || !box || !img.naturalWidth || !img.complete) return;
    const boxRect = box.getBoundingClientRect();
    if (!boxRect.width || !boxRect.height) return;            // modale non ancora visibile
    const m = measureFullArt(img);
    if (!m) return;
    // il punto dove va il personaggio: il centro del cerchio (se il cerchio manca, poco sotto metà schermo)
    let dotX = boxRect.width / 2, dotY = boxRect.height * 0.62;
    const cr = (circle && circle.style.display !== 'none') ? circle.getBoundingClientRect() : null;
    if (cr && cr.width && cr.height) {
        dotX = cr.left + cr.width / 2 - boxRect.left;
        dotY = cr.top + cr.height / 2 - boxRect.top;
    }
    const side = window.innerWidth > 1024 ? 80 : 8;           // su PC ai lati ci sono le frecce
    // spazio per il personaggio (sugli schermi stretti, telefono e tablet in verticale,
    // non più alto di quanto è largo lo spazio)
    const narrowRoom = (boxRect.width - 2 * side) * 0.85;
    const narrow = narrowRoom < dotY - FULLART_TOP_MARGIN;    // telefono, tablet in verticale
    const room = Math.min(dotY - FULLART_TOP_MARGIN, narrowRoom);
    // 1) grandezza uguale per tutti: il personaggio (testa -> piedi) è alto FULLART_CHAR_SIZE dello spazio
    const charH = Math.max(1, m.bottom - m.head);
    const sameSize = (narrow ? FULLART_CHAR_SIZE_NARROW : FULLART_CHAR_SIZE) * room / charH;
    // 2) grandezza con cui tutto il disegno (anche gli effetti) sta nello schermo:
    //    sopra, ai lati e anche sotto il puntino
    const fit = [(dotY - FULLART_TOP_MARGIN) / Math.max(1, m.bottom - m.top)];
    if (m.anchorX > m.left) fit.push((dotX - side) / (m.anchorX - m.left));
    if (m.right > m.anchorX) fit.push((boxRect.width - side - dotX) / (m.right - m.anchorX));
    const fitAll = Math.min(...fit);
    // si usa la grandezza uguale per tutti; gli effetti possono uscire dallo schermo,
    // ma non troppo (FULLART_EFFECT_OVERFLOW)
    let s = Math.max(0.001, Math.min(sameSize, fitAll * FULLART_EFFECT_OVERFLOW, FULLART_MAX_UPSCALE));
    // 3) sotto i piedi: dentro il cerchio (e dentro lo schermo)
    let lift = 0;                                             // quanto il personaggio sta sopra il puntino (px)
    const under = (m.fullBottom || m.bottom) - m.bottom;      // pezzo di disegno sotto i piedi (px del file)
    if (under > 0) {
        const screenBelow = boxRect.height - dotY - 4;
        const hasCircle = cr && cr.height;
        const below = hasCircle ? Math.min(screenBelow, cr.height / 2 * FULLART_BELOW_CIRCLE) : screenBelow;
        const maxLift = hasCircle ? cr.height / 2 * FULLART_MAX_LIFT : 0;
        const topRoom = dotY - FULLART_TOP_MARGIN;
        // se anche alzandolo del massimo non ci sta, si rimpicciolisce
        s = Math.min(s, (below + maxLift) / under);
        // alzandolo, deve comunque restare tutto sotto il bordo in alto
        if (s * under > below) s = Math.min(s, (topRoom + below) / Math.max(1, m.fullBottom - m.top));
        s = Math.max(0.001, s);
        lift = Math.min(maxLift, Math.max(0, s * under - below));
    }
    img.style.setProperty('--fa-left', (dotX - m.anchorX * s).toFixed(1) + 'px');
    img.style.setProperty('--fa-top', (dotY - lift - m.bottom * s).toFixed(1) + 'px');
    img.style.setProperty('--fa-width', (img.naturalWidth * s).toFixed(1) + 'px');
    img.classList.add('is-fitted');
    img.classList.remove('is-loading');
}

window.addEventListener('resize', () => {
    if (isFullArtOpen) placeFullArt();
});

function updateFullArtDisplay() {
    const image = document.getElementById('fullArtModalImage');
    const prevBtn = document.getElementById('fullArtPrev');
    const nextBtn = document.getElementById('fullArtNext');
    const counter = document.getElementById('fullArtCounter');

    if (!image) return;

    image.onerror = null;
    // nascosta finché non è messa al suo posto (niente salti)
    image.classList.add('is-loading');
    image.onload = placeFullArt;
    image.src = currentFullArtImages[currentFullArtIndex];
    if (image.complete) requestAnimationFrame(placeFullArt);

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
    // e deve stare in fondo al disegno (non una parte scura del corpo, come ali o capelli)
    if (relaxed && best.e < bottom - 0.12 * (bottom - top)) return null;
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
    // quante righe in fondo sono solo luce trasparente: se sono poche rispetto a un alone
    // tondo, è una striscia piatta di luce sul terreno (es. Sorrow Sibyl Eliza): i piedi
    // stanno al centro della striscia
    let softH = 0;
    for (let y = lowest - 1; y >= top; y--) {
        let v = 0, sf = 0;
        for (let x = 0; x < cw; x++) {
            const a = pixels[(y * cw + x) * 4 + 3];
            if (a >= CENTER_MIN_ALPHA) { v++; if (a < 235) sf++; }
        }
        if (!v || sf / v < 0.8) break;
        softH++;
    }
    const expected = maxW / SHADOW_RATIO;
    if (softH < 0.35 * expected) return (lowest - softH / 2) / ch;
    return Math.max(top, bottom - expected / 2) / ch;
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

/* OMBRA SISTEMATA A MANO: per le unità dove il sito sbaglia a trovare l'ombra
   (per esempio un'aura scura scambiata per l'ombra), qui si scrive dove sta davvero.
   Nome = nome del file senza "-default", "-idle", "-atk" (vale per tutte e tre).
   x = centro dell'ombra da sinistra, y = bordo basso dell'ombra, cy = centro dell'ombra
   (da 0 a 1 rispetto alla grandezza del file). */
const ANIM_GROUND_FIX = {
    'Phantom-Victor-Zephyr': { x: 0.5855, y: 0.762, cy: 0.742 }   // Zefiro fantasma vincente
};

function animGroundFix(el) {
    let src = String(el.currentSrc || el.src || '');
    try { src = decodeURIComponent(src); } catch (err) { /* nome già leggibile */ }
    const name = src.split(/[?#]/)[0].split('/').pop().replace(/-(default|idle|atk)\.\w+$/i, '');
    return ANIM_GROUND_FIX[name] || null;
}

// Misura il personaggio sul primo fotogramma del file: punto a terra (ombra o piedi) e grandezza.
// Restituisce null se il file non è ancora pronto. Si usa per l'animazione grande e per le basi delle evoluzioni.
function measureCharacter(el) {
    const w = el.naturalWidth || el.videoWidth;
    const h = el.naturalHeight || el.videoHeight;
    if (!w || !h) return null;
    const m = { w, h };
    // file di un altro sito (library.bravefrontier.jp): i pixel non si possono leggere,
    // si lascia il personaggio centrato senza scrivere errori nella console
    if (!evoCanReadPixels(el)) return m;

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
            // ombra sistemata a mano (ANIM_GROUND_FIX), se c'è
            const fix = animGroundFix(el);
            if (fix) { groundX = fix.x; groundY = fix.y; }
            // per le basi delle evoluzioni: il centro dell'ombra (o i piedi, se l'ombra non c'è)
            m.standX = groundX;
            m.standY = fix ? fix.cy : (shadow ? shadow.cy : (blob ? blob.cy : (glowY !== null ? glowY : groundY)));
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
    closeAnimViewer();   // se è aperta la finestra "Guarda in grande", il riquadro torna nella scheda

    const modalEl = document.getElementById('unitModal');
    if (modalEl) modalEl.style.display = 'none';
    document.body.classList.remove('modal-open');
    stopDungeonFx();

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

    // "Guarda in grande": bottoni sotto le statistiche e finestra (solo PC)
    ensureAnimViewerUI();
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