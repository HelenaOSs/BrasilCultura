const centroOeste = {
    id: "centro-oeste",
    nome: "Centro-Oeste",
    titulo: "Região Centro-Oeste",
    lema: "O sabor do cerrado e do Pantanal",
    cor: "#BFC43A",
    estados: ["Distrito Federal", "Goiás", "Mato Grosso", "Mato Grosso do Sul"],
    resumo:
        "Entre o cerrado, o Pantanal e as fazendas, o Centro-Oeste mistura frutos nativos, a vida no campo e tradições de gente que veio de todo o país.",

    historia: [
        "Antes da chegada dos europeus, a região era território de povos como os Bororo, os Xavante, os Karajá e os Kayapó, que viviam do cerrado, do Pantanal e dos rios. Eles colhiam frutos como o pequi e cultivavam milho e mandioca.",
        "A ocupação colonial veio com as bandeiras paulistas, expedições que, a partir do século XVII, entraram no interior em busca de ouro e de indígenas para escravizar. A descoberta de ouro em Cuiabá, em 1719, e em Goiás, nos anos 1720, atraiu colonos e africanos escravizados.",
        "No século XX, a pecuária e a agricultura se expandiram, e a construção de Brasília, inaugurada em 1960, atraiu trabalhadores de todo o país, os candangos. Por isso a culinária do Centro-Oeste mistura o cerrado, o Pantanal e tradições de Minas, do Nordeste e do Paraguai.",
    ],

    povos: [
        {
            nome: "Povos indígenas",
            descricao:
                "Bororo, Xavante, Karajá, Kayapó e outros. Ensinaram a usar o pequi, o milho e a mandioca e a pescar nos rios do Pantanal.",
        },
        {
            nome: "Bandeirantes e colonos",
            descricao:
                "Paulistas e portugueses que chegaram atrás de ouro e levaram para o interior o gosto por milho, feijão, carne de porco e carne-seca.",
        },
        {
            nome: "Africanos escravizados",
            descricao:
                "Trabalharam nas minas de ouro de Cuiabá e de Goiás e contribuíram para a formação da cultura e da culinária da região.",
        },
        {
            nome: "Candangos e migrantes",
            descricao:
                "Trabalhadores de todo o Brasil que construíram Brasília e trouxeram receitas de Minas, do Nordeste e de outras regiões.",
        },
    ],

    comidas: [
        {
            slug: "arroz-com-pequi",
            nome: "Arroz com pequi",
            origem: "Indígena",
            descricao:
                "Arroz cozido com pequi, fruto do cerrado de cheiro forte e sabor marcante. É o prato mais famoso de Goiás.",
        },
        {
            slug: "empadao-goiano",
            nome: "Empadão goiano",
            origem: "Portuguesa e goiana",
            descricao:
                "Torta salgada com massa amanteigada, recheada com frango, linguiça, queijo e guariroba, um palmito amargo típico da região.",
        },
        {
            slug: "pamonha",
            nome: "Pamonha",
            origem: "Indígena",
            descricao:
                "Massa de milho verde cozida na própria palha. Pode ser doce ou salgada e é presença certa nas festas de roça.",
        },
        {
            slug: "maria-isabel",
            nome: "Maria Isabel",
            origem: "Tropeira",
            descricao:
                "Arroz cozido com carne-seca, prato prático dos peões e tropeiros, comum no Pantanal e no Mato Grosso do Sul.",
        },
    ],

    receitas: [
        {
            slug: "arroz-com-pequi",
            nome: "Arroz com pequi",
            subtitulo: "O sabor do cerrado goiano",
            descricao:
                "O pequi dá cor, cheiro e gosto únicos ao arroz. É um prato simples, mas que exige um cuidado: o caroço do pequi tem espinhos finos.",
            porcoes: "4 porções",
            tempo: "50 min",
            dificuldade: "Média",
            ingredientes: [
                "2 xícaras de arroz",
                "6 a 8 pequis inteiros, bem lavados",
                "1 cebola picada",
                "3 dentes de alho",
                "2 colheres (sopa) de óleo",
                "4 xícaras de água quente",
                "Sal e pimenta a gosto",
                "Cheiro-verde picado",
            ],
            preparo: [
                "Cozinhe os pequis em água por cerca de 15 minutos, só para amaciar a polpa. Reserve a água do cozimento.",
                "Em uma panela, refogue a cebola e o alho no óleo e junte o arroz, mexendo por 2 minutos.",
                "Acrescente os pequis e a água quente, acerte o sal e cozinhe com a panela semitampada, em fogo baixo, por cerca de 20 minutos.",
                "Finalize com o cheiro-verde e a pimenta.",
            ],
            nota: "Nunca morda o caroço do pequi: ele é cheio de espinhos muito finos. Raspe a polpa com os dentes, de leve.",
        },
        {
            slug: "pamonha",
            nome: "Pamonha doce",
            subtitulo: "O milho verde das festas de roça",
            descricao:
                "Massa cremosa de milho verde cozida dentro da palha. Sirva quente, na hora, com café.",
            porcoes: "10 pamonhas",
            tempo: "1h30",
            dificuldade: "Média",
            ingredientes: [
                "10 espigas de milho verde com palha",
                "1 xícara de leite",
                "1 xícara de açúcar",
                "2 colheres (sopa) de manteiga",
                "1 pitada de sal",
                "Barbante ou tiras de palha para amarrar",
            ],
            preparo: [
                "Retire as palhas inteiras, lave e reserve. Corte os grãos das espigas.",
                "Bata os grãos no liquidificador com o leite, o açúcar, a manteiga e o sal até formar uma massa homogênea.",
                "Monte cada pamonha com duas palhas sobrepostas, coloque 3 colheres de massa no centro, dobre e amarre as pontas.",
                "Cozinhe as pamonhas em água fervente, cobertas, por 40 a 50 minutos.",
                "Deixe amornar um pouco e sirva ainda na palha.",
            ],
        },
    ],
};

export default centroOeste;
