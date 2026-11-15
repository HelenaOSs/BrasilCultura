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
        "Com o fim do ouro, a pecuária virou a principal atividade, e a vida nas fazendas e nas comitivas de peões criou pratos práticos, como o arroz com carne-seca e a galinhada. Já o Pantanal, a maior planície alagável do planeta, deu à região uma culinária de pesca, com peixes como o pintado e o pacu.",
        "No século XX, a construção de Brasília, inaugurada em 1960, atraiu trabalhadores de todo o país, os candangos, e a agricultura se expandiu pelo cerrado.",
        "No sul de Mato Grosso do Sul, a fronteira com o Paraguai trouxe a sopa paraguaia e o tereré, um mate gelado de origem guarani. Por isso a culinária do Centro-Oeste mistura o cerrado, o Pantanal e tradições de Minas, do Nordeste e dos países vizinhos.",
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

    pratos: [
        {
            slug: "arroz-com-pequi",
            nome: "Arroz com pequi",
            origem: "Indígena",
            descricao:
                "Arroz cozido com pequi, fruto do cerrado de cheiro forte e sabor marcante. É o prato mais famoso de Goiás.",
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
            slug: "empadao-goiano",
            nome: "Empadão goiano",
            origem: "Portuguesa e goiana",
            descricao:
                "Torta salgada de massa amanteigada, recheada com frango, linguiça, queijo e guariroba, um palmito amargo típico da região.",
            porcoes: "10 fatias",
            tempo: "2h",
            dificuldade: "Média",
            ingredientes: [
                "Massa: 4 xícaras de farinha de trigo, 250 g de manteiga gelada, 2 ovos e 1 colher (chá) de sal",
                "500 g de peito de frango cozido e desfiado",
                "200 g de linguiça calabresa em cubos",
                "1 cebola picada e 2 tomates sem sementes picados",
                "200 g de queijo minas ou muçarela em cubos",
                "1 vidro de palmito picado (no lugar da guariroba)",
                "Cheiro-verde a gosto",
                "1 gema para pincelar",
            ],
            preparo: [
                "Misture a farinha, o sal e a manteiga com as pontas dos dedos até formar uma farofa. Junte os ovos e amasse até a massa soltar das mãos. Deixe na geladeira por 30 minutos.",
                "Refogue a cebola e a linguiça, junte o frango, os tomates e o palmito e cozinhe por 10 minutos. Acrescente o cheiro-verde e deixe esfriar.",
                "Aqueça o forno a 200 °C. Forre uma forma com dois terços da massa, espalhando bem pelas laterais.",
                "Coloque o recheio, espalhe o queijo e cubra com o resto da massa, apertando as bordas.",
                "Pincele a gema e asse por cerca de 40 minutos, até dourar.",
            ],
            nota: "Em Goiás, o palmito original é a guariroba, que dá um leve amargor ao recheio. O palmito comum é uma opção mais fácil de achar.",
        },
        {
            slug: "pamonha",
            nome: "Pamonha doce",
            origem: "Indígena",
            descricao:
                "Massa de milho verde cozida na própria palha. Pode ser doce ou salgada e é presença certa nas festas de roça.",
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
        {
            slug: "maria-isabel",
            nome: "Maria Isabel",
            origem: "Tropeira e pantaneira",
            descricao:
                "Arroz cozido com carne-seca, prato prático dos peões e das comitivas, comum no Pantanal e no Mato Grosso do Sul.",
            porcoes: "6 porções",
            tempo: "1h",
            dificuldade: "Fácil",
            ingredientes: [
                "500 g de carne-seca",
                "2 xícaras de arroz",
                "1 cebola picada",
                "3 dentes de alho",
                "1 tomate picado",
                "2 colheres (sopa) de óleo",
                "4 xícaras de água quente",
                "Cheiro-verde e pimenta a gosto",
            ],
            preparo: [
                "Dessalgue a carne-seca em água por 12 horas, trocando a água algumas vezes. Cozinhe por 40 minutos e desfie.",
                "Refogue a cebola e o alho no óleo, junte a carne e o tomate e mexa por 5 minutos.",
                "Acrescente o arroz, refogue por 2 minutos e adicione a água quente.",
                "Cozinhe em fogo baixo, com a panela semitampada, por cerca de 20 minutos, até o arroz ficar macio.",
                "Finalize com cheiro-verde e pimenta.",
            ],
        },
        {
            slug: "galinhada",
            nome: "Galinhada",
            origem: "Caipira",
            descricao:
                "Frango cozido com arroz e açafrão-da-terra, que deixa tudo amarelinho. É prato de domingo e de festa de igreja em Goiás.",
            porcoes: "6 porções",
            tempo: "1h",
            dificuldade: "Fácil",
            ingredientes: [
                "1 kg de frango em pedaços",
                "Suco de 1 limão",
                "4 dentes de alho",
                "1 colher (sopa) de açafrão-da-terra (cúrcuma)",
                "1 cebola picada",
                "1 tomate picado",
                "2 xícaras de arroz",
                "4 xícaras de água quente",
                "Sal, pimenta e cheiro-verde a gosto",
            ],
            preparo: [
                "Tempere o frango com o limão, metade do alho, o açafrão e o sal e deixe descansar por 30 minutos.",
                "Em uma panela, doure o frango em um pouco de óleo, retire e reserve.",
                "Na mesma panela, refogue a cebola, o resto do alho e o tomate. Volte com o frango, adicione 1 xícara de água e cozinhe por 15 minutos.",
                "Junte o arroz e o resto da água quente, acerte o sal e cozinhe em fogo baixo por 20 minutos, até o arroz ficar macio.",
                "Finalize com cheiro-verde e pimenta.",
            ],
        },
        {
            slug: "sopa-paraguaia",
            nome: "Sopa paraguaia",
            origem: "Paraguaia",
            descricao:
                "Apesar do nome, não é sopa: é um bolo salgado de milho, queijo e cebola, muito comum em Mato Grosso do Sul, na fronteira com o Paraguai.",
            porcoes: "10 fatias",
            tempo: "1h15",
            dificuldade: "Fácil",
            ingredientes: [
                "1 1/2 xícara de fubá",
                "1 xícara de leite",
                "1/2 xícara de óleo",
                "3 ovos",
                "2 cebolas grandes picadas",
                "250 g de queijo fresco ou muçarela em cubos",
                "1 colher (sopa) de fermento em pó",
                "1 colher (chá) de sal",
            ],
            preparo: [
                "Aqueça o forno a 180 °C e unte uma forma.",
                "Refogue a cebola em um pouco de óleo até ficar transparente e deixe esfriar.",
                "Bata os ovos com o leite e o óleo, junte o fubá, o sal e o fermento e misture bem.",
                "Acrescente a cebola e o queijo e despeje na forma.",
                "Asse por cerca de 40 minutos, até dourar. Sirva morna, em quadrados.",
            ],
        },
    ],
};

export default centroOeste;
