const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const sourceFile = path.join(__dirname, "page.txt");
const outputFile = path.join(__dirname, "../data/units.json");

async function run() {
    console.log("🚀 AVVIO SCRAPE: AGGIUNTA LEADER SKILL...");

    if (!fs.existsSync(sourceFile)) return console.log("❌ Errore: page.txt non trovato.");

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Velocizziamo lo scrape escludendo robaccia inutile (immagini, stili)
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (['image', 'stylesheet', 'font'].includes(req.resourceType())) req.abort();
        else req.continue();
    });

    const htmlContent = fs.readFileSync(sourceFile, "utf8");
    const $ = cheerio.load(htmlContent);
    const rows = $("tr").toArray();
    let units = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = $(rows[i]).find("td");
        if (cells.length < 4) continue;

        const name = $(cells[1]).find("a").last().text().trim();
        const wikiLink = $(cells[1]).find("a").last().attr("href");
        const imgTag = $(cells[1]).find("img").first();
        let unitImage = (imgTag.attr("data-src") || imgTag.attr("src") || "").split("/revision/")[0];
        const element = $(cells[2]).find("img").attr("alt") || "Unknown";
        const rarity = $(cells[3]).text().trim();

        if (!wikiLink) continue;
        const fullUrl = wikiLink.startsWith("http") ? wikiLink : `https://bravefrontierrpg.fandom.com${wikiLink}`;

        console.log(`🔍 [${i + 1}] Estrazione dati completa: ${name}`);

        try {
            await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
            const content = await page.content();
            const $u = cheerio.load(content);

            // FUNZIONE PER LE SKILL (BB, SBB, UBB)
            const getSkill = (keyword) => {
                const th = $u(`th:contains('${keyword}')`).first();
                if (!th.length) return { name: "N/A", desc: "N/A" };
                return {
                    name: th.next().text().trim() || "N/A",
                    desc: th.parent().next().find("td").text().trim() || "N/A"
                };
            };

            // FUNZIONE SPECIFICA PER LEADER SKILL
            const getLeaderSkill = () => {
                const th = $u("th:contains('Abilità Leader')").first();
                if (!th.length) return { name: "N/A", desc: "N/A" };
                return {
                    name: th.next().text().trim() || "N/A",
                    desc: th.parent().next().find("td").text().trim() || "N/A"
                };
            };

            const realId = unitImage.match(/_(\d+)\./)?.[1] || null;

            units.push({
                id: i + 1,
                realId,
                name,
                image: unitImage,
                element,
                rarity,
                lore: $u("h2:contains('Storia'), .mw-headline:contains('Storia')").parent().next("p").text().trim() || "Storia non disponibile.",
                stats: { lord: null }, // Qui puoi mappare le stats come nel tuo codice precedente
                skills: {
                    ls: getLeaderSkill(), // <--- AGGIUNTA QUI
                    bb: getSkill('Brave Burst'),
                    sbb: getSkill('Super Brave Burst'),
                    ubb: getSkill('Ultimate Brave Burst')
                },
                animations: realId ? {
                    default: `https://library.bravefrontier.jp/bf1_rsc/unit/apng/${realId}/${realId}_default.png`,
                    idle: `https://library.bravefrontier.jp/bf1_rsc/unit/apng/${realId}/${realId}_idle.png`,
                    atk: `https://library.bravefrontier.jp/bf1_rsc/unit/apng/${realId}/${realId}_atk.png`
                } : {}
            });

            // Salva man mano per sicurezza
            fs.writeFileSync(outputFile, JSON.stringify(units, null, 2));

        } catch (err) {
            console.log(`❌ Errore su ${name}: ${err.message}`);
        }
    }
    await browser.close();
    console.log("✅ FINITO! Controlla units.json");
}

run();