const sudeste = {
    id: "sudeste",
    nome: "Sudeste",
    titulo: "Região Sudeste",
    lema: "Do ouro de Minas ao café de São Paulo",
    cor: "#3F7FC1",
    estados: ["Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"],
    resumo:
        "Região de grandes cidades, de minas de ouro e de fazendas de café, o Sudeste reúne tradições de povos e imigrantes que chegaram de todos os lados.",

    historia: [
        "No litoral, viviam povos Tupi, como os Tupiniquim e os Tamoio, quando a colonização começou. A vila de São Vicente foi fundada em 1532, e São Paulo, em 1554, por padres jesuítas.",
        "A descoberta de ouro em Minas Gerais, nos anos 1690, mudou o país: milhares de pessoas foram para a região, e muitos africanos foram escravizados nas minas. A cozinha mineira nasceu desse encontro, com feijão, milho, couve, queijo e carne de porco.",
        "Em 1763, o Rio de Janeiro virou capital da colônia e, em 1808, recebeu a corte portuguesa. No século XIX, o café enriqueceu o Vale do Paraíba e o interior paulista e atraiu imigrantes italianos, portugueses, espanhóis e, a partir de 1908, japoneses.",
    ],

    povos: [
        {
            nome: "Povos indígenas",
            descricao:
                "Tupiniquim, Tamoio e outros povos Tupi. Deixaram a mandioca, o milho e o costume de assar e cozinhar em panelas de barro.",
        },
        {
            nome: "Portugueses",
            descricao:
                "Fundaram as primeiras vilas e trouxeram o trigo, os embutidos, os cozidos e as técnicas de conservar carnes.",
        },
        {
            nome: "Africanos escravizados",
            descricao:
                "Trabalharam nas minas, nas fazendas de café e nas cidades, e ajudaram a criar a culinária brasileira, com pratos como a feijoada.",
        },
        {
            nome: "Imigrantes europeus e asiáticos",
            descricao:
                "Italianos, espanhóis, portugueses, japoneses e outros povos, que trouxeram massas, pães, doces, hortaliças e novos modos de cozinhar.",
        },
    ],

    comidas: [
        {
            slug: "feijoada",
            nome: "Feijoada",
            origem: "Portuguesa e afro-brasileira",
            descricao:
                "Feijão-preto cozido com carnes de porco e carne-seca, servido com arroz, couve, farofa e laranja. É um dos pratos mais tradicionais do país.",
        },
        {
            slug: "pao-de-queijo",
            nome: "Pão de queijo",
            origem: "Mineira",
            descricao:
                "Bolinho de polvilho e queijo, crocante por fora e macio por dentro. É um símbolo de Minas Gerais.",
        },
        {
            slug: "virado-a-paulista",
            nome: "Virado à paulista",
            origem: "Tropeira e bandeirante",
            descricao:
                "Tutu de feijão com arroz, bisteca de porco, couve, ovo frito e banana frita. É prato de segunda-feira nos restaurantes de São Paulo.",
        },
        {
            slug: "moqueca-capixaba",
            nome: "Moqueca capixaba",
            origem: "Indígena",
            descricao:
                "Peixe cozido em panela de barro com tomate, cebola, coentro e urucum, sem dendê nem leite de coco. É o orgulho do Espírito Santo.",
        },
    ],

    receitas: [
        {
            slug: "feijoada",
            nome: "Feijoada",
            subtitulo: "Um clássico brasileiro",
            descricao:
                "Símbolo da nossa cultura, a feijoada une o feijão, nativo das Américas, à tradição portuguesa dos cozidos e à criatividade da culinária afro-brasileira.",
            porcoes: "6 porções",
            tempo: "2h",
            dificuldade: "Média",
            ingredientes: [
                "500 g de feijão-preto",
                "300 g de carne-seca",
                "200 g de linguiça calabresa",
                "200 g de paio",
                "300 g de costelinha de porco salgada",
                "150 g de bacon em cubos",
                "1 cebola picada",
                "4 dentes de alho",
                "2 folhas de louro",
                "Laranja, couve refogada, arroz e farofa para servir",
            ],
            preparo: [
                "Deixe o feijão de molho por 8 horas. Dessalgue a carne-seca e a costelinha em água, trocando a água algumas vezes, por cerca de 12 horas.",
                "Cozinhe as carnes defumadas e salgadas em panela com água por 30 minutos e escorra.",
                "Cozinhe o feijão com o louro na panela de pressão por cerca de 40 minutos.",
                "Frite o bacon, a cebola e o alho, junte a linguiça e o paio em rodelas e depois acrescente tudo ao feijão.",
                "Adicione a carne-seca e a costelinha e cozinhe em fogo baixo por mais 30 minutos, até o caldo engrossar.",
                "Sirva com arroz, couve, farofa e fatias de laranja.",
            ],
        },
        {
            slug: "pao-de-queijo",
            nome: "Pão de queijo",
            subtitulo: "O lanche mais mineiro de todos",
            descricao:
                "Feito com polvilho escaldado e queijo curado, o pão de queijo é leve, crocante por fora e macio por dentro.",
            porcoes: "30 unidades",
            tempo: "50 min",
            dificuldade: "Fácil",
            ingredientes: [
                "500 g de polvilho (azedo, doce ou metade de cada)",
                "1 xícara de leite",
                "1/2 xícara de óleo",
                "1 colher (chá) de sal",
                "2 ovos",
                "200 g de queijo minas curado ralado",
            ],
            preparo: [
                "Aqueça o forno a 200 °C.",
                "Ferva o leite com o óleo e o sal e despeje sobre o polvilho, mexendo bem até formar uma massa grossa.",
                "Deixe a massa amornar, acrescente os ovos, um de cada vez, e depois o queijo, sovando até ficar lisa.",
                "Faça bolinhas do tamanho de uma noz e distribua em uma assadeira.",
                "Asse por cerca de 25 minutos, até dourar.",
            ],
        },
    ],
};

export default sudeste;
