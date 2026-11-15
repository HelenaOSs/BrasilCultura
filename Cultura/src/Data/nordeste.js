const nordeste = {
    id: "nordeste",
    nome: "Nordeste",
    titulo: "Região Nordeste",
    lema: "Tradição, sol e sabor",
    cor: "#F9B91E",
    estados: [
        "Alagoas",
        "Bahia",
        "Ceará",
        "Maranhão",
        "Paraíba",
        "Pernambuco",
        "Piauí",
        "Rio Grande do Norte",
        "Sergipe",
    ],
    resumo:
        "Com uma forte influência africana, indígena e portuguesa, o Nordeste é conhecido por sua culinária rica e cheia de personalidade.",

    historia: [
        "Foi no Nordeste que o Brasil colonial começou. Povos indígenas como os Tupinambá, os Potiguara e os Cariri já viviam no litoral e no sertão quando, a partir de 1530, os portugueses instalaram engenhos de cana-de-açúcar em Pernambuco e na Bahia.",
        "Para trabalhar nos engenhos, milhões de africanos foram escravizados e trazidos ao Brasil. Salvador, fundada em 1549, foi a primeira capital do país e um dos maiores portos desse comércio. Os africanos trouxeram o dendê, o quiabo e técnicas de cozinha que fazem parte da culinária baiana até hoje.",
        "Entre 1630 e 1654, os holandeses ocuparam Pernambuco e impulsionaram a produção de açúcar. No sertão, a criação de gado deu origem à carne de sol e a uma cultura de vaqueiros que influencia a comida da região até hoje.",
    ],

    povos: [
        {
            nome: "Povos indígenas",
            descricao:
                "Tupinambá, Potiguara, Cariri e outros povos. Deixaram a mandioca, a tapioca, o beiju e o hábito de aproveitar peixes, frutos e raízes da terra.",
        },
        {
            nome: "Portugueses",
            descricao:
                "Trouxeram a cana-de-açúcar, o gado e a tradição de doces, que deram origem a bolos, cocadas e doces de frutas.",
        },
        {
            nome: "Africanos escravizados",
            descricao:
                "Trouxeram o dendê, o quiabo e a pimenta, e criaram pratos como o acarajé, o vatapá e o caruru, hoje símbolos da Bahia.",
        },
        {
            nome: "Holandeses",
            descricao:
                "Ocuparam Pernambuco entre 1630 e 1654 e impulsionaram a economia do açúcar na região.",
        },
    ],

    comidas: [
        {
            slug: "acaraje",
            nome: "Acarajé",
            origem: "Africana",
            descricao:
                "Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá, caruru e camarão. O ofício das baianas de acarajé é Patrimônio Cultural do Brasil.",
        },
        {
            slug: "moqueca-baiana",
            nome: "Moqueca baiana",
            origem: "Indígena, africana e portuguesa",
            descricao:
                "Peixe ou frutos do mar cozidos com leite de coco, azeite de dendê, pimentão e coentro. Reúne técnicas de três culturas em uma só panela.",
        },
        {
            slug: "tapioca",
            nome: "Tapioca",
            origem: "Indígena",
            descricao:
                "Massa feita da goma da mandioca, herança dos povos indígenas. Vai à chapa e é recheada com queijo coalho, coco ou carne de sol.",
        },
        {
            slug: "baiao-de-dois",
            nome: "Baião de dois",
            origem: "Sertaneja",
            descricao:
                "Arroz cozido com feijão-de-corda, queijo coalho e carne de sol. Prato típico do Ceará, nascido na vida simples do sertão.",
        },
    ],

    receitas: [
        {
            slug: "tapioca",
            nome: "Tapioca recheada",
            subtitulo: "Um café da manhã de origem indígena",
            descricao:
                "Feita só com a goma da mandioca hidratada, a tapioca vai à frigideira sem óleo e fica pronta em poucos minutos.",
            porcoes: "4 porções",
            tempo: "20 min",
            dificuldade: "Fácil",
            ingredientes: [
                "2 xícaras de goma de tapioca hidratada",
                "1 pitada de sal",
                "200 g de queijo coalho em fatias finas",
                "1/2 xícara de coco ralado",
                "Manteiga a gosto",
            ],
            preparo: [
                "Peneire a goma em uma tigela para soltar os grumos e misture o sal.",
                "Aqueça uma frigideira antiaderente sem óleo e espalhe 3 colheres (sopa) de goma, formando um disco fino.",
                "Espere uns 40 segundos, até a goma unir e formar uma massa branca e firme.",
                "Coloque o recheio de um lado, dobre ao meio e deixe mais 1 minuto para derreter o queijo.",
                "Sirva quente, com um pouco de manteiga por cima.",
            ],
        },
        {
            slug: "baiao-de-dois",
            nome: "Baião de dois",
            subtitulo: "O sabor do sertão cearense",
            descricao:
                "Arroz e feijão cozidos juntos com carne de sol, queijo coalho e coentro. Um prato completo, simples e cheio de sabor.",
            porcoes: "6 porções",
            tempo: "1h",
            dificuldade: "Média",
            ingredientes: [
                "2 xícaras de arroz cru",
                "2 xícaras de feijão-de-corda já cozido",
                "300 g de carne de sol dessalgada e desfiada",
                "200 g de queijo coalho em cubos",
                "1 cebola picada",
                "3 dentes de alho",
                "2 colheres (sopa) de manteiga de garrafa",
                "Coentro e cebolinha a gosto",
            ],
            preparo: [
                "Dessalgue a carne de sol em água por algumas horas, trocando a água, e depois cozinhe e desfie.",
                "Em uma panela grande, refogue a cebola e o alho na manteiga de garrafa e junte a carne de sol.",
                "Acrescente o feijão com o caldo do cozimento e o arroz cru, e adicione água quente até cobrir tudo.",
                "Cozinhe em fogo médio por cerca de 20 minutos, até o arroz ficar macio e a água secar.",
                "Misture o queijo coalho, o coentro e a cebolinha e sirva em seguida.",
            ],
        },
    ],
};

export default nordeste;
