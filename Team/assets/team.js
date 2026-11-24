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

/* --------------------------------------------------------------------------
   EFFETTI DELLE ABILITÀ (abilità leader, extra skill, BB, SBB, UBB)
   Si leggono dalla descrizione in inglese della wiki, frase per frase.
   Quando la wiki scrive il numero (es. "60% boost to max HP") si usa quel numero.
   Quando scrive solo una parola ("hugely boosts Atk") si usa la tabella qui sotto.
   -------------------------------------------------------------------------- */

// parola -> quante volte il valore "normale" (boosts Atk = x1, hugely boosts Atk = x2.5 ...)
const FX_WORDS = [
    [/\bmassive(ly)?\b|\bimmense(ly)?\b/i, 4],
    [/\benormous(ly)?\b/i, 3.2],
    [/\bhuge(ly)?\b|\btremendous(ly)?\b/i, 2.5],
    [/\bgreat(ly)?\b|\blarge(ly)?\b|\bsharp(ly)?\b|\bhigh(ly)?\b|\bbig\b|\bpowerful(ly)?\b|\bstrong(ly)?\b/i, 2],
    [/\bconsiderabl[ey]\b|\bsignificant(ly)?\b|\bnotabl[ey]\b/i, 1.5],
    [/\bslight(ly)?\b|\bsmall\b|\blittle\b|\bminor\b|\blow\b/i, 0.4]
];
// valore "normale" (in %) di ogni effetto quando la wiki non scrive il numero
const FX_BASE = {
    stat: 50,        // ATK, DEF, REC
    hp: 20,          // HP massimi
    crit: 20,        // probabilità di colpo critico
    critdmg: 50,     // danni critici
    spark: 50,       // danni Spark
    bbatk: 100,      // ATK della BB (danni delle BB/SBB/UBB)
    elem: 50,        // danni elementali (contro il punto debole)
    drop: 20,        // probabilità di cristalli (CB, CC), oggetti, Zel, Karma
    eff: 20,         // efficacia dei cristalli
    bbfill: 20,      // velocità della barra BB
    odfill: 20,      // velocità della barra OD
    bbcost: 15,      // la BB costa meno
    bc: 8,           // CB aggiunti alla barra BB in un colpo solo
    bcturn: 4,       // CB aggiunti a ogni turno
    bchit: 3,        // CB quando si viene colpiti / si fa Spark / si fa critico
    dr: 20,          // riduzione dei danni
    drel: 20,        // riduzione dei danni di un elemento
    critred: 50,     // riduzione dei danni critici
    sparkred: 25,    // riduzione dei danni Spark
    evasion: 20,     // probabilità di schivare
    chance: 30,      // "probable": probabilità di un effetto
    debuff: 25,      // riduzione di ATK/DEF/REC dei nemici
    vuln: 25,        // vulnerabilità dei nemici (Spark, critico, elementale)
    afflicted: 50,   // danni in più contro nemici con stati alterati
    heal: 2,         // cura: REC x questo (x la parola)
    regen: 0.8,      // cura graduale a ogni turno: REC x questo
    hitheal: 20,     // "damage taken may restore HP": % del danno preso
    drain: 15,       // assorbe HP: % del danno fatto
    counter: 50,     // contrattacco: % del danno preso
    hits: 50,        // colpi in più dell'attacco normale
    shield: 1500,    // barriera: HP della barriera (x la parola)
    endatk: 150,     // attacco in più a fine turno: % dell'ATK
    relstat: 20,     // "boosts Atk relative to Def": % dell'altra statistica
    hprel: 50,       // danni in base agli HP rimasti
    ko: 30,          // resistenza al KO / rianimare
    double: 20,      // BB doppia
    ailres: 30,      // resistenza a uno stato alterato
    limit: 0         // limiti delle statistiche (solo scritto)
};
const FX_STATS = ['atk', 'def', 'rec', 'hp'];
const FX_AILMENTS = ['poison', 'weak', 'sick', 'injury', 'curse', 'paralysis'];
const FX_ELS_RX = /\b(fire|water|earth|thunder|light|dark)\b/gi;

function fxWord(text) {
    for (const [rx, f] of FX_WORDS) if (rx.test(text)) return f;
    return 1;
}
// riduzione dei danni: valori della wiki per le parole ("slightly reduces damage taken" = 25%, "greatly" = 40%...)
const FX_DR_WORDS = { 0.4: 25, 1: 30, 1.5: 35, 2: 40, 2.5: 50, 3.2: 60, 4: 75 };
const drPct = c => FX_DR_WORDS[fxWord(c)] || 30;

// numeri scritti nella frase: "60%", "(130%)", "2-5", "(5000)"
function fxPercents(text) {
    const out = [];
    const rx = /(\d+(?:\.\d+)?)\s*(?:-\s*(\d+(?:\.\d+)?)\s*)?%/g;
    let m;
    while ((m = rx.exec(text))) out.push({ v: +m[1], v2: m[2] ? +m[2] : 0, at: m.index });
    return out;
}

function fxElements(text) {
    const out = [];
    let m;
    const rx = new RegExp(FX_ELS_RX.source, 'gi');
    while ((m = rx.exec(text))) { const e = m[1].toLowerCase(); if (!out.includes(e)) out.push(e); }
    return out;
}

/* ---------- 1. dividere la descrizione in frasi ---------- */
const FX_VERB = /\b(boost|increas|rais|enhanc|improv|reduc|lower|decreas|negat|nullif|nulls?\b|immun|protect|attack|combo|restor|recover|heal|regenerat|cure|remov|purg|fill|adds?\b|added|inflict|probab|chance|may\b|activat|cast|ignor|convert|absorb|drain|evasion|evade|revive|resist|counter|taunt|stealth|angel idol|hits? all|double|extra action|shield|barrier|reflect|bypass|grant|prevent|halv|lessen|consum|sacrific|summon|transform|swap|switch|deal|lose|cuts?\b|steal|sets?\b|makes?\b|gives?\b|enables?|allows?|fully|guard|survive|endure|revers)/i;
const FX_STATWORD = /^(?:(?:and|or)\s+)?(?:max\s+)?(atk|def|rec|hp|bc|hc|zel|karma|exp|item|fire|water|earth|thunder|light|dark|critical|spark|bb atk|od)\b/i;
const FX_DANGLING = /\b(atk|def|rec|hp|bc|hc|zel|karma|fire|water|earth|thunder|light|dark|item)\s*$/i;

function fxSplit(desc) {
    // virgole dentro le parentesi: non dividono
    let s = String(desc || '').replace(/\s+/g, ' ').trim();
    let depth = 0, buf = '';
    for (const ch of s) {
        if (ch === '(') depth++;
        if (ch === ')') depth = Math.max(0, depth - 1);
        buf += depth && (ch === ',' || ch === '&' || ch === ';') ? (ch === ',' ? '\u0001' : ch === '&' ? '\u0002' : '\u0003') : ch;
    }
    const raw = buf.split(/\s*(?:,|&|;|\.\s)\s*/).map(x => x.trim()).filter(Boolean);
    const merged = [];
    let prefix = '';
    raw.forEach(f => {
        if (prefix) { f = f + ' ' + prefix; prefix = ''; }
        if (/^(?:when|if|while|upon)\b/i.test(f) && !FX_VERB.test(f.replace(/\b(?:is|are) in\b/i, ''))) { prefix = f; return; }
        const prev = merged[merged.length - 1];
        const noVerb = !FX_VERB.test(f) && !/^\d/.test(f);
        const listy = prev && FX_DANGLING.test(prev) && FX_STATWORD.test(f) && !/^\d/.test(f);
        if (prev && (noVerb || listy)) merged[merged.length - 1] = prev + ', ' + f;
        else merged.push(f);
    });
    if (prefix) { if (merged.length) merged[merged.length - 1] += ' ' + prefix; else merged.push(prefix); }
    // "... and boosts ...": due effetti nella stessa frase
    const out = [];
    const AND_SPLIT = / and (?=(?:\d+(?:\.\d+)?%|probab|boosts?\b|fills?\b|restores?\b|adds?\b|negates?\b|nullifies\b|reduces?\b|increases?\b|raises?\b|recovers?\b|cures?\b|removes?\b|inflicts?\b|hugely|greatly|enormously|massively|considerably|slightly|significantly|damage taken (?:may )?(?:\w+ )?(?:boosts?|fills?|restores?|heals?)|spark damage (?:\w+ )?(?:boosts?|fills?|restores?|heals?)|may\b|activates?\b|casts?\b|ignores?\b|absorbs?\b|grants?\b|gives?\b|enables?\b|lowers?\b|heals?\b|recovery\b|purges?\b|revives?\b|fully\b|boost to\b|reduction\b))/i;
    merged.forEach(c => {
        const parts = c.split(AND_SPLIT).map(x => x.trim()).filter(Boolean);
        if (parts.length > 1) {
            const last = parts[parts.length - 1];
            const quals = [
                [/\bfor (?:the )?first \d+ turns?\b/i, /\bfirst \d+ turns?\b/i],
                [/\bfor \d+ turns?\b/i, /\bfor \d+ turns?\b|\bfor (?:the )?first\b/i],
                [/\b(?:of|for) (?:all )?(?:(?:fire|water|earth|thunder|light|dark)(?:,? (?:and |or )?)?)+ (?:types|units|allies)\b/i, /\btypes\b|\bunits\b/i],
                [/\b(?:for|to) all allies\b/i, /\ballies\b|\bown\b|\bself\b/i],
                [/\bwhen .+$/i, /\bwhen\b|\bif\b/i]
            ];
            for (let k = 0; k < parts.length - 1; k++) {
                quals.forEach(([rx, has]) => {
                    const m = last.match(rx);
                    if (m && !has.test(parts[k])) parts[k] += ' ' + m[0];
                });
            }
        }
        parts.forEach(p => out.push(p.replace(/\u0001/g, ',').replace(/\u0002/g, '&').replace(/\u0003/g, ';')));
    });
    return out;
}

/* ---------- 2. capire una frase ---------- */
function fxContext(c) {
    const ctx = {};
    let m;
    if ((m = c.match(/\bfor (?:the )?first (\d+) turns?\b|\bfirst (\d+) turns?\b/i))) ctx.firstTurns = +(m[1] || m[2]);
    else if ((m = c.match(/\bfor (?:the )?(?:next )?(\d+) turns?\b/i))) ctx.dur = +m[1];
    else if (/\bfor (?:the )?next turn\b/i.test(c)) ctx.dur = 1;
    if (/\bto (?:all allies'? )?(?:normal )?attacks?\b|infliction to attack|effect to attack|when attacking|to attacks? for/i.test(c)) ctx.onAtk = true;
    if (/\b(own|self|caster|oneself|one's|for self|to self|itself)\b/i.test(c)) ctx.who = 'self';
    else if (/\b(all allies|allies'|for allies|to allies|all units|party|team)\b/i.test(c)) ctx.who = 'all';
    if ((m = c.match(/\b(?:of|for|to)\s+((?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+|or\s+)?)?)+)\s*(?:type|types|units|elemental units|allies)\b/i)) || (m = c.match(/((?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+|or\s+)?)?)+)\s*types'/i))) ctx.els = fxElements(m[1]);
    else if ((m = c.match(/^((?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+|or\s+)?)?)+)\s*types?\b/i))) ctx.els = fxElements(m[1]);
    else if ((m = c.match(/\((fire|water|earth|thunder|light|dark)\)/i))) ctx.els = [m[1].toLowerCase()];
    // condizioni
    const cond = {};
    if ((m = c.match(/hp is (?:above|over|higher than|more than|at least)\s*(\d+)%|hp (?:above|over) (\d+)%|above (\d+)% hp|hp is (?:over|above) (\d+)/i))) cond.hpAbove = +(m[1] || m[2] || m[3] || m[4]);
    if ((m = c.match(/hp is (?:below|under|lower than|less than)\s*(\d+)%|hp (?:below|under) (\d+)%|below (\d+)% hp/i))) cond.hpBelow = +(m[1] || m[2] || m[3]);
    if (/\bhp is full\b|\bfull hp\b|\bhp is at max/i.test(c)) cond.hpAbove = 100;
    if (/bb gauge is full|when bb gauge is max/i.test(c)) cond.bbFull = true;
    if ((m = c.match(/bb gauge is (?:over|above|at least)\s*(\d+)%/i))) cond.bbOver = +m[1];
    if (/when (?:a )?spark|sparks? (?:exceed|over|has exceeded|have exceeded)|sparks? count/i.test(c) && /\bwhen\b/i.test(c)) cond.sparks = +((c.match(/sparks?[^()]*\((\d+)\)/i) || [])[1] || 10);
    if (/damage taken (?:has |have )?exceed|damage taken (?:is )?over|when damage taken exceeds|damage taken has exceeded/i.test(c)) cond.dmgTaken = +((c.match(/\((\d+)\)/i) || [])[1] || 0) || +(((c.match(/(?:over|exceeds?) (\d+)k/i) || [])[1] || 0) * 1000) || +((c.match(/\((\d+)k\)/i) || [])[1] || 0) * 1000 || 5000;
    if (/damage dealt (?:has )?exceed/i.test(c)) cond.dmgDealt = +((c.match(/\((\d+)\)/) || [])[1] || 100000);
    if (/bc (?:collected|received) (?:has )?exceed|bc collected/i.test(c)) cond.bcOver = +((c.match(/\((\d+)\)/) || [])[1] || 30);
    if (/hc (?:collected|received) (?:has )?exceed|hc collected/i.test(c)) cond.hcOver = +((c.match(/\((\d+)\)/) || [])[1] || 10);
    if (/sphere|equipped|equips/i.test(c)) cond.sphere = ((c.match(/(?:when|if) ((?:(?!when |if ).)+?) (?:is |are )?equipped/i) || [])[1] || 'sphere').replace(/^an? /i, '').trim();
    if ((m = c.match(/when ([A-Z][\w'. ]+?) (?:is |are )?in (?:the )?(?:same )?(?:squad|team|party)/i))) cond.unitIn = m[1].trim();
    if (cond.sphere && cond.unitIn && /\bor when\b|\bor if\b/i.test(c)) cond.or = true;
    if (/(?:when|if) (?:all )?(?:squad|team|allies|units)? ?(?:are|is)? ?(?:of )?(?:the )?same element/i.test(c)) cond.mono = true;
    if ((m = c.match(/when ((?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+)?)?)+)\s*types? (?:are )?in (?:the )?(?:squad|team|party)/i))) cond.elsIn = fxElements(m[1]);
    if (/when (?:\d+ |all )?(?:different )?elements? (?:or more )?(?:are )?(?:in (?:the )?(?:squad|team|party)|present)|elements? in squad|elements? or more are present/i.test(c)) cond.elsCount = +((c.match(/(\d+) (?:different )?elements?/i) || [])[1] || 6);
    if (/when attacked|when hit|when receiving|when being attacked|when struck/i.test(c)) cond.attacked = true;
    if (/when guarding|while guarding/i.test(c)) cond.guard = true;
    if (/when (?:a )?critical|on critical|critical hits?\b.*(?:fill|boost) bb/i.test(c)) cond.crit = true;
    if (/each turn|every turn|per turn|turn's end|end of turn/i.test(c)) cond.eachTurn = true;
    if ((m = c.match(/up to (\d+) turns?/i))) cond.upTo = +m[1];
    if (/after (?:using|activating) (?:a )?(?:bb|sbb|ubb)|when (?:bb|sbb|ubb) is (?:used|activated)|after bb|upon (?:bb|sbb) use/i.test(c)) cond.afterBurst = true;
    if (/when (?:ally|allies|units?) (?:is |are )?ko|when (?:an )?ally (?:is )?(?:ko'd|defeated|fallen)/i.test(c)) cond.allyKo = true;
    if (/(?:female|male|genderless) units?/i.test(c)) cond.gender = (c.match(/(female|male|genderless)/i) || [])[1].toLowerCase();
    if (/(?:when|if|while) .*?(?:status ailment|afflicted)/i.test(c) && !/against status afflicted/i.test(c)) cond.ailed = true;
    if (Object.keys(cond).length) ctx.cond = cond;
    return ctx;
}

// regole: ognuna riconosce un tipo di effetto; il pezzo riconosciuto si "cancella" dalla frase
// make(m, c, ctx, near) -> effetto (o lista) | null
const FX_RULES = [];
const rule = (rx, make) => FX_RULES.push({ rx, make });

// numero vicino al pezzo riconosciuto: prima "60% ...", dopo "(60%)", o l'unico numero della frase
function fxNear(c, at, end) {
    const before = c.slice(Math.max(0, at - 14), at);
    let m = before.match(/(\d+(?:\.\d+)?)(?:\s*-\s*(\d+(?:\.\d+)?))?\s*%\s*(?:boost (?:to|in)\s*)?(?:of\s*)?$/i);
    if (m) return m[2] ? Math.max(+m[1], +m[2]) : +m[1];
    const inside = c.slice(at, end).match(/(\d+(?:\.\d+)?)(?:\s*-\s*(\d+(?:\.\d+)?))?\s*%/);
    if (inside) return inside[2] ? Math.max(+inside[1], +inside[2]) : +inside[1];
    const after = c.slice(end, end + 40).match(/^[^%&,]*?\((?:[^)]*?)(\d+(?:\.\d+)?)(?:\s*-\s*(\d+(?:\.\d+)?))?\s*%/);
    if (after) return after[2] ? Math.max(+after[1], +after[2]) : +after[1];
    return null;
}
const pct = (near, base, c) => (near != null ? near : Math.round(base * fxWord(c)));

function fxStatsIn(text) {
    const t = text.replace(/\bbb atk\b|\bbb attack\b/ig, ' ');
    if (/all (?:parameters|stats|status|params)|all parameters/i.test(t)) return ['atk', 'def', 'rec', 'hp'];
    const out = [];
    if (/\batk\b|\battack power\b|\battack\b(?! on| to all|s? (?:hit|deal))/i.test(t)) out.push('atk');
    if (/\bdef\b|\bdefen[cs]e\b/i.test(t)) out.push('def');
    if (/\brec\b|\brecovery (?:power|stat|parameter)/i.test(t)) out.push('rec');
    if (/\b(?:max(?:imum)?\.?\s*)?hp\b/i.test(t) && !/hp (?:recovery|restor|absorb|drain)|restores? hp|recovers? hp|remaining hp|of hp|hp is|hp (?:above|below|over|under)|max hp of foe/i.test(t)) out.push('hp');
    return out;
}

/* annullare i danni critici / elementali / Spark (prima delle altre regole sui danni) */
rule(/(?:negates?|nullif\w*|nulls?)\s+(?:all\s+)?(?:enemies'?\s+|foes'?\s+)?(?:critical|crit)(?:\s+hits?)?(?:\s*(?:,|and)\s*(?:spark|elemental|element based))*(?:\s+(?:damage|dmg|hits?))?|(?:and )?critical hits? from (?:enemies|foes)/i, (m, c) => {
    if (!/negat|nullif|null/i.test(c)) return null;
    const out = [{ k: 'nocrit' }];
    if (/elemental|element based/i.test(m[0])) out.push({ k: 'noelem' });
    if (/spark/i.test(m[0])) out.push({ k: 'sparkred', v: 100 });
    return out;
});

/* "adds ... effect to BB/SBB\": l'effetto si aggiunge quando l'unità usa la BB/SBB */
rule(/adds? (?:an? )?(.+?)\s*(?:effects?\s+)?to (?:own )?(bb\/sbb\/ubb|bb\/sbb|bb and sbb|bb|sbb|ubb)\b(?:\s*\(([^)]*)\))?|add to (bb\/sbb\/ubb|bb\/sbb|bb|sbb|ubb)\s*\(([^)]*)\)/i, (m, c, ctx) => {
    const what = m[4] ? m[5] : (m[1] + (m[3] ? ', ' + m[3] : ''));
    const which = (m[2] || m[4] || 'bb/sbb').toLowerCase().split(/\/| and /);
    const inner = [];
    fxSplit(what.replace(/\bto attack\b/i, '')).forEach(t => parseClause(t).fx.forEach(f => inner.push(f)));
    if (!inner.length) return null;
    if (ctx.dur) inner.forEach(f => { if (f.dur == null && !['attack', 'heal', 'bc', 'bbmax', 'cure'].includes(f.k)) f.dur = ctx.dur; });
    return { k: 'onburst', bursts: which, fx: inner };
});

rule(/(?:probable\s+|may\s+|chance\s+(?:of\s+)?)?normal attacks?\s+(?:may\s+|can\s+|will\s+)?(?:on|hits?|hitting|to|attacks?) all (?:foes|enemies)/i, (m, c) => ({ k: 'hitall', chance: /may|probab|chance/i.test(c) ? Math.round(FX_BASE.chance * fxWord(c)) : 100 }));

/* attacco della BB: "15 combo Fire attack on all foes (damage relative to remaining HP)" */
rule(/(?:(\d+)\s*combo\s+)?((?:random\s+)?(?:(?:slightly |very |extremely )?(?:powerful|massive|mighty|strong|enormous|huge|great|weak|light|ultimate)\s+)?(?:random\s+)?(?:(?:fire|water|earth|thunder|light|dark|random|non-elemental|elemental)(?:,?\s*(?:and\s+|or\s+)?)?)*\s*(?:elemental\s+)?(?:power\s+)?(?:powerful\s+)?(?:attack|strike|blow|damage))\s+(?:on|to|against|at)\s+(all|a single|single|\d+ random|random|one|an?|all of the)?\s*(?:foes?|enemies|enemy|targets?|opponents?)(?:\s*\(([^)]*)\))?/i, (m, c) => {
    const words = m[2] || '';
    const els = fxElements(words);
    const mode = /all/i.test(m[3] || '') ? 'all' : /random/i.test(m[3] || '') ? 'random' : 'single';
    const fx = { k: 'attack', hits: m[1] ? +m[1] : 0, mode, els, power: /massive|ultimate/i.test(words) ? 'massive' : /powerful|mighty|strong/i.test(words) ? 'powerful' : '' };
    const inner = m[4] || '';
    if (/relative to (?:remaining|current|own) hp|relative to hp/i.test(inner)) fx.hpRel = true;
    if (/lost hp|as hp decreases|the lower|missing hp|hp lost/i.test(inner)) { fx.hpRel = false; fx.hpLow = true; }
    if (/critical/i.test(inner)) fx.selfCrit = Math.round(FX_BASE.crit * fxWord(inner) * 1.5);
    if (/ignor\w* def/i.test(inner)) fx.defIgnore = true;
    if (/max hp/i.test(inner)) fx.maxHpDmg = true;
    if (/consecutive|repeated/i.test(inner)) fx.combo = true;
    if (/spark/i.test(inner)) fx.selfSpark = Math.round(FX_BASE.spark * fxWord(inner));
    if (/random element/i.test(words)) fx.randomEl = true;
    return fx;
});
// "Powerful Thunder attack" senza bersaglio scritto
rule(/(?:additional\s+)?(?:(\d+)\s*combo\s+)((?:random\s+)?(?:powerful|massive|mighty|strong)?\s*(?:(?:fire|water|earth|thunder|light|dark|random)(?:,?\s*(?:and\s+)?)?)+\s*(?:elemental\s+)?(?:power\s+)?(?:attack)?(?:\s+on\s+(?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+)?)?)+\s*(?:types|foes|enemies))?)/i, (m) => ({ k: 'attack', hits: +m[1], mode: 'all', els: fxElements(m[2]), power: /massive/i.test(m[2]) ? 'massive' : /powerful/i.test(m[2]) ? 'powerful' : '' }));
rule(/(?:damage|attack) (?:relative to|based on|scaling with) (?:remaining|current|own) hp/i, () => ({ k: 'attackmod', hpRel: true }));
rule(/consecutive uses boost damage/i, () => ({ k: 'attackmod', combo: true }));

/* attacco in più a fine turno */
rule(/(?:additional|extra|follow[- ]up)\s+(?:\w+\s+)?attack (?:at|on|during)?\s*(?:turn'?s? end|the end of (?:the )?turn|end of turn)|attack at turn'?s end/i, (m, c, ctx) => ({ k: 'endatk', v: Math.round(FX_BASE.endatk * fxWord(c)) }));

/* cure */
rule(/fully (?:restores?|recovers?|heals?) (?:own |all allies'? |allies'? )?hp|full hp (?:recovery|restore)|hp (?:is )?fully (?:restored|recovered)/i, () => ({ k: 'heal', full: true }));
rule(/(?:gradual(?:ly)?|regenerat\w*)\s+(?:\w+\s+)?(?:recover\w*|restor\w*|heal\w*|hp recovery)|(?:recover\w*|restor\w*|heal\w*) (?:all allies'? )?hp (?:gradually|each turn|every turn|per turn)|hp (?:recovery|regen\w*) (?:each|every|per) turn|(?:restores?|recovers?|heals?) hp (?:at turn'?s end|over \d+ turns)/i, (m, c, ctx, near) => ({ k: ctx.dur ? 'regen' : 'hpturn', v: +(FX_BASE.regen * fxWord(c)).toFixed(2), pctv: near }));
rule(/(?:spark damage|sparks?)\s+(?:\w+\s+)?(?:restores?|recovers?|heals?)\s+hp|hp recovery during spark/i, (m, c, ctx, near) => ({ k: 'sparkheal', v: pct(near, 5, c) }));
rule(/(?:damage taken|damage received)\s+(?:\w+\s+)?(?:may\s+)?(?:\w+\s+)?(?:restores?|recovers?|heals?)\s+hp|(?:probable\s+)?(?:\w+\s+)?hp recovery when attacked|damage taken restores hp|recovery of hp when attacked|(?:hp|heal) when attacked/i, (m, c, ctx, near) => ({ k: 'hitheal', v: pct(near, FX_BASE.hitheal, c), chance: /may|probab|chance/i.test(c) ? 50 : 100 }));
rule(/(?:\w+\s+)?(?:hp absorption|absorb\w* (?:max )?hp|hp drain|drain\w* hp|recovers? hp (?:relative to|from) damage (?:dealt|inflicted)|damage dealt (?:may )?(?:\w+ )?absorbs?)/i, (m, c, ctx, near) => ({ k: 'drain', v: pct(near, FX_BASE.drain, c), chance: /probab|may|chance/i.test(c) ? 50 : 100 }));
rule(/(?:restores?|recovers?|heals?|recovery of|recovery to|restoration of|replenish\w*)\s+(?:[\w']+\s+){0,3}hp|hp (?:recovery|restoration)\b|\bheals?\b(?! effect)/i, (m, c, ctx, near) => ({ k: 'heal', v: +(FX_BASE.heal * fxWord(c)).toFixed(2), pctv: near }));

/* barra BB */
rule(/fills? (?:own |all allies'? |allies'? )?bb gauge to max|fills? (?:own |all allies'? )?bb gauge (?:to )?(?:full|completely)|bb gauge (?:is )?fully (?:filled|charged)|fully (?:fills|charges) (?:the )?bb gauge/i, () => ({ k: 'bbmax' }));
rule(/(?:damage taken|damage received|when attacked|being hit)[^,]*?(?:boosts?|fills?|raises?|increases?|charges?) (?:\w+ )?bb gauge|bb gauge (?:boost|fill) when (?:attacked|hit|damage taken)|(?:boosts?|fills?|boost in|increase in) (?:the )?bb gauge when (?:attacked|hit|damaged)|bb gauge (?:\w+ )?(?:fills?|filling) when attacked/i, (m, c) => ({ k: 'bbhit', v: bcRange(c) || Math.round(FX_BASE.bchit * fxWord(c)) }));
rule(/spark(?:s| damage)?[^,]*?(?:boosts?|fills?|raises?|increases?|charges?) (?:\w+ )?bb gauge|bb gauge boost during spark|bb gauge (?:boost|fill) (?:when|on|during) spark/i, (m, c) => ({ k: 'bbspark', v: bcRange(c) || Math.round(FX_BASE.bchit * fxWord(c) * 0.5 * 10) / 10 }));
rule(/critical (?:hits?|damage)?[^,]*?(?:boosts?|fills?) (?:\w+ )?bb gauge|bb gauge (?:boost|fill) (?:when|on) critical/i, (m, c) => ({ k: 'bbcrit', v: bcRange(c) || Math.round(FX_BASE.bchit * fxWord(c)) }));
rule(/(?:normal attacks?|attacking|when attacking)[^,]*?(?:boosts?|fills?) (?:\w+ )?bb gauge|bb gauge (?:boost|fill) when attacking|bb gauge (?:\w+ )?(?:fills?|filling) when attacking/i, (m, c) => ({ k: 'bbonhit', v: bcRange(c) || 1 }));
rule(/gradual(?:ly)? (?:\w+ )?(?:boosts?|fills?|recovers?|charges?|restores?) (?:own )?bb gauge|bb gauge (?:receives )?gradual boost|gradually (?:recovers|fills) bb/i, (m, c, ctx) => ({ k: 'bbturn', v: Math.round(FX_BASE.bcturn * fxWord(c)) }));
rule(/(?:boosts?|fills?) (?:bb gauge|bb) (?:each|every|per|after each) turn|bb gauge (?:each|every|per|after each) turn|bb gauge (?:\w+ )?fills (?:after )?each turn|boost in bb gauge after each turn|(?:boosts?|fills?) (?:\w+ )?bb gauge at turn'?s end|fills? bb gauge for \d+ turns/i, (m, c, ctx) => ({ k: 'bbturn', v: bcRange(c) || Math.round(FX_BASE.bcturn * fxWord(c)) }));
rule(/(?:boosts?|increases?|raises?) (?:in )?(?:the )?(?:bb gauge|bb) fill(?:ing)? (?:rate|speed)|bb gauge fill rate|(?:boosts?|increases?) (?:in )?bb fill rate|fill rate of bb/i, (m, c, ctx, near) => ({ k: 'bbfill', v: pct(near, FX_BASE.bbfill, c) }));
rule(/bb gauge consumed reduction|(?:reduc\w*|lowers?|decreases?|cuts?)\s+(?:\w+\s+)?(?:bb gauge required|bb cost|bb activation cost|bb gauge (?:needed|consumption|consumed)|amount of bb gauge|bb gauge usage)|(?:reduction|decrease) (?:to|in|of) bb (?:activation )?cost|bb gauge (?:required|consumption) (?:reduc|lower)|reduction to bb activation cost/i, (m, c, ctx, near) => ({ k: 'bbcost', v: pct(near, FX_BASE.bbcost, c) }));
rule(/(?:boosts?|fills?|increases?|raises?|charges?|restores?|recovers?)\s+(?:own\s+|all allies'?\s+|allies'?\s+|the\s+)?bb gauge|bb gauge (?:boost|fill|charge)|increases? allies'? bb gauge|(?:boost|fill) to bb gauge/i, (m, c, ctx) => ({ k: 'bc', v: bcRange(c) || Math.round(FX_BASE.bc * fxWord(c)) }));

/* barra OD */
rule(/(?:boosts?|increases?|raises?)?\s*(?:in )?od gauge fill(?:ing)? (?:rate|speed)|od fill rate/i, (m, c, ctx, near) => ({ k: 'odfill', v: pct(near, FX_BASE.odfill, c) }));
rule(/(?:boosts?|fills?|increases?)\s+(?:\w+\s+)?od gauge (?:fill rate )?(?:at turn'?s end|each turn|every turn)|od gauge boost each turn/i, (m, c, ctx, near) => ({ k: 'odturn', v: near != null ? near : Math.round(3 * fxWord(c)) }));
rule(/(?:boosts?|fills?|increases?|raises?|charges?)\s+(?:\w+\s+)?od gauge|od gauge (?:boost|fill)|fills? od/i, (m, c, ctx, near) => ({ k: 'od', v: near != null ? near : Math.round(5 * fxWord(c)) }));

/* cristalli, oggetti, Zel, Karma */
rule(/(?:bc|hc|battle crystals?|heart crystals?|item|items|zel|karma|exp|bc, hc|bc and hc|bc & hc)[^%]*?(?:efficacy|efficiency|effectiveness|effect)|(?:efficacy|efficiency|effectiveness) of (?:bc|hc|battle crystals?|heart crystals?)(?:,? (?:and )?(?:bc|hc))*/i, (m, c, ctx, near) => {
    const t = m[0];
    const kinds = [];
    if (/\bbc\b|battle crystal/i.test(t)) kinds.push('bceff');
    if (/\bhc\b|heart crystal/i.test(t)) kinds.push('hceff');
    return kinds.map(k => ({ k, v: pct(near, FX_BASE.eff, c) }));
});
rule(/(?:(?:bc|hc|battle crystals?|heart crystals?|items?|zel|karma|exp|sphere|crystals?)(?:,?\s*(?:and\s+|&\s+)?))+(?:drop|drops)\s*(?:rates?)?|drop rates? (?:of|for) (?:(?:bc|hc|items?|zel|karma)(?:,?\s*(?:and\s+)?)?)+|(?:boost|increase) (?:to|in) drop rates?/i, (m, c, ctx, near) => {
    const t = m[0] + ' ' + c.slice(c.indexOf(m[0]) + m[0].length, c.indexOf(m[0]) + m[0].length + 30);
    const out = [];
    const v = pct(near, FX_BASE.drop, c);
    if (/\bbc\b|battle crystal|crystals(?! of)/i.test(t)) out.push({ k: 'bcdrop', v });
    if (/\bhc\b|heart crystal/i.test(t)) out.push({ k: 'hcdrop', v });
    if (/\bitems?\b/i.test(t)) out.push({ k: 'itemdrop', v });
    if (/\bzel\b/i.test(t)) out.push({ k: 'zel', v });
    if (/\bkarma\b/i.test(t)) out.push({ k: 'karma', v });
    if (/\bexp\b/i.test(t)) out.push({ k: 'exp', v });
    if (!out.length) out.push({ k: 'bcdrop', v }, { k: 'hcdrop', v });
    return out;
});
rule(/^\s*\d+(?:\.\d+)?%\s*(?:(?:bc|hc|items?|zel|karma|exp)(?:,?\s*(?:and\s+)?)?)+(?:\s*gained)?\s*$/i, (m, c, ctx, near) => {
    const v = fxPercents(m[0])[0].v, out = [];
    if (/\bbc\b/i.test(m[0])) out.push({ k: 'bcdrop', v });
    if (/\bhc\b/i.test(m[0])) out.push({ k: 'hcdrop', v });
    if (/\bitems?\b/i.test(m[0])) out.push({ k: 'itemdrop', v });
    if (/\bzel\b/i.test(m[0])) out.push({ k: 'zel', v });
    if (/\bkarma\b/i.test(m[0])) out.push({ k: 'karma', v });
    if (/\bexp\b/i.test(m[0])) out.push({ k: 'exp', v });
    return out;
});
rule(/(?:battle crystals?|bc) produced during spark|bc (?:drop|produced) (?:during|on) spark/i, (m, c, ctx, near) => ({ k: 'sparkbc', v: pct(near, FX_BASE.drop, c) }));
rule(/\b(?:abp|cbp)\b(?:\s*(?:and|&)\s*(?:abp|cbp))?(?:\s*gain)?|arena points|colosseum/i, (m, c) => ({ k: 'arena', text: m[0] }));
rule(/(?:bb\/sbb|bb and sbb|bb|sbb)(?:\/ubb)? activation rates?/i, (m, c, ctx, near) => ({ k: 'bbrate', v: pct(near, 20, c) }));
rule(/\(?pvp modes? only\)?|purg\w* (?:\w+ )*?(?:negation|boost|lock|skip|disable)\w*(?: effects?)?(?: from (?:\w+ )+)?|ls lock|es lock|turn skip/i, (m, c) => ({ k: 'other', text: c.trim() }));
rule(/(?:probable |adds? |chance of )*(?:powerful |great |massive )?spark critical/i, (m, c, ctx, near) => ({ k: 'sparkcrit', v: near != null ? near : chanceOf(c) === 100 ? FX_BASE.chance : chanceOf(c), mult: /powerful|great|massive/i.test(m[0]) ? 2.5 : 2 }));
rule(/(?:\d+ turns? )?(?:\bdot\b|damage over time)(?: infliction)?/i, (m, c, ctx, near) => ({ k: 'dot', v: pct(near, 10, c), turns: +((c.match(/(\d+) turns? (?:dot|damage over)/i) || [])[1] || 2) }));
rule(/(?:boost|increase)s? (?:to |in )?(?:zel|karma|exp)(?: and (?:zel|karma|exp))*(?: (?:gain|obtained|earned))?/i, (m, c, ctx, near) => {
    const out = [];
    const v = pct(near, FX_BASE.drop, c);
    if (/zel/i.test(m[0])) out.push({ k: 'zel', v });
    if (/karma/i.test(m[0])) out.push({ k: 'karma', v });
    if (/exp/i.test(m[0])) out.push({ k: 'exp', v });
    return out;
});

/* danni */
rule(/(?:boosts?|increases?|raises?|enhances?)?\s*(?:\w+\s+)?(?:bb\/sbb\/ubb|bb|brave burst) (?:atk|attack|damage|power)|bb atk|bb damage/i, (m, c, ctx, near) => ({ k: 'bbatk', v: pct(near, FX_BASE.bbatk, c) }));
rule(/spark (?:damage )?(?:vulnerability|weakness)|vulnerab\w* (?:to|against) spark/i, (m, c, ctx, near) => ({ k: 'vspark', v: pct(near, FX_BASE.vuln, c), chance: chanceOf(c) }));
rule(/critical (?:damage )?(?:vulnerability|weakness)|vulnerab\w* (?:to|against) critical/i, (m, c, ctx, near) => ({ k: 'vcrit', v: pct(near, FX_BASE.vuln, c), chance: chanceOf(c) }));
rule(/elemental (?:damage )?(?:vulnerability|weakness)|vulnerab\w* (?:to|against) elemental/i, (m, c, ctx, near) => ({ k: 'velem', v: pct(near, FX_BASE.vuln, c), chance: chanceOf(c) }));
rule(/spark damage reduc\w*|reduc\w* (?:\w+ )?spark damage|negates? spark|spark (?:damage )?negation|nullif\w* spark/i, (m, c, ctx, near) => ({ k: 'sparkred', v: /negat|nullif/i.test(m[0]) ? 100 : pct(near, FX_BASE.sparkred, c) }));
rule(/(?:boosts?|increases?|raises?|enhances?)?\s*(?:\w+\s+)?(?:own\s+)?spark (?:damage|dmg)|spark damage|spark dmg|(?:boost|increase) (?:to|in) spark/i, (m, c, ctx, near) => ({ k: 'spark', v: pct(near, FX_BASE.spark, c) }));
rule(/critical(?:,|\s+and)\s+spark damage(?! reduc)/i, (m, c, ctx, near) => [{ k: 'critdmg', v: pct(near, FX_BASE.critdmg, c) }, { k: 'spark', v: pct(near, FX_BASE.spark, c) }]);
rule(/critical(?:,| and) elemental damage reduc\w*/i, (m, c, ctx, near) => [{ k: 'critred', v: pct(near, FX_BASE.critred, c) }, { k: 'drel', els: ELEMENTS.slice(), v: pct(near, FX_BASE.drel, c), weakOnly: true }]);
rule(/critical damage (?:reduc\w*|resist\w*)|reduc\w* (?:\w+ )?critical damage|critical (?:damage )?negation/i, (m, c, ctx, near) => ({ k: 'critred', v: pct(near, FX_BASE.critred, c) }));
rule(/(?:boosts?|increases?|raises?)?\s*(?:\w+\s+)?critical (?:hit )?(?:damage|dmg)|crit(?:ical)? (?:hit )?dmg|crit damage/i, (m, c, ctx, near) => ({ k: 'critdmg', v: pct(near, FX_BASE.critdmg, c) }));
rule(/(?:boosts?|increases?|raises?)?\s*(?:\w+\s+)?(?:own\s+)?critical (?:hit )?(?:rate|chance|hits?)|crit(?:ical)? rate|crit chance|critical(?=\s*(?:for|\(|&)|\s*$)/i, (m, c, ctx, near) => ({ k: 'crit', v: pct(near, FX_BASE.crit, c) }));
rule(/(?:boosts?|increases?|raises?|enhances?)?\s*(?:\w+\s+)?(?:(?:fire|water|earth|thunder|light|dark|all)(?:,?\s*(?:and\s+)?)*)*\s*(?:elemental|element based) (?:weakness )?damage(?! reduc)(?! taken)(?! received)|elemental damage/i, (m, c, ctx, near) => {
    if (/reduc|resist|mitigat|taken|received|negat/i.test(c)) return { k: 'drel', els: fxElements(c).length ? fxElements(c) : ELEMENTS.slice(), v: pct(near, FX_BASE.drel, c), weakOnly: !fxElements(c).length };
    const fx = { k: 'elem', v: pct(near, FX_BASE.elem, c) };
    const els = fxElements(m[0]);
    if (els.length && !ctx.els) fx.els = els;
    return fx;
});
rule(/(?:damage (?:dealt )?(?:to|against) weak elements?|weakness damage|elemental weakness damage|damage to (?:foes|enemies) weak to (?:\w+ )?element)/i, (m, c, ctx, near) => ({ k: 'elem', v: pct(near, FX_BASE.elem, c) }));
rule(/damage (?:against|to|vs\.?) (?:status )?(?:afflicted|ailment)|(?:afflicted|ailing) (?:foes|enemies)|against status afflicted/i, (m, c, ctx, near) => ({ k: 'afflicted', v: pct(near, FX_BASE.afflicted, c) }));
rule(/(?:boosts?|increases?)?\s*(?:\w+\s+)?damage (?:against|to|vs\.?) (?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+)?)?)+\s*(?:types|foes|enemies)/i, (m, c, ctx, near) => ({ k: 'dmgvs', v: pct(near, 50, c), els: fxElements(m[0]) }));
rule(/(?:boosts?|increases?)\s+(?:\w+\s+)?(?:damage|dmg)\b(?! reduc)(?! taken)/i, (m, c, ctx, near) => ({ k: 'dmgup', v: pct(near, 30, c) }));

/* difesa ignorata, elementi aggiunti, colpi in più, attacco a tutti */
rule(/(?:negates?|nullif\w*|prevents?)\s+(?:\w+\s+)?(?:def(?:ense)?[- ]ignor\w*|ignore def\w*)(?:\s+effects?)?/i, () => ({ k: 'nodefign' }));
rule(/(?:ignor\w*|disregard\w*|bypass\w*|piercing)\s+(?:of\s+)?(?:an?\s+)?(?:enemy\s+|enemies'?\s+|enemy's\s+|foes'?\s+|foe's\s+|opponents?'?\s+|opponent's\s+)?def(?:ense)?|def(?:ense)?[- ]ignor\w*|ignores? defense/i, (m, c) => ({ k: 'defign', chance: /chance|probab|may/i.test(c) ? Math.round(FX_BASE.chance * fxWord(c)) : 100 }));
rule(/^\s*(?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+|&\s+)?)?)+\s*elements?\b|adds? (?:all elements|(?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+|&\s+)?)?)+)\s*(?:elements?)?\s*(?:to (?:all allies'? )?(?:attacks?|bb|sbb|ubb))?|(?:fire|water|earth|thunder|light|dark) element added|elements? (?:added )?to attack|adds? element/i, (m) => ({ k: 'addel', els: /all elements/i.test(m[0]) ? ELEMENTS.slice() : fxElements(m[0]) }));
rule(/(?:raises?|increases?|boosts?)?\s*(?:\w+\s+)?normal (?:hit|attack) (?:amount|count|number|hits?)|number of hits|hit count|extra hits? (?:to|for) normal|normal attacks? (?:hits?|deal) (?:\d+ )?(?:extra|additional) (?:hits?|times)/i, (m, c, ctx, near) => ({ k: 'hits', v: pct(near, FX_BASE.hits, c) }));
rule(/normal attacks?\s+(?:may\s+|can\s+|will\s+)?(?:hits?|hitting|attacks?|damages?|deal damage to|on) all (?:foes|enemies)|(?:attack|hit) all (?:foes|enemies) with normal attacks?/i, (m, c) => ({ k: 'hitall', chance: /may|probab|chance/i.test(c) ? Math.round(FX_BASE.chance * fxWord(c)) : 100 }));
rule(/(?:may|probab\w*|chance\w* (?:of|to)|activates?)\s+(?:\w+\s+)?(?:cast|activate|use|trigger)?\s*(?:bb\/sbb\/ubb|bb|sbb|ubb|brave burst)\s+(?:twice|double)|(?:bb\/sbb\/ubb|bb\/sbb|bb|sbb) twice|double (?:bb|brave burst)|cast double/i, (m, c, ctx, near) => ({ k: 'double', v: near != null ? near : /may|probab|chance/i.test(c) ? Math.round(FX_BASE.double * fxWord(c)) : 100 }));
rule(/(\d+)?\s*extra action|additional action|act (?:twice|again)/i, (m, c) => ({ k: 'extraact', v: +(m[1] || 1) }));

/* stati alterati e indebolimenti dei nemici */
rule(/(?:negates?|nullif\w*|immun\w*|prevents?|resist\w* (?:to|against)|protect\w* (?:from|against)|nulls?)\s+(?:\w+\s+)?(?:all\s+)?(?:status ailments?|ailments?|status (?:effects|conditions))(?:\s+and\s+(?:all\s+)?(?:atk|def|rec)(?:,?\s*(?:and\s+)?(?:atk|def|rec))*\s*(?:reductions?|debuffs?))?|status ailments? (?:negation|nullif\w*|immunity)|(?:all )?ailments? null/i, (m) => {
    const out = [{ k: 'immune' }];
    if (/reduc|debuff/i.test(m[0])) out.push({ k: 'nodebuff', stats: fxStatsIn(m[0].replace(/^.*?ailments?/i, '')).filter(s => s !== 'hp') });
    return out;
});
rule(/(?:negates?|nullif\w*|prevents?|immun\w* to|resist\w* (?:to|against))\s+(?:\w+\s+)?(?:(?:atk|def|rec|attack|defense|recovery)(?:,?\s*(?:and\s+)?))+\s*(?:reduction|debuff|down|decrease)s?(?:\s+effects?)?|(?:atk|def|rec)(?:,? (?:and )?(?:atk|def|rec))* reduction (?:negation|immunity|resistance)/i, (m) => ({ k: 'nodebuff', stats: fxStatsIn(m[0].replace(/negat\w*|nullif\w*|reduction|resist\w*/ig, '')) }));
rule(/(?:negates?|nullif\w*|resist\w* (?:to|against)|immun\w* (?:to|against))\s+(?:\w+\s+)?(poison|weak(?:ness)?|sick(?:ness)?|injury|curse|paralysis)(?:(?:,?\s*(?:and\s+)?)(?:poison|weak(?:ness)?|sick(?:ness)?|injury|curse|paralysis))*/i, (m) => ({ k: 'immune', ails: ailmentsIn(m[0]) }));
rule(/negates them|nullifies them/i, () => [{ k: 'immune' }]);
rule(/(?:removes?|cures?|purges?|clears?|recover\w* from|heals?)\s+(?:all\s+)?(?:allies'?\s+)?(?:negative\s+)?(?:status ailments?|ailments?|status (?:effects|conditions))|(?:status ailments?|ailments?) (?:removal|cure|recovery)|removal of (?:all )?(?:status )?ailments?|reverses? all irregular conditions|reverses? (?:all )?(?:status|ailments)/i, () => ({ k: 'cure' }));
rule(/(?:removes?|purges?|clears?)\s+(?:all\s+)?(?:atk|def|rec|stat)(?:,?\s*(?:and\s+)?(?:atk|def|rec))*\s*(?:reductions?|debuffs?)|purges? (?:\w+ )+ (?:disable|reduction) effects?/i, () => ({ k: 'cure', debuffs: true }));
rule(/(?:random|all) (?:status )?ailments?(?:\s+(?:infliction|counter))?|(?:random|all) status ailment|status ailments? (?:infliction|to attack)/i, (m, c) => ({ k: /counter|when attacked|damage taken/i.test(c) ? 'counterail' : 'inflict', ails: /all/i.test(m[0]) ? FX_AILMENTS.slice() : ['random'], chance: chanceOf(c) }));
rule(/counter\w*(?: attacks?)? with ((?:(?:poison|weak(?:ness)?|sick(?:ness)?|injury|curse|paralysis|random status ailments?)(?:,?\s*(?:and\s+|or\s+)?)?)+)/i, (m, c) => ({ k: 'counterail', ails: /random/i.test(m[1]) ? ['random'] : ailmentsIn(m[1]), chance: chanceOf(c) }));
rule(/(?:poison|weak(?:ness)?(?! elem)(?!er)|sick(?:ness)?|injury|curse|paralysis)(?:(?:,?\s*(?:and\s+|or\s+|&\s+)?)(?:poison|weak(?:ness)?(?! elem)|sick(?:ness)?|injury|curse|paralysis))*/i, (m, c) => {
    if (/(?:when attacked|damage taken|counter)/i.test(c)) return { k: 'counterail', ails: ailmentsIn(m[0]), chance: chanceOf(c) };
    return { k: 'inflict', ails: ailmentsIn(m[0]), chance: chanceOf(c) };
});
rule(/(?:\d+ turns? )?(?:(?:atk|def|rec|attack|defense|recovery)(?:,?\s*(?:and\s+|&\s+)?))+\s*(?:reductions?|reduce|reducing|down|decrease|debuffs?)(?:\s+(?:infliction|effects?|counter))?|(?:lower\w*|reduc\w*|decreas\w*)\s+(?:enemy|enemies'?|enemy's|foes'?|foe's|target'?s?|opponents?'?\s+)?\s*(?:(?:atk|def|rec)\b(?:,?\s*(?:and\s+)?)?)+/i, (m, c, ctx, near) => {
    const stats = fxStatsIn(m[0]).filter(s => s !== 'hp');
    const counter = /counter|when attacked|damage taken/i.test(c);
    const self = /own|self|lowers own/i.test(c);
    const turns = +((c.match(/(\d+) turns? (?:\w+ )?(?:atk|def|rec|attack)/i) || c.match(/(\d+) turns?\)?\s*$/i) || [])[1] || (ctx.onAtk ? 1 : ctx.dur) || 1);
    return { k: self ? 'selfdown' : counter ? 'counterdebuff' : 'debuff', stats: stats.length ? stats : ['atk'], v: pct(near, FX_BASE.debuff, c), chance: self ? 100 : chanceOf(c), turns };
});
rule(/(?:bb gauge|bb fill rate|bb gauge fill rate) reduc\w*|reduc\w* (?:\w+ )*?(?:of )?(?:foe's |foes'? |enemy's |enemies'? )?bb gauge(?: fill rate)?|bb gauge reduction/i, (m, c, ctx, near) => ({ k: 'enemybb', v: pct(near, 30, c), chance: chanceOf(c) }));
rule(/taunt\w*|draws? (?:enemy )?attacks?|targeted by (?:all )?(?:enemies|foes)/i, () => ({ k: 'taunt' }));
rule(/stealth|(?:less|unlikely) (?:likely )?to be targeted/i, (m, c) => ({ k: 'stealth' }));

/* difesa */
rule(/(?:negates?|nullif\w*|nulls?)\s+(?:all\s+)?(?:critical(?:\s+hits?)?|crit)(?:\s*(?:,|and)\s*(?:spark|elemental))*\s*(?:and\s+(?:spark|elemental)\s+)?(?:damage|dmg|hits?)?/i, (m) => {
    const out = [{ k: 'nocrit' }];
    if (/elemental/i.test(m[0])) out.push({ k: 'noelem' });
    if (/spark/i.test(m[0])) out.push({ k: 'sparkred', v: 100 });
    return out;
});
rule(/(?:negates?|nullif\w*|nulls?)\s+(?:all\s+)?(?:elemental|element based)(?:\s+(?:weakness|damage|dmg))*(?:\s+and\s+critical(?:\s+damage)?)?/i, (m) => {
    const out = [{ k: 'noelem' }];
    if (/critical/i.test(m[0])) out.push({ k: 'nocrit' });
    return out;
});
rule(/(?:chance|probab\w*) (?:of|to)? ?(?:reduc\w*|lower\w*) (?:\w+ )*damage (?:taken )?to 1|damage (?:taken )?(?:reduction )?to 1\b|reduces? (?:\w+ )*damage (?:taken )?to 1/i, (m, c, ctx, near) => ({ k: 'dr1', v: near != null ? near : Math.round(15 * fxWord(c)) }));
rule(/(?:chance|probab\w*|may)\s+(?:of\s+)?(?:\w+\s+)?(?:\d+%\s+)?(?:\w+\s+)?damage reduction|(?:probable|chance of) (?:\w+ )?reduc\w* (?:\w+ )?damage/i, (m, c, ctx, near) => ({ k: 'drchance', v: near != null ? near : Math.round(FX_BASE.dr * fxWord(c) * 1.5), chance: chanceOf(c) }));
rule(/(?:reduc\w*|resist\w*|mitigat\w*|cuts?)\s+(?:\w+\s+)?(?:damage|dmg)\s+(?:taken\s+)?(?:\(\d+%\)\s+)?(?:from|by|of)\s+(?:all\s+)?((?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+|&\s+)?)?)+)\s*(?:elements?|elemental|types?|units?|foes|attacks)?|(?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+)?)?)+\s*(?:elemental )?damage (?:taken )?(?:reduction|reduc\w*)|(?:damage )?reduction (?:in damage )?from (?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+)?)?)+|reduc\w* (?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+)?)?)+\s*(?:elemental )?damage|resistance (?:to|against) (?:(?:fire|water|earth|thunder|light|dark)(?:,?\s*(?:and\s+)?)?)+|(?:fire|water|earth|thunder|light|dark) (?:element )?(?:resistance|resistant)/i, (m, c, ctx, near) => ({ k: 'drel', els: fxElements(m[0]).length ? fxElements(m[0]) : ELEMENTS.slice(), v: pct(near, FX_BASE.drel, c) }));
rule(/(?:reduc\w*|resist\w*)\s+(?:\w+\s+)?damage\s+(?:taken\s+)?from all (?:elements?|types)|all elemental damage (?:reduc\w*|taken)|elemental (?:based )?damage reduc\w*|reduc\w* (?:\w+ )?elemental damage/i, (m, c, ctx, near) => ({ k: 'drel', els: ELEMENTS.slice(), v: pct(near, FX_BASE.drel, c) }));
rule(/(?:reduc\w*|lowers?|decreases?)\s+(?:\w+\s+)?damage (?:taken|received)?\s*(?:by half|in half|by 50%)|halves? damage|damage (?:taken )?(?:is )?halved/i, () => ({ k: 'dr', v: 50 }));
rule(/(?:boosts? )?damage reduction (?:when|while) guarding|guard\w* (?:damage )?reduc\w*/i, (m, c, ctx, near) => ({ k: 'guard', v: pct(near, 30, c) }));
rule(/(?:dot|damage over time|poison damage) (?:reduc\w*|resist\w*)/i, (m, c, ctx, near) => ({ k: 'dotred', v: pct(near, 50, c) }));
rule(/(?:additional|extra|end of turn|turn'?s? end) (?:\w+ )?damage reduction|damage reduction at turn'?s end/i, (m, c, ctx, near) => ({ k: 'dr2', v: pct(near, FX_BASE.dr, c) }));
rule(/(?:reduc\w*|lowers?|decreases?|mitigat\w*|cuts?|resist\w*)\s+(?:\w+\s+){0,2}(?:damage|dmg)(?:\s+(?:taken|received))?|damage (?:taken )?(?:reduction|mitigation|reduced)|mitigat\w*|damage (?:resistance|cut)|reduction in damage|resistance to damage/i, (m, c, ctx, near) => ({ k: 'dr', v: near != null ? near : drPct(c) }));
rule(/(?:probable\s+|chance\s+(?:of|to)\s+|may\s+)?(?:evasion|evade|dodge)/i, (m, c, ctx, near) => ({ k: 'evasion', v: near != null ? near : Math.round(FX_BASE.evasion * fxWord(c)) }));
rule(/angel idol|(?:resistance|resist\w*|survive) (?:against )?(?:\d+ )?(?:ko|fatal)(?: attacks?)?|ko resistance|prevent\w* (?:against )?ko|endure|survive (?:a )?fatal|guts/i, (m, c, ctx, near) => ({ k: 'ko', v: near != null ? near : /angel idol/i.test(m[0]) ? 100 : /probab|chance|may|low/i.test(c) ? Math.round(FX_BASE.ko * fxWord(c)) : 100, times: +((c.match(/(\d+) ko/i) || [])[1] || 1) }));
rule(/(?:reviv\w*|rais\w*(?: of)?|resurrect\w*|recovers?)\s+(?:\w+\s+)?(?:allies )?(?:from )?(?:ko|fallen|defeated)|ko'?d allies|revival/i, (m, c, ctx, near) => ({ k: 'revive', v: near != null ? near : /probab|may|chance/i.test(c) ? Math.round(FX_BASE.ko * fxWord(c)) : 100 }));
rule(/(?:(?:fire|water|earth|thunder|light|dark)\s+)?(?:barrier|shield)/i, (m, c, ctx, near) => {
    const hp = c.match(/\((\d[\d,.]*)\s*(k)?\s*hp\)|(\d[\d,.]*)\s*(k)?\s*hp barrier/i);
    const v = hp ? Math.round(parseFloat(String(hp[1] || hp[3]).replace(/,/g, '')) * ((hp[2] || hp[4]) ? 1000 : 1)) : Math.round(FX_BASE.shield * fxWord(c));
    const rec = /mana bubble|\(\d+% rec\)/i.test(c) ? +((c.match(/(\d+)% rec/i) || [])[1] || 0) : 0;
    return { k: 'shield', v, rec, els: fxElements(m[0]) };
});
rule(/(?:counter\w*|reflect\w*)\s+(?:\w+\s+)*?(?:damage|attacks?)|damage (?:taken|received) (?:is )?(?:counter|reflect)\w*|counter ?attack|damage counter/i, (m, c, ctx, near) => ({ k: 'counter', v: pct(near, FX_BASE.counter, c), chance: chanceOf(c) }));

/* statistiche in base ad altre statistiche: "boosts Atk relative to Def" / "convert Def into Atk" */
rule(/(?:boosts?|increases?|raises?|converts?)?\s*(?:\w+\s+)?(?:(?:atk|def|rec|max hp|hp)(?:,?\s*(?:and\s+)?))+\s*(?:relative to|based on|by|according to|in proportion to)\s+(?:own\s+)?(?:remaining\s+|current\s+|max(?:imum)?\s+)?(atk|def|rec|hp)|converts? (?:[\w']+ )*?(atk|def|rec|hp) (?:into|to) (atk|def|rec)/i, (m, c, ctx, near) => {
    const t = m[0];
    let from, to;
    const conv = t.match(/converts? (?:[\w']+ )*?(atk|def|rec|hp) (?:into|to) (atk|def|rec)/i);
    if (conv) { from = conv[1].toLowerCase(); to = [conv[2].toLowerCase()]; }
    else {
        const parts = t.split(/relative to|based on|according to|in proportion to|\bby\b/i);
        to = fxStatsIn(parts[0] || '');
        from = (m[1] || '').toLowerCase();
        if (/remaining|current/i.test(t) && from === 'hp') return { k: 'hprelstat', stats: to.length ? to : ['atk'], v: pct(near, FX_BASE.hprel, c), low: /low|inverse/i.test(c) };
    }
    if (!to || !to.length) to = ['atk'];
    return { k: 'relstat', stats: to.filter(s => s !== from), from, v: pct(near, /half/i.test(c) ? 50 : FX_BASE.relstat, c) };
});
rule(/(?:boosts?|increases?)\s+(?:\w+\s+)?(?:atk|damage|attack)\s+(?:relative to|based on|the lower|the more)\s+(?:remaining|current|own)?\s*hp/i, (m, c, ctx, near) => ({ k: 'hprelstat', stats: ['atk'], v: pct(near, FX_BASE.hprel, c), low: /low|lower|less/i.test(c) }));
rule(/(?:boosts?|increases?)\s+(?:\w+\s+)?(?:atk|attack|stats?)\s+each turn|each turn (?:\w+ )?boosts? (?:\w+ )?atk|^\s*\d+%\s*(?:(?:atk|def|rec)(?:,?\s*(?:and\s+)?)?)+\s*each turn/i, (m, c, ctx, near) => ({ k: 'stack', stats: fxStatsIn(m[0]).length ? fxStatsIn(m[0]) : ['atk'], v: pct(near, 20, c) }));
rule(/(?:lowers?|reduces?|decreases?) own (?:(?:atk|def|rec)(?:,? (?:and )?)?)+/i, (m, c, ctx, near) => ({ k: 'selfdown', stats: fxStatsIn(m[0]), v: pct(near, 50, c), turns: ctx.dur || 1, chance: 100 }));

/* limiti dei parametri (solo scritto) */
rule(/(?:raises?|increases?|breaks?) (?:\w+ )*?(?:parameter |stat |atk |def |rec |hp )*(?:limits?|caps?|max(?:imum)? (?:atk )?value)|(?:atk|def|rec|hp) limit|parameter limit/i, (m, c) => ({ k: 'limit', text: m[0] }));

/* aumenti di statistiche (alla fine: prendono quello che resta) */
rule(/(?:(?:\d+(?:\.\d+)?%\s*)?(?:boosts?|boosting|increases?|raises?|enhances?|boost (?:to|in)|boost \d+(?:\.\d+)?% to|increase (?:to|in)|ups?)\s+(?:[\w']+\s+){0,4}?|^\s*\d+(?:\.\d+)?%\s*(?:boost\s*(?:to|in)?\s*)?)(?:(?:max(?:imum)?\.?\s+)?(?:atk|def|rec|hp|attack|defense|recovery|all parameters|all stats|parameters|stats)(?:\s+power)?(?:,?\s*(?:and\s+|&\s+)?(?:\d+(?:\.\d+)?%\s*)?(?:boost to\s+)?))+/i, (m, c, ctx, near) => {
    const stats = fxStatsIn(m[0]);
    if (!stats.length) return null;
    const pcts = fxPercents(m[0]);
    const after = c.slice(c.indexOf(m[0]) + m[0].length).match(/^\s*\((\d+(?:\.\d+)?)%\)/);
    let v = pcts.length ? (pcts[0].v2 ? Math.max(pcts[0].v, pcts[0].v2) : pcts[0].v) : after ? +after[1] : near;
    const out = [];
    const base = stats.length === 1 && stats[0] === 'hp' ? FX_BASE.hp : FX_BASE.stat;
    out.push({ k: 'stat', stats, v: v != null ? v : Math.round(base * fxWord(c)) });
    return out;
});
// "60% Atk", "Atk, Def (50%)": statistiche senza verbo
rule(/^\s*(?:\d+(?:\.\d+)?%\s*)?(?:(?:max(?:imum)?\.?\s+)?(?:atk|def|rec|hp|attack|all parameters|all stats)(?:,?\s*(?:and\s+|&\s+)?(?:\d+(?:\.\d+)?%\s*)?))+(?:\s*\(\d+(?:\.\d+)?%\))?/i, (m, c, ctx, near) => {
    const stats = fxStatsIn(m[0]);
    if (!stats.length) return null;
    const p = fxPercents(m[0]);
    const v = p.length ? p[0].v : near;
    return { k: 'stat', stats, v: v != null ? v : Math.round(FX_BASE.stat * fxWord(c)) };
});

function ailmentsIn(t) {
    const out = [];
    if (/poison/i.test(t)) out.push('poison');
    if (/weak/i.test(t)) out.push('weak');
    if (/sick/i.test(t)) out.push('sick');
    if (/injur/i.test(t)) out.push('injury');
    if (/curse/i.test(t)) out.push('curse');
    if (/paraly/i.test(t)) out.push('paralysis');
    return out;
}

// probabilità scritta: "probable" = 30%, "high probability" = 60%, "(20%)" = 20%, niente = sempre
function chanceOf(c) {
    const m = c.match(/(\d+(?:\.\d+)?)%\s*(?:chance|probability)|(?:chance|probability)\s*(?:of\s*)?\(?(\d+(?:\.\d+)?)%/i);
    if (m) return +(m[1] || m[2]);
    if (/high(?:ly)? probab|great probab|likely/i.test(c)) return 60;
    if (/low probab|slight probab|small chance|small probab/i.test(c)) return 15;
    if (/probab|may\b|chance|random(?:ly)? inflict|occasional/i.test(c)) return FX_BASE.chance;
    return 100;
}
// CB scritti: "(2-5 BC)", "(10 BC)", "by 5 BC"
function bcRange(c) {
    const m = c.match(/(\d+(?:\.\d+)?)\s*(?:-\s*(\d+(?:\.\d+)?)\s*)?bc\b/i);
    if (!m) return 0;
    return m[2] ? [+m[1], +m[2]] : +m[1];
}

function parseClause(text, src) {
    const ctx = fxContext(text);
    let rest = ' ' + text + ' ';
    const out = [];
    for (let pass = 0; pass < 6; pass++) {
        let found = false;
        for (const r of FX_RULES) {
            const m = rest.match(r.rx);
            if (!m || !m[0].trim()) continue;
            const at = m.index, end = at + m[0].length;
            const near = fxNear(rest, at, end);
            let fx = r.make(m, rest, ctx, near);
            rest = rest.slice(0, at) + ' \u00a6 ' + rest.slice(end);
            if (!fx) continue;
            (Array.isArray(fx) ? fx : [fx]).forEach(f => {
                if (!f) return;
                if (f.k === 'heal' && ctx.dur && !/gradual/i.test(text)) { f.k = 'regen'; if (f.full) f.v = 100; }
                if (f.k === 'bc' && ctx.dur) f.k = 'bbturn';
                const onEnemy = ['debuff', 'inflict', 'vspark', 'vcrit', 'velem', 'enemybb', 'dot'].includes(f.k);
                if (onEnemy && ctx.onAtk) f.onAtk = true;
                if (onEnemy && !f.turns) {
                    const tm = text.match(/(\d+) turns? (?:\w+ ){0,3}(?:atk|def|rec|attack|spark|critical|elemental|dot|damage|bb|vulnerab|poison|weak|sick|injury|curse|paralysis)/i);
                    f.turns = tm ? +tm[1] : (!ctx.onAtk && ctx.dur) || (f.k === 'inflict' ? 2 : 1);
                }
                if (ctx.dur && f.dur == null && !['attack', 'attackmod', 'heal', 'bc', 'bbmax', 'od', 'cure', 'revive', 'limit'].includes(f.k) && (!onEnemy || ctx.onAtk)) f.dur = ctx.dur;
                if (ctx.who && !f.who) f.who = ctx.who;
                if (ctx.els && !f.els && f.k !== 'attack' && f.k !== 'drel' && f.k !== 'addel') f.els = ctx.els;
                if (ctx.cond && !f.cond) f.cond = ctx.cond;
                if (ctx.firstTurns && !f.cond) f.cond = { firstTurns: ctx.firstTurns };
                else if (ctx.firstTurns) f.cond = Object.assign({ firstTurns: ctx.firstTurns }, f.cond);
                out.push(f);
            });
            found = true;
            break;
        }
        if (!found) break;
    }
    // cosa è rimasto senza significato
    const left = rest.replace(/\b(for|to|of|the|a|an|and|or|all|allies'?|ally|own|self|foes?|enemies|enemy|turns?|types?|units?|effects?|when|is|are|has|have|with|by|in|on|at|from|its|their|that|this|each|every|per|chance|probable|probability|may|slightly|hugely|greatly|enormously|massively|considerably|significantly|boosts?|boost|effect|added|adds?|attack|infliction|inflicts?|turn|while|during|over|certain|amount|exceeded|exceeds?|up|max|target|squad|team|party|gauge|bb|also|than|after|before|first|then|be|being|its|it)\b|[\d%().,:;+\/&'\-\u00a6]|\s+/gi, ' ').trim();
    return { text, fx: out, left };
}

function parseSkillFx(desc) {
    const list = fxSplit(desc).map(c => parseClause(c));
    // "A, B & C when X is equipped": la sfera (o l'unità in squadra) vale per tutte le frasi prima, finché una non ha la sua condizione
    for (let k = list.length - 1; k > 0; k--) {
        const cond = list[k].fx.map(f => f.cond).find(x => x && (x.sphere || x.unitIn));
        if (!cond || !/(?:equipped|squad|team|party)\W*$/i.test(list[k].text)) continue;
        for (let j = k - 1; j >= 0; j--) {
            if (list[j].fx.some(f => f.cond)) break;
            list[j].fx.forEach(f => { f.cond = Object.assign({}, cond); });
        }
        break;
    }
    return list;
}


/* ==========================================================================
   EFFETTI IN BATTAGLIA: abilità leader (leader + amico), extra skill, BB / SBB / UBB
   Tutto quello che c'è scritto nella descrizione della wiki diventa un effetto:
   - statistiche che cambiano (HP, ATK, DEF, REC)
   - critici, Spark, danni elementali, ATK della BB
   - riduzioni dei danni, critici ed elementi annullati, barriere, schivate, resistenza al KO
   - cure, barra BB, barra OD, cristalli
   - stati alterati e indebolimenti dati ai nemici (e presi dai nemici)
   ========================================================================== */
const BURST_TURNS = 3;            // effetti delle BB senza turni scritti: durano 3 turni (come nel gioco)
const ENEMY_CRIT = 0.10;          // probabilità di colpo critico dei nemici (x1,5)
const CRIT_MULT = 1.5;            // colpo critico: danni x1,5 (+ i "danni critici" in più)
const ENEMY_AIL_CHANCE = 0.08;    // probabilità che un nemico dia uno stato alterato quando attacca
const ENEMY_DEBUFF_CHANCE = 0.06; // probabilità che un nemico abbassi ATK, DEF o REC
const ENEMY_DEBUFF = 20;          // ...di questa percentuale
const AIL_TURNS = 2;              // turni degli stati alterati senza turni scritti
const AIL_STAT = 30;              // Ferita = ATK -30%, Indebolimento = DEF -30%, Stordimento = REC -30%
const POISON_PCT = 6;             // Veleno: la tua unità perde il 6% degli HP massimi a ogni turno
const ENEMY_POISON_PCT = 2;       // Veleno sui nemici: 2% degli HP massimi a ogni turno
const DOT_PCT = 3;                // "DoT": 3% degli HP massimi del nemico a ogni turno
const REVIVE_HP = 0.25;           // chi torna dal KO riparte con il 25% degli HP
const POWER_MULT = { '': 1, powerful: 1.2, massive: 1.4 };
const CAP = { crit: 100, evasion: 90, dr: 100, bbcost: 75 };

const AIL_NAMES = {
    poison: { it: 'Veleno', en: 'Poison' },
    weak: { it: 'Indebolimento', en: 'Weak' },
    sick: { it: 'Stordimento', en: 'Sick' },
    injury: { it: 'Ferita', en: 'Injury' },
    curse: { it: 'Maledizione', en: 'Curse' },
    paralysis: { it: 'Paralisi', en: 'Paralysis' }
};
const AIL_SHORT = { poison: 'VEL', weak: 'IND', sick: 'STO', injury: 'FER', curse: 'MAL', paralysis: 'PAR' };
const EL_NAMES = {
    fire: { it: 'Fuoco', en: 'Fire' }, water: { it: 'Acqua', en: 'Water' }, earth: { it: 'Terra', en: 'Earth' },
    thunder: { it: 'Tuono', en: 'Thunder' }, light: { it: 'Luce', en: 'Light' }, dark: { it: 'Oscurità', en: 'Dark' }
};
const SKILL_KINDS = ['ls', 'extra', 'bb', 'sbb', 'ubb'];

/* ---------- testi degli effetti (italiano / inglese: le altre lingue le traduce Google) ---------- */
const fxIt = () => lang() === 'it';
const L2 = (it, en) => (fxIt() ? it : en);
const elName = e => (EL_NAMES[e] ? L2(EL_NAMES[e].it, EL_NAMES[e].en) : e);
const ailName = x => (x === 'random' ? L2('stato alterato a caso', 'random ailment') : AIL_NAMES[x] ? L2(AIL_NAMES[x].it, AIL_NAMES[x].en) : x);
const statNames = s => (s.length === 4 ? L2('tutti i parametri', 'all stats') : s.map(x => x.toUpperCase()).join('/'));
const pctTxt = v => `${Math.round(v * 10) / 10}%`;
const bcTxt = v => (Array.isArray(v) ? `${v[0]}-${v[1]}` : String(Math.round(v * 10) / 10));

function fxLabel(f) {
    const v = f.v;
    switch (f.k) {
        case 'attack': {
            const els = (f.els || []).map(elName).join('/');
            const who = f.mode === 'all' ? L2('tutti i nemici', 'all foes') : f.mode === 'random' ? L2('nemici a caso', 'random foes') : L2('un nemico', 'one foe');
            const extra = [f.hpRel && L2('più forte con più HP', 'stronger with more HP'), f.hpLow && L2('più forte con meno HP', 'stronger with less HP'), f.selfCrit && L2(`critico +${f.selfCrit}%`, `crit +${f.selfCrit}%`), f.defIgnore && L2('ignora DEF', 'ignores DEF')].filter(Boolean).join(', ');
            return L2(`Attacco${f.hits ? ' da ' + f.hits + ' colpi' : ''}${els ? ' ' + els : ''} su ${who}`, `${f.hits ? f.hits + '-hit ' : ''}${els ? els + ' ' : ''}attack on ${who}`) + (extra ? ` (${extra})` : '');
        }
        case 'attackmod': return f.hpRel ? L2('Danni in base agli HP rimasti', 'Damage relative to remaining HP') : L2('Danni che crescono se la usi di seguito', 'Damage grows with consecutive uses');
        case 'stat': return `${statNames(f.stats)} +${pctTxt(v)}`;
        case 'selfdown': return L2(`${statNames(f.stats)} proprio −${pctTxt(v)}`, `own ${statNames(f.stats)} −${pctTxt(v)}`);
        case 'stack': return L2(`${statNames(f.stats)} +${pctTxt(v)} a ogni turno`, `${statNames(f.stats)} +${pctTxt(v)} each turn`) + (f.cond && f.cond.upTo ? L2(` (max ${f.cond.upTo} volte)`, ` (up to ${f.cond.upTo} times)`) : '');
        case 'relstat': return L2(`${statNames(f.stats)} + ${pctTxt(v)} della ${f.from.toUpperCase()}`, `${statNames(f.stats)} + ${pctTxt(v)} of ${f.from.toUpperCase()}`);
        case 'hprelstat': return L2(`${statNames(f.stats)} fino a +${pctTxt(v)} ${f.low ? 'con meno HP' : 'con più HP'}`, `${statNames(f.stats)} up to +${pctTxt(v)} ${f.low ? 'with less HP' : 'with more HP'}`);
        case 'crit': return L2(`Probabilità di critico +${pctTxt(v)}`, `Critical rate +${pctTxt(v)}`);
        case 'critdmg': return L2(`Danni critici +${pctTxt(v)}`, `Critical damage +${pctTxt(v)}`);
        case 'spark': return L2(`Danni Spark +${pctTxt(v)}`, `Spark damage +${pctTxt(v)}`);
        case 'sparkcrit': return L2(`Spark critico (${pctTxt(v)}, danni x${f.mult})`, `Spark critical (${pctTxt(v)}, x${f.mult} damage)`);
        case 'bbatk': return L2(`ATK della BB +${pctTxt(v)}`, `BB ATK +${pctTxt(v)}`);
        case 'elem': return L2(`Danni elementali +${pctTxt(v)}`, `Elemental damage +${pctTxt(v)}`) + (f.els ? ` (${f.els.map(elName).join('/')})` : '');
        case 'afflicted': return L2(`Danni ai nemici con stati alterati +${pctTxt(v)}`, `Damage to afflicted foes +${pctTxt(v)}`);
        case 'dmgup': return L2(`Danni +${pctTxt(v)}`, `Damage +${pctTxt(v)}`);
        case 'dmgvs': return L2(`Danni contro ${(f.els || []).map(elName).join('/')} +${pctTxt(v)}`, `Damage vs ${(f.els || []).map(elName).join('/')} +${pctTxt(v)}`);
        case 'bcdrop': return L2(`Cristalli di battaglia +${pctTxt(v)}`, `BC drop rate +${pctTxt(v)}`);
        case 'hcdrop': return L2(`Cristalli di cura +${pctTxt(v)}`, `HC drop rate +${pctTxt(v)}`);
        case 'sparkbc': return L2(`Cristalli di battaglia negli Spark +${pctTxt(v)}`, `BC during Spark +${pctTxt(v)}`);
        case 'bceff': return L2(`Efficacia dei cristalli di battaglia +${pctTxt(v)}`, `BC efficacy +${pctTxt(v)}`);
        case 'hceff': return L2(`Efficacia dei cristalli di cura +${pctTxt(v)}`, `HC efficacy +${pctTxt(v)}`);
        case 'itemdrop': return L2(`Oggetti trovati +${pctTxt(v)}`, `Item drop rate +${pctTxt(v)}`);
        case 'zel': return `Zel +${pctTxt(v)}`;
        case 'karma': return `Karma +${pctTxt(v)}`;
        case 'exp': return `EXP +${pctTxt(v)}`;
        case 'arena': return L2(`Punti Arena/Colosseo (${f.text})`, `Arena/Colosseum points (${f.text})`);
        case 'bbrate': return L2(`Probabilità di usare la BB in Arena +${pctTxt(v)}`, `BB activation rate (Arena) +${pctTxt(v)}`);
        case 'limit': return L2(`Limite dei parametri più alto (${f.text})`, `Higher parameter limit (${f.text})`);
        case 'other': return f.text;
        case 'bbfill': return L2(`Barra BB si riempie più in fretta +${pctTxt(v)}`, `BB gauge fill rate +${pctTxt(v)}`);
        case 'odfill': return L2(`Barra OD più veloce +${pctTxt(v)}`, `OD gauge fill rate +${pctTxt(v)}`);
        case 'bbcost': return L2(`La BB costa meno: −${pctTxt(v)}`, `BB cost −${pctTxt(v)}`);
        case 'bc': return L2(`Barra BB +${bcTxt(v)} CB`, `BB gauge +${bcTxt(v)} BC`);
        case 'bbmax': return L2('Barra BB piena', 'BB gauge to max');
        case 'bbturn': return L2(`Barra BB +${bcTxt(v)} CB a ogni turno`, `BB gauge +${bcTxt(v)} BC each turn`);
        case 'bbhit': return L2(`Quando è colpita: barra BB +${bcTxt(v)} CB`, `When hit: BB gauge +${bcTxt(v)} BC`);
        case 'bbspark': return L2(`Con lo Spark: barra BB +${bcTxt(v)} CB`, `On Spark: BB gauge +${bcTxt(v)} BC`);
        case 'bbcrit': return L2(`Con un critico: barra BB +${bcTxt(v)} CB`, `On critical: BB gauge +${bcTxt(v)} BC`);
        case 'bbonhit': return L2(`Quando attacca: barra BB +${bcTxt(v)} CB`, `When attacking: BB gauge +${bcTxt(v)} BC`);
        case 'od': return L2(`Barra OD +${pctTxt(v)}`, `OD gauge +${pctTxt(v)}`);
        case 'odturn': return L2(`Barra OD +${pctTxt(v)} a ogni turno`, `OD gauge +${pctTxt(v)} each turn`);
        case 'heal': return f.full ? L2('Cura tutti gli HP', 'Fully restores HP') : f.pctv ? L2(`Cura il ${pctTxt(f.pctv)} degli HP`, `Heals ${pctTxt(f.pctv)} HP`) : L2(`Cura (REC x${v})`, `Heals (REC x${v})`);
        case 'regen': return f.full ? L2('Cura tutti gli HP a ogni turno', 'Full HP each turn') : L2(`Cura a ogni turno (REC x${v})`, `Heals each turn (REC x${v})`);
        case 'hpturn': return f.pctv ? L2(`Cura il ${pctTxt(f.pctv)} degli HP a ogni turno`, `Heals ${pctTxt(f.pctv)} HP each turn`) : L2(`Cura a ogni turno (REC x${v})`, `Heals each turn (REC x${v})`);
        case 'hitheal': return L2(`Quando è colpita: recupera il ${pctTxt(v)} del danno${f.chance < 100 ? ` (${f.chance}% prob.)` : ''}`, `When hit: heals ${pctTxt(v)} of damage${f.chance < 100 ? ` (${f.chance}%)` : ''}`);
        case 'drain': return L2(`Assorbe il ${pctTxt(v)} dei danni fatti${f.chance < 100 ? ` (${f.chance}% prob.)` : ''}`, `Absorbs ${pctTxt(v)} of damage dealt${f.chance < 100 ? ` (${f.chance}%)` : ''}`);
        case 'sparkheal': return L2(`Con lo Spark: cura il ${pctTxt(v)} del danno`, `On Spark: heals ${pctTxt(v)} of damage`);
        case 'dr': return L2(`Danni presi −${pctTxt(v)}`, `Damage taken −${pctTxt(v)}`);
        case 'dr2': return L2(`Altra riduzione dei danni −${pctTxt(v)}`, `Additional damage reduction −${pctTxt(v)}`);
        case 'drel': return f.weakOnly ? L2(`Danni elementali presi −${pctTxt(v)}`, `Elemental damage taken −${pctTxt(v)}`) : L2(`Danni da ${f.els.map(elName).join('/')} −${pctTxt(v)}`, `Damage from ${f.els.map(elName).join('/')} −${pctTxt(v)}`);
        case 'drchance': return L2(`Probabilità (${f.chance}%) di prendere −${pctTxt(v)} danni`, `${f.chance}% chance of −${pctTxt(v)} damage`);
        case 'dr1': return L2(`Probabilità (${pctTxt(v)}) di prendere solo 1 danno`, `${pctTxt(v)} chance to take only 1 damage`);
        case 'critred': return L2(`Danni critici presi −${pctTxt(v)}`, `Critical damage taken −${pctTxt(v)}`);
        case 'sparkred': return v >= 100 ? L2('Annulla i danni Spark', 'Negates Spark damage') : L2(`Danni Spark presi −${pctTxt(v)}`, `Spark damage taken −${pctTxt(v)}`);
        case 'nocrit': return L2('Annulla i danni critici', 'Negates critical damage');
        case 'noelem': return L2('Annulla i danni elementali', 'Negates elemental damage');
        case 'guard': return L2(`Difesa più forte quando si para −${pctTxt(v)}`, `Guard damage reduction −${pctTxt(v)}`);
        case 'dotred': return L2(`Danni a ogni turno presi −${pctTxt(v)}`, `DoT damage taken −${pctTxt(v)}`);
        case 'immune': return f.ails ? L2(`Immune a ${f.ails.map(ailName).join(', ')}`, `Immune to ${f.ails.map(ailName).join(', ')}`) : L2('Immune agli stati alterati', 'Immune to status ailments');
        case 'nodebuff': return L2(`Immune a ${(f.stats && f.stats.length ? f.stats : ['atk', 'def', 'rec']).map(s => s.toUpperCase()).join('/')} ridotti`, `Immune to ${(f.stats && f.stats.length ? f.stats : ['atk', 'def', 'rec']).map(s => s.toUpperCase()).join('/')} reduction`);
        case 'nodefign': return L2('Annulla "ignora DEF" dei nemici', 'Negates enemy DEF ignore');
        case 'cure': return f.debuffs ? L2('Toglie ATK/DEF/REC ridotti', 'Removes ATK/DEF/REC reductions') : L2('Cura gli stati alterati', 'Cures status ailments');
        case 'evasion': return L2(`Schiva il ${pctTxt(v)} degli attacchi`, `${pctTxt(v)} evasion`);
        case 'ko': return L2(`Resiste a ${f.times || 1} colpo mortale (${pctTxt(v)})`, `Survives ${f.times || 1} KO attack (${pctTxt(v)})`);
        case 'revive': return L2(`Rianima gli alleati KO (${pctTxt(v)})`, `Revives KO'd allies (${pctTxt(v)})`);
        case 'shield': return L2(`Barriera${f.els && f.els.length ? ' di ' + f.els.map(elName).join('/') : ''}: ${fmt(v)} HP`, `${f.els && f.els.length ? f.els.map(elName).join('/') + ' ' : ''}barrier: ${fmt(v)} HP`);
        case 'counter': return L2(`Contrattacco: ${pctTxt(v)} del danno preso${f.chance < 100 ? ` (${f.chance}% prob.)` : ''}`, `Counter: ${pctTxt(v)} of damage taken${f.chance < 100 ? ` (${f.chance}%)` : ''}`);
        case 'counterail': return L2(`Quando è colpita: ${f.ails.map(ailName).join(', ')} al nemico (${f.chance}%)`, `When hit: ${f.ails.map(ailName).join(', ')} to the foe (${f.chance}%)`);
        case 'counterdebuff': return L2(`Quando è colpita: ${statNames(f.stats)} del nemico −${pctTxt(v)} (${f.chance}%)`, `When hit: foe ${statNames(f.stats)} −${pctTxt(v)} (${f.chance}%)`);
        case 'defign': return L2(`Ignora la DEF dei nemici${f.chance < 100 ? ` (${f.chance}%)` : ''}`, `Ignores enemy DEF${f.chance < 100 ? ` (${f.chance}%)` : ''}`);
        case 'addel': return L2(`Aggiunge ${f.els.map(elName).join('/')} all'attacco`, `Adds ${f.els.map(elName).join('/')} to attack`);
        case 'hits': return L2(`Colpi dell'attacco normale +${pctTxt(v)}`, `Normal hits +${pctTxt(v)}`);
        case 'hitall': return L2(`Attacco normale su tutti i nemici${f.chance < 100 ? ` (${f.chance}%)` : ''}`, `Normal attack hits all foes${f.chance < 100 ? ` (${f.chance}%)` : ''}`);
        case 'double': return L2(`BB doppia (${pctTxt(v)})`, `Double BB (${pctTxt(v)})`);
        case 'extraact': return L2('Azione in più', 'Extra action');
        case 'taunt': return L2('Provocazione: i nemici attaccano lei', 'Taunt');
        case 'stealth': return L2('Furtività: i nemici non la attaccano', 'Stealth');
        case 'endatk': return L2(`Attacco in più a fine turno (${pctTxt(v)} ATK)`, `Extra attack at turn end (${pctTxt(v)} ATK)`);
        case 'debuff': return L2(`Nemici: ${statNames(f.stats)} −${pctTxt(v)} per ${f.turns} turn${f.turns === 1 ? 'o' : 'i'} (${f.chance}%)`, `Foes: ${statNames(f.stats)} −${pctTxt(v)} for ${f.turns} turn${f.turns === 1 ? '' : 's'} (${f.chance}%)`) + (f.onAtk ? L2(' quando attacca', ' on attack') : '');
        case 'inflict': return L2(`Nemici: ${f.ails.map(ailName).join(', ')} (${f.chance}%)`, `Foes: ${f.ails.map(ailName).join(', ')} (${f.chance}%)`) + (f.onAtk ? L2(' quando attacca', ' on attack') : '');
        case 'vspark': return L2(`Nemici più deboli allo Spark +${pctTxt(v)}`, `Foes: Spark vulnerability +${pctTxt(v)}`);
        case 'vcrit': return L2(`Nemici più deboli ai critici +${pctTxt(v)}`, `Foes: critical vulnerability +${pctTxt(v)}`);
        case 'velem': return L2(`Nemici più deboli agli elementi +${pctTxt(v)}`, `Foes: elemental vulnerability +${pctTxt(v)}`);
        case 'dot': return L2(`Nemici: danni a ogni turno per ${f.turns} turni`, `Foes: damage over time for ${f.turns} turns`);
        case 'enemybb': return L2('Nemici: barra BB ridotta', "Foes: BB gauge reduced");
        case 'onburst': return L2(`Si aggiunge alla ${f.bursts.join('/').toUpperCase()}: `, `Added to ${f.bursts.join('/').toUpperCase()}: `) + f.fx.map(fxLabel).join(', ');
        default: return f.k;
    }
}

function condLabel(c, f) {
    if (!c) return '';
    const out = [];
    if (c.firstTurns) out.push(L2(`primi ${c.firstTurns} turni`, `first ${c.firstTurns} turns`));
    if (c.hpAbove != null) out.push(L2(`HP sopra il ${c.hpAbove}%`, `HP above ${c.hpAbove}%`));
    if (c.hpBelow != null) out.push(L2(`HP sotto il ${c.hpBelow}%`, `HP below ${c.hpBelow}%`));
    if (c.bbFull) out.push(L2('barra BB piena', 'BB gauge full'));
    if (c.bbOver) out.push(L2(`barra BB sopra il ${c.bbOver}%`, `BB gauge over ${c.bbOver}%`));
    if (c.sparks) out.push(L2(`dopo ${c.sparks} Spark in un turno`, `after ${c.sparks} Sparks in a turn`));
    if (c.dmgTaken) out.push(L2(`dopo ${fmt(c.dmgTaken)} danni presi in un turno`, `after ${fmt(c.dmgTaken)} damage taken in a turn`));
    if (c.dmgDealt) out.push(L2(`dopo ${fmt(c.dmgDealt)} danni fatti in un turno`, `after ${fmt(c.dmgDealt)} damage dealt in a turn`));
    if (c.bcOver) out.push(L2(`dopo ${c.bcOver} CB presi`, `after ${c.bcOver} BC collected`));
    if (c.hcOver) out.push(L2(`dopo ${c.hcOver} cristalli di cura`, `after ${c.hcOver} HC collected`));
    if (c.sphere) out.push(L2(`con la sfera "${c.sphere}"`, `with "${c.sphere}" equipped`));
    if (c.unitIn) out.push(L2(`con ${c.unitIn} in squadra`, `with ${c.unitIn} in the team`));
    if (c.mono) out.push(L2('squadra tutta dello stesso elemento', 'all units of the same element'));
    if (c.elsIn) out.push(L2(`con ${c.elsIn.map(elName).join(', ')} in squadra`, `with ${c.elsIn.map(elName).join(', ')} in the team`));
    if (c.elsCount) out.push(L2(`con ${c.elsCount} elementi diversi in squadra`, `with ${c.elsCount} different elements`));
    if (c.guard) out.push(L2('quando si para', 'when guarding'));
    if (c.afterBurst) out.push(L2('dopo la BB', 'after BB'));
    if (c.allyKo) out.push(L2('quando un alleato è KO', 'when an ally is KO'));
    if (c.gender) out.push(L2(`unità ${c.gender}`, `${c.gender} units`));
    if (c.ailed) out.push(L2('con uno stato alterato', 'when afflicted'));
    return out.join(', ');
}

// effetti che nella demo non cambiano la battaglia (oggetti, Zel, Arena...): si mostrano lo stesso
const FX_SHOW_ONLY = ['itemdrop', 'zel', 'karma', 'exp', 'arena', 'bbrate', 'limit', 'other', 'guard', 'enemybb'];

/* ---------- abilità lette (una volta sola per unità) ---------- */
const fxCache = new Map();
const realDesc = d => !!d && !/^(?:undefined|null|none|-+|n\/a)$/i.test(String(d).trim());
function skillFx(u, kind) {
    const key = u.id + ':' + kind;
    if (!fxCache.has(key)) {
        const d = realDesc(skillDesc(u, kind).en) ? skillDesc(u, kind).en : '';
        let list = [];
        try { list = d ? parseSkillFx(d) : []; } catch (err) { list = [{ text: d, fx: [], left: d }]; }
        fxCache.set(key, list);
    }
    return fxCache.get(key);
}
const flatFx = clauses => clauses.reduce((all, c) => all.concat(c.fx), []);

/* ---------- stato di battaglia di ogni unità e nemico ---------- */
function fxInit(a) {
    a.buffs = [];      // effetti delle BB con i turni che restano
    a.ails = {};       // stati alterati: nome -> turni
    a.debuffs = [];    // ATK/DEF/REC ridotti: { stat, v, turns }
    a.vuln = {};       // nemici: vulnerabilità { spark|crit|elem: { v, turns } }
    a.dot = null;      // nemici: danni a ogni turno
    a.shield = null;   // barriera { hp, max }
    a.koUsed = 0;      // colpi mortali già resistiti
    a.trig = {};       // effetti "quando ..." accesi: chiave -> turni
    a.stack = 0;       // turni passati (per "boosts Atk each turn")
    a.turnDmg = 0;     // danni presi in questo turno
    a.turnDealt = 0;   // danni fatti in questo turno
    a.bcGot = 0;       // CB presi in tutta la battaglia
    a.hcGot = 0;
    a.lastBurst = '';
}

function slotBase(i) {
    const a = actors[i];
    const slot = team.slots[i];
    return a ? unitStats(a.u, slot ? slot.type : DEFAULT_TYPE) : { hp: 0, atk: 0, def: 0, rec: 0 };
}

function teamUnits() {
    return team.slots.map((s, j) => (s && unitById.get(s.id) ? { j, u: unitById.get(s.id) } : null)).filter(Boolean);
}

/* chi riceve un effetto: "of Fire types" solo le unità di quell'elemento */
const FX_ELEM_FILTER = ['stat', 'crit', 'critdmg', 'spark', 'bbatk', 'elem', 'bcdrop', 'hcdrop', 'bbfill', 'odfill', 'bbcost', 'hits', 'hitall', 'dr', 'regen', 'hpturn', 'heal', 'bc', 'bbturn', 'immune', 'nodebuff', 'evasion', 'ko', 'sparkcrit', 'relstat', 'hprelstat', 'stack', 'defign', 'drain', 'hitheal', 'bbhit', 'bbspark', 'afflicted', 'dmgup'];
function fitsUnit(f, j) {
    if (!f.els || !f.els.length || !FX_ELEM_FILTER.includes(f.k)) return true;
    const a = actors[j];
    return !!a && f.els.includes(elementKey(a.u));
}

// le condizioni che non dipendono dal momento (sfera, squadra, elementi)
function staticCondOk(c) {
    if (!c) return true;
    if (c.gender) return false;     // nei dati non c'è il sesso delle unità
    const list = teamUnits();
    const unitOk = () => {
        const want = c.unitIn.toLowerCase().replace(/[^a-z0-9 ]/g, '');
        return list.some(({ u }) => [u.name, unitName(u), (u.names || {}).en].some(n => String(n || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').includes(want)));
    };
    if (c.sphere && !(c.or && c.unitIn && unitOk())) return false;   // le sfere non ci sono in questa demo
    if (c.unitIn && !c.or && !unitOk()) return false;
    const els = [...new Set(list.map(({ u }) => elementKey(u)).filter(Boolean))];
    if (c.mono && els.length !== 1) return false;
    if (c.elsIn && !c.elsIn.every(e => els.includes(e))) return false;
    if (c.elsCount && els.length < c.elsCount) return false;
    if (c.guard) return false;      // nella demo non si para
    return true;
}

// effetti che si accendono dopo un fatto (Spark, danni presi, CB...) e durano qualche turno
const trigKey = f => JSON.stringify([f.k, f.stats, f.v, f.cond]);
function isTrigger(c) { return !!c && !!(c.sparks || c.dmgTaken || c.dmgDealt || c.bcOver || c.hcOver || c.afterBurst); }

function condOk(f, j, src) {
    const c = f.cond;
    if (!c) return true;
    if (!staticCondOk(c)) return false;
    const a = actors[j];
    if (!a) return false;
    if (c.firstTurns && turn > c.firstTurns) return false;
    const hpP = a.maxHp ? a.hp / a.maxHp * 100 : 100;
    if (c.hpAbove != null && hpP < c.hpAbove) return false;
    if (c.hpBelow != null && hpP >= c.hpBelow) return false;
    const gm = gaugeMax(a);
    if (c.bbFull && (!gm || a.gauge < gm)) return false;
    if (c.bbOver && (!gm || a.gauge / gm * 100 < c.bbOver)) return false;
    if (c.allyKo && !actors.some(x => x && x.dead)) return false;
    if (c.ailed && !Object.keys(a.ails || {}).length) return false;
    if (isTrigger(c) && !((a.trig || {})[trigKey(f)] > 0)) return false;
    return true;
}

/* ---------- tutti gli effetti di un'unità: abilità leader + amico, extra skill, BB attive ---------- */
function passiveSources(j) {
    const out = [];
    [team.leader, team.friend].forEach((k, n) => {
        if (k < 0 || !team.slots[k]) return;
        const u = unitById.get(team.slots[k].id);
        if (!u) return;
        flatFx(skillFx(u, 'ls')).forEach(f => out.push({ f, src: n ? 'fls' : 'ls', from: k }));
    });
    team.slots.forEach((s, k) => {
        if (!s) return;
        const u = unitById.get(s.id);
        if (!u) return;
        flatFx(skillFx(u, 'extra')).forEach(f => {
            if (f.k === 'onburst') return;
            if (k === j || f.who === 'all') out.push({ f, src: 'es', from: k });
        });
    });
    return out.filter(x => fitsUnit(x.f, j));
}

function activeFx(j) {
    const a = actors[j];
    if (!a || a.dead) return [];
    const out = passiveSources(j).filter(x => condOk(x.f, j, x.src));
    (a.buffs || []).forEach(b => { if (b.turns > 0) out.push({ f: b.f, src: b.src, from: b.from, turns: b.turns }); });
    return out;
}

function fxSum(list, k, test) {
    let s = 0;
    list.forEach(({ f }) => { if (f.k === k && (!test || test(f))) s += Array.isArray(f.v) ? (f.v[0] + f.v[1]) / 2 : (f.v || 0); });
    return s;
}
const fxAny = (list, k, test) => list.some(({ f }) => f.k === k && (!test || test(f)));

/* ---------- statistiche finali (si vedono a destra e contano in battaglia) ---------- */
function unitFinal(j, list) {
    const a = actors[j];
    const base = slotBase(j);
    if (!a) return { base, final: base, pct: { hp: 0, atk: 0, def: 0, rec: 0 } };
    const act = list || activeFx(j);
    const pct = { hp: 0, atk: 0, def: 0, rec: 0 };
    act.forEach(({ f }) => {
        if (f.k === 'stat') f.stats.forEach(s => { pct[s] += f.v; });
        if (f.k === 'stack') f.stats.forEach(s => { pct[s] += f.v * Math.min(a.stack || 0, (f.cond && f.cond.upTo) || 99); });
        if (f.k === 'selfdown') f.stats.forEach(s => { pct[s] -= f.v; });
    });
    if (a.ails && a.ails.injury) pct.atk -= AIL_STAT;
    if (a.ails && a.ails.weak) pct.def -= AIL_STAT;
    if (a.ails && a.ails.sick) pct.rec -= AIL_STAT;
    (a.debuffs || []).forEach(d => { pct[d.stat] -= d.v; });
    const final = {};
    FX_STATS.forEach(s => { final[s] = Math.max(s === 'hp' ? 1 : 0, Math.round(base[s] * (1 + pct[s] / 100))); });
    const before = Object.assign({}, final);
    act.forEach(({ f }) => {
        if (f.k === 'relstat' && before[f.from] != null) f.stats.forEach(s => { if (s !== 'hp') final[s] += Math.round(before[f.from] * f.v / 100); });
        if (f.k === 'hprelstat') {
            const r = a.maxHp ? Math.max(0, Math.min(1, a.hp / a.maxHp)) : 1;
            f.stats.forEach(s => { if (s !== 'hp') final[s] += Math.round(base[s] * f.v / 100 * (f.low ? 1 - r : r)); });
        }
    });
    return { base, final, pct };
}

// HP massimi cambiati (abilità leader, BB "boosts max HP"): se crescono crescono anche quelli attuali
function refreshMaxHp(j) {
    const a = actors[j];
    if (!a || !a.maxHp) return;
    const max = Math.max(1, unitFinal(j).final.hp);
    if (max === a.maxHp) return;
    if (max > a.maxHp && !a.dead) a.hp += max - a.maxHp;
    a.maxHp = max;
    a.hp = Math.min(a.hp, max);
    updateCardHp(j);
}

/* ---------- numeri e scritte che salgono sulle unità e sui nemici ---------- */
function floatOnEnemy(e, text, cls) {
    const W = $('teamScene').clientWidth;
    const b = enemyBody(e);
    const d = document.createElement('div');
    d.className = 'dmg notranslate ' + (cls || '');
    d.textContent = text;
    d.style.left = `${(e.spot.x * W + (Math.random() - 0.5) * W * 0.05).toFixed(1)}px`;
    d.style.top = `${(b.y - b.up * (0.2 + Math.random() * 0.3)).toFixed(1)}px`;
    $('sceneFx').appendChild(d);
    d.addEventListener('animationend', () => d.remove(), { once: true });
    setTimeout(() => d.remove(), 2200);
}

// sigla corta per i cartellini sopra la testa (come le icone del gioco)
function fxShort(f) {
    switch (f.k) {
        case 'stat': return f.stats.length === 4 ? 'ALL↑' : f.stats.map(s => s.toUpperCase() + '↑').join(' ');
        case 'stack': return 'ATK↑+';
        case 'relstat': case 'hprelstat': return f.stats.map(s => s.toUpperCase() + '↑').join(' ');
        case 'crit': return 'CRT↑';
        case 'critdmg': return 'CRT DMG↑';
        case 'spark': return 'SPARK↑';
        case 'sparkcrit': return 'SPARK CRT';
        case 'bbatk': return 'BB ATK↑';
        case 'elem': return 'ELEM↑';
        case 'dr': case 'dr2': case 'drchance': return 'DMG↓';
        case 'drel': return 'ELEM DMG↓';
        case 'nocrit': return 'CRT ✕';
        case 'noelem': return 'ELEM ✕';
        case 'critred': return 'CRT DMG↓';
        case 'sparkred': return 'SPARK ✕';
        case 'immune': return 'STATUS ✕';
        case 'nodebuff': return 'DEBUFF ✕';
        case 'evasion': return 'EVA';
        case 'ko': return 'KO ✕';
        case 'regen': case 'hpturn': return 'HP+';
        case 'bbturn': case 'bbhit': case 'bbspark': case 'bbcrit': case 'bbonhit': return 'BB+';
        case 'bbfill': return 'BB FILL↑';
        case 'bcdrop': case 'bceff': return 'CB↑';
        case 'hcdrop': case 'hceff': return 'HC↑';
        case 'odfill': case 'odturn': return 'OD↑';
        case 'defign': return 'DEF IGN';
        case 'addel': return f.els.length > 2 ? 'ELEM+' : f.els.map(e => elName(e).slice(0, 3).toUpperCase()).join('+');
        case 'hits': return 'HIT↑';
        case 'hitall': return 'AOE';
        case 'counter': case 'counterail': case 'counterdebuff': return 'COUNTER';
        case 'hitheal': case 'drain': case 'sparkheal': return 'DRAIN';
        case 'double': return 'BB x2';
        case 'taunt': return 'TAUNT';
        case 'stealth': return 'STEALTH';
        case 'endatk': return 'END ATK';
        case 'afflicted': case 'dmgup': case 'dmgvs': return 'DMG↑';
        case 'debuff': case 'inflict': return 'ADD';
        default: return '';
    }
}

/* ---------- cartellino sopra la testa: mostra a turno gli effetti attivi (come le icone del gioco) ---------- */
let badgeTick = 0;
function badgeItems(x, isEnemy) {
    const out = [];
    if (isEnemy) {
        (x.debuffs || []).forEach(d => out.push({ t: d.stat.toUpperCase() + '↓', c: 'is-down' }));
        Object.keys(x.ails || {}).forEach(k => out.push({ t: AIL_SHORT[k] || k, c: 'is-ail' }));
        Object.keys(x.vuln || {}).forEach(k => out.push({ t: (k === 'spark' ? 'SPARK' : k === 'crit' ? 'CRT' : 'ELEM') + ' VULN', c: 'is-down' }));
        if (x.dot) out.push({ t: 'DOT', c: 'is-ail' });
        return out;
    }
    const seen = new Set();
    (x.buffs || []).forEach(b => {
        const s = fxShort(b.f);
        if (s && !seen.has(s)) { seen.add(s); out.push({ t: s, c: 'is-up' }); }
    });
    if (x.shield && x.shield.hp > 0) out.push({ t: 'BARRIER', c: 'is-up' });
    (x.debuffs || []).forEach(d => out.push({ t: d.stat.toUpperCase() + '↓', c: 'is-down' }));
    Object.keys(x.ails || {}).forEach(k => out.push({ t: AIL_SHORT[k] || k, c: 'is-ail' }));
    return out;
}
function updateBadges() {
    badgeTick++;
    const put = (x, isEnemy, spot) => {
        if (!x || !x.wrap) return;
        let el = x.wrap.querySelector('.fx-badge');
        const items = x.dead ? [] : badgeItems(x, isEnemy);
        if (!items.length) { if (el) el.hidden = true; return; }
        if (!el) {
            el = document.createElement('span');
            el.className = 'fx-badge notranslate';
            x.wrap.appendChild(el);
        }
        const it = items[badgeTick % items.length];
        el.hidden = false;
        el.textContent = it.t;
        el.className = 'fx-badge notranslate ' + it.c;
        const H = $('teamScene').clientHeight;
        const up = x.idle && x.idle.m ? (x.idle.icon ? H * 0.16 : x.idle.m.up * actorScale(x) * x.idle.scale) : H * 0.15;
        el.style.top = `${(-up - H * 0.02).toFixed(1)}px`;
    };
    actors.forEach(a => put(a, false));
    enemies.forEach(e => put(e, true));
}
setInterval(updateBadges, 900);

/* ---------- applicare gli effetti di una BB / SBB / UBB ---------- */
const BUFF_KINDS = ['stat', 'stack', 'relstat', 'hprelstat', 'crit', 'critdmg', 'spark', 'sparkcrit', 'bbatk', 'elem', 'afflicted', 'dmgup', 'dmgvs', 'bcdrop', 'hcdrop', 'sparkbc', 'bceff', 'hceff', 'itemdrop', 'zel', 'karma', 'exp', 'bbfill', 'odfill', 'bbcost', 'bbturn', 'bbhit', 'bbspark', 'bbcrit', 'bbonhit', 'odturn', 'regen', 'hpturn', 'hitheal', 'drain', 'sparkheal', 'dr', 'dr2', 'drel', 'drchance', 'dr1', 'critred', 'sparkred', 'nocrit', 'noelem', 'guard', 'dotred', 'immune', 'nodebuff', 'nodefign', 'evasion', 'ko', 'counter', 'counterail', 'counterdebuff', 'defign', 'addel', 'hits', 'hitall', 'double', 'taunt', 'stealth', 'endatk', 'selfdown'];
const ENEMY_KINDS = ['debuff', 'inflict', 'vspark', 'vcrit', 'velem', 'dot', 'enemybb'];
const buffKey = f => JSON.stringify([f.k, f.stats, f.els, f.ails, f.onAtk ? 1 : 0]);

// effetti della BB di un'unità (con quelli che l'extra skill aggiunge a quella BB)
function burstFx(u, kind) {
    const list = flatFx(skillFx(u, kind)).slice();
    flatFx(skillFx(u, 'extra')).forEach(f => {
        if (f.k === 'onburst' && f.bursts.includes(kind) && staticCondOk(f.cond)) f.fx.forEach(x => list.push(x));
    });
    return list;
}

function burstTargets(i, f) {
    if (f.who === 'self') return [i];
    return actors.map((x, j) => (x && !x.dead && fitsUnit(f, j) ? j : -1)).filter(j => j >= 0);
}

function giveBuff(j, f, src, from) {
    const a = actors[j];
    if (!a || a.dead) return;
    const hpOnly = f.k === 'stat' && f.stats.every(s => s === 'hp');
    const turns = f.dur || (hpOnly ? 999 : BURST_TURNS);
    const key = buffKey(f);
    a.buffs = a.buffs.filter(b => b.key !== key);       // lo stesso tipo di effetto delle BB non si somma: si rinnova
    a.buffs.push({ key, f, turns, src, from });
    if (f.k === 'stat' || f.k === 'relstat' || f.k === 'selfdown') refreshMaxHp(j);
}

function fillGauge(j, bc) {
    const a = actors[j];
    if (!a || a.dead || !gaugeMax(a)) return;
    if (a.ails && a.ails.curse) return;   // Maledizione: la barra BB non si riempie
    const v = Array.isArray(bc) ? bc[0] + Math.random() * (bc[1] - bc[0]) : bc;
    a.gauge = Math.min(gaugeMax(a), a.gauge + v);
    updateCardGauge(j);
}

function cureUnit(j, debuffsToo) {
    const a = actors[j];
    if (!a) return;
    a.ails = {};
    if (debuffsToo !== false) a.debuffs = [];
    refreshMaxHp(j);
}

// gli effetti della BB che non sono colpi: aumenti, cure, barre, barriere, rianimare...
function applyBurstEffects(i, a, kind) {
    const list = burstFx(a.u, kind);
    const base = slotBase(i);
    const rec = unitFinal(i).final.rec || base.rec;
    const got = new Map();   // unità -> sigle (per la scritta che sale)
    const note = (j, s) => { if (!s) return; if (!got.has(j)) got.set(j, []); if (!got.get(j).includes(s)) got.get(j).push(s); };
    list.forEach(f => {
        if (f.k === 'attack' || f.k === 'attackmod' || ENEMY_KINDS.includes(f.k) && !f.onAtk) return;
        if (f.cond && !staticCondOk(f.cond)) return;
        const targets = burstTargets(i, f);
        if (f.k === 'heal') {
            targets.forEach(j => {
                const x = actors[j];
                const amount = f.full ? x.maxHp : f.pctv ? x.maxHp * f.pctv / 100 : rec * f.v * (0.95 + Math.random() * 0.1);
                healUnit(j, amount);
            });
        } else if (f.k === 'bc') targets.forEach(j => { fillGauge(j, f.v); note(j, 'BB+'); });
        else if (f.k === 'bbmax') targets.forEach(j => { fillGauge(j, 999); note(j, 'BB MAX'); });
        else if (f.k === 'od') { od = Math.min(100, od + (f.v || 0)); updateOd(); }
        else if (f.k === 'cure') targets.forEach(j => { cureUnit(j, true); note(j, L2('CURA', 'CURE')); });
        else if (f.k === 'revive') {
            actors.forEach((x, j) => {
                if (!x || !x.dead || Math.random() * 100 >= f.v) return;
                x.dead = false;
                x.hp = Math.max(1, Math.round(x.maxHp * REVIVE_HP));
                x.wrap.classList.remove('is-dead');
                updateCardHp(j);
                setCardState(j);
                floatOnUnit(j, L2('RIANIMATA!', 'REVIVED!'), 'is-heal');
            });
        } else if (f.k === 'shield') {
            targets.forEach(j => {
                const x = actors[j];
                const hp = f.rec ? Math.round(rec * f.rec / 100) : f.v;
                x.shield = { hp, max: hp };
                note(j, 'BARRIER');
            });
        } else if (f.k === 'selfdown') giveBuff(i, f, kind, i);
        else if (f.k === 'extraact') a.extraAct = true;
        else if (BUFF_KINDS.includes(f.k) || f.onAtk) {
            targets.forEach(j => { giveBuff(j, f, kind, i); note(j, fxShort(f)); });
        }
    });
    got.forEach((list, j) => floatOnUnit(j, list.slice(0, 3).join(' '), 'is-buff'));
    renderEffectsSoon();
}

/* ---------- effetti sui nemici (indebolimenti, stati alterati, vulnerabilità) ---------- */
function enemyHasAil(e) { return !!Object.keys(e.ails || {}).length; }

function applyToEnemy(e, f) {
    if (!e || e.dead) return;
    if (Math.random() * 100 >= (f.chance == null ? 100 : f.chance)) return;
    const turns = f.turns || 1;
    if (f.k === 'debuff') {
        f.stats.forEach(s => {
            e.debuffs = e.debuffs.filter(d => d.stat !== s);
            e.debuffs.push({ stat: s, v: f.v, turns });
        });
        floatOnEnemy(e, f.stats.map(s => s.toUpperCase() + '↓').join(' '), 'is-debuff');
    } else if (f.k === 'inflict') {
        let ails = f.ails.slice();
        if (ails.includes('random')) ails = [FX_AILMENTS[Math.floor(Math.random() * FX_AILMENTS.length)]];
        ails.forEach(x => { e.ails[x] = Math.max(e.ails[x] || 0, f.turns || AIL_TURNS); });
        floatOnEnemy(e, ails.map(ailName).join(' '), 'is-ail');
    } else if (f.k === 'vspark' || f.k === 'vcrit' || f.k === 'velem') {
        const k = f.k.slice(1);
        e.vuln[k] = { v: f.v, turns: Math.max(turns, f.dur || 0) };
        floatOnEnemy(e, (k === 'spark' ? 'SPARK' : k === 'crit' ? 'CRT' : 'ELEM') + ' VULN', 'is-debuff');
    } else if (f.k === 'dot') {
        e.dot = { turns: f.turns || 2 };
        floatOnEnemy(e, 'DOT', 'is-ail');
    }
}

function enemyStat(e, s) {
    let p = 0;
    (e.debuffs || []).forEach(d => { if (d.stat === s) p += d.v; });
    if (s === 'atk' && e.ails.injury) p += AIL_STAT;
    if (s === 'def' && e.ails.weak) p += AIL_STAT;
    return Math.max(0.05, 1 - p / 100);
}

/* ---------- elemento più forte tra quelli dell'attacco ---------- */
function bestElement(els, defEl) {
    let best = { m: 1, tag: '', el: els[0] || '' };
    let first = true;
    els.forEach(el => {
        const r = elementMultiplier(el, defEl);
        if (first || r.m > best.m) best = Object.assign({ el }, r);
        first = false;
    });
    return best;
}

/* ---------- testo dei consigli: effetti dell'abilità leader in numeri ---------- */
let effectsTimer = 0;
function renderEffectsSoon() {
    clearTimeout(effectsTimer);
    effectsTimer = setTimeout(renderEffects, 400);
}

/* ==========================================================================
   BATTAGLIA CON GLI EFFETTI (sostituisce i calcoli "semplici" di prima)
   ========================================================================== */

/* ---------- barra BB: costo (anche ridotto dalle abilità), SBB e UBB ---------- */
function bbCostCut(a) {
    const j = actors.indexOf(a);
    if (j < 0) return 0;
    let s = 0;
    passiveSources(j).forEach(({ f }) => {
        if (f.k !== 'bbcost' || !staticCondOk(f.cond)) return;
        if (f.cond && (f.cond.bbFull || f.cond.bbOver || isTrigger(f.cond))) return;
        s += f.v || 0;
    });
    (a.buffs || []).forEach(b => { if (b.f.k === 'bbcost') s += b.f.v || 0; });
    return Math.min(CAP.bbcost, s);
}
function burstCostsCut(a) {
    const c = burstCosts(a.u);
    const k = 1 - bbCostCut(a) / 100;
    return { bb: c.bb ? Math.max(1, Math.round(c.bb * k)) : 0, sbb: c.sbb ? Math.max(1, Math.round(c.sbb * k)) : 0 };
}
function gaugeMax(a) {
    const c = burstCostsCut(a);
    return c.bb ? c.bb + c.sbb : 0;
}
const hasUbb = u => realDesc(skillDesc(u, 'ubb').en);
function readyKind(a) {
    const c = burstCostsCut(a);
    if (!c.bb || (a.ails && a.ails.curse)) return '';
    if (c.sbb && a.gauge >= c.bb + c.sbb) return od >= 100 && hasUbb(a.u) ? 'ubb' : 'sbb';
    if (a.gauge >= c.bb) return 'bb';
    return '';
}

// barra BB: primo giro blu (BB), secondo giro dorato (SBB); UBB quando anche la barra OD è piena
function updateCardGauge(i) {
    const a = actors[i];
    const card = cardOf(i);
    if (!a || !card || card.classList.contains('is-empty')) return;
    const c = burstCostsCut(a);
    const ready = readyKind(a);
    const p1 = c.bb ? Math.min(1, a.gauge / c.bb) : 0;
    const p2 = c.sbb ? Math.min(1, Math.max(0, a.gauge - c.bb) / c.sbb) : 0;
    card.querySelector('.bc-fill-wrap.is-bb').style.setProperty('--p', p1.toFixed(3));
    card.querySelector('.bc-fill-wrap.is-sbb').style.setProperty('--p', p2.toFixed(3));
    card.classList.toggle('is-ready', !!ready);
    card.classList.toggle('is-cursed', !!(a.ails && a.ails.curse));
    card.dataset.bolt = ready === 'ubb' ? 'sbb' : ready || '';
    if (ready) startBolts();
    const label = card.querySelector('.bc-bblabel');
    label.classList.toggle('lv-ubb', ready === 'ubb');
    label.classList.toggle('lv-sbb', ready === 'sbb');
    label.classList.toggle('lv-bb', ready !== 'sbb' && ready !== 'ubb');
    label.classList.toggle('is-full', !!ready);
}

function updateOd() {
    $('odFill').style.setProperty('--p', (od / 100).toFixed(3));
    $('bfScreen').classList.toggle('is-od-full', od >= 100);
    actors.forEach((a, j) => { if (a) updateCardGauge(j); });
}

/* ---------- vita della squadra ---------- */
function syncTeamHp() {
    actors.forEach((a, i) => {
        if (!a) return;
        const max = Math.max(1, unitFinal(i).final.hp);
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

function floatOnUnit(i, text, cls, small) {
    const b = unitBody(i);
    const W = $('teamScene').clientWidth;
    const d = document.createElement('div');
    d.className = 'dmg notranslate ' + (cls || '');
    if (small) {
        const s = document.createElement('small');
        s.textContent = small;
        d.appendChild(s);
    }
    d.appendChild(document.createTextNode(text));
    d.style.left = `${(b.x + (Math.random() - 0.5) * W * 0.05).toFixed(1)}px`;
    d.style.top = `${(b.y - b.up * (0.1 + Math.random() * 0.3)).toFixed(1)}px`;
    $('sceneFx').appendChild(d);
    d.addEventListener('animationend', () => d.remove(), { once: true });
    setTimeout(() => d.remove(), 2200);
}

// "quando ..." (danni presi, Spark, CB raccolti, dopo la BB): l'effetto si accende per qualche turno
function fireTriggers(j, test) {
    const a = actors[j];
    if (!a || a.dead) return;
    let any = false;
    passiveSources(j).forEach(({ f }) => {
        const c = f.cond;
        if (!c || !isTrigger(c) || !staticCondOk(c) || !test(c, a)) return;
        const key = trigKey(f);
        if (a.trig[key] > 0) return;
        a.trig[key] = (f.dur || 1) + 1;
        any = true;
    });
    if (any) {
        refreshMaxHp(j);
        floatOnUnit(j, L2('ATTIVATO!', 'ACTIVATED!'), 'is-buff');
        renderEffectsSoon();
    }
}

function koSave(j, act) {
    const a = actors[j];
    const list = act.filter(x => x.f.k === 'ko');
    for (const x of list) {
        const times = x.f.times || 1;
        if (a.koUsed >= times) continue;
        if (Math.random() * 100 < (x.f.v == null ? 100 : x.f.v)) { a.koUsed += 1; return true; }
    }
    return false;
}

function hurtUnit(i, dmg, opts) {
    const a = actors[i];
    if (!a || a.dead) return;
    opts = opts || {};
    if (a.hp - dmg <= 0 && !opts.noSave && koSave(i, activeFx(i))) {
        dmg = Math.max(0, a.hp - 1);
        setTimeout(() => floatOnUnit(i, L2('RESISTE!', 'ENDURED!'), 'is-buff'), 250);
    }
    a.hp = Math.max(0, a.hp - dmg);
    a.turnDmg += dmg;
    floatOnUnit(i, String(dmg), 'is-taken' + (opts.crit ? ' is-crit' : '') + (opts.poison ? ' is-poison' : ''), opts.small);
    a.wrap.classList.remove('is-hit');
    void a.wrap.offsetWidth;
    a.wrap.classList.add('is-hit');
    const card = cardOf(i);
    if (card) { card.classList.remove('is-hurt'); void card.offsetWidth; card.classList.add('is-hurt'); }
    updateCardHp(i);
    if (a.hp <= 0) {
        a.dead = true;
        a.gauge = 0;
        a.buffs = [];
        a.ails = {};
        a.debuffs = [];
        a.shield = null;
        a.wrap.classList.add('is-dead');
        updateCardGauge(i);
        setCardState(i);
        if (actors.every(x => !x || x.dead)) setTimeout(reviveTeam, TEAM_REVIVE);
    } else {
        fireTriggers(i, (c, x) => c.dmgTaken && x.turnDmg >= c.dmgTaken);
    }
    renderEffectsSoon();
}

// tutta la squadra sconfitta: dopo un attimo torna in piedi con la vita piena
function reviveTeam() {
    actors.forEach((a, i) => {
        if (!a) return;
        fxInit(a);
        a.dead = false;
        a.wrap.classList.remove('is-dead');
        a.maxHp = Math.max(1, unitFinal(i).final.hp);
        a.hp = a.maxHp;
        updateCardHp(i);
        updateCardGauge(i);
        setCardState(i);
    });
    renderEffectsSoon();
    if (autoOn && phase === 'player') setTimeout(() => attackAll(true), 300);
}

/* ---------- cristalli: più cristalli e più efficaci con le abilità ---------- */
function dropCrystals(e, i, a, dc, spark) {
    const act = activeFx(i);
    const bcRate = BC_DROP_CHANCE * (1 + (fxSum(act, 'bcdrop') + (spark ? fxSum(act, 'sparkbc') : 0)) / 100);
    const per = (1 + fxSum(act, 'bceff') / 100) * (1 + fxSum(act, 'bbfill') / 100);
    for (let k = 0; k < dc; k++) {
        if (Math.random() >= bcRate) continue;
        spawnCrystal('bc', e, i, () => {
            if (actors[i] !== a || a.dead || !gaugeMax(a)) return;
            a.bcGot += 1;
            fillGauge(i, per);
            fireTriggers(i, (c, x) => c.bcOver && x.bcGot >= c.bcOver && x.bcGot % c.bcOver === 0);
        });
    }
    if (Math.random() < HC_DROP_CHANCE * (1 + fxSum(act, 'hcdrop') / 100)) {
        const list = actors.map((x, j) => (x && !x.dead ? j : -1)).filter(j => j >= 0);
        const j = list[Math.floor(Math.random() * list.length)];
        if (j !== undefined) spawnCrystal('hc', e, j, () => {
            const x = actors[j];
            if (!x || x.dead) return;
            const actJ = activeFx(j);
            x.hcGot += 1;
            healUnit(j, unitFinal(j, actJ).final.rec * HC_HEAL * (1 + fxSum(actJ, 'hceff') / 100));
            fireTriggers(j, (c, y) => c.hcOver && y.hcGot >= c.hcOver && y.hcGot % c.hcOver === 0);
        });
    }
}

/* ---------- colpo su un nemico: tutti gli effetti contano ---------- */
function showDamage(e, value, tag, spark, extra) {
    const W = $('teamScene').clientWidth;
    const b = enemyBody(e);
    const d = document.createElement('div');
    d.className = 'dmg notranslate' + (tag ? ' is-' + tag : '') + (spark ? ' is-spark' : '') + (extra && extra.crit ? ' is-crit' : '');
    const top = [spark ? (extra && extra.sparkCrit ? 'SPARK CRITICAL!' : 'SPARK!') : '', extra && extra.crit ? 'CRITICAL!' : ''].filter(Boolean).join(' ');
    if (top) { const s = document.createElement('small'); s.textContent = top; d.appendChild(s); }
    d.appendChild(document.createTextNode(String(value)));
    d.style.left = `${(e.spot.x * W + (Math.random() - 0.5) * W * 0.08).toFixed(1)}px`;
    d.style.top = `${(b.y + b.up * 0.5 - b.up * (0.3 + Math.random() * 0.5)).toFixed(1)}px`;
    $('sceneFx').appendChild(d);
    d.addEventListener('animationend', () => d.remove(), { once: true });
    setTimeout(() => d.remove(), 2000);
}

function addedEls(act) {
    const out = [];
    act.forEach(({ f }) => { if (f.k === 'addel') f.els.forEach(e => { if (!out.includes(e)) out.push(e); }); });
    return out;
}

function hitEnemy(e, i, a, kind, seg, spark, plan) {
    if (e.dead) return;
    const act = activeFx(i);
    const st = unitFinal(i, act).final;
    let def = e.def * enemyStat(e, 'def');
    if (seg.defIgnore || act.some(x => x.f.k === 'defign' && Math.random() * 100 < (x.f.chance == null ? 100 : x.f.chance))) def = 0;
    let dmg = Math.max(1, st.atk - def / 3);
    if (kind !== 'atk') dmg *= (DMG[kind] || 1) * (POWER_MULT[seg.power || ''] || 1) * (1 + fxSum(act, 'bbatk') / 100);
    const hpR = a.maxHp ? a.hp / a.maxHp : 1;
    if (seg.hpRel) dmg *= 0.75 + 0.5 * hpR;
    if (seg.hpLow) dmg *= 0.75 + 0.5 * (1 - hpR);
    // elemento: il migliore tra quello dell'unità, quelli dell'attacco e quelli aggiunti dalle BB
    const els = [elementKey(a.u)].concat(seg.els || [], addedEls(act)).filter((x, k, arr) => x && arr.indexOf(x) === k);
    const el = bestElement(els, e.el);
    let em = el.m;
    if (el.tag === 'weak') em += fxSum(act, 'elem', f => !f.els || f.els.includes(el.el) || f.els.includes(elementKey(a.u))) / 100 + (e.vuln.elem ? e.vuln.elem.v / 100 : 0);
    dmg *= em;
    // critico
    const crit = Math.random() * 100 < Math.min(CAP.crit, fxSum(act, 'crit') + (seg.selfCrit || 0));
    if (crit) dmg *= CRIT_MULT + fxSum(act, 'critdmg') / 100 + (e.vuln.crit ? e.vuln.crit.v / 100 : 0);
    // Spark (e Spark critico)
    let sparkCrit = false;
    if (spark) {
        dmg *= DMG.spark + fxSum(act, 'spark', f => !f.els || f.els.includes(elementKey(a.u))) / 100 + (e.vuln.spark ? e.vuln.spark.v / 100 : 0);
        const sc = act.find(x => x.f.k === 'sparkcrit');
        if (sc && Math.random() * 100 < sc.f.v) { sparkCrit = true; dmg *= sc.f.mult || 2; }
    }
    if (enemyHasAil(e)) dmg *= 1 + fxSum(act, 'afflicted') / 100;
    dmg *= 1 + fxSum(act, 'dmgup') / 100;
    dmg *= 1 + fxSum(act, 'dmgvs', f => (f.els || []).includes(e.el)) / 100;
    dmg /= Math.max(1, seg.hits);
    dmg *= 1 + (Math.random() * 2 - 1) * DMG.variance;
    dmg = Math.max(1, Math.round(dmg));
    e.hp = Math.max(0, e.hp - dmg);
    a.turnDealt += dmg;
    showDamage(e, dmg, el.tag, spark, { crit, sparkCrit });
    addCombo(dmg, spark);
    enemyHitFlash(e);
    // dopo il colpo: HP assorbiti, barra BB, barra OD, cristalli
    act.forEach(({ f }) => {
        if (f.k === 'drain' && Math.random() * 100 < (f.chance == null ? 100 : f.chance)) healUnit(i, dmg * f.v / 100);
        if (f.k === 'sparkheal' && spark) healUnit(i, dmg * f.v / 100);
        if (f.k === 'bbcrit' && crit) fillGauge(i, f.v);
        if (f.k === 'bbspark' && spark) fillGauge(i, f.v);
    });
    if (!plan.bbOnHit) {
        plan.bbOnHit = true;
        act.forEach(({ f }) => { if (f.k === 'bbonhit') fillGauge(i, f.v); });
    }
    od = Math.min(100, od + OD_PER_HIT * (1 + fxSum(act, 'odfill') / 100));
    updateOd();
    dropCrystals(e, i, a, seg.dc || 1, spark);
    // indebolimenti e stati alterati: quelli della BB (una volta per nemico) e quelli "aggiunti all'attacco"
    if (!plan.touched.has(e)) {
        plan.touched.add(e);
        plan.enemyFx.forEach(f => applyToEnemy(e, f));
        act.forEach(({ f, src }) => {
            if (ENEMY_KINDS.includes(f.k) && (f.onAtk || src === 'ls' || src === 'fls' || src === 'es')) applyToEnemy(e, f);
        });
    }
    showEnemyInfo(enemies.indexOf(e));
    if (e.hp <= 0) defeatEnemy(e);
}

function landHit(i, a, kind, seg, plan) {
    if (actors[i] !== a || a.dead) return;
    let targets;
    if (seg.mode === 'all') targets = enemies.filter(x => !x.dead);
    else if (seg.mode === 'random') { const t = pickTarget(true); targets = t ? [t] : []; }
    else {
        if (!a.target || a.target.dead || !enemies.includes(a.target)) a.target = pickTarget();
        targets = a.target ? [a.target] : [];
    }
    if (!targets.length) return;
    const now = performance.now() / 1000;
    recentHits = recentHits.filter(h => now - h.t < 1);
    const spark = recentHits.some(h => h.slot !== i && now - h.t <= SPARK_WINDOW);
    recentHits.push({ slot: i, t: now });
    if (spark) turnSparks += 1;
    targets.forEach(e => hitEnemy(e, i, a, kind, seg, spark, plan));
}
let turnSparks = 0;

/* ---------- cosa fa l'attacco: colpi (anche più attacchi nella stessa BB) ed effetti sui nemici ---------- */
function attackPlan(i, a, kind) {
    const u = a.u;
    const act = activeFx(i);
    const plan = { kind, segs: [], enemyFx: [], touched: new Set() };
    if (kind === 'atk') {
        const b = (battle[u.id] || {}).atk || {};
        const hits = Math.max(1, Math.round(Math.max(1, num(b.hits) || 1) * (1 + fxSum(act, 'hits') / 100)));
        const all = act.some(x => x.f.k === 'hitall' && Math.random() * 100 < (x.f.chance == null ? 100 : x.f.chance));
        plan.segs.push({ hits, mode: all ? 'all' : 'single', els: [], dc: Math.max(1, num(b.dc) || 1) });
    } else {
        const list = burstFx(u, kind);
        const bd = (battle[u.id] || {})[kind] || {};
        const dc = Math.max(1, num(bd.dc) || 1);
        const mod = list.find(f => f.k === 'attackmod') || {};
        list.forEach(f => {
            if (f.k !== 'attack') return;
            plan.segs.push({ hits: f.hits || Math.max(1, num(bd.hits) || 1), mode: f.mode, els: f.els || [], power: f.power, hpRel: f.hpRel || mod.hpRel, hpLow: f.hpLow, selfCrit: f.selfCrit, defIgnore: f.defIgnore, dc });
        });
        if (!plan.segs.length) {
            const info = burstInfo(u, kind);
            if (info.mode !== 'none') plan.segs.push({ hits: info.hits, mode: info.mode, els: [], dc: info.dc });
        }
        plan.enemyFx = list.filter(f => ENEMY_KINDS.includes(f.k) && !f.onAtk);
    }
    plan.hits = plan.segs.reduce((s, x) => s + x.hits, 0);
    return plan;
}
function segOf(plan, k) {
    let n = k;
    for (const s of plan.segs) { if (n < s.hits) return s; n -= s.hits; }
    return plan.segs[plan.segs.length - 1];
}

/* ---------- turno dei nemici ---------- */
function pickUnit() {
    const alive = actors.map((a, i) => (a && !a.dead ? i : -1)).filter(i => i >= 0);
    if (!alive.length) return -1;
    const taunt = alive.filter(j => fxAny(activeFx(j), 'taunt'));
    if (taunt.length) return taunt[Math.floor(Math.random() * taunt.length)];
    const seen = alive.filter(j => !fxAny(activeFx(j), 'stealth'));
    const list = seen.length ? seen : alive;
    return list[Math.floor(Math.random() * list.length)];
}

function enemyBaseStats(e) {
    return baseStats(e.u, 'lord').hp ? baseStats(e.u, 'lord') : baseStats(e.u, 'base');
}

// un colpo del nemico su un'unità: schivata, elementi, critici, riduzioni, barriera, contrattacco...
function enemyHit(e, j, hits) {
    let a = actors[j];
    if (!a || a.dead) { j = pickUnit(); a = actors[j]; }
    if (!a || e.dead) return j;
    const act = activeFx(j);
    if (Math.random() * 100 < Math.min(CAP.evasion, fxSum(act, 'evasion'))) {
        floatOnUnit(j, 'MISS', 'is-miss');
        return j;
    }
    const fin = unitFinal(j, act).final;
    const st = enemyBaseStats(e);
    let dmg = Math.max(1, st.atk * ENEMY_ATK_MULT * enemyStat(e, 'atk') - fin.def / 3);
    const tags = [];
    let el = elementMultiplier(e.el, elementKey(a.u));
    if (el.tag === 'weak' && fxAny(act, 'noelem')) { el = { m: 1, tag: '' }; tags.push('ELEM ✕'); }
    dmg *= el.m;
    let crit = Math.random() < ENEMY_CRIT;
    if (crit && fxAny(act, 'nocrit')) { crit = false; tags.push('CRITICAL ✕'); }
    if (crit) dmg *= CRIT_MULT * Math.max(0, 1 - fxSum(act, 'critred') / 100);
    let dr = fxSum(act, 'dr') + fxSum(act, 'dr2') + fxSum(act, 'drel', f => (f.weakOnly ? el.tag === 'weak' : (f.els || []).includes(e.el)));
    act.forEach(({ f }) => { if (f.k === 'drchance' && Math.random() * 100 < (f.chance == null ? FX_BASE.chance : f.chance)) dr += f.v; });
    dmg *= Math.max(0, 1 - Math.min(CAP.dr, dr) / 100);
    dmg /= Math.max(1, hits);
    dmg *= 1 + (Math.random() * 2 - 1) * DMG.variance;
    dmg = Math.max(0, Math.round(dmg));
    if (dmg > 1 && act.some(({ f }) => f.k === 'dr1' && Math.random() * 100 < f.v)) { dmg = 1; tags.push('1!'); }
    if (dmg > 0 && a.shield && a.shield.hp > 0) {
        const took = Math.min(a.shield.hp, dmg);
        a.shield.hp -= took;
        dmg -= took;
        tags.push('BARRIER');
        if (a.shield.hp <= 0) a.shield = null;
    }
    if (crit) tags.unshift('CRITICAL!');
    hurtUnit(j, dmg, { crit, small: tags.join(' ') });
    if (a.dead) return j;
    // dopo il colpo: barra BB, cure, contrattacchi
    act.forEach(({ f }) => {
        const ok = Math.random() * 100 < (f.chance == null ? 100 : f.chance);
        if (f.k === 'bbhit') fillGauge(j, Array.isArray(f.v) ? f.v.map(x => x / Math.max(1, hits)) : f.v / Math.max(1, hits));
        else if (f.k === 'hitheal' && ok) healUnit(j, dmg * f.v / 100);
        else if (f.k === 'counter' && ok && dmg > 0 && !e.dead) {
            const back = Math.max(1, Math.round(dmg * f.v / 100));
            e.hp = Math.max(0, e.hp - back);
            showDamage(e, back, '', false);
            if (e.hp <= 0) defeatEnemy(e);
        } else if (f.k === 'counterail' && ok) applyToEnemy(e, { k: 'inflict', ails: f.ails, chance: 100, turns: AIL_TURNS });
        else if (f.k === 'counterdebuff' && ok) applyToEnemy(e, { k: 'debuff', stats: f.stats, v: f.v, chance: 100, turns: f.turns || 1 });
    });
    return j;
}

// a volte i nemici danno uno stato alterato o abbassano ATK/DEF/REC (se l'unità non è immune)
function enemyStatusAttack(e, j) {
    const a = actors[j];
    if (!a || a.dead) return;
    const act = activeFx(j);
    if (Math.random() < ENEMY_AIL_CHANCE) {
        const ail = FX_AILMENTS[Math.floor(Math.random() * FX_AILMENTS.length)];
        const immune = act.some(({ f }) => f.k === 'immune' && (!f.ails || f.ails.includes(ail)));
        if (immune) floatOnUnit(j, L2('IMMUNE', 'IMMUNE'), 'is-buff', ailName(ail) + ' ✕');
        else {
            a.ails[ail] = (ail === 'paralysis' ? 1 : AIL_TURNS) + 1;
            floatOnUnit(j, ailName(ail), 'is-ail');
            refreshMaxHp(j);
            updateCardGauge(j);
        }
    }
    if (Math.random() < ENEMY_DEBUFF_CHANCE) {
        const s = ['atk', 'def', 'rec'][Math.floor(Math.random() * 3)];
        const nulled = act.some(({ f }) => f.k === 'nodebuff' && (!f.stats || !f.stats.length || f.stats.includes(s)));
        if (nulled) floatOnUnit(j, L2('IMMUNE', 'IMMUNE'), 'is-buff', s.toUpperCase() + '↓ ✕');
        else {
            a.debuffs = a.debuffs.filter(d => d.stat !== s);
            a.debuffs.push({ stat: s, v: ENEMY_DEBUFF, turns: 3 });
            floatOnUnit(j, s.toUpperCase() + '↓', 'is-debuff');
        }
    }
    renderEffectsSoon();
}

async function enemyAttack(e) {
    if (e.dead || e.busy) return;
    if (e.ails.paralysis) { floatOnEnemy(e, ailName('paralysis'), 'is-ail'); return; }
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
    for (let k = 0; k < info.hits; k++) {
        const f = info.hits === 1 ? (HIT_START + HIT_END) / 2 : HIT_START + (HIT_END - HIT_START) * k / (info.hits - 1);
        setTimeout(() => { if (!e.dead) ti = enemyHit(e, ti, info.hits); }, f * dur * 1000);
    }
    setTimeout(() => { if (!e.dead) enemyStatusAttack(e, ti); }, HIT_END * dur * 1000 + 50);
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
    // veleno e "DoT" sui nemici
    enemies.forEach(e => {
        if (e.dead) return;
        let d = 0;
        if (e.ails.poison) d += e.maxHp * ENEMY_POISON_PCT / 100;
        if (e.dot) d += e.maxHp * DOT_PCT / 100;
        if (!d) return;
        d = Math.max(1, Math.round(d));
        e.hp = Math.max(0, e.hp - d);
        showDamage(e, d, 'poison', false);
        if (e.hp <= 0) defeatEnemy(e);
    });
    updateTargetInfo();
    const list = enemies.filter(e => !e.dead);
    const runs = list.map((e, k) => wait(k * ENEMY_TURN_GAP).then(() => enemyAttack(e)));
    await Promise.all(runs);
    phase = 'player';
    $('bfScreen').classList.remove('is-enemy-turn');
}

/* ---------- fine del turno della squadra: attacchi in più e effetti "quando ..." ---------- */
async function endOfPlayerTurn() {
    let any = false;
    actors.forEach((a, i) => {
        if (!a || a.dead) return;
        const act = activeFx(i);
        act.forEach(({ f }) => {
            if (f.k !== 'endatk') return;
            const t = pickTarget(true);
            if (!t) return;
            any = true;
            const st = unitFinal(i, act).final;
            const el = bestElement([elementKey(a.u)].concat(addedEls(act)), t.el);
            let d = Math.max(1, st.atk * f.v / 100 - t.def * enemyStat(t, 'def') / 3) * el.m;
            d = Math.max(1, Math.round(d * (1 + (Math.random() * 2 - 1) * DMG.variance)));
            t.hp = Math.max(0, t.hp - d);
            showDamage(t, d, el.tag, false);
            enemyHitFlash(t);
            if (t.hp <= 0) defeatEnemy(t);
        });
        fireTriggers(i, (c, x) => (c.sparks && turnSparks >= c.sparks) || (c.dmgDealt && x.turnDealt >= c.dmgDealt));
    });
    if (any) { updateTargetInfo(); await wait(500); }
}

// inizio di un nuovo turno: i turni degli effetti scendono, veleno, cure e barre "a ogni turno"
function newTurn() {
    acted.clear();
    turn += 1;
    turnSparks = 0;
    $('turnNum').textContent = String(turn);
    actors.forEach((a, j) => {
        if (!a) return;
        a.buffs.forEach(b => { b.turns -= 1; });
        a.buffs = a.buffs.filter(b => b.turns > 0);
        Object.keys(a.ails).forEach(k => { a.ails[k] -= 1; if (a.ails[k] <= 0) delete a.ails[k]; });
        a.debuffs.forEach(d => { d.turns -= 1; });
        a.debuffs = a.debuffs.filter(d => d.turns > 0);
        Object.keys(a.trig).forEach(k => { a.trig[k] -= 1; if (a.trig[k] <= 0) delete a.trig[k]; });
        a.stack += 1;
        a.turnDmg = 0;
        a.turnDealt = 0;
        if (a.dead) return;
        refreshMaxHp(j);
        const act = activeFx(j);
        if (a.ails.poison) hurtUnit(j, Math.max(1, Math.round(a.maxHp * POISON_PCT / 100 * Math.max(0, 1 - fxSum(act, 'dotred') / 100))), { poison: true, small: ailName('poison'), noSave: true });
        if (a.dead) return;
        const rec = unitFinal(j, act).final.rec;
        act.forEach(({ f }) => {
            if (f.k === 'regen') healUnit(j, f.full ? a.maxHp : f.pctv ? a.maxHp * f.pctv / 100 : rec * f.v * (0.95 + Math.random() * 0.1));
            else if (f.k === 'hpturn') healUnit(j, f.pctv ? a.maxHp * f.pctv / 100 : rec * f.v * (0.95 + Math.random() * 0.1));
            else if (f.k === 'bbturn') fillGauge(j, f.v);
            else if (f.k === 'odturn') od = Math.min(100, od + (f.v || 0));
        });
        updateCardGauge(j);
    });
    enemies.forEach(e => {
        e.debuffs.forEach(d => { d.turns -= 1; });
        e.debuffs = e.debuffs.filter(d => d.turns > 0);
        Object.keys(e.ails).forEach(k => { e.ails[k] -= 1; if (e.ails[k] <= 0) delete e.ails[k]; });
        Object.keys(e.vuln).forEach(k => { e.vuln[k].turns -= 1; if (e.vuln[k].turns <= 0) delete e.vuln[k]; });
        if (e.dot) { e.dot.turns -= 1; if (e.dot.turns <= 0) e.dot = null; }
    });
    updateOd();
    team.slots.forEach((s, i) => setCardState(i));
    renderEffectsSoon();
    if (autoOn) setTimeout(() => attackAll(true), 300);
}

/* ---------- pannello a destra: abilità ed effetti, con quello che è attivo adesso ---------- */
const fxOpen = new Set();
const isBurstKind = k => k === 'bb' || k === 'sbb' || k === 'ubb';

function chipHtml(f, kind, owner) {
    let state = isBurstKind(kind) ? 'burst' : 'on';
    let why = '';
    if (FX_SHOW_ONLY.includes(f.k)) { state = 'info'; why = L2('non c\'è in questa demo', 'not in this demo'); }
    if (f.cond) {
        const cl = condLabel(f.cond, f);
        if (!staticCondOk(f.cond)) {
            state = 'off';
            why = cl + (f.cond.sphere ? L2(' — le sfere non ci sono in questa demo', ' — spheres are not in this demo') : f.cond.gender ? L2(' — nei dati non c\'è il sesso delle unità', ' — unit gender is not in the data') : '');
        } else {
            why = cl;
            if (!isBurstKind(kind) && state === 'on') {
                const holders = kind === 'ls' ? actors.map((x, j) => (x ? j : -1)).filter(j => j >= 0 && fitsUnit(f, j)) : [owner];
                if (!holders.some(j => condOk(f, j))) state = 'wait';
            }
        }
    }
    const dur = isBurstKind(kind) && f.dur && f.k !== 'debuff' && f.k !== 'inflict' ? L2(` · ${f.dur} ${f.dur === 1 ? 'turno' : 'turni'}`, ` · ${f.dur} ${f.dur === 1 ? 'turn' : 'turns'}`) : '';
    return `<span class="fx-chip is-${state}">${esc(fxLabel(f))}${esc(dur)}${why ? ` <i>(${esc(why)})</i>` : ''}</span>`;
}

function skillBlock(u, kind, title, owner) {
    const clauses = skillFx(u, kind);
    if (!clauses.length) return '';
    const d = skillDesc(u, kind);
    const it = fxIt();
    const rows = clauses.map(c => {
        const chips = c.fx.map(f => chipHtml(f, kind, owner)).join('') || `<span class="fx-chip is-info">${esc(L2('solo scritto', 'text only'))}</span>`;
        return `<li><span class="fx-chips ${it ? 'notranslate' : ''}">${chips}</span><span class="fx-src">${esc(c.text)}</span></li>`;
    }).join('');
    return `<div class="fx-skill"><div class="fx-skill-h"><b class="notranslate">${esc(title)}</b> <span class="notranslate">${esc(skillName(u, kind))}</span></div>` +
        (d.localized && lang() !== 'en' ? `<p class="fx-desc notranslate">${esc(d.text)}</p>` : '') +
        `<ul class="fx-list">${rows}</ul></div>`;
}

function liveChips(j) {
    const a = actors[j];
    if (!a) return '';
    if (a.dead) return `<span class="fx-chip is-off">KO</span>`;
    const out = [];
    a.buffs.forEach(b => out.push(`<span class="fx-chip is-burst">${esc(fxLabel(b.f))} · ${esc(b.turns >= 900 ? '∞' : L2(b.turns + (b.turns === 1 ? ' turno' : ' turni'), b.turns + (b.turns === 1 ? ' turn' : ' turns')))}</span>`));
    if (a.shield) out.push(`<span class="fx-chip is-burst">${esc(L2('Barriera', 'Barrier'))} ${fmt(a.shield.hp)}/${fmt(a.shield.max)}</span>`);
    Object.keys(a.trig || {}).forEach(() => {});
    Object.keys(a.ails).forEach(k => out.push(`<span class="fx-chip is-ail">${esc(ailName(k))}</span>`));
    a.debuffs.forEach(d => out.push(`<span class="fx-chip is-ail">${d.stat.toUpperCase()} −${d.v}%</span>`));
    return out.join('');
}

const STAT_ORDER = ['hp', 'atk', 'def', 'rec'];
function statLine(j) {
    const r = unitFinal(j);
    return STAT_ORDER.map(s => {
        const diff = r.final[s] - r.base[s];
        const p = r.base[s] ? Math.round(diff / r.base[s] * 100) : 0;
        return `<span>${s.toUpperCase()} <b class="${diff > 0 ? 'is-up' : diff < 0 ? 'is-down' : ''}">${fmt(r.final[s])}</b>${diff ? `<em class="${diff > 0 ? 'is-up' : 'is-down'}">${p > 0 ? '+' : ''}${p}%</em>` : ''}</span>`;
    }).join('');
}

function renderEffects() {
    const box = $('teamEffects');
    if (!box) return;
    box.querySelectorAll('details[data-key]').forEach(d => { if (d.open) fxOpen.add(d.dataset.key); else fxOpen.delete(d.dataset.key); });
    const list = teamUnits();
    // statistiche dal vivo anche nell'elenco della squadra
    document.querySelectorAll('#teamEditor .te-row[data-slot]').forEach(row => {
        const j = +row.dataset.slot;
        const st = row.querySelector('.te-stats');
        if (st && actors[j]) st.innerHTML = statLine(j);
    });
    if (!list.length) { box.innerHTML = ''; return; }
    let html = `<h2 class="notranslate">${esc(tx(TT.fxTitle))}</h2><p class="fx-intro ${txClass(TT.fxIntro)}">${esc(tx(TT.fxIntro))}</p>`;
    html += `<div class="fx-legend ${fxIt() ? 'notranslate' : ''}"><span class="fx-chip is-on">${esc(L2('attivo', 'active'))}</span><span class="fx-chip is-wait">${esc(L2('aspetta la condizione', 'waiting for condition'))}</span><span class="fx-chip is-burst">${esc(L2('con la BB', 'with the BB'))}</span><span class="fx-chip is-off">${esc(L2('condizione impossibile qui', 'condition not possible here'))}</span><span class="fx-chip is-info">${esc(L2('solo scritto', 'text only'))}</span></div>`;
    const lsBlock = (k, title) => {
        if (k < 0 || !team.slots[k]) return '';
        const u = unitById.get(team.slots[k].id);
        if (!u || !skillFx(u, 'ls').length) return '';
        const key = 'ls' + k;
        return `<details class="fx-unit is-ls" data-key="${key}"${fxOpen.has(key) || !fxOpen.size ? ' open' : ''}><summary><img class="fx-thumb" src="${esc(u.image || '')}" alt="" loading="lazy"><span class="fx-name"><b class="notranslate">${esc(title)}</b> <span class="notranslate">${esc(unitName(u))}</span></span></summary>${skillBlock(u, 'ls', tx(TT.fxLs), k)}</details>`;
    };
    html += lsBlock(team.leader, tx(TT.leader));
    html += lsBlock(team.friend, tx(TT.friend));
    list.forEach(({ j, u }) => {
        const key = 'u' + j;
        const r = unitFinal(j);
        const rows = STAT_ORDER.map(s => {
            const diff = r.final[s] - r.base[s];
            return `<tr><th>${s.toUpperCase()}</th><td>${fmt(r.base[s])}</td><td class="${diff > 0 ? 'is-up' : diff < 0 ? 'is-down' : ''}">${fmt(r.final[s])}</td><td class="${diff > 0 ? 'is-up' : diff < 0 ? 'is-down' : ''}">${diff ? (diff > 0 ? '+' : '') + fmt(diff) : ''}</td></tr>`;
        }).join('');
        html += `<details class="fx-unit" data-key="${key}"${fxOpen.has(key) ? ' open' : ''}><summary><img class="fx-thumb" src="${esc(u.image || '')}" alt="" loading="lazy"><span class="fx-name notranslate">${esc(unitName(u))}</span><span class="fx-live ${fxIt() ? 'notranslate' : ''}">${liveChips(j)}</span></summary>
            <table class="fx-stats notranslate"><thead><tr><th></th><th>${esc(L2('base', 'base'))}</th><th>${esc(L2('adesso', 'now'))}</th><th></th></tr></thead><tbody>${rows}</tbody></table>
            ${skillBlock(u, 'extra', 'Extra skill', j)}${skillBlock(u, 'bb', 'BB', j)}${skillBlock(u, 'sbb', 'SBB', j)}${skillBlock(u, 'ubb', 'UBB', j)}</details>`;
    });
    box.innerHTML = html;
}

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
    battleHint: { it: "Clicca su un riquadro: l'unità va verso un nemico a caso e lo attacca. Se clicchi un nemico compare il mirino e tutti attaccano quello; clicca di nuovo sullo stesso nemico (o in un punto vuoto del campo) per togliere il mirino. Ogni unità attacca una volta per turno; quando tutte hanno attaccato comincia il turno dopo. I colpi riempiono la barra BB: quando è piena il riquadro si illumina e trascinandolo verso l'alto l'unità fa la BB. Se aspetti, la barra si riempie una seconda volta (dorata) per la SBB. Dal nemico colpito escono i cristalli di battaglia (riempiono la barra BB di chi ha colpito) e a volte quelli di cura. Più unità che colpiscono insieme fanno Spark. Quando la barra OVERDRIVE in basso è piena, le unità che hanno la UBB (con la barra dorata piena) fanno la UBB. AUTO: attaccano da sole e usano anche le BB.", en: 'Click a card: the unit goes to a random enemy and attacks it. Click an enemy to show the target mark and everyone attacks that one; click the same enemy again (or an empty spot on the field) to remove the mark. Each unit attacks once per turn; when all have attacked the next turn begins. Hits fill the BB gauge: when it is full the card lights up and dragging it up makes the unit use its BB. If you wait, the gauge fills a second time (gold) for the SBB. The hit enemy drops battle crystals (they fill the BB gauge of the attacker) and sometimes heart crystals. Several units hitting together make Sparks. When the OVERDRIVE gauge at the bottom is full, units with a UBB (and a full gold gauge) use their UBB. AUTO: they attack by themselves and also use their BBs.' },
    dmgNote: { it: 'Danni indicativi con tutti gli effetti delle abilità: ATK attuale − DEF del nemico ÷ 3, × elemento (×1,5 se il nemico è debole, + i danni elementali in più; ×0,75 se lo resiste), × critico (×1,5 + i danni critici in più), × Spark (×1,5 + i danni Spark in più), × BB (+ l\'ATK della BB). I nemici fanno colpi critici (10%) e a volte danno stati alterati o abbassano ATK/DEF/REC: le abilità che li annullano funzionano davvero.', en: "Indicative damage with every skill effect: current ATK − enemy DEF ÷ 3, × element (×1.5 if the enemy is weak, + extra elemental damage; ×0.75 if it resists), × critical (×1.5 + extra critical damage), × Spark (×1.5 + extra Spark damage), × BB (+ BB ATK). Enemies land critical hits (10%) and sometimes inflict status ailments or lower ATK/DEF/REC: skills that negate them really work." },
    type: { it: 'Tipo', en: 'Type', es: 'Tipo', fr: 'Type', 'zh-CN': '类型', ja: 'タイプ' },
    fxTitle: { it: 'Abilità ed effetti in battaglia', en: 'Skills and effects in battle', es: 'Habilidades y efectos en batalla', fr: 'Compétences et effets en combat', 'zh-CN': '战斗中的技能与效果', ja: 'バトル中のスキルと効果' },
    fxIntro: {
        it: "Qui c'è, frase per frase, tutto quello che dicono l'abilità leader (del leader e dell'amico), le extra skill e le BB, SBB e UBB, e cosa fa in questa battaglia. Le statistiche cambiano davvero: HP, ATK, DEF e REC \"adesso\" sono quelli usati per i danni. Se la wiki scrive il numero si usa quel numero; se scrive solo una parola (per esempio \"hugely boosts\") si usa un valore indicativo. Apri un'unità per vedere i suoi effetti attivi e quanti turni durano.",
        en: 'Here, sentence by sentence, is everything the leader skill (of the leader and the friend), the extra skills and the BB, SBB and UBB say, and what it does in this battle. Stats really change: HP, ATK, DEF and REC "now" are the ones used for damage. If the wiki writes the number that number is used; if it only writes a word (for example "hugely boosts") an indicative value is used. Open a unit to see its active effects and how many turns they last.'
    },
    fxLs: { it: 'Abilità leader', en: 'Leader skill', es: 'Habilidad de líder', fr: 'Compétence de chef', 'zh-CN': '队长技能', ja: 'リーダースキル' }
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
const DMG = { weak: 1.5, resist: 0.75, spark: 1.5, bb: 2.5, sbb: 4, ubb: 6, variance: 0.08 };
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
    const actor = { id: u.id, u, wrap, idle, atk: null, atkPromise: null, busy: false, gauge: 0, mirror: !!mirror, hp: 0, maxHp: 0, dead: false };
    fxInit(actor);
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
            wave.forEach(x => { fxInit(x); x.hp = x.maxHp; x.dead = false; x.wrap.classList.remove('is-dead'); });
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


// centro del corpo di un'unità della squadra
function unitBody(i) {
    const a = actors[i];
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    const spot = TEAM_SLOTS[i];
    const up = a && a.idle.m ? (a.idle.icon ? H * 0.16 : a.idle.m.up * actorScale(a) * a.idle.scale) : H * 0.15;
    return { x: spot.x * W, y: spot.y * H - up * 0.5, up };
}






/* cure delle BB / SBB / UBB, lette dalla descrizione:
   "(greatly) recovers HP for all allies" = cura subito tutti
   "gradually recovers HP ... for 3 turns" = cura a ogni turno per 3 turni */



/* ---------- turno dei nemici: ognuno attacca un'unità della squadra ---------- */



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


// cristallo di cura arrivato: la vita dell'unità brilla un attimo
function healFlash(i) {
    const card = cardOf(i);
    if (!card) return;
    card.classList.remove('is-healed');
    void card.offsetWidth;
    card.classList.add('is-healed');
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



/* ---------- barra BB (si riempie con i CB dei colpi, in due giri per la SBB) ---------- */
function burstCosts(u) {
    const b = battle[u.id] || {};
    return { bb: num(b.bb && b.bb.cost), sbb: num(b.sbb && b.sbb.cost) };
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


async function attack(i, burst, again) {
    const a = actors[i];
    if (!a || a.busy || a.dead || phase !== 'player') return;
    if (!again && acted.has(i)) return;
    // Paralisi: l'unità salta il turno
    if (!again && a.ails && a.ails.paralysis) {
        acted.add(i);
        floatOnUnit(i, ailName('paralysis'), 'is-ail');
        setCardState(i);
        checkTurnEnd();
        return;
    }
    if (burst && !again && !readyKind(a)) return;          // BB non ancora pronta
    const target = pickTarget();
    if (!target) return;
    a.target = target;
    const u = a.u;
    const kind = again || (burst ? readyKind(a) : 'atk');
    const plan = attackPlan(i, a, kind);
    const hits = plan.hits;
    a.busy = true;
    acted.add(i);
    a.wrap.classList.add('is-busy');
    setCardState(i);
    if (kind !== 'atk') {
        if (!again) {
            a.gauge = 0;
            if (kind === 'ubb') od = 0;
            updateOd();
        }
        updateCardGauge(i);
        showBanner(skillName(u, kind) || (kind === 'ubb' ? 'ULTIMATE BRAVE BURST' : kind === 'sbb' ? 'SUPER BRAVE BURST' : 'BRAVE BURST'));
        fireTriggers(i, c => c.afterBurst);
    }
    const atk = await Promise.race([ensureAtk(a), wait(4000).then(() => null)]);
    const scene = $('teamScene');
    const W = scene.clientWidth, H = scene.clientHeight;
    const home = TEAM_SLOTS[i];
    const move = hits ? unitMoveType(u) : 3;
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
    // effetti della BB (aumenti, cure, barre, barriere...): a metà dell'animazione
    if (kind !== 'atk') {
        setTimeout(() => {
            if (actors[i] !== a || a.dead) return;
            applyBurstEffects(i, a, kind);
            if (!hits) enemies.filter(e => !e.dead).forEach(e => plan.enemyFx.forEach(f => applyToEnemy(e, f)));
        }, dur * 500);
    }
    for (let k = 0; k < hits; k++) {
        const seg = segOf(plan, k);
        const f = hits === 1 ? (HIT_START + HIT_END) / 2 : HIT_START + (HIT_END - HIT_START) * k / (hits - 1);
        setTimeout(() => landHit(i, a, kind, seg, plan), f * dur * 1000);
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
    // "activates BB twice": a volte la BB parte di nuovo
    if (kind !== 'atk' && !again && !a.dead && actors[i] === a) {
        const dbl = Math.min(100, fxSum(activeFx(i), 'double'));
        if (dbl && Math.random() * 100 < dbl) {
            floatOnUnit(i, 'x2!', 'is-buff');
            await wait(250);
            await attack(i, true, kind);
            return;
        }
    }
    // "extra action": può attaccare ancora in questo turno
    if (a.extraAct && !a.dead) {
        a.extraAct = false;
        acted.delete(i);
        floatOnUnit(i, L2('AZIONE IN PIÙ', 'EXTRA ACTION'), 'is-buff');
    }
    setCardState(i);
    renderEffectsSoon();
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


// quando tutte le unità (vive) hanno attaccato: attacchi a fine turno, poi tocca ai nemici, poi un nuovo turno
function checkTurnEnd() {
    if (phase !== 'player') return;
    const present = actors.map((a, i) => (a && !a.dead ? i : -1)).filter(i => i >= 0);
    if (!present.length || present.some(i => !acted.has(i) || actors[i].busy)) return;
    clearTimeout(checkTurnEnd.timer);
    checkTurnEnd.timer = setTimeout(async () => {
        if (phase !== 'player' || actors.some(a => a && a.busy)) return;
        phase = 'end';
        await endOfPlayerTurn();
        phase = 'player';
        if (enemies.some(e => !e.dead)) await enemyTurn();
        await wait(250);
        newTurn();
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
        const statsHtml = actors[i] ? statLine(i) : `<span>HP <b>${fmt(st.hp)}</b></span><span>ATK <b>${fmt(st.atk)}</b></span><span>DEF <b>${fmt(st.def)}</b></span><span>REC <b>${fmt(st.rec)}</b></span>`;
        const types = availableTypes(u).map(t => `<option value="${t}"${t === slot.type ? ' selected' : ''}>${TYPE_LABELS[t]}</option>`).join('');
        return `<div class="te-row" data-slot="${i}">
            <span class="te-num">${i + 1}</span>
            <img class="te-thumb" src="${esc(u.image || '')}" alt="" loading="lazy" draggable="false">
            <span class="te-main">
                <span class="te-name notranslate">${esc(unitName(u))}</span>
                <span class="te-stats notranslate">${statsHtml}</span>
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
        const k = team.slots.indexOf(s);
        const st = actors[k] ? unitFinal(k).final : unitStats(u, s.type);
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
    renderEffects();
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
