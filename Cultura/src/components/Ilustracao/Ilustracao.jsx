// Ilustrações desenhadas no próprio código (SVG), usadas enquanto não existe uma foto.
// Quando você coloca a foto em src/assets/imagens/..., a foto aparece no lugar.
// A cor principal vem da região (variável --cor), então cada região fica com sua cor.

const C = "var(--cor, #2e7d32)";
const COR = (c) => ({ fill: c });

const Defs = () => (
    <defs>
        <linearGradient id="ilu-brilho" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".28" />
            <stop offset="1" stopColor="#000" stopOpacity=".3" />
        </linearGradient>
    </defs>
);

const Moldura = ({ children }) => (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <Defs />
        {children}
    </svg>
);

const Fundo = () => (
    <>
        <rect width="400" height="240" style={COR(C)} />
        <rect width="400" height="240" fill="url(#ilu-brilho)" />
        <circle cx="200" cy="125" r="105" fill="#fff" opacity=".16" />
    </>
);

const Ceu = ({ cor = "#bfe6ff" }) => <rect width="400" height="240" fill={cor} />;
const Sol = ({ x = 320, y = 55, r = 32, cor = "#ffd34e" }) => (
    <>
        <circle cx={x} cy={y} r={r + 14} fill={cor} opacity=".3" />
        <circle cx={x} cy={y} r={r} fill={cor} />
    </>
);
const Arvore = ({ x, y, s = 1, cor = "#3f7d20" }) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
        <rect x="-5" y="-30" width="10" height="34" fill="#6b4423" />
        <circle cx="0" cy="-48" r="26" fill={cor} />
        <circle cx="-16" cy="-34" r="18" fill={cor} />
        <circle cx="16" cy="-34" r="18" fill={cor} />
    </g>
);
const Palmeira = ({ x, y, s = 1 }) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
        <path d="M0 0 Q8 -40 0 -80" stroke="#8a5a2b" strokeWidth="7" fill="none" />
        {[-160, -124, -88, -52, -16, 20].map((a) => (
            <ellipse key={a} cx="24" cy="0" rx="28" ry="6" fill="#2e8b3a" transform={`translate(0 -80) rotate(${a})`} />
        ))}
    </g>
);
const Mar = ({ y = 170, cor = "#3d9bd6" }) => (
    <>
        <rect y={y} width="400" height={240 - y} fill={cor} />
        <path d={`M0 ${y} q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 V${y + 12} H0Z`} fill="#fff" opacity=".35" />
    </>
);
const Chao = ({ y = 185, cor = "#7ab648" }) => <rect y={y} width="400" height={240 - y} fill={cor} />;

/* ---------- Regiões ---------- */
const regioes = {
    norte: () => (
        <>
            <Ceu cor="#cdeedd" /><Sol x={310} y={60} />
            <path d="M0 150 Q80 90 170 140 T400 120 V240 H0Z" fill="#2f6a2a" />
            <rect y="175" width="400" height="65" fill="#4a9fd6" />
            <path d="M0 190 q30 -8 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 V200 H0Z" fill="#fff" opacity=".3" />
            <Arvore x={60} y={160} s={1.3} cor="#2c6e2c" /><Arvore x={130} y={150} s={1} cor="#3f7d20" />
            <Arvore x={340} y={158} s={1.2} cor="#2c6e2c" />
            <path d="M170 205 q40 18 90 0 q-45 -6 -90 0Z" fill="#8a5a2b" /><rect x="212" y="188" width="3" height="16" fill="#5a3a1b" />
        </>
    ),
    nordeste: () => (
        <>
            <Ceu cor="#ffe9b8" /><Sol x={90} y={65} r={38} cor="#ff9f1c" />
            <Mar y={140} /><path d="M0 190 Q120 150 240 185 T400 175 V240 H0Z" fill="#f1cf86" />
            <Palmeira x={310} y={195} s={1.2} /><Palmeira x={350} y={200} s={0.9} />
            <path d="M150 150 L205 150 L205 100Z" fill="#fff" /><path d="M140 158 H215 L205 170 H152Z" fill="#8a5a2b" />
        </>
    ),
    "centro-oeste": () => (
        <>
            <Ceu cor="#cfe9ff" /><Sol x={310} y={55} cor="#ffcf44" />
            <ellipse cx="90" cy="60" rx="45" ry="12" fill="#fff" opacity=".8" /><ellipse cx="140" cy="52" rx="30" ry="10" fill="#fff" opacity=".8" />
            <path d="M0 150 Q100 120 200 150 T400 140 V240 H0Z" fill="#c9b94a" />
            <path d="M0 190 Q120 165 240 190 T400 185 V240 H0Z" fill="#a9a63a" />
            <Palmeira x={90} y={185} s={1.1} /><Palmeira x={300} y={190} s={1.3} />
            <ellipse cx="200" cy="205" rx="50" ry="9" fill="#5aa9e6" opacity=".8" />
        </>
    ),
    sudeste: () => (
        <>
            <Ceu cor="#d6ecff" /><Sol x={80} y={55} />
            <path d="M0 160 L70 90 L130 150 L210 70 L290 150 L350 100 L400 150 V240 H0Z" fill="#5d8a9e" />
            <path d="M0 190 Q100 160 200 190 T400 180 V240 H0Z" fill="#4c8a3c" />
            {[[250, 120, 26, 70], [282, 100, 22, 90], [310, 128, 30, 62], [340, 112, 20, 78]].map(([x, y, w, h]) => (
                <g key={x}><rect x={x} y={y + 40} width={w} height={h} fill="#32485a" /><rect x={x + 5} y={y + 52} width="5" height="6" fill="#ffd34e" /><rect x={x + 14} y={y + 66} width="5" height="6" fill="#ffd34e" /></g>
            ))}
        </>
    ),
    sul: () => (
        <>
            <Ceu cor="#d7ebff" /><Sol x={330} y={50} cor="#ffe27a" />
            <path d="M0 140 Q100 100 200 140 T400 130 V240 H0Z" fill="#6aa84f" />
            <path d="M0 185 Q120 150 240 185 T400 175 V240 H0Z" fill="#3f7d20" />
            {[205, 215, 225, 235].map((y) => <path key={y} d={`M0 ${y} Q120 ${y - 30} 240 ${y} T400 ${y - 8}`} stroke="#9b59b6" strokeWidth="3" fill="none" opacity=".7" />)}
            <rect x="82" y="105" width="8" height="70" fill="#5a3a1b" />
            <path d="M40 105 Q86 70 132 105 Z" fill="#2c6e2c" /><path d="M50 122 Q86 95 122 122 Z" fill="#2c6e2c" />
        </>
    ),
};

/* ---------- Povos ---------- */
const povos = {
    indigenas: () => (<><Ceu cor="#d8f0c8" /><Sol x={320} y={55} /><Chao y={170} cor="#7ab648" /><Palmeira x={60} y={175} s={1.2} /><Palmeira x={350} y={180} s={1} />
        {[140, 250].map((x) => <g key={x}><path d={`M${x} 175 L${x + 40} 105 L${x + 80} 175Z`} fill="#c58b4a" /><path d={`M${x + 28} 175 L${x + 40} 140 L${x + 52} 175Z`} fill="#5a3a1b" /></g>)}</>),
    portugueses: () => (<><Ceu cor="#cfe9ff" /><Sol x={70} y={55} /><Mar y={165} />
        <path d="M110 170 H290 L265 200 H135Z" fill="#8a5a2b" /><rect x="198" y="70" width="5" height="100" fill="#5a3a1b" />
        <path d="M205 78 H270 Q260 125 205 140Z" fill="#fff" /><path d="M195 82 H135 Q145 125 195 140Z" fill="#fff" />
        <path d="M170 98 v22 M159 109 h22" stroke="#c0392b" strokeWidth="5" /></>),
    africanos: () => (<><rect width="400" height="240" fill="#f6b042" /><Sol x={320} y={55} cor="#e8590c" />
        {[[130, 120, 1], [250, 135, 0.85]].map(([x, y, s]) => <g key={x} transform={`translate(${x} ${y}) scale(${s})`}><rect x="-50" y="0" width="100" height="90" fill="#8a3b12" /><ellipse cx="0" cy="0" rx="50" ry="16" fill="#f3d9a4" /><ellipse cx="0" cy="90" rx="50" ry="12" fill="#6b2d0e" />
            <path d="M-50 25 L0 60 L50 25 M-50 60 L0 90 L50 60" stroke="#ffd34e" strokeWidth="5" fill="none" /></g>)}
        <path d="M0 215 H400" stroke="#8a3b12" strokeWidth="6" strokeDasharray="14 8" /></>),
    "migrantes-nordestinos": () => (<><Ceu cor="#ffe4b5" /><Sol x={310} y={60} r={40} cor="#ff9f1c" /><Chao y={175} cor="#d9a65a" />
        {[[90, 180, 1.2], [200, 185, 0.9], [320, 182, 1.1]].map(([x, y, s]) => <g key={x} transform={`translate(${x} ${y}) scale(${s})`} fill="#3f9a4a"><rect x="-9" y="-80" width="18" height="80" rx="9" /><rect x="-32" y="-58" width="12" height="36" rx="6" /><rect x="-32" y="-30" width="30" height="10" rx="5" /><rect x="20" y="-68" width="12" height="40" rx="6" /><rect x="2" y="-40" width="30" height="10" rx="5" /></g>)}</>),
    holandeses: () => (<><Ceu cor="#d6ecff" /><Chao y={185} cor="#6fbf5a" />
        <path d="M165 185 L185 105 H215 L235 185Z" fill="#b5563a" /><path d="M180 105 H220 L200 85Z" fill="#6b3b2a" />
        <g transform="translate(200 105)" stroke="#fff" strokeWidth="7"><path d="M0 0 L-60 -50 M0 0 L60 50 M0 0 L50 -60 M0 0 L-50 60" /></g>
        {[[70, 0], [310, 0], [340, 0]].map(([x]) => <g key={x}><rect x={x - 2} y="195" width="4" height="28" fill="#2e8b3a" /><path d={`M${x - 12} 190 Q${x} 215 ${x + 12} 190 Q${x} 170 ${x - 12} 190Z`} fill="#e84393" /></g>)}</>),
    bandeirantes: () => (<><Ceu cor="#ffe9c7" /><Sol x={80} y={60} cor="#ffb84d" /><path d="M0 170 L90 100 L170 160 L260 90 L400 170 V240 H0Z" fill="#8a6a45" />
        <path d="M0 200 Q200 150 400 200 V240 H0Z" fill="#6b4a2b" /><path d="M170 240 Q200 200 215 175" stroke="#e6c48c" strokeWidth="12" fill="none" />
        <rect x="250" y="70" width="5" height="110" fill="#4a2f17" /><path d="M255 74 H330 L312 96 L330 118 H255Z" fill="#c0392b" /></>),
    candangos: () => (<><Ceu cor="#9fd3ff" /><Sol x={70} y={55} cor="#fff3b0" /><Chao y={190} cor="#d8c58a" />
        <path d="M120 190 A60 40 0 0 1 240 190Z" fill="#f3f3f3" /><path d="M255 190 A40 36 0 0 0 335 190Z" fill="#e7e7e7" transform="translate(0 -12)" />
        <rect x="170" y="80" width="14" height="110" fill="#fafafa" /><rect x="190" y="80" width="14" height="110" fill="#e4e4e4" /></>),
    imigrantes: () => (<><Ceu cor="#cfe9ff" /><Sol x={330} y={55} /><Mar y={170} />
        <path d="M80 175 H320 L295 205 H105Z" fill="#33414e" /><rect x="140" y="130" width="130" height="45" fill="#fff" />
        {[155, 180, 205, 230].map((x) => <rect key={x} x={x} y="142" width="12" height="12" fill="#5aa9e6" />)}
        <rect x="170" y="95" width="22" height="35" fill="#c0392b" /><rect x="210" y="95" width="22" height="35" fill="#c0392b" /></>),
    tropeiros: () => (<><Ceu cor="#d9ecff" /><Sol x={330} y={55} /><path d="M0 160 Q100 125 200 160 T400 150 V240 H0Z" fill="#8fc063" /><path d="M0 200 Q120 175 240 200 T400 195 V240 H0Z" fill="#6aa84f" />
        <ellipse cx="200" cy="140" rx="95" ry="18" fill="#7a4b21" /><path d="M150 140 Q150 85 200 85 Q250 85 250 140Z" fill="#8a5a2b" /><rect x="150" y="124" width="100" height="10" fill="#4a2f17" /></>),
    europeus: () => (<><Ceu cor="#d6ecff" /><Chao y={185} cor="#6aa84f" />
        <rect x="130" y="115" width="140" height="75" fill="#f5e6c8" /><path d="M115 118 L200 60 L285 118Z" fill="#a84a32" />
        <path d="M130 115 L270 190 M270 115 L130 190 M200 115 V190" stroke="#6b4423" strokeWidth="4" /><rect x="185" y="150" width="30" height="40" fill="#6b4423" />
        <path d="M60 190 L85 120 L110 190Z" fill="#2c6e2c" /><path d="M300 190 L325 120 L350 190Z" fill="#2c6e2c" /></>),
    asiaticos: () => (<><Ceu cor="#ffe3d0" /><Sol x={200} y={95} r={45} cor="#e63946" /><Chao y={180} cor="#9bd36a" />
        {[195, 210, 225].map((y) => <path key={y} d={`M0 ${y} Q100 ${y - 10} 200 ${y} T400 ${y}`} stroke="#5aa03a" strokeWidth="3" fill="none" />)}
        <rect x="140" y="60" width="12" height="125" fill="#c0392b" /><rect x="248" y="60" width="12" height="125" fill="#c0392b" /><rect x="125" y="52" width="150" height="14" rx="4" fill="#c0392b" /><rect x="138" y="82" width="124" height="9" fill="#c0392b" /></>),
};

/* ---------- Pratos ---------- */
const pratos = {
    panela: () => (<><Fundo /><ellipse cx="200" cy="205" rx="100" ry="10" fill="#000" opacity=".22" />
        <path d="M115 110 H285 V160 A85 45 0 0 1 115 160Z" fill="#3b2a20" /><rect x="98" y="120" width="22" height="11" rx="5" fill="#2a1d15" /><rect x="280" y="120" width="22" height="11" rx="5" fill="#2a1d15" />
        <ellipse cx="200" cy="110" rx="85" ry="16" fill="#2a1d15" /><ellipse cx="200" cy="110" rx="76" ry="11" fill="#e67e22" />
        {[160, 190, 225, 245].map((x) => <ellipse key={x} cx={x} cy={110 + (x % 3)} rx="9" ry="3" fill="#2e8b3a" />)}
        <path d="M170 90 q-12 -15 0 -30 q12 -15 0 -30 M205 90 q-12 -15 0 -30 q12 -15 0 -30 M240 90 q-12 -15 0 -30 q12 -15 0 -30" stroke="#fff" strokeWidth="5" fill="none" opacity=".6" strokeLinecap="round" /></>),
    peixe: () => (<><Fundo /><ellipse cx="200" cy="205" rx="110" ry="9" fill="#000" opacity=".2" />
        <path d="M268 125 L335 82 L335 168Z" fill="#e0a02a" /><ellipse cx="185" cy="125" rx="95" ry="48" fill="#f4c542" /><path d="M150 80 Q190 55 230 82Z" fill="#e0a02a" />
        <path d="M105 105 Q125 125 105 148" stroke="#c98a1c" strokeWidth="5" fill="none" /><circle cx="118" cy="112" r="8" fill="#fff" /><circle cx="116" cy="112" r="4" fill="#222" />
        {[160, 190, 220].map((x) => <path key={x} d={`M${x} 105 q12 20 0 40`} stroke="#d99a22" strokeWidth="4" fill="none" />)}
        <circle cx="318" cy="195" r="20" fill="#ffe14d" /><circle cx="318" cy="195" r="12" fill="#fff3a0" /></>),
    doce: () => (<><Fundo /><ellipse cx="200" cy="200" rx="115" ry="12" fill="#fff" opacity=".75" />
        <rect x="110" y="152" width="180" height="40" rx="6" fill="#8a5a2b" /><rect x="110" y="138" width="180" height="14" fill="#fff4e0" /><rect x="110" y="104" width="180" height="34" rx="6" fill="#a46a35" />
        <path d="M104 100 H296 V110 Q285 128 270 110 Q250 130 235 110 Q215 128 200 110 Q180 130 165 110 Q145 128 130 110 Q118 124 104 110Z" fill="#f08aa8" />
        <circle cx="200" cy="90" r="13" fill="#d62828" /><path d="M200 78 q6 -16 18 -18" stroke="#2e8b3a" strokeWidth="4" fill="none" /></>),
    salgado: () => (<><Fundo /><ellipse cx="200" cy="200" rx="120" ry="12" fill="#fff" opacity=".75" />
        <path d="M105 185 A95 90 0 0 1 295 185Z" fill="#e0a455" /><path d="M120 185 A80 75 0 0 1 280 185Z" fill="#edc07a" />
        {Array.from({ length: 12 }).map((_, i) => <circle key={i} cx={112 + i * 16} cy="187" r="6" fill="#c98a3c" />)}
        {[[170, 140], [215, 130], [245, 155], [190, 160]].map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx="5" ry="2.5" fill="#fff4d6" />)}
        <path d="M230 100 q8 -14 20 -10" stroke="#2e8b3a" strokeWidth="5" fill="none" /></>),
    carne: () => (<><Fundo /><rect x="70" y="118" width="260" height="7" rx="3" fill="#d9d9d9" />
        {[["#8b3a1a", 100], ["#c0392b", 140], ["#6b2d12", 180], ["#3f9a4a", 220], ["#8b3a1a", 255]].map(([c, x]) => <rect key={x} x={x} y="95" width="36" height="52" rx="14" fill={c} />)}
        <path d="M80 210 Q95 170 110 210 Q125 160 145 210 Q165 165 185 210 Q205 160 225 210 Q245 170 265 210 Q280 175 300 210Z" fill="#ff9f1c" /><path d="M100 210 Q112 185 125 210 Q145 180 160 210 Q185 180 200 210Z" fill="#ffd34e" /></>),
    cuia: () => (<><Fundo /><ellipse cx="200" cy="205" rx="85" ry="9" fill="#000" opacity=".22" />
        <path d="M135 105 H265 Q275 195 200 200 Q125 195 135 105Z" fill="#7a4b21" /><path d="M150 140 H250" stroke="#c9953f" strokeWidth="5" />
        <ellipse cx="200" cy="105" rx="65" ry="14" fill="#4a2f17" /><ellipse cx="200" cy="105" rx="56" ry="9" fill="#6bbf59" />
        <path d="M215 105 L262 40" stroke="#d9d9d9" strokeWidth="9" strokeLinecap="round" /><ellipse cx="266" cy="36" rx="9" ry="5" fill="#bdbdbd" transform="rotate(-48 266 36)" />
        <path d="M100 200 q-5 -35 25 -45 q10 25 -25 45Z" fill="#2e8b3a" /><path d="M300 200 q5 -35 -25 -45 q-10 25 25 45Z" fill="#2e8b3a" /></>),
    prato: () => (<><Fundo /><ellipse cx="200" cy="200" rx="118" ry="14" fill="#000" opacity=".2" />
        <circle cx="200" cy="120" r="88" fill="#fff" /><circle cx="200" cy="120" r="70" fill="#f1f1f1" />
        <ellipse cx="170" cy="115" rx="38" ry="28" fill="#fff8e1" stroke="#e8dfc6" strokeWidth="3" /><ellipse cx="232" cy="108" rx="30" ry="24" fill="#6b3b1f" />
        {[[215, 150], [240, 150], [200, 150], [225, 138]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="6" fill="#f4c542" />)}
        <circle cx="160" cy="150" r="9" fill="#d62828" /><circle cx="180" cy="158" r="8" fill="#e85d3a" /><path d="M250 80 q10 -18 24 -12 q-6 16 -24 12Z" fill="#2e8b3a" /></>),
};

// Descobre o tipo de ilustração de um prato pelo nome (slug) dele.
function tipoPrato(slug = "") {
    if (/chimarrao|terere|cafe/.test(slug)) return "cuia";
    if (/salgada|pao|broa|chipa|empadao|torta|pizza|sanduiche|acaraje|tapioca|beiju|cuscuz|bolinho|pierogi|caboquinho|polenta-frita|queijo/.test(slug)) return "salgado";
    if (/churrasco|carne|costelinha|linguica|frango|galeto|pato|marreco|eisbein|file|quirera/.test(slug)) return "carne";
    if (/bolo|doce|cocada|brigadeiro|mousse|strudel|sagu|cuca|moleque|pacoca|curau|pamonha|chimia|romeu|mingau/.test(slug)) return "doce";
    if (/peixe|tambaqui|pirarucu|tainha|pacu|ostras|siri|camarao|piranha|pintado|piracui|tucunare|caldeirada/.test(slug)) return "peixe";
    if (/feijoada|moqueca|vatapa|caruru|bobo|caldo|sopa|tacaca|barreado|carreteiro|galinhada|mungunza|baiao|feijao|cuxa|chambari|manicoba|pirao|maria-isabel|arroz-com|polenta-com|quiabo/.test(slug)) return "panela";
    return "prato";
}

// Devolve a ilustração para a pasta/nome, ou null se não houver.
export default function ilustracao(pasta, nome) {
    let Cena = null;
    if (pasta === "regioes") Cena = regioes[nome];
    else if (pasta === "povos") Cena = povos[nome];
    else if (pasta === "comidas") Cena = pratos[tipoPrato(nome)];
    return Cena ? <Moldura><Cena /></Moldura> : null;
}
