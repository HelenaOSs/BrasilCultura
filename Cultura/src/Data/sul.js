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

    comidas: [
        {
            slug: "churrasco-gaucho",
            nome: "Churrasco gaúcho",
            origem: "Gaúcha",
            descricao:
                "Carne assada no espeto sobre brasas, apenas com sal grosso. Nasceu da lida com o gado nos campos do Sul.",
        },
        {
            slug: "barreado",
            nome: "Barreado",
            origem: "Portuguesa (açoriana)",
            descricao:
                "Carne cozida por horas em panela de barro lacrada com massa. É típico de Morretes e do litoral do Paraná, e se come com farinha e banana.",
        },
        {
            slug: "cuca",
            nome: "Cuca",
            origem: "Alemã",
            descricao:
                "Bolo com cobertura de farofa doce, muitas vezes recheado com banana, que veio com os imigrantes alemães.",
        },
        {
            slug: "chimarrao",
            nome: "Chimarrão",
            origem: "Indígena (Guarani)",
            descricao:
                "Bebida quente de erva-mate, tomada em roda, na cuia, com bomba. É um símbolo da cultura do Sul.",
        },
    ],

    receitas: [
        {
            slug: "arroz-carreteiro",
            nome: "Arroz carreteiro",
            subtitulo: "A comida dos carreteiros gaúchos",
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
            subtitulo: "Um bolo de origem alemã",
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
    ],
};

export default sul;
