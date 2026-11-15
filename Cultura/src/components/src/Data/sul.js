const sul = {
    id: "sul",
    nome: "Sul",
    titulo: "Região Sul",
    lema: "Entre os pampas e as colônias de imigrantes",
    cor: "#1E3A8A",
    estados: ["Paraná", "Rio Grande do Sul", "Santa Catarina"],
    resumo:
        "Dos campos gaúchos às colônias de imigrantes, o Sul tem uma culinária marcada pela vida no campo, pelo frio e pelas tradições vindas da Europa.",

    historia: [
        "O Sul era território dos povos Guarani, Kaingang e Xokleng. No século XVII, padres jesuítas fundaram missões guaranis no que hoje é o Rio Grande do Sul, como as dos Sete Povos das Missões.",
        "No século XVIII, o tropeirismo ligou o Sul ao resto do país: tropas de gado e de mulas levavam os animais pelos campos até São Paulo e Minas. Dessa vida no campo vieram o churrasco, o chimarrão, herdado dos Guarani, e o charque, produzido nas charqueadas com o trabalho de africanos escravizados.",
        "No século XIX, começaram a chegar imigrantes: alemães, a partir de 1824; italianos, desde 1875; além de poloneses e ucranianos, no Paraná. Os açorianos já viviam no litoral de Santa Catarina desde o século XVIII. Cada grupo trouxe receitas que se tornaram parte da cultura do Sul.",
        "Nas regiões mais altas e frias, o pinhão, semente da araucária, já era alimento dos Kaingang e dos Xokleng muito antes dos europeus e continua sendo comido todo inverno, cozido ou assado.",
        "Hoje, o Sul preserva essas tradições em festas como a Oktoberfest, em Blumenau, e a Festa da Uva, em Caxias do Sul, e em hábitos do dia a dia, como a roda de chimarrão e o churrasco de fim de semana.",
    ],

    povos: [
        {
            nome: "Povos indígenas",
            descricao:
                "Guarani, Kaingang e Xokleng. Dos Guarani vem o costume de beber o chimarrão, feito da erva-mate.",
        },
        {
            nome: "Tropeiros e gaúchos",
            descricao:
                "Gente do campo, descendente de indígenas, portugueses e espanhóis, que criou o churrasco, o charque e o arroz carreteiro.",
        },
        {
            nome: "Africanos escravizados",
            descricao:
                "Trabalharam nas charqueadas, como as de Pelotas, e ajudaram a formar a cultura do Rio Grande do Sul.",
        },
        {
            nome: "Imigrantes europeus",
            descricao:
                "Alemães, italianos, poloneses, ucranianos e açorianos trouxeram pães, bolos, embutidos, polenta e vinhos.",
        },
    ],

    pratos: [
        {
            slug: "churrasco-gaucho",
            nome: "Churrasco gaúcho",
            origem: "Gaúcha",
            descricao:
                "Carne assada no espeto sobre brasas, apenas com sal grosso. Nasceu da lida com o gado nos campos do Sul.",
            porcoes: "6 porções",
            tempo: "1h a 4h",
            dificuldade: "Média",
            ingredientes: [
                "1,5 kg de carne (costela, picanha ou fraldinha)",
                "Sal grosso a gosto",
                "Carvão e espetos",
                "Farofa, vinagrete e pão de alho para acompanhar",
            ],
            preparo: [
                "Tire a carne da geladeira 30 minutos antes de assar.",
                "Acenda o carvão e espere formar uma brasa bem baixa, sem chama.",
                "Salgue a carne com sal grosso só na hora de levar ao fogo e coloque nos espetos.",
                "Asse longe das brasas, virando de vez em quando: a picanha leva 30 a 40 minutos, e a costela, de 3 a 4 horas em fogo baixo.",
                "Deixe descansar 5 minutos, fatie e sirva com farofa e vinagrete.",
            ],
            nota: "Peça ajuda a um adulto para acender o fogo e mexer nas brasas.",
        },
        {
            slug: "barreado",
            nome: "Barreado",
            origem: "Portuguesa (açoriana)",
            descricao:
                "Carne cozida por horas em panela de barro lacrada com massa. É típico de Morretes e do litoral do Paraná e se come com farinha e banana.",
            porcoes: "6 porções",
            tempo: "8h a 12h",
            dificuldade: "Média",
            ingredientes: [
                "1,5 kg de carne bovina (acém ou músculo) em cubos grandes",
                "150 g de bacon",
                "2 cebolas em rodelas",
                "4 dentes de alho amassados",
                "2 tomates em rodelas",
                "2 folhas de louro",
                "1 colher (sopa) de cominho",
                "Sal e pimenta-do-reino a gosto",
                "Massa de farinha de trigo e água para lacrar a panela",
                "Farinha de mandioca e banana-prata para servir",
            ],
            preparo: [
                "Tempere a carne com o alho, o cominho, o sal e a pimenta e deixe descansar por 2 horas.",
                "Em uma panela de barro, faça camadas com o bacon, a cebola, o tomate, a carne e o louro.",
                "Acrescente um pouco de água, só para começar o cozimento.",
                "Misture farinha de trigo e água até formar uma massa mole e use para lacrar a tampa, para o vapor não escapar.",
                "Cozinhe em fogo bem baixo por 8 a 12 horas, sem abrir.",
                "Quebre a massa, desfie a carne no próprio caldo e sirva com farinha de mandioca e banana.",
            ],
            nota: "Para encurtar, cozinhe a mesma receita na panela de pressão por cerca de 1h30, com um adulto. O sabor fica parecido, mas a panela lacrada é a tradição.",
        },
        {
            slug: "arroz-carreteiro",
            nome: "Arroz carreteiro",
            origem: "Gaúcha",
            descricao:
                "Arroz cozido com charque, prato prático dos carreteiros que atravessavam os campos com suas carroças.",
            porcoes: "4 porções",
            tempo: "50 min",
            dificuldade: "Fácil",
            ingredientes: [
                "2 xícaras de arroz",
                "300 g de charque dessalgado e cortado em cubos",
                "150 g de bacon em cubos",
                "1 cebola picada",
                "3 dentes de alho",
                "1 tomate picado",
                "4 xícaras de água quente",
                "Cheiro-verde e pimenta a gosto",
            ],
            preparo: [
                "Dessalgue o charque em água por 4 horas, trocando a água de vez em quando, e escorra.",
                "Frite o bacon em uma panela até soltar a gordura e junte o charque, dourando bem.",
                "Acrescente a cebola, o alho e o tomate e refogue por alguns minutos.",
                "Junte o arroz, mexa por 2 minutos, adicione a água quente e cozinhe em fogo baixo por 20 minutos.",
                "Finalize com o cheiro-verde e a pimenta.",
            ],
        },
        {
            slug: "cuca",
            nome: "Cuca de banana",
            origem: "Alemã",
            descricao:
                "Bolo fofinho com banana e cobertura de farofa doce, trazido pelos imigrantes alemães.",
            porcoes: "12 fatias",
            tempo: "1h",
            dificuldade: "Fácil",
            ingredientes: [
                "4 bananas maduras fatiadas",
                "3 xícaras de farinha de trigo",
                "1 xícara de açúcar",
                "3 ovos",
                "1/2 xícara de óleo",
                "1 xícara de leite",
                "1 colher (sopa) de fermento em pó",
                "Farofa: 1 xícara de farinha, 1/2 xícara de açúcar, 3 colheres (sopa) de manteiga e 1 colher (chá) de canela",
            ],
            preparo: [
                "Aqueça o forno a 180 °C e unte uma forma grande.",
                "Bata os ovos com o açúcar, o óleo e o leite. Junte a farinha e, por último, o fermento.",
                "Despeje a massa na forma e distribua as bananas por cima.",
                "Misture os ingredientes da farofa com as pontas dos dedos até formar farelos e espalhe sobre as bananas.",
                "Asse por cerca de 40 minutos, até dourar e o palito sair limpo.",
            ],
        },
        {
            slug: "pinhao-cozido",
            nome: "Pinhão cozido",
            origem: "Indígena (Kaingang e Xokleng)",
            descricao:
                "Semente da araucária, o pinhão é comido cozido ou assado, quentinho, no inverno do Paraná, de Santa Catarina e do Rio Grande do Sul.",
            porcoes: "4 porções",
            tempo: "50 min",
            dificuldade: "Fácil",
            ingredientes: [
                "500 g de pinhão com casca",
                "Água suficiente para cobrir",
                "1 pitada de sal",
            ],
            preparo: [
                "Lave bem os pinhões e coloque na panela de pressão, cobertos com água e uma pitada de sal.",
                "Depois que a panela pegar pressão, cozinhe por 30 a 40 minutos. Em panela comum, cozinhe por cerca de 1 hora, até as cascas abrirem.",
                "Escorra e sirva ainda quente, com a casca. Para comer, é só abrir com os dedos.",
                "Para uma versão refogada, descasque e refogue o pinhão com bacon e alho.",
            ],
            nota: "A safra vai mais ou menos de abril a julho. Peça ajuda a um adulto para usar a panela de pressão.",
        },
        {
            slug: "chimarrao",
            nome: "Chimarrão",
            origem: "Indígena (Guarani)",
            descricao:
                "Bebida quente de erva-mate, tomada em roda, na cuia, com bomba. É um símbolo da cultura do Sul.",
            porcoes: "1 cuia, que pode ser repassada",
            tempo: "10 min",
            dificuldade: "Fácil",
            ingredientes: [
                "Erva-mate própria para chimarrão, para encher cerca de 3/4 da cuia",
                "Água quente, entre 70 e 80 °C, sem ferver",
                "1 cuia",
                "1 bomba (canudo de metal)",
            ],
            preparo: [
                "Encha a cuia até cerca de 3/4 com erva-mate.",
                "Tampe a boca da cuia com a mão, vire de cabeça para baixo e sacuda de leve, para o pó fino ir para cima.",
                "Volte a cuia inclinada, formando um monte de erva de um lado e um espaço vazio do outro.",
                "Despeje um pouco de água morna no espaço vazio, só para umedecer, e espere a erva absorver.",
                "Coloque a bomba no espaço vazio, sem mexer mais, e vá enchendo com a água quente.",
                "Tome devagar e passe a cuia para a próxima pessoa da roda.",
            ],
            nota: "A água nunca deve ferver, porque queima a erva e deixa o chimarrão amargo. Peça ajuda a um adulto para esquentar a água.",
        },
    ],
};

export default sul;
