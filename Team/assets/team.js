/* ==========================================================================
   PAGINA SQUADRA (Team/team.html)
   - Formazione di 6 unità come nel gioco, con l'animazione idle sullo sfondo di un dungeon
   - Riquadri delle unità con statistiche per tipo (Lord, Anima...) e imp al massimo
   - Totale della squadra, consigli automatici e guida
   - La squadra si salva nell'indirizzo della pagina: basta copiare il link per condividerla
   Le funzioni per sfondi, animazioni e dungeon sono le stesse della lista unità (main.js).
   ========================================================================== */
(function () {
    'use strict';

/* --------------------------------------------------------------------------
   PARTI IN COMUNE CON LA LISTA UNITÀ (copiate da Units/assets/main.js)
   -------------------------------------------------------------------------- */
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

// posizione della tela della gif dentro la tela del webm (misurata sulle unità, 0.1 = 10%)
const GIF_IN_WEBM = { left: -0.1377, top: -0.0912, width: 0.8838 };

const GIF_RE = /\.gif(\?.*)?$/i;

function readCssNumber(el, name, fallback) {
    const v = parseFloat(getComputedStyle(el).getPropertyValue(name));
    return Number.isFinite(v) ? v : fallback;
}

const CENTER_SAMPLE_WIDTH = 2700;   // i video .webm si leggono interi (rimpiccioliti, l'ombra si confonde e l'unità si sposta)

const CENTER_SAMPLE_WIDTH_IMG = 2600;   // le .webp si leggono intere, pixel per pixel (anche quelle molto larghe)

const CENTER_MIN_ALPHA = 40;       // sotto questo valore il pixel è considerato trasparente

const CENTER_TRIM = 0.02;

const GROUND_TRIM = 0.003;         // per il bordo basso si ignora pochissimo, così l'ombra resta dentro

const GROUND_BAND = 0.12;          // la "parte bassa" usata per il centro orizzontale: 12% dell'altezza

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

function loadDungeonFxList() {
    if (!dungeonFxListPromise) {
        dungeonFxListPromise = fetch(DUNGEON_FX_LIST_URL)
            .then(r => (r.ok ? r.json() : {}))
            .catch(() => ({}))
            .then(data => { dungeonFxList = data || {}; return dungeonFxList; });
    }
    return dungeonFxListPromise;
}

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

// true se il file è un video (mp4/webm/mov), false se è un'immagine animata (gif/webp/png)
function isVideoFile(src) {
    return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(String(src || ''));
}
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

/* ==========================================================================
   PAGINA SQUADRA
   ========================================================================== */
const UNITS_URL = '../data/units.json';
const BATTLE_URL = '../data/unit-battle.json';
const TYPES = ['base', 'lord', 'anima', 'breaker', 'guardian', 'oracle'];
const TYPE_LABELS = { base: 'Base', lord: 'Lord', anima: 'Anima', breaker: 'Breaker', guardian: 'Guardian', oracle: 'Oracle' };
const DEFAULT_TYPE = 'lord';

/* POSTI DELLA FORMAZIONE (come nel gioco: 3 file da 2, a destra; i nemici sarebbero a sinistra)
   x, y = dove l'unità tocca terra, da 0 a 1 sullo sfondo (0,0 = in alto a sinistra).
   L'ordine è quello dei riquadri sotto: 1 2 / 3 4 / 5 6 */
const TEAM_SLOTS = [
    { x: 0.55, y: 0.56 }, { x: 0.79, y: 0.53 },   // fila dietro
    { x: 0.66, y: 0.71 }, { x: 0.89, y: 0.74 },   // fila in mezzo
    { x: 0.58, y: 0.88 }, { x: 0.81, y: 0.86 }    // fila davanti
];
const TEAM_UNIT_SCALE = 0.55;  // grandezza dei personaggi (più grande = personaggi più grandi)
// animazioni prese da library.bravefrontier.jp (tela 640x400): i pixel non si possono leggere,
// i piedi stanno sempre più o meno qui. In basso a sinistra hanno il logo del gioco: si nasconde (CSS .is-outside)
const OUTSIDE_GROUND_X = 0.68;
const OUTSIDE_GROUND_Y = 0.685;
const PICK_PAGE = 120;          // unità mostrate per volta nella finestra di scelta

/* ELEMENTI: chi batte chi (fa più danni) */
const ELEMENTS = ['fire', 'water', 'earth', 'thunder', 'light', 'dark'];
const ELEMENT_STRONG = { fire: ['earth'], earth: ['thunder'], thunder: ['water'], water: ['fire'], light: ['dark'], dark: ['light'] };
const ELEMENT_COLORS = { fire: '#e8542e', water: '#3d8ee8', earth: '#4fb34a', thunder: '#e8c52e', light: '#f2f2f2', dark: '#9b5de5' };

/* RUOLI delle BB/SBB/UBB (si leggono dalla descrizione in inglese del gioco) */
const ROLES = [
    { key: 'heal', rx: /heal|recover(s|y)? (hp|of hp)|restores? hp|hp recovery|hp regen/i, need: true },
    { key: 'bbfill', rx: /bb gauge|bc (drop|fill)|fills? (bb|gauge)|bb fill/i, need: true },
    { key: 'mitig', rx: /reduc\w* damage|damage (taken|reduction)|mitigat/i, need: true },
    { key: 'atk', rx: /(boost|increase|raise)s?\w* (to )?(atk|attack)|atk boost|atk, def|atk & def/i, need: true },
    { key: 'status', rx: /negates? (all )?status|status (ailment )?(negation|null)|removes? (all )?status/i, need: false },
    { key: 'spark', rx: /spark/i, need: false },
    { key: 'crit', rx: /critical/i, need: false },
    { key: 'element', rx: /adds? \w+(, \w+)* (and \w+ )?elements?/i, need: false },
    { key: 'debuff', rx: /(reduces?|lowers?) (enemy|enemies'|foes'?)? ?(atk|def|rec)|\b(poison|weak|sick|injury|curse|paralysis)\b/i, need: false }
];

/* TESTI DELLA PAGINA (lingue: it, en, es, fr, zh-CN, ja) */
const TT = {
    title: { it: 'Squadra', en: 'Team', es: 'Equipo', fr: 'Équipe', 'zh-CN': '队伍', ja: 'パーティ' },
    intro: {
        it: 'Scegli 6 unità come nel gioco (5 tue + 1 amico), il loro tipo e se hanno gli imp al massimo: vedi come stanno in battaglia, falle attaccare un nemico cliccando sui loro riquadri e leggi i consigli per migliorare la squadra.',
        en: 'Pick 6 units like in the game (5 of yours + 1 friend), their type and whether they have max imps: see how they look in battle, make them attack an enemy by clicking their cards and read the tips to improve the team.'
    },
    imp: { it: 'Imp al massimo', en: 'Max imps', es: 'Imps al máximo', fr: 'Imps au max', 'zh-CN': 'Imp全满', ja: 'インプ最大' },
    changeBg: { it: 'Cambia sfondo', en: 'Change area', es: 'Cambiar fondo', fr: 'Changer de décor', 'zh-CN': '更换背景', ja: '背景を変更' },
    copyLink: { it: 'Copia link della squadra', en: 'Copy team link', es: 'Copiar enlace del equipo', fr: "Copier le lien de l'équipe", 'zh-CN': '复制队伍链接', ja: 'パーティのリンクをコピー' },
    copied: { it: 'Link copiato!', en: 'Link copied!', es: '¡Enlace copiado!', fr: 'Lien copié !', 'zh-CN': '已复制链接！', ja: 'リンクをコピーしました！' },
    clear: { it: 'Svuota', en: 'Clear', es: 'Vaciar', fr: 'Vider', 'zh-CN': '清空', ja: 'クリア' },
    add: { it: '+ Aggiungi unità', en: '+ Add unit', es: '+ Añadir unidad', fr: '+ Ajouter une unité', 'zh-CN': '+ 添加单位', ja: '+ ユニットを追加' },
    change: { it: 'Cambia', en: 'Change', es: 'Cambiar', fr: 'Changer', 'zh-CN': '更换', ja: '変更' },
    remove: { it: 'Togli', en: 'Remove', es: 'Quitar', fr: 'Retirer', 'zh-CN': '移除', ja: '外す' },
    leader: { it: 'Leader', en: 'Leader', es: 'Líder', fr: 'Chef', 'zh-CN': '队长', ja: 'リーダー' },
    friend: { it: 'Amico', en: 'Friend', es: 'Amigo', fr: 'Ami', 'zh-CN': '好友', ja: 'フレンド' },
    totals: { it: 'Totale della squadra', en: 'Team total', es: 'Total del equipo', fr: "Total de l'équipe", 'zh-CN': '队伍合计', ja: 'パーティ合計' },
    hits: { it: 'Colpi attacco normale', en: 'Normal attack hits', es: 'Golpes del ataque normal', fr: "Coups de l'attaque normale", 'zh-CN': '普通攻击连击', ja: '通常攻撃ヒット数' },
    maxBc: { it: 'CB max per turno', en: 'Max BC per turn', es: 'BC máx. por turno', fr: 'BC max par tour', 'zh-CN': '每回合最多BC', ja: '1ターン最大BC' },
    cost: { it: 'Costo', en: 'Cost', es: 'Coste', fr: 'Coût', 'zh-CN': '消耗', ja: 'コスト' },
    advice: { it: 'Consigli per questa squadra', en: 'Tips for this team', es: 'Consejos para este equipo', fr: 'Conseils pour cette équipe', 'zh-CN': '队伍建议', ja: 'このパーティへのアドバイス' },
    guide: { it: 'Guida: come fare una squadra forte', en: 'Guide: how to build a strong team', es: 'Guía: cómo crear un equipo fuerte', fr: 'Guide : créer une équipe forte', 'zh-CN': '指南：如何组建强力队伍', ja: 'ガイド：強いパーティの作り方' },
    pickTitle: { it: "Scegli un'unità", en: 'Choose a unit', es: 'Elige una unidad', fr: 'Choisis une unité', 'zh-CN': '选择单位', ja: 'ユニットを選択' },
    search: { it: 'Cerca (nome o ID)...', en: 'Search (name or ID)...', es: 'Buscar (nombre o ID)...', fr: 'Rechercher (nom ou ID)...', 'zh-CN': '搜索（名称或ID）...', ja: '検索（名前またはID）...' },
    allRar: { it: 'Tutte le rarità', en: 'All rarities', es: 'Todas las rarezas', fr: 'Toutes les raretés', 'zh-CN': '全部稀有度', ja: '全レアリティ' },
    more: { it: 'Mostra altre unità ({n} di {t})', en: 'Show more units ({n} of {t})', es: 'Mostrar más unidades ({n} de {t})', fr: "Afficher plus d'unités ({n} sur {t})", 'zh-CN': '显示更多单位（{n}/{t}）', ja: 'もっと見る（{n} / {t}）' },
    loading: { it: 'Carico le unità...', en: 'Loading units...', es: 'Cargando unidades...', fr: 'Chargement des unités...', 'zh-CN': '正在加载单位...', ja: 'ユニットを読み込み中...' },
    empty: { it: 'La squadra è vuota: premi "+ Aggiungi unità" in uno dei 6 posti.', en: 'The team is empty: press "+ Add unit" in one of the 6 slots.' },
    enemies: { it: 'Nemici', en: 'Enemies', es: 'Enemigos', fr: 'Ennemis', 'zh-CN': '敌人', ja: '敵' },
    enemyCount: { it: 'Quanti', en: 'How many', es: 'Cuántos', fr: 'Combien', 'zh-CN': '数量', ja: '数' },
    randomEnemies: { it: 'Nemici a caso', en: 'Random enemies', es: 'Enemigos al azar', fr: 'Ennemis au hasard', 'zh-CN': '随机敌人', ja: 'ランダムな敵' },
    targetEnemy: { it: 'Cambia il nemico mostrato nella striscia con il drago', en: 'Change the enemy shown in the dragon banner' },
    teamList: { it: 'La tua squadra', en: 'Your team', es: 'Tu equipo', fr: 'Ton équipe', 'zh-CN': '你的队伍', ja: 'あなたのパーティ' },
    auto: { it: 'Attacco automatico a ogni turno', en: 'Automatic attack every turn' },
    attackAll: { it: 'Attaccano tutti', en: 'All attack', es: 'Atacan todos', fr: 'Tous attaquent', 'zh-CN': '全员攻击', ja: '全員で攻撃' },
    attackHint: { it: "Clic = attacco. Con la barra BB piena: trascina verso l'alto per la BB", en: 'Click = attack. With a full BB gauge: drag up for the BB' },
    battleHint: { it: "Clicca su un riquadro: l'unità va verso un nemico a caso e lo attacca. Se clicchi un nemico compare il mirino e tutti attaccano quello; clicca di nuovo sullo stesso nemico (o in un punto vuoto del campo) per togliere il mirino. Ogni unità attacca una volta per turno; quando tutte hanno attaccato comincia il turno dopo. I colpi riempiono la barra BB: quando è piena il riquadro si illumina e trascinandolo verso l'alto l'unità fa la BB. Se aspetti, la barra si riempie una seconda volta (dorata) per la SBB. Dal nemico colpito escono i cristalli di battaglia (riempiono la barra BB di chi ha colpito) e a volte quelli di cura. Più unità che colpiscono insieme fanno Spark. AUTO: attaccano da sole e usano anche le BB.", en: 'Click a card: the unit goes to a random enemy and attacks it. Click an enemy to show the target mark and everyone attacks that one; click the same enemy again (or an empty spot on the field) to remove the mark. Each unit attacks once per turn; when all have attacked the next turn begins. Hits fill the BB gauge: when it is full the card lights up and dragging it up makes the unit use its BB. If you wait, the gauge fills a second time (gold) for the SBB. The hit enemy drops battle crystals (they fill the BB gauge of the attacker) and sometimes heart crystals. Several units hitting together make Sparks. AUTO: they attack by themselves and also use their BBs.' },
    dmgNote: { it: 'Danni indicativi, senza buff e senza abilità leader: ATK − DEF del nemico ÷ 3, ×1,5 se il nemico è debole all\'elemento, ×0,75 se lo resiste, ×1,5 con lo Spark.', en: "Indicative damage, without buffs or leader skills: ATK − enemy DEF ÷ 3, ×1.5 if the enemy is weak to the element, ×0.75 if it resists it, ×1.5 with a Spark." },
    type: { it: 'Tipo', en: 'Type', es: 'Tipo', fr: 'Type', 'zh-CN': '类型', ja: 'タイプ' }
};

/* CONSIGLI AUTOMATICI: {..} sono parti che il codice riempie */
const AT = {
    count: { it: 'La squadra ha {n} unità su 6: nel gioco conviene riempire tutti i posti.', en: 'The team has {n} of 6 units: in the game it is best to fill every slot.' },
    noLeader: { it: "Nessun leader: scegli un'unità con il tasto L. La sua abilità leader vale per tutta la squadra.", en: 'No leader: pick a unit with the L button. Its leader skill works for the whole team.' },
    noFriend: { it: "Nessun amico: scegli un'unità con il tasto F. Anche l'abilità leader dell'amico vale per tutta la squadra.", en: "No friend: pick a unit with the F button. The friend's leader skill also works for the whole team." },
    leaderSkill: { it: 'Abilità leader di {name}:', en: '{name} leader skill:', es: 'Habilidad de líder de {name}:', fr: 'Compétence de chef de {name} :', 'zh-CN': '{name} 的队长技能：', ja: '{name}のリーダースキル：' },
    friendSkill: { it: "Abilità leader dell'amico {name}:", en: 'Friend {name} leader skill:', es: 'Habilidad de líder del amigo {name}:', fr: "Compétence de chef de l'ami {name} :", 'zh-CN': '好友 {name} 的队长技能：', ja: 'フレンド{name}のリーダースキル：' },
    elements: { it: 'Elementi: {list}.', en: 'Elements: {list}.' },
    strong: { it: 'Fanno più danni contro i nemici di: {list}.', en: 'They deal more damage to enemies of: {list}.' },
    mono: { it: "Squadra di un solo elemento: va bene se l'abilità leader premia quell'elemento, ma soffre contro i nemici che lo battono.", en: 'Single-element team: good if the leader skill rewards that element, but it struggles against enemies strong against it.' },
    rainbow: { it: 'Tanti elementi diversi: molte abilità leader danno bonus quando la squadra ha 3, 4 o più elementi diversi.', en: 'Many different elements: many leader skills give bonuses when the team has 3, 4 or more different elements.' },
    roleOk: { it: '{role}: {names}.', en: '{role}: {names}.' },
    heal: { it: 'Nessuna BB cura gli HP: aggiungi un\'unità la cui BB, SBB o UBB cura ("Recovers HP").', en: 'No BB heals HP: add a unit whose BB, SBB or UBB heals ("Recovers HP").' },
    bbfill: { it: 'Nessuna BB riempie la barra BB: le BB delle altre unità arriveranno più lentamente.', en: 'No BB fills the BB gauge: the other units will get their BB more slowly.' },
    mitig: { it: 'Nessuna BB riduce i danni: contro i boss forti serve un\'unità con "Reduces damage taken".', en: 'No BB reduces damage: against strong bosses you need a unit with "Reduces damage taken".' },
    atk: { it: "Nessuna BB aumenta l'ATK: un aumento di ATK dalla BB (si somma a quello dell'abilità leader) fa crescere molto i danni di tutta la squadra.", en: "No BB boosts ATK: an ATK boost from a BB (it adds to the leader skill one) raises the damage of the whole team a lot." },
    twice: { it: '{role} arriva dalle BB di più unità ({names}): nel gioco lo stesso tipo di aumento delle BB non si somma, quindi una di loro potrebbe fare un altro ruolo.', en: '{role} comes from the BBs of several units ({names}): in the game the same kind of BB boost does not stack, so one of them could take another role.' },
    hitsInfo: { it: 'Colpi dell\'attacco normale: {n} in tutto. Più colpi vuol dire più Spark e più CB per riempire la barra BB. I più veloci: {names}.', en: 'Normal attack hits: {n} in total. More hits means more Sparks and more BC to fill the BB gauge. The fastest: {names}.' }
};
const ROLE_NAMES = {
    heal: { it: 'Cura', en: 'Healing' },
    bbfill: { it: 'Riempie la barra BB', en: 'BB gauge fill' },
    mitig: { it: 'Riduzione dei danni', en: 'Damage reduction' },
    atk: { it: 'Aumento ATK', en: 'ATK boost' },
    status: { it: 'Protezione dagli stati alterati', en: 'Status protection' },
    spark: { it: 'Danni Spark in più', en: 'Spark damage boost' },
    crit: { it: 'Colpi critici', en: 'Critical hits' },
    element: { it: 'Aggiunge elementi', en: 'Adds elements' },
    debuff: { it: 'Indebolisce i nemici', en: 'Weakens enemies' }
};

/* GUIDA (testo fisso) */
const GUIDE = [
    {
        title: { it: '1. Leader e amico', en: '1. Leader and friend' },
        text: {
            it: "Nel gioco la squadra ha 5 unità tue e 1 unità di un amico. Valgono solo due abilità leader: quella del tuo leader e quella dell'amico. Scegli due abilità leader che si aiutano (per esempio una che aumenta l'ATK e una che aumenta gli HP o riempie la barra BB), non due uguali.",
            en: 'In the game the team has 5 of your units and 1 unit from a friend. Only two leader skills count: your leader\'s and your friend\'s. Pick two leader skills that help each other (for example one that boosts ATK and one that boosts HP or fills the BB gauge), not two identical ones.'
        }
    },
    {
        title: { it: '2. I ruoli: ognuno fa una cosa diversa', en: '2. Roles: everyone does something different' },
        text: {
            it: "Una squadra forte ha unità con compiti diversi: chi cura gli HP, chi riempie la barra BB (così le BB arrivano prima), chi riduce i danni presi, chi aumenta l'ATK. Nel gioco lo stesso tipo di aumento non si somma: due unità che aumentano l'ATK valgono come una sola, quindi meglio ruoli diversi.",
            en: 'A strong team has units with different jobs: someone heals HP, someone fills the BB gauge (so BBs come sooner), someone reduces damage taken, someone boosts ATK. In the game the same kind of boost does not stack: two units boosting ATK count as one, so different roles are better.'
        }
    },
    {
        title: { it: '3. Elementi', en: '3. Elements' },
        text: {
            it: "Fuoco batte Terra, Terra batte Tuono, Tuono batte Acqua, Acqua batte Fuoco; Luce e Oscurità si battono a vicenda. Contro un nemico debole al tuo elemento fai più danni. Alcune BB aggiungono elementi all'attacco di tutta la squadra: così colpisci il punto debole anche con unità di un altro elemento.",
            en: 'Fire beats Earth, Earth beats Thunder, Thunder beats Water, Water beats Fire; Light and Dark beat each other. Against an enemy weak to your element you deal more damage. Some BBs add elements to the whole team\'s attack, so you hit weak points even with units of another element.'
        }
    },
    {
        title: { it: '4. Combo e Spark', en: '4. Combos and Sparks' },
        text: {
            it: "Quando i colpi di due unità arrivano sullo stesso nemico nello stesso momento fanno uno Spark: più danni e più cristalli. Le unità con tanti colpi (combo) fanno più Spark e riempiono di più la barra BB. Mettere vicine unità con attacchi di durata simile aiuta a fare Spark.",
            en: "When the hits of two units land on the same enemy at the same moment they make a Spark: more damage and more crystals. Units with many hits (combos) spark more and fill the BB gauge more. Using units with similar attack timing helps you spark."
        }
    },
    {
        title: { it: '5. Tipi e imp', en: '5. Types and imps' },
        text: {
            it: "Ogni unità ha un tipo: Lord è equilibrato, Anima ha più HP e meno REC, Breaker più ATK e meno DEF, Guardian più DEF e meno ATK, Oracle più REC e meno HP. Gli imp aumentano HP, ATK, DEF e REC: con \"Imp al massimo\" vedi quanto cresce la tua squadra.",
            en: 'Every unit has a type: Lord is balanced, Anima has more HP and less REC, Breaker more ATK and less DEF, Guardian more DEF and less ATK, Oracle more REC and less HP. Imps raise HP, ATK, DEF and REC: with "Max imps" you see how much your team grows.'
        }
    },
    {
        title: { it: '6. Una squadra di esempio', en: '6. An example team' },
        text: {
            it: "1 unità che cura e riduce i danni, 1 che riempie la barra BB, 1 che aumenta l'ATK, 2-3 unità con tanti colpi che fanno danni, e un amico con un'abilità leader che aiuta quella del tuo leader. Poi guarda i consigli qui sopra: ti dicono cosa manca alla tua squadra.",
            en: '1 unit that heals and reduces damage, 1 that fills the BB gauge, 1 that boosts ATK, 2-3 units with many hits that deal damage, and a friend whose leader skill helps your leader\'s. Then check the tips above: they tell you what your team is missing.'
        }
    }
];

/* ---------- stato ---------- */
let units = [];
const unitById = new Map();
let battle = {};
const team = {
    slots: [null, null, null, null, null, null],   // { id, type }
    leader: -1,
    friend: -1,
    imp: false,
    bg: '',
    enemies: []
};
let pickSlot = -1;
let sceneRun = null;   // animazioni del dungeon dello sfondo

const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const lang = () => (window.SiteLang && window.SiteLang.get()) || 'it';
function tx(obj, vars) {
    if (!obj) return '';
    const l = lang();
    let s = obj[l] || obj.en || obj.it || '';
    if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
}
// testo nella lingua scelta: se è solo in inglese, lo traduce Google (niente "notranslate")
function txClass(obj) {
    const l = lang();
    return obj && obj[l] ? 'notranslate' : '';
}
function siteT(key, fallback) {
    return (window.SiteLang && window.SiteLang.t) ? window.SiteLang.t(key) : (fallback || key);
}
const num = v => (typeof v === 'number' ? v : parseInt(String(v || '').replace(/[^\d-]/g, ''), 10) || 0);
const fmt = n => Number(n || 0).toLocaleString('en-US');

/* ---------- dati delle unità ---------- */
function unitName(u) {
    const n = u.names || {};
    return String(n[lang()] || u.name || n.en || u.realId).replace(/,/g, '').trim();
}

function hasSkillContent(skill) {
    if (!skill) return false;
    const has = v => v && (typeof v === 'string' ? v.trim() && v.trim() !== '---' : Object.values(v).some(x => x && String(x).trim()));
    return has(skill.name) || has(skill.desc);
}

function elementKey(u) {
    return String(u && u.element || '').replace(/^Element\s+/i, '').trim().toLowerCase();
}

const statIsEmpty = v => v === undefined || v === null || String(v).trim() === '' || String(v).trim() === '---';

// come nella lista unità: le statistiche scritte in units.json vincono, quelle dei dati del gioco riempiono i buchi
function baseStats(u, type) {
    const b = battle[u.id] || {};
    const fromJson = u.stats && u.stats[type];
    const fromBattle = b.stats && b.stats[type];
    const s = {};
    ['hp', 'atk', 'def', 'rec'].forEach(k => {
        const j = fromJson && fromJson[k];
        s[k] = !statIsEmpty(j) ? num(j) : num(fromBattle && fromBattle[k]);
    });
    return s;
}

function unitStats(u, type) {
    const s = baseStats(u, type);
    const b = battle[u.id] || {};
    if (team.imp && b.imp) ['hp', 'atk', 'def', 'rec'].forEach(k => { s[k] += num(b.imp[k]); });
    return s;
}

function availableTypes(u) {
    const list = TYPES.filter(type => baseStats(u, type).hp > 0);
    return list.length ? list : ['base'];
}

function skillDesc(u, key) {
    const s = u.skills && u.skills[key];
    if (!s || !s.desc) return { text: '', en: '' };
    const en = s.desc.en || '';
    const loc = s.desc[lang()] || '';
    return { text: loc || en, en, localized: !!loc };
}

function skillName(u, key) {
    const s = u.skills && u.skills[key];
    return s && s.name ? (s.name[lang()] || s.name.en || '') : '';
}

function burstLevel(u) {
    const b = battle[u.id] || {};
    if (b.ubb || skillDesc(u, 'ubb').en) return 'ubb';
    if (b.sbb || skillDesc(u, 'sbb').en) return 'sbb';
    return 'bb';
}

function idleSrc(u) {
    const a = u.animations || {};
    return pickAnimationSrc(a.idle || '') || pickAnimationSrc(a.default || '');
}

/* ---------- squadra nell'indirizzo della pagina (link da condividere) ---------- */
// esempio: team.html?u=10017-lord,30445-breaker,,,,&l=1&f=2&imp=1&bg=10100
function teamToUrl() {
    const parts = [];
    if (team.slots.some(Boolean)) parts.push('u=' + team.slots.map(s => (s ? `${encodeURIComponent(s.id)}-${s.type}` : '')).join(','));
    if (team.leader >= 0) parts.push('l=' + (team.leader + 1));
    if (team.friend >= 0) parts.push('f=' + (team.friend + 1));
    if (team.imp) parts.push('imp=1');
    const bgId = dungeonIdFromBackground(team.bg);
    if (bgId) parts.push('bg=' + encodeURIComponent(bgId));
    if (team.enemies.length) parts.push('e=' + team.enemies.map(encodeURIComponent).join(','));
    return location.pathname + (parts.length ? '?' + parts.join('&') : '');
}

function teamFromUrl() {
    const p = new URLSearchParams(location.search);
    const u = (p.get('u') || '').split(',');
    for (let i = 0; i < 6; i++) {
        const [id, type] = String(u[i] || '').split('-');
        const unit = unitById.get(id);
        team.slots[i] = unit ? { id, type: availableTypes(unit).includes(type) ? type : defaultType(unit) } : null;
    }
    const l = parseInt(p.get('l'), 10), f = parseInt(p.get('f'), 10);
    team.leader = l >= 1 && l <= 6 && team.slots[l - 1] ? l - 1 : -1;
    team.friend = f >= 1 && f <= 6 && team.slots[f - 1] && f - 1 !== team.leader ? f - 1 : -1;
    team.imp = p.get('imp') === '1';
    const bg = p.get('bg');
    team.bg = (bg && arenaBackgrounds.find(src => dungeonIdFromBackground(src) === bg)) || '';
    team.enemies = (p.get('e') || '').split(',').filter(Boolean).slice(0, 6);
}

function saveUrl() {
    try { history.replaceState(null, '', teamToUrl()); } catch (err) { /* indirizzo non modificabile */ }
}

function defaultType(u) {
    const types = availableTypes(u);
    return types.includes(DEFAULT_TYPE) ? DEFAULT_TYPE : types[types.length - 1];
}

/* ---------- scena di battaglia ---------- */
function setBackground(src) {
    team.bg = src || arenaBackgrounds[Math.floor(Math.random() * arenaBackgrounds.length)];
    $('teamScene').style.backgroundImage = `url("${team.bg}")`;
    startSceneFx(team.bg);
    saveUrl();
}

// le animazioni del dungeon sopra lo sfondo (stesso disegno della scheda delle unità)
async function startSceneFx(backgroundSrc) {
    stopSceneFx();
    const box = $('teamScene');
    const id = dungeonIdFromBackground(backgroundSrc);
    const data = await loadDungeonFxList();
    const list = ((data.list || data)[id]) || [];
    const samNames = data.sam || {};
    if (!list.length) return;
    const run = { stopped: false, raf: 0 };
    sceneRun = run;
    const anims = (await Promise.all(list.map(folder => loadDungeonAnim(folder, samNames[folder]).then(anim => (anim ? { folder, anim } : null)))))
        .filter(Boolean);
    if (run.stopped || !anims.length) return;
    const canvases = {};
    const used = new Set();
    anims.forEach(({ folder, anim }) => {
        const side = /front/i.test(folder) ? 'front' : 'back';
        anim.blend.forEach(b => { if (b !== 'skip') used.add(side + (b === 'add' ? '-add' : '')); });
    });
    ['back', 'back-add', 'front', 'front-add'].forEach(name => {
        const c = box.querySelector(`.scene-fx-${name}`);
        c.classList.toggle('is-on', used.has(name));
        canvases[name] = c;
    });
    const start = performance.now();
    const draw = now => {
        if (run.stopped) return;
        run.raf = requestAnimationFrame(draw);
        if (!box.offsetWidth) return;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const W = box.clientWidth, H = box.clientHeight;
        const s = Math.max(W / DUNGEON_STAGE_W, H / DUNGEON_STAGE_H);
        const ox = (W - DUNGEON_STAGE_W * s) / 2, oy = (H - DUNGEON_STAGE_H * s) / 2 - DUNGEON_STAGE_TOP * s;
        const k = s * dpr / DUNGEON_TWIPS;
        const t = Math.max(0, now - start) / 1000;
        const cw = Math.round(W * dpr), ch = Math.round(H * dpr);
        const ctxs = {};
        Object.keys(canvases).forEach(name => {
            if (!used.has(name)) return;
            const c = canvases[name];
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
    };
    run.raf = requestAnimationFrame(draw);
}

function stopSceneFx() {
    if (sceneRun) {
        sceneRun.stopped = true;
        cancelAnimationFrame(sceneRun.raf);
        sceneRun = null;
    }
    document.querySelectorAll('#teamScene .scene-fx').forEach(c => {
        c.getContext('2d').clearRect(0, 0, c.width, c.height);
        c.classList.remove('is-on');
    });
}

/* le unità sullo sfondo: animazione idle, appoggiate al loro posto della formazione */
/* ---------- schermata di battaglia: unità, nemici, turni ---------- */
/* Come nel gioco: clicchi un riquadro e l'unità va verso il nemico scelto, attacca e torna al suo posto.
   Con la barra BB piena il riquadro si illumina: trascinandolo verso l'alto l'unità fa la BB
   (o la SBB, se la barra si è riempita anche la seconda volta).
   Ogni unità attacca una volta per turno (poi il riquadro diventa grigio); quando tutte hanno
   attaccato comincia il turno dopo. AUTO = attaccano da sole a ogni turno.
   I danni sono INDICATIVI (senza buff e senza abilità leader):
     danno = ATK - DEF del nemico / 3, diviso tra i colpi (combo) dell'attacco
     x1,5 se il nemico è debole all'elemento, x0,75 se lo resiste, x1,5 se fa Spark */
const SCREEN_W = 640;                     // schermata del gioco: 640 pixel di larghezza...
const SCREEN_H = 839;                     // ...e 839 di altezza (campo 440 + drago + 6 riquadri + overdrive)
// posti dei nemici (a sinistra, come la squadra ma allo specchio); con un solo nemico sta al centro
const ENEMY_SLOTS = [
    { x: 0.30, y: 0.70 }, { x: 0.37, y: 0.55 }, { x: 0.34, y: 0.86 },
    { x: 0.12, y: 0.72 }, { x: 0.18, y: 0.56 }, { x: 0.15, y: 0.87 }
];
const ENEMY_SINGLE = { x: 0.27, y: 0.74 };
const ENEMY_SCALE = 1;                    // grandezza dei nemici rispetto alle unità
const ATTACK_GAP = 0.17;                  // chi si muove si ferma così a destra del nemico (frazione della larghezza)
const ATTACK_SPREAD = 0.6;                // ...e un po' più su o più giù a seconda della sua fila (0 = tutti nello stesso punto)
const ATTACK_COL = 0.06;                  // la colonna di destra si ferma un po' più indietro
const MOVE_GO = 320;                      // millisecondi per andare verso il nemico
const MOVE_BACK = 300;                    // millisecondi per tornare al proprio posto
const TELEPORT_FADE = 130;                // millisecondi per sparire / ricomparire (teletrasporto)
const HIT_START = 0.35;                   // i colpi arrivano tra il 35%...
const HIT_END = 0.85;                     // ...e l'85% dell'animazione d'attacco
const UNKNOWN_ATK_TIME = 1.5;             // secondi, se il file non dice quanto dura
const SPARK_WINDOW = 0.06;                // secondi: colpi di unità diverse così vicini fanno Spark
const DMG = { weak: 1.5, resist: 0.75, spark: 1.5, bb: 2.5, sbb: 4, variance: 0.08 };
const BC_DROP_CHANCE = 0.35;              // ogni DC del colpo ha questa probabilità di far cadere un cristallo di battaglia (1 CB)
const HC_DROP_CHANCE = 0.12;              // probabilità che un colpo faccia cadere anche un cristallo di cura
const CRYSTAL_SIZE = 22;                  // grandezza dei cristalli (pixel del gioco)
const CRYSTAL_TIME = 1400;                // millisecondi: escono dal nemico, cadono, poi volano all'unità
const BATTLE_IMG_DIR = '../img/Battle img/';
const OD_PER_HIT = 0.4;                   // % della barra OVERDRIVE per ogni colpo
const ENEMY_HP_MULT = 10;                 // HP del nemico = HP (Lord) dell'unità x questo numero
const ENEMY_MIN_HP = 10000;
const WAVE_RESPAWN = 1500;                // millisecondi prima che tornino i nemici sconfitti
const ENEMY_ATK_MULT = 1.5;               // forza dei nemici quando attaccano la squadra (ATK x questo numero)
const ENEMY_TURN_GAP = 450;               // millisecondi tra l'attacco di un nemico e il successivo
const HC_HEAL = 0.6;                      // cristallo di cura: cura REC dell'unità x questo numero
// cure delle BB (indicative): REC di chi cura x questo numero, a seconda della parola nella descrizione
const HEAL_WORDS = [[/massive|huge|enormous/i, 4], [/great|powerful|considerab/i, 3], [/large|big/i, 2.5], [/slight/i, 1.2]];
const HEAL_BASE = 2;                      // "recovers HP" senza altre parole
const REGEN_PER_TURN = 0.8;               // "gradually recovers HP": cura REC x questo a ogni turno
const TEAM_REVIVE = 1800;                 // millisecondi prima che la squadra sconfitta torni in piedi
const TURN_PAUSE = 600;                   // millisecondi tra un turno e l'altro
const ENEMY_FOLDERS = /\/video\/(Base enemy|Enemy boss basic|God Boss)\//i;
const BATTLE_IMG = id => `../img/Unit/Battle Img/unit_ills_battle_${id}.png`;

function unitMoveType(u) {
    const id = String(u && u.realId);
    if (ANIM_MOVE_STAY.has(id)) return 3;
    if (ANIM_MOVE_TELEPORT.has(id)) return 2;
    return 1;
}

const actors = [];      // per ogni posto: { id, u, wrap, idle, atk, busy, gauge }
let enemies = [];       // { id, u, wrap, idle, hp, maxHp, def, el, dead, spot }
let targetIdx = -1;     // nemico scelto con il mirino (-1 = nessuno: ognuno attacca un nemico a caso)
let infoIdx = 0;        // nemico mostrato nella striscia con il drago
let enemyList = [];
let recentHits = [];    // per lo Spark: { slot, t }
let restartCount = 0;
let turn = 1;
let od = 0;
let autoOn = false;
const acted = new Set();
let phase = 'player';   // 'player' = tocca alla squadra, 'enemy' = attaccano i nemici
const combo = { hits: 0, dmg: 0, sparks: 0, timer: 0 };

const wait = ms => new Promise(r => setTimeout(r, ms));

// sposta / fa sparire un elemento in modo fluido; alla fine lo lascia dove è arrivato
function animateTo(el, from, to, ms, easing) {
    if (!el.animate) { Object.assign(el.style, to); return Promise.resolve(); }
    const anim = el.animate([from, to], { duration: ms, easing: easing || 'ease-in-out', fill: 'forwards' });
    return anim.finished.catch(() => { }).then(() => { Object.assign(el.style, to); anim.cancel(); });
}

/* durata di una .webp animata: somma dei tempi dei fotogrammi (blocchi ANMF del file) */
const webpDurCache = new Map();
function webpDuration(src) {
    const clean = String(src || '').split('#')[0];
    if (!/\.webp(\?|$)/i.test(clean)) return Promise.resolve(0);
    if (!webpDurCache.has(clean)) {
        webpDurCache.set(clean, fetch(clean).then(r => (r.ok ? r.arrayBuffer() : null)).then(buf => {
            if (!buf || buf.byteLength < 20) return 0;
            const v = new DataView(buf);
            let p = 12, total = 0;
            while (p + 8 <= v.byteLength) {
                const id = String.fromCharCode(v.getUint8(p), v.getUint8(p + 1), v.getUint8(p + 2), v.getUint8(p + 3));
                const size = v.getUint32(p + 4, true);
                if (id === 'ANMF' && p + 23 <= v.byteLength) {
                    total += v.getUint8(p + 20) | (v.getUint8(p + 21) << 8) | (v.getUint8(p + 22) << 16);
                }
                p += 8 + size + (size & 1);
            }
            return total / 1000;
        }).catch(() => 0));
    }
    return webpDurCache.get(clean);
}

function atkSrc(u) {
    const a = u.animations || {};
    return pickAnimationSrc(a.atk || '');
}

/* un'animazione (video o immagine) dentro il campo: si misura da sola quando è pronta */
function createMedia(src, opts) {
    const media = { src, el: null, m: null, scale: 1, video: false, dur: 0, failed: false, icon: false };
    let el;
    if (src && isVideoFile(src)) {
        el = document.createElement('video');
        el.muted = true;
        el.playsInline = true;
        el.setAttribute('playsinline', '');
        el.setAttribute('webkit-playsinline', '');
        el.preload = 'auto';
        el.loop = !!opts.loop;
        el.autoplay = !!opts.loop;
        media.video = true;
    } else {
        el = document.createElement('img');
        el.alt = '';
        el.decoding = 'async';
    }
    el.className = 'scene-media ' + (opts.cls || '');
    el.draggable = false;
    media.el = el;
    media.ready = new Promise(resolve => {
        const ok = () => {
            measureMedia(media);
            if (media.video && opts.loop) el.play().catch(() => { });
            resolve(media);
        };
        el.addEventListener(media.video ? 'loadeddata' : 'load', ok, { once: true });
        el.addEventListener('error', () => {
            if (opts.fallback) {
                // animazione che non c'è: al suo posto l'icona dell'unità
                const img = document.createElement('img');
                img.className = 'scene-media is-icon ' + (opts.cls || '');
                img.alt = '';
                img.addEventListener('load', () => { media.icon = true; measureMedia(media); resolve(media); }, { once: true });
                img.addEventListener('error', () => { media.failed = true; resolve(media); }, { once: true });
                img.src = opts.fallback;
                el.replaceWith(img);
                media.el = img;
                media.video = false;
            } else {
                media.failed = true;
                resolve(media);
            }
        }, { once: true });
    });
    if (src) el.src = src;
    else setTimeout(() => el.dispatchEvent(new Event('error')), 0);
    return media;
}

function measureMedia(media) {
    const el = media.el;
    if (media.icon || el.classList.contains('is-icon')) {
        media.icon = true;
        media.m = { w: el.naturalWidth || 100, h: el.naturalHeight || 100, gx: 0.5, gy: 1, up: el.naturalHeight || 100, side: (el.naturalWidth || 100) / 2 };
        media.scale = 1;
        return;
    }
    const m = measureCharacter(el);
    if (!m) return;
    const outside = !evoCanReadPixels(el);
    const found = m.charX !== undefined;
    el.classList.toggle('is-outside', outside);
    media.m = {
        w: m.w, h: m.h,
        gx: found ? 0.5 - parseFloat(m.charX) / 100 : (outside ? OUTSIDE_GROUND_X : 0.5),
        gy: found ? 0.5 - parseFloat(m.charY) / 100 : (outside ? OUTSIDE_GROUND_Y : 0.9),
        up: found ? parseFloat(m.charUp) || m.h * 0.4 : m.h * 0.25,
        side: found ? parseFloat(m.charSide) || m.w * 0.15 : m.w * 0.08
    };
    media.scale = pixelFileScale(el, m.w) || 1;
}

function createActor(u, mirror) {
    const wrap = document.createElement('div');
    wrap.className = 'scene-actor' + (mirror ? ' is-enemy' : '');
    const idle = createMedia(idleSrc(u), { loop: true, cls: 'media-idle', fallback: u.image || '' });
    wrap.appendChild(idle.el);
    const actor = { id: u.id, u, wrap, idle, atk: null, atkPromise: null, busy: false, gauge: 0, mirror: !!mirror, hp: 0, maxHp: 0, dead: false, regen: null };
    idle.ready.then(() => {
        layoutScene();
        ensureAtk(actor);
    });
    return actor;
}

// l'animazione d'attacco si prepara dopo quella ferma (così il primo clic è già pronto)
function ensureAtk(a) {
    if (a.atkPromise) return a.atkPromise;
    const src = atkSrc(a.u);
    if (!src || a.idle.failed || a.idle.icon) {
        a.atkPromise = Promise.resolve(null);
        return a.atkPromise;
    }
    const media = createMedia(src, { loop: false, cls: 'media-atk' });
    a.atk = media;
    a.wrap.appendChild(media.el);
    a.atkPromise = media.ready.then(async m => {
        if (m.failed || !m.m) return null;
        // stessa tela dell'animazione ferma: stesso punto a terra (come nella scheda dell'unità)
        const im = a.idle.m;
        if (im && im.w === m.m.w && im.h === m.m.h) { m.m.gx = im.gx; m.m.gy = im.gy; m.scale = a.idle.scale; }
        m.dur = m.video ? (isFinite(m.el.duration) ? m.el.duration : 0) : await webpDuration(src);
        layoutScene();
        return m;
    });
    return a.atkPromise;
}

function removeActor(a) {
    if (!a) return;
    a.removed = true;
    a.wrap.remove();
}

/* le 6 unità della squadra */
function renderSceneUnits() {
    const layer = $('sceneUnits');
    for (let i = 0; i < 6; i++) {
        const slot = team.slots[i];
        const cur = actors[i];
        if (cur && (!slot || cur.id !== slot.id)) {
            removeActor(cur);
            actors[i] = null;
            acted.delete(i);
        }
        if (!slot || actors[i]) continue;
        const u = unitById.get(slot.id);
        if (!u) continue;
        actors[i] = createActor(u, false);
        layer.appendChild(actors[i].wrap);
    }
    layoutScene();
    checkTurnEnd();
}

function sizeMedia(media, k0, mirror) {
    if (!media || !media.el) return;
    const el = media.el;
    if (!media.m) { el.style.visibility = 'hidden'; return; }
    const scene = $('teamScene');
    const k = media.icon ? (scene.clientHeight * 0.16) / media.m.h : k0 * media.scale;
    const w = media.m.w * k, h = media.m.h * k;
    el.style.width = `${w.toFixed(1)}px`;
    el.style.height = `${h.toFixed(1)}px`;
    el.style.left = `${(-(mirror ? 1 - media.m.gx : media.m.gx) * w).toFixed(1)}px`;
    el.style.top = `${(-media.m.gy * h).toFixed(1)}px`;
    el.style.transform = mirror ? 'scaleX(-1)' : '';
    el.style.visibility = '';
}

function actorScale(a) {
    const H = $('teamScene').clientHeight;
    return TEAM_UNIT_SCALE * (H / DUNGEON_STAGE_H) * (a.mirror ? ENEMY_SCALE : 1);
}

function placeActor(a, spot) {
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    a.wrap.style.left = `${(spot.x * W).toFixed(1)}px`;
    a.wrap.style.top = `${(spot.y * H).toFixed(1)}px`;
    a.wrap.style.zIndex = String(a.busy ? 300 : 10 + Math.round(spot.y * 100));
    const k = actorScale(a);
    sizeMedia(a.idle, k, a.mirror);
    sizeMedia(a.atk, k, a.mirror);
}

function layoutScene() {
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    if (!W || !H) return;
    actors.forEach((a, i) => { if (a) placeActor(a, TEAM_SLOTS[i]); });
    enemies.forEach(e => placeActor(e, e.spot));
    scene.style.setProperty('--scene-h', `${H}px`);
    scene.querySelectorAll('.scene-slot').forEach((b, i) => {
        const slot = TEAM_SLOTS[i];
        b.style.left = `${(slot.x * 100).toFixed(1)}%`;
        b.style.top = `${(slot.y * 100).toFixed(1)}%`;
        b.hidden = !!team.slots[i];
    });
    placeTargetMark();
}

/* la schermata di battaglia si adatta allo spazio: deve stare tutta senza scorrere */
function sizeScreen() {
    const screen = $('bfScreen');
    const content = $('teamContent');
    const wrap = screen.parentElement;
    if (!content.clientHeight) return;
    const wide = window.matchMedia('(min-width: 1000px)').matches;
    const cs = getComputedStyle(content);
    const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const availH = content.clientHeight - padY;
    const availW = wide ? Math.min(wrap.parentElement.clientWidth * 0.58, 760) : wrap.clientWidth;
    let g = Math.min(availW / SCREEN_W, availH / SCREEN_H);
    if (!wide) g = Math.max(g, Math.min(availW / SCREEN_W, 0.45));   // su telefono non troppo piccola
    g = Math.max(0.3, g);
    screen.style.setProperty('--g', `${g.toFixed(4)}px`);
    screen.style.width = `${Math.floor(SCREEN_W * g)}px`;
    screen.style.height = `${Math.floor(SCREEN_H * g)}px`;
    $('teamCards').style.setProperty('--u', `${g.toFixed(4)}px`);
    layoutScene();
}

/* ---------- i nemici ---------- */
function buildEnemyList() {
    const order = el => { const i = ELEMENTS.indexOf(el); return i < 0 ? 9 : i; };
    enemyList = units.filter(u => ENEMY_FOLDERS.test((u.animations || {}).idle || ''))
        .sort((a, b) => order(elementKey(a)) - order(elementKey(b)) || unitName(a).localeCompare(unitName(b)));
}

function renderEnemySelect() {
    const sel = $('enemySelect');
    sel.innerHTML = ELEMENTS.map(el => {
        const list = enemyList.filter(u => elementKey(u) === el);
        if (!list.length) return '';
        return `<optgroup label="${esc(siteT('element.' + el, el))}">${list.map(u => `<option value="${esc(u.id)}">${esc(unitName(u))}</option>`).join('')}</optgroup>`;
    }).join('');
    const t = enemies[infoIdx];
    if (t) sel.value = t.id;
}

function randomEnemyId(not) {
    const list = enemyList.filter(u => u.id !== not);
    const u = list[Math.floor(Math.random() * list.length)];
    return u ? u.id : '';
}

function enemySpot(i, n) {
    return n === 1 ? ENEMY_SINGLE : ENEMY_SLOTS[i];
}

function makeEnemy(id, i, n) {
    const u = unitById.get(String(id));
    if (!u) return null;
    const st = baseStats(u, 'lord').hp ? baseStats(u, 'lord') : baseStats(u, 'base');
    const e = createActor(u, true);
    e.el = elementKey(u);
    e.maxHp = Math.max(ENEMY_MIN_HP, st.hp * ENEMY_HP_MULT);
    e.hp = e.maxHp;
    e.def = st.def;
    e.dead = false;
    e.spot = enemySpot(i, n);
    $('sceneUnits').appendChild(e.wrap);
    return e;
}

// mette in campo i nemici (elenco di ID); quelli che mancano si scelgono a caso
function setEnemies(ids) {
    enemies.forEach(removeActor);
    enemies = [];
    const list = (ids || []).filter(id => unitById.has(String(id))).slice(0, 6);
    if (!list.length && enemyList.length) list.push(randomEnemyId());
    list.forEach((id, i) => {
        const e = makeEnemy(id, i, list.length);
        if (e) enemies.push(e);
    });
    targetIdx = -1;
    infoIdx = 0;
    team.enemies = enemies.map(e => e.id);
    $('enemyCount').value = String(Math.max(1, enemies.length));
    if (enemies[0]) $('enemySelect').value = enemies[0].id;
    updateTargetInfo();
    layoutScene();
    saveUrl();
}

// clic su un nemico: diventa il bersaglio (compare il mirino); clic di nuovo sullo stesso: si toglie
function setTarget(i) {
    if (i < 0 || !enemies[i] || enemies[i].dead || i === targetIdx) {
        targetIdx = -1;
    } else {
        targetIdx = i;
        showEnemyInfo(i);
    }
    placeTargetMark();
}

function showEnemyInfo(i) {
    if (!enemies[i]) return;
    infoIdx = i;
    $('enemySelect').value = enemies[i].id;
    updateTargetInfo();
}

// chi attacca: il nemico col mirino, oppure (senza mirino) uno a caso tra quelli vivi
function pickTarget(anyEnemy) {
    const t = enemies[targetIdx];
    if (!anyEnemy && t && !t.dead) return t;
    const alive = enemies.filter(x => !x.dead);
    return alive.length ? alive[Math.floor(Math.random() * alive.length)] : null;
}

// striscia con il drago: elemento, nome e vita del nemico scelto (o dell'ultimo colpito)
function updateTargetInfo() {
    const e = enemies[infoIdx];
    const elem = $('targetElem');
    if (!e) {
        $('targetName').textContent = '';
        elem.style.visibility = 'hidden';
        $('targetHpFill').style.setProperty('--p', 0);
        $('targetHpText').textContent = '';
        return;
    }
    elem.style.visibility = '';
    elem.style.setProperty('--i', Math.max(0, ELEMENTS.indexOf(e.el)));
    $('targetName').textContent = unitName(e.u);
    const p = Math.max(0, e.hp / e.maxHp);
    $('targetHpFill').style.setProperty('--p', p.toFixed(4));
    $('targetHpText').textContent = `HP: ${e.hp > 0 ? Math.max(1, Math.ceil(p * 100)) : 0}%`;
}

// centro del corpo di un nemico (dove escono i numeri e i cristalli)
function enemyBody(e) {
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    const up = e.idle.m ? (e.idle.icon ? H * 0.16 : e.idle.m.up * actorScale(e) * e.idle.scale) : H * 0.15;
    return { x: e.spot.x * W, y: e.spot.y * H - up * 0.5, up };
}

// mirino sul nemico scelto (gira su se stesso)
function placeTargetMark() {
    const mark = $('targetMark');
    const e = enemies[targetIdx];
    if (targetIdx < 0 || !e || e.dead || !e.idle.m) { mark.hidden = true; return; }
    const b = enemyBody(e);
    mark.hidden = false;
    mark.style.left = `${b.x.toFixed(1)}px`;
    mark.style.top = `${b.y.toFixed(1)}px`;
}

function enemyHitFlash(e) {
    const w = e.wrap;
    w.classList.remove('is-hit');
    void w.offsetWidth;
    w.classList.add('is-hit');
}

function defeatEnemy(e) {
    if (e.dead) return;
    e.dead = true;
    e.wrap.classList.add('is-dead');
    if (enemies[targetIdx] === e) targetIdx = -1;   // bersaglio sconfitto: il mirino sparisce
    placeTargetMark();
    if (enemies.every(x => x.dead)) {
        // tutti sconfitti: dopo un attimo tornano (nuova ondata)
        const wave = enemies;
        setTimeout(() => {
            if (enemies !== wave) return;
            wave.forEach(x => { x.hp = x.maxHp; x.dead = false; x.wrap.classList.remove('is-dead'); });
            targetIdx = -1;
            infoIdx = 0;
            updateTargetInfo();
            placeTargetMark();
        }, WAVE_RESPAWN);
    }
}

/* ---------- danni, Spark, combo e overdrive ---------- */
function elementMultiplier(atkEl, defEl) {
    if ((ELEMENT_STRONG[atkEl] || []).includes(defEl)) return { m: DMG.weak, tag: 'weak' };
    if ((ELEMENT_STRONG[defEl] || []).includes(atkEl)) return { m: DMG.resist, tag: 'resist' };
    return { m: 1, tag: '' };
}

function showDamage(e, value, tag, spark) {
    const W = $('teamScene').clientWidth;
    const b = enemyBody(e);
    const d = document.createElement('div');
    d.className = 'dmg notranslate' + (tag ? ' is-' + tag : '') + (spark ? ' is-spark' : '');
    d.innerHTML = (spark ? '<small>SPARK!</small>' : '') + String(value);
    d.style.left = `${(e.spot.x * W + (Math.random() - 0.5) * W * 0.08).toFixed(1)}px`;
    d.style.top = `${(b.y + b.up * 0.5 - b.up * (0.3 + Math.random() * 0.5)).toFixed(1)}px`;
    $('sceneFx').appendChild(d);
    d.addEventListener('animationend', () => d.remove(), { once: true });
    setTimeout(() => d.remove(), 2000);
}

// centro del corpo di un'unità della squadra
function unitBody(i) {
    const a = actors[i];
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    const spot = TEAM_SLOTS[i];
    const up = a && a.idle.m ? (a.idle.icon ? H * 0.16 : a.idle.m.up * actorScale(a) * a.idle.scale) : H * 0.15;
    return { x: spot.x * W, y: spot.y * H - up * 0.5, up };
}

// numero che sale sopra un'unità della squadra (danno preso o cura)
function floatOnUnit(i, text, cls) {
    const b = unitBody(i);
    const W = $('teamScene').clientWidth;
    const d = document.createElement('div');
    d.className = 'dmg notranslate ' + cls;
    d.textContent = text;
    d.style.left = `${(b.x + (Math.random() - 0.5) * W * 0.05).toFixed(1)}px`;
    d.style.top = `${(b.y - b.up * (0.1 + Math.random() * 0.3)).toFixed(1)}px`;
    $('sceneFx').appendChild(d);
    d.addEventListener('animationend', () => d.remove(), { once: true });
    setTimeout(() => d.remove(), 2000);
}

// vita delle unità: segue le statistiche (tipo, imp) e tiene la percentuale se cambiano
function syncTeamHp() {
    actors.forEach((a, i) => {
        if (!a) return;
        const slot = team.slots[i];
        const max = unitStats(a.u, slot ? slot.type : DEFAULT_TYPE).hp || 1;
        a.hp = a.maxHp ? Math.round(a.hp / a.maxHp * max) : max;
        a.maxHp = max;
    });
}

function healUnit(i, amount) {
    const a = actors[i];
    if (!a || a.dead || amount <= 0) return;
    const healed = Math.min(Math.round(amount), a.maxHp - a.hp);
    a.hp += healed;
    healFlash(i);
    updateCardHp(i);
    if (healed > 0) floatOnUnit(i, '+' + healed, 'is-heal');
}

function hurtUnit(i, dmg) {
    const a = actors[i];
    if (!a || a.dead) return;
    a.hp = Math.max(0, a.hp - dmg);
    floatOnUnit(i, String(dmg), 'is-taken');
    a.wrap.classList.remove('is-hit');
    void a.wrap.offsetWidth;
    a.wrap.classList.add('is-hit');
    const card = cardOf(i);
    if (card) { card.classList.remove('is-hurt'); void card.offsetWidth; card.classList.add('is-hurt'); }
    updateCardHp(i);
    if (a.hp <= 0) {
        a.dead = true;
        a.gauge = 0;
        a.regen = null;
        a.wrap.classList.add('is-dead');
        updateCardGauge(i);
        setCardState(i);
        if (actors.every(x => !x || x.dead)) setTimeout(reviveTeam, TEAM_REVIVE);
    }
}

// tutta la squadra sconfitta: dopo un attimo torna in piedi con la vita piena
function reviveTeam() {
    actors.forEach((a, i) => {
        if (!a) return;
        a.dead = false;
        a.hp = a.maxHp;
        a.wrap.classList.remove('is-dead');
        updateCardHp(i);
        setCardState(i);
    });
    if (autoOn && phase === 'player') setTimeout(() => attackAll(true), 300);
}

/* cure delle BB / SBB / UBB, lette dalla descrizione:
   "(greatly) recovers HP for all allies" = cura subito tutti
   "gradually recovers HP ... for 3 turns" = cura a ogni turno per 3 turni */
function healInfo(u, kind) {
    const desc = skillDesc(u, kind).en || '';
    const parts = desc.split(/\s*(?:&|,| and )\s*/i);
    let instant = 0, regen = 0, turns = 0;
    parts.forEach(p => {
        if (!/heal|recover|restore|hp recovery/i.test(p) || /\bbb\b|gauge/i.test(p)) return;
        let m = HEAL_BASE;
        HEAL_WORDS.some(([rx, v]) => (rx.test(p) ? ((m = v), true) : false));
        if (/gradual|regen|over \d+ turns|each turn/i.test(p)) {
            regen = Math.max(regen, REGEN_PER_TURN * m / HEAL_BASE);
            const t = desc.match(/(\d+) turns/i);
            turns = t ? +t[1] : 3;
            return;
        }
        instant = Math.max(instant, m);
    });
    if (!/hp|heal/i.test(desc)) { instant = 0; regen = 0; }
    return { instant, regen, turns };
}

function applyBurstHeal(i, a, kind) {
    const h = healInfo(a.u, kind);
    if (!h.instant && !h.regen) return;
    const slot = team.slots[i];
    const rec = unitStats(a.u, slot ? slot.type : DEFAULT_TYPE).rec;
    actors.forEach((x, j) => {
        if (!x || x.dead) return;
        if (h.instant) healUnit(j, rec * h.instant * (0.95 + Math.random() * 0.1));
        if (h.regen) x.regen = { amount: rec * h.regen, turns: h.turns };
    });
}

// a ogni nuovo turno: le cure graduali
function applyRegen() {
    actors.forEach((a, i) => {
        if (!a || a.dead || !a.regen) return;
        healUnit(i, a.regen.amount * (0.95 + Math.random() * 0.1));
        a.regen.turns -= 1;
        if (a.regen.turns <= 0) a.regen = null;
    });
}

/* ---------- turno dei nemici: ognuno attacca un'unità della squadra ---------- */
function pickUnit() {
    const alive = actors.map((a, i) => (a && !a.dead ? i : -1)).filter(i => i >= 0);
    return alive.length ? alive[Math.floor(Math.random() * alive.length)] : -1;
}

async function enemyAttack(e) {
    if (e.dead || e.busy) return;
    let ti = pickUnit();
    if (ti < 0) return;
    e.busy = true;
    const atk = await Promise.race([ensureAtk(e), wait(3000).then(() => null)]);
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    const unit = TEAM_SLOTS[ti];
    const move = unitMoveType(e.u);
    const spot = { x: unit.x - ATTACK_GAP, y: unit.y + (e.spot.y - unit.y) * ATTACK_SPREAD };
    const away = `translate(${((spot.x - e.spot.x) * W).toFixed(1)}px, ${((spot.y - e.spot.y) * H).toFixed(1)}px)`;
    const still = 'translate(0px, 0px)';
    e.wrap.classList.add('is-busy');
    layoutScene();
    if (move === 1) await animateTo(e.wrap, { transform: still }, { transform: away }, MOVE_GO, 'ease-out');
    else if (move === 2) {
        await animateTo(e.wrap, { opacity: 1 }, { opacity: 0 }, TELEPORT_FADE);
        e.wrap.style.transform = away;
        await animateTo(e.wrap, { opacity: 0 }, { opacity: 1 }, TELEPORT_FADE);
    }
    let dur = UNKNOWN_ATK_TIME;
    if (atk && !e.removed) {
        e.wrap.classList.add('is-attacking');
        dur = await playMedia(atk);
    }
    const info = burstInfo(e.u, 'atk');
    const st = baseStats(e.u, 'lord').hp ? baseStats(e.u, 'lord') : baseStats(e.u, 'base');
    for (let k = 0; k < info.hits; k++) {
        const f = info.hits === 1 ? (HIT_START + HIT_END) / 2 : HIT_START + (HIT_END - HIT_START) * k / (info.hits - 1);
        setTimeout(() => {
            if (e.dead) return;
            if (!actors[ti] || actors[ti].dead) ti = pickUnit();
            const a = actors[ti];
            if (!a) return;
            const slot = team.slots[ti];
            const def = unitStats(a.u, slot ? slot.type : DEFAULT_TYPE).def;
            const el = elementMultiplier(e.el, elementKey(a.u));
            let dmg = Math.max(1, st.atk * ENEMY_ATK_MULT - def / 3) * el.m / info.hits;
            dmg = Math.max(1, Math.round(dmg * (1 + (Math.random() * 2 - 1) * DMG.variance)));
            hurtUnit(ti, dmg);
        }, f * dur * 1000);
    }
    await wait(dur * 1000);
    e.wrap.classList.remove('is-attacking');
    if (atk && atk.video) atk.el.pause();
    if (move === 1) await animateTo(e.wrap, { transform: away }, { transform: still }, MOVE_BACK, 'ease-in-out');
    else if (move === 2) {
        await animateTo(e.wrap, { opacity: 1 }, { opacity: 0 }, TELEPORT_FADE);
        e.wrap.style.transform = still;
        await animateTo(e.wrap, { opacity: 0 }, { opacity: 1 }, TELEPORT_FADE);
    }
    e.busy = false;
    e.wrap.classList.remove('is-busy');
    layoutScene();
}

async function enemyTurn() {
    phase = 'enemy';
    $('bfScreen').classList.add('is-enemy-turn');
    const list = enemies.filter(e => !e.dead);
    const runs = list.map((e, k) => wait(k * ENEMY_TURN_GAP).then(() => enemyAttack(e)));
    await Promise.all(runs);
    phase = 'player';
    $('bfScreen').classList.remove('is-enemy-turn');
}

function addCombo(dmg, spark) {
    combo.hits += 1;
    combo.dmg += dmg;
    if (spark) combo.sparks += 1;
    const box = $('comboBox');
    box.hidden = false;
    box.querySelector('.cb-hits b').textContent = String(combo.hits);
    box.querySelector('.cb-dmg').textContent = String(combo.dmg);
    const sp = box.querySelector('.cb-spark');
    sp.hidden = !combo.sparks;
    sp.querySelector('b').textContent = String(combo.sparks);
    box.classList.remove('is-bump');
    void box.offsetWidth;
    box.classList.add('is-bump');
    clearTimeout(combo.timer);
    combo.timer = setTimeout(() => {
        box.hidden = true;
        combo.hits = combo.dmg = combo.sparks = 0;
    }, 1800);
}

/* ---------- cristalli: escono dal nemico colpito, cadono a terra e volano all'unità ----------
   cristallo di battaglia = 1 CB per la barra BB di chi ha colpito; cristallo di cura = cura un'unità */
function spawnCrystal(kind, e, toSlot, onArrive) {
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    const size = CRYSTAL_SIZE * H / 440;
    const from = enemyBody(e);
    const land = { x: from.x + (Math.random() - 0.5) * W * 0.22, y: e.spot.y * H + (Math.random() * 0.07 - 0.02) * H };
    const peakY = Math.min(from.y, land.y) - (0.06 + Math.random() * 0.08) * H;
    const home = TEAM_SLOTS[toSlot] || { x: 0.7, y: 0.7 };
    const to = { x: home.x * W, y: home.y * H - 0.07 * H };
    const t = (x, y, sc) => `translate(${(x - size / 2).toFixed(1)}px, ${(y - size / 2).toFixed(1)}px) scale(${sc || 1})`;
    const img = document.createElement('img');
    img.className = 'crystal';
    img.alt = '';
    img.draggable = false;
    img.src = BATTLE_IMG_DIR + (kind === 'hc' ? 'battle_heart_icon.png' : 'battle_crystal_icon.png');
    img.style.width = img.style.height = `${size.toFixed(1)}px`;
    $('sceneFx').appendChild(img);
    const midX = (from.x + land.x) / 2;
    const frames = [
        { transform: t(from.x, from.y, 0.4), opacity: 0, offset: 0 },
        { transform: t(midX, peakY, 1), opacity: 1, offset: 0.16 },
        { transform: t(land.x, land.y, 1), opacity: 1, offset: 0.34, easing: 'ease-out' },
        { transform: t(land.x, land.y - 0.025 * H, 1), opacity: 1, offset: 0.42, easing: 'ease-in' },
        { transform: t(land.x, land.y, 1), opacity: 1, offset: 0.5 },
        { transform: t(land.x, land.y, 1), opacity: 1, offset: 0.68, easing: 'ease-in' },
        { transform: t(to.x, to.y, 0.5), opacity: 0.25, offset: 1 }
    ];
    const done = () => { img.remove(); if (onArrive) onArrive(); };
    if (!img.animate) { setTimeout(done, CRYSTAL_TIME); return; }
    const anim = img.animate(frames, { duration: CRYSTAL_TIME * (0.9 + Math.random() * 0.25), fill: 'forwards' });
    anim.finished.then(done, done);
}

function dropCrystals(e, i, a, dc) {
    for (let k = 0; k < dc; k++) {
        if (Math.random() >= BC_DROP_CHANCE) continue;
        spawnCrystal('bc', e, i, () => {
            if (actors[i] !== a || a.dead || !gaugeMax(a)) return;
            a.gauge = Math.min(gaugeMax(a), a.gauge + 1);
            updateCardGauge(i);
        });
    }
    if (Math.random() < HC_DROP_CHANCE) {
        const list = actors.map((x, j) => (x && !x.dead ? j : -1)).filter(j => j >= 0);
        const j = list[Math.floor(Math.random() * list.length)];
        if (j !== undefined) spawnCrystal('hc', e, j, () => {
            const x = actors[j];
            if (!x) return;
            const slot = team.slots[j];
            healUnit(j, unitStats(x.u, slot ? slot.type : DEFAULT_TYPE).rec * HC_HEAL);
        });
    }
}

// cristallo di cura arrivato: la vita dell'unità brilla un attimo
function healFlash(i) {
    const card = cardOf(i);
    if (!card) return;
    card.classList.remove('is-healed');
    void card.offsetWidth;
    card.classList.add('is-healed');
}

function updateOd() {
    $('odFill').style.setProperty('--p', (od / 100).toFixed(3));
}

/* BB / SBB / UBB: quanti colpi e su chi, letti dalla descrizione (in inglese) della skill
   "15 combo ... attack on all enemies" = 15 colpi su TUTTI i nemici
   "... on single enemy" = un nemico solo, "... on 3 random enemies" = nemici a caso,
   nessun attacco (solo aumenti o cure) = nessun danno */
function burstInfo(u, kind) {
    const b = (battle[u.id] || {})[kind] || {};
    if (kind === 'atk') return { hits: Math.max(1, num(b.hits) || 1), dc: Math.max(1, num(b.dc) || 1), mode: 'single' };
    const desc = skillDesc(u, kind).en || '';
    const m = desc.match(/(\d+)\s*combo/i);
    const hits = Math.max(1, (m ? +m[1] : num(b.hits)) || 1);
    let mode = 'single';
    if (/\ball (foes|enemies)\b/i.test(desc)) mode = 'all';
    else if (/random (foes|enemies|targets)|\d+ random/i.test(desc)) mode = 'random';
    else if (/single (foe|enemy|target)/i.test(desc)) mode = 'single';
    else if (desc && !/attack|combo|damage/i.test(desc)) mode = 'none';
    return { hits, dc: Math.max(1, num(b.dc) || 1), mode };
}

function hitEnemy(e, i, a, kind, hits, dc, spark) {
    const slot = team.slots[i];
    const st = unitStats(a.u, slot ? slot.type : DEFAULT_TYPE);
    const el = elementMultiplier(elementKey(a.u), e.el);
    const mod = kind === 'atk' ? 1 : DMG[kind] || 1;
    let dmg = Math.max(1, st.atk - e.def / 3) * mod * el.m / hits;
    dmg *= 1 + (Math.random() * 2 - 1) * DMG.variance;
    if (spark) dmg *= DMG.spark;
    dmg = Math.max(1, Math.round(dmg));
    e.hp = Math.max(0, e.hp - dmg);
    showDamage(e, dmg, el.tag, spark);
    addCombo(dmg, spark);
    enemyHitFlash(e);
    od = Math.min(100, od + OD_PER_HIT);
    updateOd();
    dropCrystals(e, i, a, dc);
    showEnemyInfo(enemies.indexOf(e));
    if (e.hp <= 0) defeatEnemy(e);
}

function landHit(i, a, kind, info) {
    if (actors[i] !== a || info.mode === 'none') return;
    let targets;
    if (info.mode === 'all') targets = enemies.filter(x => !x.dead);
    else if (info.mode === 'random') { const t = pickTarget(true); targets = t ? [t] : []; }
    else {
        if (!a.target || a.target.dead || !enemies.includes(a.target)) a.target = pickTarget();
        targets = a.target ? [a.target] : [];
    }
    if (!targets.length) return;
    const now = performance.now() / 1000;
    recentHits = recentHits.filter(h => now - h.t < 1);
    const spark = recentHits.some(h => h.slot !== i && now - h.t <= SPARK_WINDOW);
    recentHits.push({ slot: i, t: now });
    targets.forEach(e => hitEnemy(e, i, a, kind, info.hits, info.dc, spark));
}

/* ---------- barra BB (si riempie con i CB dei colpi, in due giri per la SBB) ---------- */
function burstCosts(u) {
    const b = battle[u.id] || {};
    return { bb: num(b.bb && b.bb.cost), sbb: num(b.sbb && b.sbb.cost) };
}

function gaugeMax(a) {
    const c = burstCosts(a.u);
    return c.bb ? c.bb + c.sbb : 0;
}

function readyKind(a) {
    const c = burstCosts(a.u);
    if (!c.bb) return '';
    if (c.sbb && a.gauge >= c.bb + c.sbb) return 'sbb';
    if (a.gauge >= c.bb) return 'bb';
    return '';
}

/* ---------- l'attacco ---------- */
function showBanner(text) {
    const box = $('bbBanner');
    box.querySelector('.bb-text').textContent = text;
    box.hidden = false;
    box.classList.remove('is-on');
    void box.offsetWidth;
    box.classList.add('is-on');
    clearTimeout(showBanner.timer);
    showBanner.timer = setTimeout(() => { box.hidden = true; box.classList.remove('is-on'); }, 1700);
}

async function playMedia(media) {
    const el = media.el;
    if (media.video) {
        try { el.currentTime = 0; } catch (err) { /* niente */ }
        try { await el.play(); } catch (err) { /* niente */ }
        const d = isFinite(el.duration) && el.duration > 0 ? el.duration : media.dur;
        return d || UNKNOWN_ATK_TIME;
    }
    // immagine animata: cambiando l'indirizzo (solo dopo il #) ricomincia dal primo fotogramma
    el.src = `${String(media.src).split('#')[0]}#a${++restartCount}`;
    return media.dur || UNKNOWN_ATK_TIME;
}

async function attack(i, burst) {
    const a = actors[i];
    if (!a || a.busy || a.dead || acted.has(i) || phase !== 'player') return;
    if (burst && !readyKind(a)) return;          // BB non ancora pronta
    const target = pickTarget();
    if (!target) return;
    a.target = target;
    const u = a.u;
    const b = battle[u.id] || {};
    const kind = burst ? readyKind(a) : 'atk';
    const info = burstInfo(u, kind);
    const hits = info.hits;
    a.busy = true;
    acted.add(i);
    a.wrap.classList.add('is-busy');
    setCardState(i);
    if (kind !== 'atk') {
        a.gauge = 0;
        updateCardGauge(i);
        showBanner(skillName(u, kind) || (kind === 'sbb' ? 'SUPER BRAVE BURST' : 'BRAVE BURST'));
    }
    const atk = await Promise.race([ensureAtk(a), wait(4000).then(() => null)]);
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    const home = TEAM_SLOTS[i];
    const move = info.mode === 'none' ? 3 : unitMoveType(u);
    const spot = { x: target.spot.x + ATTACK_GAP + (i % 2) * ATTACK_COL, y: target.spot.y + (home.y - target.spot.y) * ATTACK_SPREAD };
    const away = `translate(${((spot.x - home.x) * W).toFixed(1)}px, ${((spot.y - home.y) * H).toFixed(1)}px)`;
    const still = 'translate(0px, 0px)';
    layoutScene();
    if (move === 1) await animateTo(a.wrap, { transform: still }, { transform: away }, MOVE_GO, 'ease-out');
    else if (move === 2) {
        await animateTo(a.wrap, { opacity: 1 }, { opacity: 0 }, TELEPORT_FADE);
        a.wrap.style.transform = away;
        await animateTo(a.wrap, { opacity: 0 }, { opacity: 1 }, TELEPORT_FADE);
    }
    let dur = UNKNOWN_ATK_TIME;
    if (atk && !a.removed) {
        a.wrap.classList.add('is-attacking');
        dur = await playMedia(atk);
    }
    // BB che curano: a metà dell'animazione la squadra recupera HP (numeri verdi)
    if (kind !== 'atk') setTimeout(() => { if (actors[i] === a) applyBurstHeal(i, a, kind); }, dur * 500);
    for (let k = 0; k < hits; k++) {
        const f = hits === 1 ? (HIT_START + HIT_END) / 2 : HIT_START + (HIT_END - HIT_START) * k / (hits - 1);
        setTimeout(() => landHit(i, a, kind, info), f * dur * 1000);
    }
    await wait(dur * 1000);
    a.wrap.classList.remove('is-attacking');
    if (atk && atk.video) atk.el.pause();
    if (move === 1) await animateTo(a.wrap, { transform: away }, { transform: still }, MOVE_BACK, 'ease-in-out');
    else if (move === 2) {
        await animateTo(a.wrap, { opacity: 1 }, { opacity: 0 }, TELEPORT_FADE);
        a.wrap.style.transform = still;
        await animateTo(a.wrap, { opacity: 0 }, { opacity: 1 }, TELEPORT_FADE);
    }
    a.busy = false;
    a.wrap.classList.remove('is-busy');
    layoutScene();
    setCardState(i);
    checkTurnEnd();
}

// tutti all'attacco (con AUTO usano anche la BB quando è pronta, come nel gioco)
function attackAll(useBurst) {
    if (phase !== 'player') return;
    let n = 0;
    actors.forEach((a, i) => {
        if (a && !a.dead && !a.busy && !acted.has(i)) setTimeout(() => attack(i, useBurst === true && !!readyKind(a)), (n++) * 140);
    });
}

// quando tutte le unità hanno attaccato comincia un nuovo turno
// quando tutte le unità (vive) hanno attaccato tocca ai nemici, poi comincia un nuovo turno
function checkTurnEnd() {
    if (phase !== 'player') return;
    const present = actors.map((a, i) => (a && !a.dead ? i : -1)).filter(i => i >= 0);
    if (!present.length || present.some(i => !acted.has(i) || actors[i].busy)) return;
    clearTimeout(checkTurnEnd.timer);
    checkTurnEnd.timer = setTimeout(async () => {
        if (phase !== 'player' || actors.some(a => a && a.busy)) return;
        if (enemies.some(e => !e.dead)) await enemyTurn();
        await wait(250);
        acted.clear();
        turn += 1;
        $('turnNum').textContent = String(turn);
        applyRegen();
        team.slots.forEach((s, i) => setCardState(i));
        if (autoOn) setTimeout(() => attackAll(true), 300);
    }, TURN_PAUSE);
}

function setAuto(on) {
    autoOn = on;
    $('autoBtn').classList.toggle('is-on', on);
    $('autoBtn').setAttribute('aria-pressed', on ? 'true' : 'false');
    if (on) attackAll(true);
}

/* ---------- riquadri delle unità: come in battaglia nel gioco ---------- */
function renderCards() {
    const grid = $('teamCards');
    grid.innerHTML = team.slots.map((slot, i) => {
        const pos = `style="--c:${i % 2};--r:${Math.floor(i / 2)}"`;
        if (!slot) {
            return `<button type="button" class="bcard is-empty" data-slot="${i}" data-act="pick" ${pos}>
                <span class="bc-base spr"></span><span class="bc-frame spr"></span>
                <span class="bc-add notranslate">${esc(tx(TT.add))}</span></button>`;
        }
        const u = unitById.get(slot.id);
        if (!u) return `<span class="bcard is-empty" data-slot="${i}" ${pos}></span>`;
        const st = unitStats(u, slot.type);
        const el = Math.max(0, ELEMENTS.indexOf(elementKey(u)));
        const lf = i === team.leader ? 'is-l' : (i === team.friend ? 'is-f' : '');
        return `<button type="button" class="bcard" data-slot="${i}" data-act="attack" ${pos} title="${esc(tx(TT.attackHint))}">
                <span class="bc-base spr"></span>
                <span class="bc-glow"></span>
                <canvas class="bc-bolt"></canvas>
                <span class="bc-clip"><img class="bc-face" src="${esc(BATTLE_IMG(u.id))}" data-thumb="${esc(u.image || '')}" alt="" draggable="false"></span>
                <span class="bc-frame spr"></span>
                <span class="bc-elem spr" style="--i:${el}"></span>
                ${lf ? `<span class="bc-lf ${lf}"></span>` : ''}
                <span class="bc-info">
                    <span class="bc-namebg spr"></span>
                    <span class="bc-name notranslate">${esc(unitName(u))}</span>
                    <span class="bc-hpnum notranslate">${st.hp}/${st.hp}</span>
                    <span class="bc-hp spr"><span class="bc-empty spr"></span><span class="bc-fill-wrap is-hpbar" style="--p:1"><span class="bc-fill spr is-hp"></span></span></span>
                    <span class="bc-bblabel spr"></span>
                    <span class="bc-bb spr"><span class="bc-empty spr"></span><span class="bc-fill-wrap is-bb" style="--p:0"><span class="bc-fill spr is-bb"></span></span><span class="bc-fill-wrap is-sbb" style="--p:0"><span class="bc-fill spr is-sbb"></span></span></span>
                </span>
            </button>`;
    }).join('');
    // immagine di battaglia che manca: si usa l'icona quadrata
    grid.querySelectorAll('.bc-face').forEach(img => {
        img.addEventListener('error', () => {
            if (img.dataset.thumb && !img.classList.contains('is-thumb')) {
                img.classList.add('is-thumb');
                img.src = img.dataset.thumb;
            }
        }, { once: true });
    });
    team.slots.forEach((s, i) => { if (s) { updateCardGauge(i); updateCardHp(i); setCardState(i); } });
}

// vita sul riquadro: numeri e barra (rossa quando è bassa)
function updateCardHp(i) {
    const a = actors[i];
    const card = cardOf(i);
    if (!a || !card || card.classList.contains('is-empty') || !a.maxHp) return;
    const p = Math.max(0, a.hp / a.maxHp);
    card.querySelector('.bc-hpnum').textContent = `${Math.round(a.hp)}/${a.maxHp}`;
    card.querySelector('.bc-fill-wrap.is-hpbar').style.setProperty('--p', p.toFixed(3));
    card.classList.toggle('is-low', p > 0 && p < 0.3);
}

function cardOf(i) {
    return document.querySelector(`#teamCards .bcard[data-slot="${i}"]`);
}

// barra BB: primo giro blu (BB), secondo giro dorato (SBB); scritta chiara finché non è pronta
function updateCardGauge(i) {
    const a = actors[i];
    const card = cardOf(i);
    if (!a || !card || card.classList.contains('is-empty')) return;
    const c = burstCosts(a.u);
    const ready = readyKind(a);
    const p1 = c.bb ? Math.min(1, a.gauge / c.bb) : 0;
    const p2 = c.sbb ? Math.min(1, Math.max(0, a.gauge - c.bb) / c.sbb) : 0;
    card.querySelector('.bc-fill-wrap.is-bb').style.setProperty('--p', p1.toFixed(3));
    card.querySelector('.bc-fill-wrap.is-sbb').style.setProperty('--p', p2.toFixed(3));
    card.classList.toggle('is-ready', !!ready);
    card.dataset.bolt = ready || '';
    if (ready) startBolts();
    const label = card.querySelector('.bc-bblabel');
    label.classList.toggle('lv-sbb', ready === 'sbb');
    label.classList.toggle('lv-bb', ready !== 'sbb');
    label.classList.toggle('is-full', !!ready);
}

/* fulmini sul riquadro quando la BB è pronta (come nel gioco): luce blu-bianca per la BB,
   gialla chiara per la SBB. Sono leggeri e stanno dietro a tutto: immagine, cornice, nome e barre. */
const BOLT_COLORS = {
    bb: { glow: 'rgba(110, 160, 255, 0.35)', core: 'rgba(200, 225, 255, 0.4)' },
    sbb: { glow: 'rgba(255, 220, 90, 0.32)', core: 'rgba(255, 245, 190, 0.38)' }
};
const BOLT_FPS = 9;
let boltRaf = 0, boltLast = 0;

function boltPoints(x1, y1, x2, y2, rough) {
    let pts = [[x1, y1], [x2, y2]];
    let d = rough;
    for (let it = 0; it < 5; it++) {
        const next = [pts[0]];
        for (let k = 1; k < pts.length; k++) {
            const [ax, ay] = pts[k - 1], [bx, by] = pts[k];
            const len = Math.hypot(bx - ax, by - ay) || 1;
            const off = (Math.random() - 0.5) * d;
            next.push([(ax + bx) / 2 - (by - ay) / len * off, (ay + by) / 2 + (bx - ax) / len * off], pts[k]);
        }
        pts = next;
        d /= 2;
    }
    return pts;
}

function drawBolt(ctx, pts, color, w) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let k = 1; k < pts.length; k++) ctx.lineTo(pts[k][0], pts[k][1]);
    ctx.shadowColor = color.glow;
    ctx.shadowBlur = w * 3;
    ctx.strokeStyle = color.glow;
    ctx.lineWidth = w * 2.2;
    ctx.stroke();
    ctx.shadowBlur = w;
    ctx.strokeStyle = color.core;
    ctx.lineWidth = w * 0.5;
    ctx.stroke();
}

function drawCardBolts(canvas, kind) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.round(canvas.clientWidth * dpr), h = Math.round(canvas.clientHeight * dpr);
    if (!w || !h) return;
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const color = BOLT_COLORS[kind] || BOLT_COLORS.bb;
    // a volte niente (resta il fondo scuro), a volte uno o due lampi sfumati
    const r = Math.random();
    const n = r < 0.3 ? 0 : (r < 0.75 ? 1 : 2);
    const lw = Math.max(1.5, h / 22);
    for (let k = 0; k < n; k++) {
        const pts = boltPoints(Math.random() * w * 0.3, Math.random() * h, w * (0.65 + Math.random() * 0.35), Math.random() * h, h * 0.7);
        drawBolt(ctx, pts, color, lw);
        // un ramo più piccolo
        const p = pts[Math.floor(pts.length * (0.3 + Math.random() * 0.4))];
        drawBolt(ctx, boltPoints(p[0], p[1], p[0] + (Math.random() - 0.3) * w * 0.3, p[1] + (Math.random() - 0.5) * h * 0.8, h * 0.3), color, lw * 0.6);
    }
}

function startBolts() {
    if (boltRaf) return;
    const tick = now => {
        const cards = document.querySelectorAll('#teamCards .bcard.is-ready');
        if (!cards.length) { boltRaf = 0; return; }
        boltRaf = requestAnimationFrame(tick);
        if (now - boltLast < 1000 / BOLT_FPS) return;
        boltLast = now;
        cards.forEach(card => {
            const c = card.querySelector('.bc-bolt');
            if (c) drawCardBolts(c, card.dataset.bolt);
        });
    };
    boltRaf = requestAnimationFrame(tick);
}

// riquadro: normale, premuto (mentre attacca) o grigio (ha già attaccato in questo turno)
function setCardState(i) {
    const a = actors[i];
    const card = cardOf(i);
    if (!card) return;
    card.classList.toggle('is-busy', !!(a && a.busy));
    card.classList.toggle('is-done', !!(a && !a.busy && !a.dead && acted.has(i)));
    card.classList.toggle('is-dead', !!(a && a.dead));
}

/* ---------- elenco della squadra (a destra): tipo, leader, amico, cambia, togli ---------- */
function renderEditor() {
    const box = $('teamEditor');
    box.innerHTML = team.slots.map((slot, i) => {
        const u = slot && unitById.get(slot.id);
        if (!u) {
            return `<div class="te-row is-empty" data-slot="${i}"><span class="te-num">${i + 1}</span>
                <button type="button" class="te-add notranslate" data-act="pick">${esc(tx(TT.add))}</button></div>`;
        }
        const st = unitStats(u, slot.type);
        const types = availableTypes(u).map(t => `<option value="${t}"${t === slot.type ? ' selected' : ''}>${TYPE_LABELS[t]}</option>`).join('');
        return `<div class="te-row" data-slot="${i}">
            <span class="te-num">${i + 1}</span>
            <img class="te-thumb" src="${esc(u.image || '')}" alt="" loading="lazy" draggable="false">
            <span class="te-main">
                <span class="te-name notranslate">${esc(unitName(u))}</span>
                <span class="te-stats notranslate"><span>HP <b>${fmt(st.hp)}</b></span><span>ATK <b>${fmt(st.atk)}</b></span><span>DEF <b>${fmt(st.def)}</b></span><span>REC <b>${fmt(st.rec)}</b></span></span>
            </span>
            <span class="te-tools">
                <select class="te-type notranslate" data-act="type" aria-label="${esc(tx(TT.type))}">${types}</select>
                <button type="button" class="tbtn${i === team.leader ? ' active' : ''}" data-act="leader" title="${esc(tx(TT.leader))}">L</button>
                <button type="button" class="tbtn${i === team.friend ? ' active' : ''}" data-act="friend" title="${esc(tx(TT.friend))}">F</button>
                <button type="button" class="tbtn notranslate" data-act="pick" title="${esc(tx(TT.change))}" aria-label="${esc(tx(TT.change))}">&#8644;</button>
                <button type="button" class="tbtn notranslate" data-act="remove" title="${esc(tx(TT.remove))}" aria-label="${esc(tx(TT.remove))}">&#10005;</button>
            </span>
        </div>`;
    }).join('');
}

function renderTotals() {
    const box = $('teamTotals');
    const list = team.slots.map(s => s && { s, u: unitById.get(s.id) }).filter(x => x && x.u);
    if (!list.length) { box.innerHTML = ''; return; }
    const tot = { hp: 0, atk: 0, def: 0, rec: 0 };
    let hits = 0, bc = 0, cost = 0;
    list.forEach(({ s, u }) => {
        const st = unitStats(u, s.type);
        Object.keys(tot).forEach(k => { tot[k] += st[k]; });
        const b = battle[u.id] || {};
        if (b.atk) { hits += num(b.atk.hits); bc += num(b.atk.hits) * num(b.atk.dc); }
        cost += num(b.cost);
    });
    box.innerHTML = `<h2 class="notranslate">${esc(tx(TT.totals))}</h2>
        <div class="ttotals notranslate">
            <div><span>HP</span><b>${fmt(tot.hp)}</b></div>
            <div><span>ATK</span><b>${fmt(tot.atk)}</b></div>
            <div><span>DEF</span><b>${fmt(tot.def)}</b></div>
            <div><span>REC</span><b>${fmt(tot.rec)}</b></div>
            <div><span>${esc(tx(TT.hits))}</span><b>${fmt(hits)}</b></div>
            <div><span>${esc(tx(TT.maxBc))}</span><b>${fmt(bc)}</b></div>
            <div><span>${esc(tx(TT.cost))}</span><b>${fmt(cost)}</b></div>
        </div>`;
}

/* ---------- consigli automatici ---------- */
function renderAdvice() {
    const box = $('teamAdvice');
    const list = team.slots.map((s, i) => s && { i, s, u: unitById.get(s.id) }).filter(x => x && x.u);
    if (!list.length) {
        box.innerHTML = `<h2 class="notranslate">${esc(tx(TT.advice))}</h2><p class="tip ${txClass(TT.empty)}">${esc(tx(TT.empty))}</p>`;
        return;
    }
    const tips = [];   // { kind: 'ok'|'warn'|'info', parts: [{ text, cls }] }
    const add = (kind, obj, vars) => tips.push({ kind, parts: [{ text: tx(obj, vars), cls: txClass(obj) }] });
    if (list.length < 6) add('warn', AT.count, { n: list.length });

    // abilità leader: la descrizione resta a parte, così se è solo in inglese la traduce Google
    const addLs = (idx, obj) => {
        const x = list.find(e => e.i === idx);
        if (!x) return;
        const d = skillDesc(x.u, 'ls');
        if (!d.text) return;
        tips.push({
            kind: 'info', parts: [
                { text: tx(obj, { name: unitName(x.u) }), cls: 'notranslate tip-label' },
                { text: d.text, cls: d.localized ? 'notranslate' : '' }
            ]
        });
    };
    if (team.leader < 0) add('warn', AT.noLeader);
    else addLs(team.leader, AT.leaderSkill);
    if (team.friend < 0) add('warn', AT.noFriend);
    else addLs(team.friend, AT.friendSkill);

    // elementi
    const els = {};
    list.forEach(({ u }) => { const e = elementKey(u); if (e) els[e] = (els[e] || 0) + 1; });
    const elKeys = Object.keys(els);
    if (elKeys.length) {
        add('info', AT.elements, { list: elKeys.map(e => `${siteT('element.' + e, e)} ×${els[e]}`).join(', ') });
        const strong = [...new Set(elKeys.flatMap(e => ELEMENT_STRONG[e] || []))];
        if (strong.length) add('info', AT.strong, { list: strong.map(e => siteT('element.' + e, e)).join(', ') });
        if (elKeys.length === 1 && list.length >= 3) add('info', AT.mono);
        if (elKeys.length >= 4) add('ok', AT.rainbow);
    }

    // ruoli dalle BB / SBB / UBB
    ROLES.forEach(role => {
        const who = list.filter(({ u }) => ['bb', 'sbb', 'ubb'].some(k => role.rx.test(skillDesc(u, k).en)));
        const roleName = tx(ROLE_NAMES[role.key]);
        if (who.length) {
            add('ok', AT.roleOk, { role: roleName, names: who.map(({ u }) => unitName(u)).join(', ') });
            if (who.length >= 2 && role.need && role.key !== 'heal') add('info', AT.twice, { role: roleName, names: who.map(({ u }) => unitName(u)).join(', ') });
        } else if (role.need && list.length >= 2) {
            add('warn', AT[role.key]);
        }
    });

    // colpi dell'attacco normale
    const withHits = list.map(({ u }) => ({ u, hits: num((battle[u.id] || {}).atk && battle[u.id].atk.hits) })).filter(x => x.hits);
    if (withHits.length) {
        const total = withHits.reduce((a, x) => a + x.hits, 0);
        const best = withHits.slice().sort((a, b) => b.hits - a.hits).slice(0, 2).map(x => `${unitName(x.u)} (${x.hits})`).join(', ');
        add('info', AT.hitsInfo, { n: total, names: best });
    }

    const icon = { ok: '✔', warn: '!', info: 'i' };
    box.innerHTML = `<h2 class="notranslate">${esc(tx(TT.advice))}</h2><ul class="tips">${tips.map(t =>
        `<li class="tip is-${t.kind}"><span class="tip-icon notranslate" aria-hidden="true">${icon[t.kind]}</span><span class="tip-text">${t.parts.map(p => `<span class="${p.cls}">${esc(p.text)}</span>`).join(' ')}</span></li>`).join('')}</ul>`;
}

function renderGuide() {
    $('teamGuide').innerHTML = `<h2 class="notranslate">${esc(tx(TT.guide))}</h2>` + GUIDE.map((g, i) =>
        `<details class="gsec"${i === 0 ? ' open' : ''}><summary class="${txClass(g.title)}">${esc(tx(g.title))}</summary><p class="${txClass(g.text)}">${esc(tx(g.text))}</p></details>`).join('');
}

function renderTexts() {
    document.title = `Brave Frontier Library - ${tx(TT.title)}`;
    $('teamTitle').textContent = tx(TT.title);
    $('teamIntro').textContent = tx(TT.intro);
    $('teamIntro').className = 'team-intro ' + txClass(TT.intro);
    $('impLabel').textContent = tx(TT.imp);
    $('bgBtn').textContent = tx(TT.changeBg);
    $('linkBtn').textContent = tx(TT.copyLink);
    $('clearBtn').textContent = tx(TT.clear);
    $('pickTitle').textContent = tx(TT.pickTitle);
    $('pickSearch').placeholder = tx(TT.search);
    $('pickRarity').options[0].textContent = tx(TT.allRar);
    $('enemyTitle').textContent = tx(TT.enemies);
    $('enemyCountLabel').textContent = tx(TT.enemyCount);
    $('enemyRandom').textContent = tx(TT.randomEnemies);
    $('enemyLabel').textContent = tx(TT.targetEnemy);
    $('enemyLabel').className = txClass(TT.targetEnemy);
    $('teamListTitle').textContent = tx(TT.teamList);
    $('autoBtn').title = tx(TT.auto);
    $('attackAllBtn').textContent = tx(TT.attackAll);
    $('battleHint').textContent = tx(TT.battleHint);
    $('battleHint').className = 'battle-hint ' + txClass(TT.battleHint);
    $('dmgNote').textContent = tx(TT.dmgNote);
    $('dmgNote').className = 'battle-note ' + txClass(TT.dmgNote);
    renderGuide();
}

function renderAll() {
    renderSceneUnits();
    syncTeamHp();
    renderCards();
    renderEditor();
    renderTotals();
    renderAdvice();
    saveUrl();
}

/* ---------- scelta delle unità ---------- */
function openPicker(slot) {
    pickSlot = slot;
    $('picker').classList.add('is-open');
    document.body.classList.add('picker-open');
    $('pickSearch').value = '';
    renderPicker();
    setTimeout(() => $('pickSearch').focus(), 50);
}

function closePicker() {
    pickSlot = -1;
    $('picker').classList.remove('is-open');
    document.body.classList.remove('picker-open');
}

let pickElement = '';
let pickLimit = PICK_PAGE;
function renderPicker(keepLimit) {
    if (keepLimit !== true) pickLimit = PICK_PAGE;
    const q = $('pickSearch').value.toLowerCase().trim();
    const words = q.split(/\s+/).filter(Boolean);
    const rar = $('pickRarity').value;
    const found = units.filter(u => {
        if (pickElement && elementKey(u) !== pickElement) return false;
        if (rar !== 'all' && String(u.rarity) !== rar && !(rar === 'Omni' && /omni|dream/i.test(String(u.rarity)))) return false;
        if (!words.length) return true;
        const hay = (unitName(u) + ' ' + ((u.names && u.names.en) || '') + ' ' + u.id).toLowerCase();
        return words.every(w => hay.includes(w));
    });
    const shown = found.slice(0, pickLimit);
    $('pickList').innerHTML = shown.map(u => `<button type="button" class="pitem" data-id="${esc(u.id)}" title="${esc(unitName(u))}">
            <img src="${esc(u.image || '')}" alt="" loading="lazy" draggable="false">
            <span class="notranslate">${esc(unitName(u))}</span></button>`).join('')
        + (found.length > shown.length
            ? `<button type="button" class="pmore notranslate" data-more="1">${esc(tx(TT.more, { n: fmt(shown.length), t: fmt(found.length) }))}</button>`
            : '');
}

function choose(id) {
    const u = unitById.get(id);
    if (!u || pickSlot < 0) return;
    const prev = team.slots[pickSlot];
    team.slots[pickSlot] = { id, type: prev && availableTypes(u).includes(prev.type) ? prev.type : defaultType(u) };
    closePicker();
    renderAll();
}

/* ---------- avvio ---------- */
async function start() {
    $('teamCards').innerHTML = `<p class="loading notranslate">${esc(tx(TT.loading))}</p>`;
    const [raw, b] = await Promise.all([
        fetch(UNITS_URL).then(r => r.json()).catch(() => []),
        fetch(BATTLE_URL).then(r => (r.ok ? r.json() : {})).catch(() => ({}))
    ]);
    battle = b || {};
    units = (raw || []).map(u => {
        u.id = String(u.realId);
        if (u.name) u.name = u.name.replace(/,/g, '');
        // icona giusta anche quando units.json punta a quella di un'altra unità
        const m = String(u.image || '').match(/^(.*thum_)(\d+)(\.\w+)$/i);
        if (m && m[2] !== u.id && /^\d+$/.test(u.id)) u.image = m[1] + u.id + m[3];
        // skill vuote in units.json: si usano quelle dei dati del gioco (in inglese)
        const data = battle[u.id];
        if (data && data.fill) {
            u.skills = u.skills || {};
            Object.keys(data.fill).forEach(type => {
                const f = data.fill[type];
                if (!hasSkillContent(u.skills[type])) u.skills[type] = { name: { en: f.name || '' }, desc: { en: f.desc || '' } };
            });
        }
        return u;
    }).filter(u => u.realId !== undefined && u.realId !== null && u.id !== '');
    units.forEach(u => unitById.set(u.id, u));
    teamFromUrl();
    $('impToggle').checked = team.imp;
    setBackground(team.bg);
    buildEnemyList();
    renderEnemySelect();
    sizeScreen();
    setEnemies(team.enemies);
    renderTexts();
    renderAll();
    sizeScreen();
}

function initEvents() {
    // riquadri della battaglia: clic = attacco (sul posto vuoto: scegli un'unità)
    // riquadri: clic = attacco; trascinare verso l'alto = BB (come nel gioco)
    let swipe = null;
    $('teamCards').addEventListener('pointerdown', e => {
        const card = e.target.closest('.bcard[data-act="attack"]');
        swipe = card ? { i: +card.dataset.slot, y: e.clientY, used: false } : null;
    });
    window.addEventListener('pointerup', e => {
        if (!swipe || swipe.used) return;
        const h = $('teamCards').querySelector('.bcard').offsetHeight || 60;
        if (swipe.y - e.clientY > h * 0.3) {
            swipe.used = true;
            attack(swipe.i, true);
        }
    });
    $('teamCards').addEventListener('click', e => {
        const card = e.target.closest('[data-slot]');
        if (!card) return;
        if (swipe && swipe.used) { swipe = null; return; }
        swipe = null;
        const i = +card.dataset.slot;
        if (card.dataset.act === 'attack') attack(i, false);
        else if (card.dataset.act === 'pick') openPicker(i);
    });
    // elenco della squadra: cambia, togli, leader, amico
    $('teamEditor').addEventListener('click', e => {
        const btn = e.target.closest('[data-act]');
        const row = e.target.closest('[data-slot]');
        if (!btn || !row || btn.dataset.act === 'type') return;
        const i = +row.dataset.slot;
        const act = btn.dataset.act;
        if (act === 'pick') { openPicker(i); return; }
        if (act === 'remove') {
            team.slots[i] = null;
            if (team.leader === i) team.leader = -1;
            if (team.friend === i) team.friend = -1;
        } else if (act === 'leader') {
            team.leader = team.leader === i ? -1 : i;
            if (team.friend === i) team.friend = -1;
        } else if (act === 'friend') {
            team.friend = team.friend === i ? -1 : i;
            if (team.leader === i) team.leader = -1;
        }
        renderAll();
    });
    $('teamEditor').addEventListener('change', e => {
        const sel = e.target.closest('select[data-act="type"]');
        const row = e.target.closest('[data-slot]');
        if (!sel || !row || !team.slots[+row.dataset.slot]) return;
        team.slots[+row.dataset.slot].type = sel.value;
        renderAll();
    });
    // campo: numeri dei posti vuoti; clic a sinistra = scegli il nemico più vicino
    $('teamScene').addEventListener('click', e => {
        const b = e.target.closest('.scene-slot');
        if (b) { openPicker(+b.dataset.slot); return; }
        const r = $('teamScene').getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        let best = -1, dist = 0.2;
        enemies.forEach((en, i) => {
            if (en.dead) return;
            const d = Math.hypot(x - en.spot.x, (y - (en.spot.y - 0.08)) * 0.7);
            if (d < dist) { dist = d; best = i; }
        });
        setTarget(best);   // nessun nemico vicino al clic: il mirino si toglie
    });
    // nemici
    $('enemySelect').addEventListener('change', e => {
        const ids = enemies.map(x => x.id);
        const keep = Math.max(0, infoIdx), wasTarget = targetIdx === infoIdx;
        ids[keep] = e.target.value;
        setEnemies(ids);
        showEnemyInfo(Math.min(keep, enemies.length - 1));
        if (wasTarget) setTarget(Math.min(keep, enemies.length - 1));
    });
    $('enemyCount').addEventListener('change', e => {
        const n = +e.target.value;
        const ids = enemies.map(x => x.id).slice(0, n);
        while (ids.length < n) ids.push(randomEnemyId());
        setEnemies(ids);
    });
    $('enemyRandom').addEventListener('click', () => {
        const n = Math.max(1, enemies.length);
        const ids = [];
        for (let k = 0; k < n; k++) ids.push(randomEnemyId());
        setEnemies(ids);
    });
    $('autoBtn').addEventListener('click', () => setAuto(!autoOn));
    $('attackAllBtn').addEventListener('click', () => attackAll(false));
    $('impToggle').addEventListener('change', e => { team.imp = e.target.checked; renderAll(); });
    $('bgBtn').addEventListener('click', () => setBackground(''));
    $('clearBtn').addEventListener('click', () => {
        team.slots = [null, null, null, null, null, null];
        team.leader = team.friend = -1;
        renderAll();
    });
    $('linkBtn').addEventListener('click', async () => {
        const url = location.origin + teamToUrl();
        try { await navigator.clipboard.writeText(url); }
        catch (err) {
            const ta = document.createElement('textarea');
            ta.value = url;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); } catch (e2) { /* niente */ }
            ta.remove();
        }
        const btn = $('linkBtn');
        btn.textContent = tx(TT.copied);
        btn.classList.add('is-done');
        setTimeout(() => { btn.textContent = tx(TT.copyLink); btn.classList.remove('is-done'); }, 1800);
    });
    // finestra di scelta delle unità
    $('pickSearch').addEventListener('input', () => renderPicker());
    $('pickRarity').addEventListener('change', () => renderPicker());
    $('pickElements').addEventListener('click', e => {
        const b = e.target.closest('[data-el]');
        if (!b) return;
        pickElement = pickElement === b.dataset.el ? '' : b.dataset.el;
        $('pickElements').querySelectorAll('[data-el]').forEach(x => x.classList.toggle('active', x.dataset.el === pickElement));
        renderPicker();
    });
    $('pickList').addEventListener('click', e => {
        if (e.target.closest('[data-more]')) {
            pickLimit += PICK_PAGE;
            renderPicker(true);
            return;
        }
        const b = e.target.closest('[data-id]');
        if (b) choose(b.dataset.id);
    });
    $('pickClose').addEventListener('click', closePicker);
    $('picker').addEventListener('click', e => { if (e.target === $('picker')) closePicker(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && pickSlot >= 0) closePicker(); });
    // la schermata si adatta alla finestra
    window.addEventListener('resize', sizeScreen);
    if ('ResizeObserver' in window) new ResizeObserver(sizeScreen).observe($('teamContent'));
    window.addEventListener('sitelanguagechange', () => {
        renderTexts();
        renderCards();
        renderEditor();
        renderTotals();
        renderAdvice();
        renderEnemySelect();
        updateTargetInfo();
        if (pickSlot >= 0) renderPicker(true);
        $('pickElements').querySelectorAll('[data-el]').forEach(b => { b.textContent = siteT('element.' + b.dataset.el, b.dataset.el); });
    });
    // bottoni degli elementi nella scelta delle unità
    $('pickElements').innerHTML = ELEMENTS.map(e => `<button type="button" class="pel notranslate" data-el="${e}" style="--el:${ELEMENT_COLORS[e]}">${esc(siteT('element.' + e, e))}</button>`).join('');
    // posti vuoti sul campo: si clicca per aggiungere un'unità
    $('sceneSlots').innerHTML = TEAM_SLOTS.map((s, i) => `<button type="button" class="scene-slot" data-slot="${i}" aria-label="${i + 1}">${i + 1}</button>`).join('');
}

initEvents();
start();
})();
