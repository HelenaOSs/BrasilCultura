// Baixa uma foto para cada prato, povo e ícone do mapa (Wikipédia e Wikimedia Commons).
// As fotos vão para src/assets/imagens/<pasta>/<slug>.jpg.
//
// Como usar (no terminal, dentro da pasta do projeto, onde fica o package.json):
//   npm run imagens                   -> baixa só as que ainda não existem
//   npm run imagens -- refazer        -> refaz as que o script já tinha baixado (fotos suas não são mexidas)
//   npm run imagens -- trocar SLUG    -> troca a foto de um item por outra (ex.: trocar bolo-de-castanha)
//   npm run imagens -- comidas        -> só os pratos (ou: povos, mapa). Pode combinar: refazer comidas
//
// Como a foto é escolhida: primeiro a imagem principal do artigo da Wikipédia sobre o prato
// (só se o artigo for mesmo sobre comida); se não houver, a melhor foto do Commons, ignorando
// fotos de pessoas. Se nada combinar, NÃO baixa nada: o site mostra a ilustração.
// Os créditos ficam em CREDITOS-IMAGENS.md (muitas licenças exigem citar o autor).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const raiz = [aqui, path.join(aqui, ".."), process.cwd(), path.join(process.cwd(), "Cultura"), path.join(process.cwd(), "..")]
    .map((d) => path.resolve(d))
    .find((d) => fs.existsSync(path.join(d, "src", "Data", "norte.js")));
if (!raiz) {
    console.log("Não achei a pasta do projeto (a que tem src/Data). Abra o terminal dentro da pasta Cultura e rode de novo.");
    process.exit(1);
}

const pastaImg = path.join(raiz, "src", "assets", "imagens");
const arquivoCreditos = path.join(raiz, "CREDITOS-IMAGENS.md");
const PASTAS = ["comidas", "povos", "mapa"];
const EXTENSOES = ["svg","jpg", "jpeg", "png", "webp", "avif"];

const povos = {
    indigenas: "Povo indígena brasileiro aldeia",
    portugueses: "Caravela portuguesa",
    africanos: "Baiana de acarajé Salvador",
    "migrantes-nordestinos": "Retirantes sertão nordestino",
    holandeses: "Forte das Cinco Pontas Recife",
    bandeirantes: "Monumento às Bandeiras São Paulo",
    candangos: "Construção de Brasília 1958",
    imigrantes: "Imigrantes italianos Brasil",
    tropeiros: "Tropeiros mulas tropeirismo",
    europeus: "Oktoberfest Blumenau",
};

const mapa = {
    floresta: "Floresta Amazônica", arara: "Arara-azul", tambaqui: "Tambaqui peixe",
    acai: "Açaizeiro palmeira", jambu: "Jambu Acmella oleracea",
    mandacaru: "Mandacaru cacto", coco: "Coco verde", praia: "Praia de Porto de Galinhas",
    jangada: "Jangada Fortaleza", coqueiro: "Coqueiral Nordeste",
    onca: "Onça-pintada Pantanal", gado: "Gado Pantanal", soja: "Plantação de soja",
    milho: "Espiga de milho",
    serra: "Serra da Mantiqueira", industria: "Indústria São Paulo",
    cafe: "Cafezal Minas Gerais", "sao-paulo": "Avenida Paulista",
    uva: "Uvas Vale dos Vinhedos", araucaria: "Araucária", chimarrao: "Chimarrão",
};

/* ---------- Texto e pontuação ---------- */

const PARADAS = new Set(["de", "da", "do", "das", "dos", "com", "e", "a", "o", "as", "os", "à", "ao", "no", "na", "em", "para", "ou", "um", "uma"]);
export const norm = (t = "") => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const semTags = (t = "") => t.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

// Palavras que importam no nome do prato (sem "de", "com"...), sem acento.
export function palavrasDe(texto) {
    return texto.toLowerCase().split(/[^\p{L}]+/u)
        .filter((w) => w.length > 2 && !PARADAS.has(w)).map(norm);
}

const FOME = /prato|culin|comida|doce|bolo|sopa|bebida|aliment|receita|\bpao\b|massa|peixe|carne|sobremesa|iguaria|guisado|ensopado|caldo|salgado|ingrediente|tempero|fruto|farinha|mingau|torta|biscoito|queijo|churrasco|refeic|bolinho|cozid|assad|frit/;
const PESSOAS = /\b(man|woman|men|women|people|person|homem|homens|mulher|mulheres|pessoa|pessoas|retrato|portrait|selfie|chef|cozinheiro|cozinheira|aluno|alunos|student|students|workshop|oficina|curso|evento|event|palestra|team|equipe)\b/;

// Dá nota a uma foto do Commons: quanto o nome combina com a busca, se é de comida, e tira pontos se for de gente.
export function pontuar(pagina, palavras) {
    const m = pagina.imageinfo?.[0]?.extmetadata ?? {};
    const titulo = norm(pagina.title.replace(/^File:/, "").replace(/\.\w+$/, ""));
    const texto = norm(`${semTags(m.ImageDescription?.value)} ${semTags(m.Categories?.value).replace(/\|/g, " ")}`);
    let pontos = 0, acertos = 0;
    for (const w of palavras) {
        if (titulo.includes(w)) { pontos += 3; acertos++; }
        else if (texto.includes(w)) { pontos += 1; acertos++; }
    }
    const tudo = `${titulo} ${texto}`;
    if (/comida|food|cuisine|culinar|prato|dish|receita|recipe|dessert|sobremesa/.test(tudo)) pontos += 2;
    if (PESSOAS.test(tudo)) pontos -= 6;
    return { pontos, acertos };
}

/* ---------- Rede ---------- */

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
const cabecalho = { "User-Agent": "CulturaBrasil/1.0 (projeto escolar sobre culinária brasileira)" };

async function pedir(url) {
    for (let i = 1; i <= 4; i++) {
        const r = await fetch(url, { headers: cabecalho });
        if (r.status === 429 || r.status >= 500) { await esperar(2500 * i); continue; }
        if (!r.ok) throw new Error(`erro ${r.status}`);
        return r;
    }
    throw new Error("o site demorou a responder");
}

async function paginasWiki(extra) {
    const api = new URL("https://pt.wikipedia.org/w/api.php");
    api.search = new URLSearchParams({
        action: "query", format: "json", redirects: "1", prop: "pageimages|description",
        piprop: "thumbnail|name", pithumbsize: "900", ...extra,
    });
    const dados = await (await pedir(api)).json();
    return Object.values(dados.query?.pages ?? {}).sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
}

const mesmoArquivo = (a, b) => !!a && !!b && a.replace(/^File:/, "").replace(/ /g, "_") === b.replace(/^File:/, "").replace(/ /g, "_");

// 1) Imagem principal do artigo da Wikipédia (a mais confiável).
export async function daWikipedia(item, evitar) {
    const palavras = palavrasDe(item.busca);
    const exigirComida = item.pasta === "comidas";
    const lista = [
        ...(await paginasWiki({ titles: item.busca })),
        ...(await paginasWiki({ generator: "search", gsrnamespace: "0", gsrsearch: item.busca, gsrlimit: "5" })),
    ];
    const p = lista.find((x) => {
        if (!x || x.missing !== undefined || !x.thumbnail || !x.pageimage) return false;
        if (!/\.jpe?g$/i.test(x.pageimage) || mesmoArquivo(x.pageimage, evitar)) return false;
        if (exigirComida && !FOME.test(norm(x.description ?? ""))) return false;
        const t = norm(x.title);
        return palavras.some((w) => t.includes(w));
    });
    return p ? { origem: `Wikipédia: ${p.title}`, arquivo: p.pageimage, url: p.thumbnail.source } : null;
}

// 2) Melhor foto do Commons, só se combinar bem com o nome.
export async function daCommons(item, evitar) {
    const palavras = palavrasDe(item.busca);
    const consultas = item.pasta === "comidas" ? [item.busca, `${item.busca} comida`] : [item.busca];
    const vistas = new Map();
    for (const q of consultas) {
        const api = new URL("https://commons.wikimedia.org/w/api.php");
        api.search = new URLSearchParams({
            action: "query", format: "json", generator: "search", gsrnamespace: "6",
            gsrsearch: `${q} filetype:bitmap`, gsrlimit: "20",
            prop: "imageinfo", iiprop: "url|mime|size|extmetadata", iiurlwidth: "900",
        });
        const dados = await (await pedir(api)).json();
        for (const p of Object.values(dados.query?.pages ?? {})) if (p.imageinfo?.[0]) vistas.set(p.title, p);
        await esperar(300);
    }
    const minimo = Math.max(1, Math.ceil(palavras.length / 2));
    let melhor = null;
    for (const p of vistas.values()) {
        const i = p.imageinfo[0];
        if (i.mime !== "image/jpeg" || i.width < 700 || !i.thumburl || mesmoArquivo(p.title, evitar)) continue;
        const { pontos, acertos } = pontuar(p, palavras);
        if (acertos < minimo || pontos < 3) continue;
        if (!melhor || pontos > melhor.pontos) melhor = { p, i, pontos };
    }
    if (!melhor) return null;
    const m = melhor.i.extmetadata ?? {};
    return {
        origem: `Commons: ${melhor.p.title}`, arquivo: melhor.p.title.replace(/^File:/, ""), url: melhor.i.thumburl,
        credito: `${semTags(m.Artist?.value) || "autor não informado"}, ${semTags(m.LicenseShortName?.value) || "licença não informada"}`,
    };
}

export async function escolher(item, evitar) {
    return (await daWikipedia(item, evitar)) ?? (await daCommons(item, evitar));
}

async function creditoDoArquivo(arquivo) {
    try {
        const api = new URL("https://commons.wikimedia.org/w/api.php");
        api.search = new URLSearchParams({
            action: "query", format: "json", titles: `File:${arquivo}`, prop: "imageinfo", iiprop: "extmetadata",
        });
        const dados = await (await pedir(api)).json();
        const m = Object.values(dados.query?.pages ?? {})[0]?.imageinfo?.[0]?.extmetadata;
        if (m) return `${semTags(m.Artist?.value) || "autor não informado"}, ${semTags(m.LicenseShortName?.value) || "licença não informada"}`;
    } catch { /* cai no texto padrão abaixo */ }
    return "autor e licença: veja a página do arquivo na Wikipédia/Commons";
}

/* ---------- Arquivos e créditos ---------- */

function garantirPasta(dir) {
    // Antes, "comidas", "povos" etc. eram arquivos vazios: apaga (só se vazios) e cria a pasta.
    if (fs.existsSync(dir) && fs.statSync(dir).isFile()) {
        if (fs.statSync(dir).size > 0) throw new Error(`${dir} é um arquivo com conteúdo; renomeie-o`);
        fs.unlinkSync(dir);
    }
    fs.mkdirSync(dir, { recursive: true });
}

const arquivosDe = (pasta, slug) =>
    EXTENSOES.map((e) => path.join(pastaImg, pasta, `${slug}.${e}`)).filter((f) => fs.existsSync(f));

function lerCreditos() {
    const mapaCred = new Map();
    if (!fs.existsSync(arquivoCreditos)) return mapaCred;
    for (const linha of fs.readFileSync(arquivoCreditos, "utf8").split("\n")) {
        const m = linha.match(/^- (\w+)\/([a-z0-9-]+)\.jpg — (.+) — (File:.+)$/);
        if (m) mapaCred.set(`${m[1]}/${m[2]}`, { credito: m[3], titulo: m[4] });
    }
    return mapaCred;
}

function salvarCreditos(mapaCred) {
    const linhas = [...mapaCred.entries()].sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `- ${k}.jpg — ${v.credito} — ${v.titulo}`);
    fs.writeFileSync(arquivoCreditos, `# Créditos das imagens (Wikipédia / Wikimedia Commons)\n\n${linhas.join("\n")}\n`);
}

/* ---------- Programa principal ---------- */

async function main() {
    const args = process.argv.slice(2);
    const refazer = args.includes("refazer");
    const iTrocar = args.indexOf("trocar");
    const trocar = iTrocar >= 0 ? args[iTrocar + 1] : null;
    const filtro = args.find((a) => PASTAS.includes(a));

    const itens = [];
    for (const [slug, busca] of Object.entries(povos)) itens.push({ pasta: "povos", slug, busca });
    for (const [slug, busca] of Object.entries(mapa)) itens.push({ pasta: "mapa", slug, busca });
    for (const arq of ["norte", "nordeste", "centroOeste", "sudeste", "sul"]) {
        const url = pathToFileURL(path.join(raiz, "src", "Data", `${arq}.js`)).href;
        const regiao = (await import(url)).default;
        for (const p of regiao.pratos) itens.push({ pasta: "comidas", slug: p.slug, busca: p.nome });
    }
    if (trocar && !itens.some((i) => i.slug === trocar)) {
        console.log(`Não existe nenhum item chamado "${trocar}". Use o nome do arquivo sem .jpg (ex.: bolo-de-castanha).`);
        process.exit(1);
    }

    console.log(`Projeto encontrado em: ${raiz}\n`);
    const creditos = lerCreditos();
    const conferir = [], semFoto = [];
    let baixadas = 0;

    for (const item of itens) {
        const chave = `${item.pasta}/${item.slug}`;
        if (filtro && filtro !== item.pasta) continue;
        if (trocar && trocar !== item.slug) continue;

        const existentes = arquivosDe(item.pasta, item.slug);
        const automatica = creditos.has(chave);
        if (existentes.length && !(trocar || (refazer && automatica))) continue;

        const evitar = trocar ? creditos.get(chave)?.titulo : null;
        try {
            const achada = await escolher(item, evitar);
            if (!achada) {
                if (existentes.length && automatica && refazer) {
                    existentes.forEach((f) => fs.unlinkSync(f));
                    creditos.delete(chave);
                    console.log(`− ${chave}: nenhuma foto boa; a antiga foi removida (o site mostra a ilustração)`);
                } else {
                    console.log(`− ${chave}: nenhuma foto combinou${existentes.length ? "; mantive a atual" : " (fica a ilustração)"}`);
                }
                if (!existentes.length) semFoto.push(chave);
                await esperar(500);
                continue;
            }
            const foto = Buffer.from(await (await pedir(achada.url)).arrayBuffer());
            garantirPasta(path.join(pastaImg, item.pasta));
            existentes.forEach((f) => fs.unlinkSync(f));
            fs.writeFileSync(path.join(pastaImg, item.pasta, `${item.slug}.jpg`), foto);

            const credito = achada.credito ?? (await creditoDoArquivo(achada.arquivo));
            creditos.set(chave, { credito, titulo: `File:${achada.arquivo}` });
            salvarCreditos(creditos);
            baixadas++;
            console.log(`✓ ${chave}  ←  ${achada.origem}`);
            if (achada.origem.startsWith("Commons")) conferir.push(chave);
        } catch (e) {
            semFoto.push(chave);
            console.log(`✗ ${chave}: ${e.message}`);
        }
        await esperar(700);
    }

    console.log(`\nPronto: ${baixadas} fotos novas.`);
    if (conferir.length) {
        console.log(`\nVeja estas com mais atenção (vieram da busca geral, não de um artigo):\n  ${conferir.join("\n  ")}`);
        console.log("Se alguma estiver errada: npm run imagens -- trocar NOME  (ou apague o arquivo para voltar à ilustração).");
    }
    if (semFoto.length) console.log(`\nSem foto (ficam com a ilustração, ou coloque a sua):\n  ${semFoto.join("\n  ")}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
