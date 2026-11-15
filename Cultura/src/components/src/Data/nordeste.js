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
        "A vida no sertão, marcada pelas secas, criou uma cozinha de aproveitamento, feita de milho, feijão, mandioca e carnes salgadas, que duram mais tempo. O cuscuz de milho, por exemplo, une a técnica de cozer no vapor trazida pelos africanos ao milho dos povos indígenas.",
        "No litoral, a mistura de dendê, leite de coco, pimenta e frutos do mar deu origem aos pratos mais conhecidos da Bahia. O ofício das baianas de acarajé, que vendem o bolinho nas ruas de Salvador, é reconhecido como Patrimônio Cultural do Brasil.",
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

    pratos: [
        {
            slug: "acaraje",
            nome: "Acarajé",
            origem: "Africana",
            descricao:
                "Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vinagrete e camarão. O ofício das baianas de acarajé é Patrimônio Cultural do Brasil.",
            porcoes: "12 bolinhos",
            tempo: "1h30 (mais 12h de molho)",
            dificuldade: "Difícil",
            ingredientes: [
                "500 g de feijão-fradinho",
                "1 cebola pequena",
                "1 colher (chá) de sal",
                "500 ml de azeite de dendê para fritar",
                "100 g de camarão seco",
                "Vinagrete: 2 tomates, 1 cebola, 1 pimentão e coentro picados",
                "Pimenta a gosto",
            ],
            preparo: [
                "Deixe o feijão de molho em água por 12 horas.",
                "Esfregue o feijão com as mãos para soltar as cascas e escorra, jogando as cascas fora.",
                "Bata o feijão com a cebola e o sal no processador, sem água, até formar uma massa pastosa.",
                "Bata a massa com uma colher de pau por uns 10 minutos, até ficar clara e fofa.",
                "Aqueça o dendê em uma panela funda e, com duas colheres, forme bolinhos ovais e frite por cerca de 4 minutos de cada lado, até dourar.",
                "Abra cada bolinho ao meio e recheie com o vinagrete e o camarão seco refogado.",
            ],
            nota: "Peça ajuda a um adulto para fritar: o óleo quente pode causar queimaduras.",
        },
        {
            slug: "moqueca-baiana",
            nome: "Moqueca baiana",
            origem: "Indígena, africana e portuguesa",
            descricao:
                "Peixe ou frutos do mar cozidos com leite de coco, azeite de dendê, pimentão e coentro. Reúne técnicas de três culturas em uma só panela.",
            porcoes: "4 porções",
            tempo: "50 min",
            dificuldade: "Média",
            ingredientes: [
                "1 kg de postas de peixe (pescada, robalo ou cação)",
                "Suco de 1 limão",
                "3 dentes de alho",
                "1 cebola em rodelas",
                "1 pimentão vermelho e 1 amarelo em tiras",
                "3 tomates em rodelas",
                "200 ml de leite de coco",
                "3 colheres (sopa) de azeite de dendê",
                "1 maço de coentro picado",
                "Sal e pimenta a gosto",
            ],
            preparo: [
                "Tempere o peixe com o limão, o alho e o sal e deixe descansar por 20 minutos.",
                "Em uma panela larga, faça camadas com a cebola, os tomates e os pimentões.",
                "Coloque o peixe por cima e cubra com o resto dos legumes.",
                "Regue com o leite de coco e cozinhe, com a panela tampada e em fogo baixo, por 15 minutos.",
                "Junte o dendê e o coentro e cozinhe por mais 5 minutos, sem mexer, só balançando a panela.",
                "Sirva com arroz branco e pirão.",
            ],
        },
        {
            slug: "tapioca",
            nome: "Tapioca recheada",
            origem: "Indígena",
            descricao:
                "Massa feita da goma da mandioca, herança dos povos indígenas. Vai à chapa e é recheada com queijo coalho, coco ou carne de sol.",
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
            origem: "Sertaneja",
            descricao:
                "Arroz cozido com feijão-de-corda, queijo coalho e carne de sol. Prato típico do Ceará, nascido na vida simples do sertão.",
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
        {
            slug: "cuscuz-nordestino",
            nome: "Cuscuz nordestino",
            origem: "Africana e indígena",
            descricao:
                "Massa de milho cozida no vapor. É o café da manhã de muita gente no Nordeste, servido com manteiga, ovo, queijo coalho ou carne de sol.",
            porcoes: "4 porções",
            tempo: "30 min",
            dificuldade: "Fácil",
            ingredientes: [
                "500 g de flocão de milho",
                "1 xícara de água (250 ml)",
                "1 colher (chá) de sal",
                "2 colheres (sopa) de manteiga",
                "Ovos, queijo coalho ou carne de sol para acompanhar",
            ],
            preparo: [
                "Misture o flocão com o sal e vá juntando a água aos poucos, até a massa ficar úmida e soltinha. Deixe descansar por 10 minutos.",
                "Coloque água no fundo da cuscuzeira, sem encostar na parte de cima, e passe a massa para o compartimento de cima, sem apertar.",
                "Cozinhe no vapor por cerca de 15 minutos, até o cuscuz soltar do fundo.",
                "Desenforme, passe a manteiga e sirva quente com o acompanhamento que preferir.",
            ],
            nota: "Sem cuscuzeira, use uma panela com cesto de vapor ou um escorredor coberto com um pano de prato limpo.",
        },
        {
            slug: "bolo-de-rolo",
            nome: "Bolo de rolo",
            origem: "Portuguesa (Pernambuco)",
            descricao:
                "Bolo feito com várias camadas finíssimas de massa, enroladas com goiabada. É a sobremesa mais famosa de Pernambuco e Patrimônio Cultural do estado.",
            porcoes: "12 fatias",
            tempo: "2h",
            dificuldade: "Difícil",
            ingredientes: [
                "250 g de manteiga em temperatura ambiente",
                "2 xícaras de açúcar",
                "6 ovos, claras e gemas separadas",
                "2 xícaras de farinha de trigo",
                "1 pitada de sal",
                "1 colher (chá) de essência de baunilha",
                "400 g de goiabada derretida com 1/2 xícara de água",
            ],
            preparo: [
                "Aqueça o forno a 180 °C e forre uma forma retangular com papel-manteiga untado.",
                "Bata a manteiga com o açúcar até ficar cremosa e junte as gemas, a baunilha e o sal.",
                "Incorpore a farinha e, por último, as claras batidas em neve, com cuidado.",
                "Espalhe uma camada bem fina de massa na forma e asse por cerca de 8 minutos, até dourar de leve.",
                "Desenforme em um pano limpo e polvilhado com açúcar, espalhe a goiabada derretida e enrole.",
                "Repita com o resto da massa, enrolando cada camada nova em volta do rolo anterior, até formar um grande rolo.",
                "Espere esfriar e corte em fatias finas.",
            ],
            nota: "Esta é uma versão simplificada: o bolo de rolo tradicional leva 10 ou mais camadas e exige paciência.",
        },
    ],
};

export default nordeste;
