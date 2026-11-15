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
        "No Espírito Santo, a tradição indígena da panela de barro deu origem à moqueca capixaba, feita sem dendê nem leite de coco, enquanto os imigrantes italianos que chegaram a partir de 1870 trouxeram o gosto pelas massas e pelo vinho.",
        "Hoje, o Sudeste é a região mais populosa do país. Só em São Paulo, a cidade mais populosa do Brasil, convivem as cozinhas italiana, japonesa, árabe, portuguesa e nordestina, que fazem da região um grande encontro de sabores.",
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

    pratos: [
        {
            slug: "feijoada",
            nome: "Feijoada",
            origem: "Portuguesa e afro-brasileira",
            descricao:
                "Feijão-preto cozido com carnes de porco e carne-seca, servido com arroz, couve, farofa e laranja. É um dos pratos mais tradicionais do país.",
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
            nota: "A feijoada une o feijão, nativo das Américas, à tradição portuguesa dos cozidos e à criatividade da culinária afro-brasileira. Peça ajuda a um adulto para usar a panela de pressão.",
        },
        {
            slug: "pao-de-queijo",
            nome: "Pão de queijo",
            origem: "Mineira",
            descricao:
                "Bolinho de polvilho e queijo, crocante por fora e macio por dentro. É um símbolo de Minas Gerais.",
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
        {
            slug: "virado-a-paulista",
            nome: "Virado à paulista",
            origem: "Tropeira e bandeirante",
            descricao:
                "Tutu de feijão com arroz, bisteca de porco, couve, ovo frito e banana frita. É prato de segunda-feira nos restaurantes de São Paulo.",
            porcoes: "4 porções",
            tempo: "1h",
            dificuldade: "Média",
            ingredientes: [
                "Tutu: 3 xícaras de feijão cozido com caldo, 100 g de bacon, 1 cebola, 2 dentes de alho e 1/2 xícara de farinha de mandioca",
                "4 bistecas de porco temperadas com alho e sal",
                "1 maço de couve em tiras finas",
                "4 ovos",
                "4 bananas-prata",
                "Arroz branco para servir",
            ],
            preparo: [
                "Para o tutu, frite o bacon, junte a cebola e o alho e refogue. Acrescente o feijão, amasse um pouco com uma colher e deixe ferver.",
                "Vá juntando a farinha aos poucos, mexendo, até o feijão formar um creme grosso. Reserve.",
                "Grelhe as bistecas na frigideira até dourarem dos dois lados.",
                "Refogue a couve rapidamente no alho, só para murchar.",
                "Frite as bananas cortadas ao meio, no comprimento, até ficarem douradas, e depois frite os ovos.",
                "Monte o prato com o arroz, o tutu, a bisteca, a couve, o ovo e a banana.",
            ],
        },
        {
            slug: "moqueca-capixaba",
            nome: "Moqueca capixaba",
            origem: "Indígena",
            descricao:
                "Peixe cozido em panela de barro com tomate, cebola, coentro e urucum, sem dendê nem leite de coco. É o orgulho do Espírito Santo.",
            porcoes: "4 porções",
            tempo: "45 min",
            dificuldade: "Média",
            ingredientes: [
                "1 kg de postas de peixe (robalo, badejo ou pescada)",
                "Suco de 2 limões",
                "3 dentes de alho",
                "1 cebola em rodelas",
                "3 tomates em rodelas",
                "1 maço de coentro e cebolinha picados",
                "1 colher (sopa) de urucum em pó (colorau)",
                "4 colheres (sopa) de azeite",
                "Sal a gosto",
            ],
            preparo: [
                "Tempere o peixe com o limão, o alho e o sal e deixe descansar por 20 minutos.",
                "Misture o urucum com o azeite.",
                "Em uma panela, de preferência de barro, faça camadas com a cebola, os tomates, o peixe e as ervas.",
                "Regue com o azeite com urucum e cozinhe com a panela tampada, em fogo baixo, por cerca de 20 minutos.",
                "Sirva na própria panela, com arroz branco e pirão.",
            ],
        },
        {
            slug: "frango-com-quiabo",
            nome: "Frango com quiabo",
            origem: "Mineira e afro-brasileira",
            descricao:
                "Frango cozido com quiabo, um prato de domingo na casa de muito mineiro. O quiabo veio da África e está no Brasil desde o período colonial.",
            porcoes: "4 porções",
            tempo: "1h",
            dificuldade: "Fácil",
            ingredientes: [
                "1 kg de sobrecoxa de frango",
                "400 g de quiabo cortado em rodelas",
                "Suco de 1 limão",
                "1 cebola picada",
                "3 dentes de alho",
                "1 tomate picado",
                "Sal, pimenta e cheiro-verde a gosto",
            ],
            preparo: [
                "Tempere o frango com o alho, o sal e a pimenta e deixe descansar por 30 minutos.",
                "Doure o frango em uma panela com um fio de óleo, junte a cebola e o tomate e refogue.",
                "Acrescente meia xícara de água, tampe e cozinhe por 25 minutos.",
                "Em outra frigideira, refogue o quiabo com o limão, mexendo pouco, por 5 minutos, para não soltar muita baba.",
                "Junte o quiabo ao frango, cozinhe por mais 5 minutos e finalize com cheiro-verde.",
                "Sirva com arroz e angu.",
            ],
        },
        {
            slug: "bolinho-de-bacalhau",
            nome: "Bolinho de bacalhau",
            origem: "Portuguesa",
            descricao:
                "Bolinho frito de bacalhau com batata, trazido pelos portugueses. É petisco de botequim no Rio de Janeiro e de festa em muitas casas.",
            porcoes: "20 bolinhos",
            tempo: "1h30 (mais 24h de dessalga)",
            dificuldade: "Média",
            ingredientes: [
                "500 g de bacalhau dessalgado",
                "500 g de batata cozida e amassada",
                "1 cebola ralada",
                "2 ovos",
                "1 maço pequeno de salsinha picada",
                "Pimenta-do-reino a gosto",
                "Óleo para fritar",
            ],
            preparo: [
                "Dessalgue o bacalhau em água na geladeira por cerca de 24 horas, trocando a água 4 ou 5 vezes.",
                "Cozinhe o bacalhau por 10 minutos, escorra e desfie, tirando espinhas e pele.",
                "Misture o bacalhau com a batata, a cebola, os ovos, a salsinha e a pimenta.",
                "Com duas colheres, modele bolinhos ovais.",
                "Frite em óleo bem quente até dourar e escorra em papel-toalha.",
            ],
            nota: "Peça ajuda a um adulto para fritar: o óleo quente pode causar queimaduras.",
        },
    ],
};

export default sudeste;
