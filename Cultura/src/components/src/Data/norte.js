const norte = {
    id: "norte",
    nome: "Norte",
    titulo: "Região Norte",
    lema: "A floresta que alimenta o Brasil",
    cor: "#3F7D20",
    estados: ["Acre", "Amapá", "Amazonas", "Pará", "Rondônia", "Roraima", "Tocantins"],
    resumo:
        "Berço da biodiversidade, a região Norte é marcada pela presença dos povos indígenas, pela força da Amazônia e por sabores únicos.",

    historia: [
        "Muito antes de 1500, a Amazônia já era habitada por centenas de povos indígenas. Eles aprenderam a conviver com a floresta e com os rios, cultivaram a mandioca e criaram um método para tirar o veneno da mandioca-brava, o que deu origem à farinha, ao tucupi e à goma.",
        "A ocupação portuguesa começou no século XVII, com a fundação de Belém, em 1616. Colonos e missionários buscaram as chamadas drogas do sertão, como cacau, cravo e castanha, e usaram o trabalho de indígenas escravizados e, mais tarde, também de africanos.",
        "No fim do século XIX, o ciclo da borracha atraiu milhares de migrantes do Nordeste para a Amazônia. Eles levaram para a floresta o gosto pela carne-seca, pela farinha e por outras tradições do sertão, que se misturaram aos ingredientes da região.",
        "Hoje, a região abriga a maior floresta tropical do mundo e a maior bacia hidrográfica do planeta, a do rio Amazonas. Comunidades ribeirinhas, quilombolas e indígenas mantêm vivos a pesca, o extrativismo e o cultivo da mandioca. Em Belém, o mercado Ver-o-Peso reúne ervas, peixes e frutas da floresta e é um dos mais conhecidos do país.",
        "A culinária do Norte une o conhecimento indígena aos ingredientes dos rios e da mata. O açaí, que sempre foi comida de todo dia das populações ribeirinhas, só ganhou o resto do país nas últimas décadas.",
    ],

    povos: [
        {
            nome: "Povos indígenas",
            descricao:
                "Tikuna, Yanomami, Munduruku, Kayapó e muitos outros. Vem deles o tucupi, a goma de mandioca, o jambu e o costume de comer peixe com farinha.",
        },
        {
            nome: "Portugueses",
            descricao:
                "Chegaram no século XVII e trouxeram o sal, o alho e técnicas de cozimento que se misturaram aos ingredientes da região.",
        },
        {
            nome: "Africanos escravizados",
            descricao:
                "Foram levados para o Pará e o Maranhão à força e participaram da formação da cultura paraense, em temperos, festas e tradições.",
        },
        {
            nome: "Migrantes nordestinos",
            descricao:
                "Vieram na época da borracha e levaram para a floresta o gosto pela carne-seca, pela farinha e por outras tradições do sertão.",
        },
    ],

    pratos: [
        {
            slug: "tacaca",
            nome: "Tacacá",
            origem: "Indígena",
            descricao:
                "Caldo quente de tucupi com goma de mandioca, jambu e camarão seco, servido em cuia. É tradição nas ruas de Belém e de Manaus.",
            porcoes: "4 porções",
            tempo: "1h",
            dificuldade: "Média",
            ingredientes: [
                "1 litro de tucupi",
                "2 dentes de alho amassados",
                "1 maço de jambu",
                "200 g de camarão seco, bem lavado",
                "5 colheres (sopa) de goma de mandioca (polvilho doce)",
                "500 ml de água",
                "Pimenta-de-cheiro e sal a gosto",
            ],
            preparo: [
                "Ferva o tucupi com o alho e uma pimenta-de-cheiro inteira por cerca de 30 minutos. Prove e acerte o sal.",
                "Dissolva a goma na água fria e leve ao fogo baixo, mexendo sempre, até ficar transparente e com textura de gelatina.",
                "Escalde o jambu em água fervente por 2 minutos e escorra.",
                "Monte cada cuia com uma concha de goma, o tucupi bem quente, o jambu e o camarão seco.",
                "Sirva na hora, com pimenta a gosto.",
            ],
            nota: "Compre tucupi pronto, de boa procedência, e ferva bem antes de servir: o tucupi cru contém substâncias tóxicas da mandioca-brava. O jambu deixa a boca levemente dormente, e é isso que torna o prato inconfundível.",
        },
        {
            slug: "pato-no-tucupi",
            nome: "Pato no tucupi",
            origem: "Indígena e portuguesa",
            descricao:
                "Pato cozido no tucupi com jambu. É o prato principal do almoço do Círio de Nazaré, a grande festa religiosa de Belém.",
            porcoes: "6 porções",
            tempo: "3h",
            dificuldade: "Difícil",
            ingredientes: [
                "1 pato de cerca de 2 kg, cortado em pedaços",
                "Suco de 2 limões",
                "4 dentes de alho amassados",
                "1 litro de tucupi",
                "1 cebola picada",
                "2 maços de jambu",
                "1 maço de chicória (opcional)",
                "Pimenta-de-cheiro, sal e pimenta-do-reino a gosto",
                "Arroz branco e farinha de mandioca para servir",
            ],
            preparo: [
                "Tempere o pato com o limão, metade do alho, sal e pimenta-do-reino e deixe descansar por pelo menos 2 horas.",
                "Asse o pato em forno a 200 °C por cerca de 40 minutos, virando uma vez, até dourar.",
                "Em uma panela grande, ferva o tucupi com o resto do alho, a cebola e a pimenta-de-cheiro por 30 minutos.",
                "Coloque o pato no tucupi e cozinhe em fogo baixo por cerca de 1 hora, até a carne ficar macia.",
                "Escalde o jambu (e a chicória) em água fervente por 3 minutos, escorra e junte ao pato nos últimos 10 minutos.",
                "Sirva com arroz branco e farinha de mandioca.",
            ],
            nota: "Use tucupi pronto e ferva bem: o tucupi cru é tóxico. Peça ajuda a um adulto para assar e para mexer na panela quente.",
        },
        {
            slug: "manicoba",
            nome: "Maniçoba",
            origem: "Indígena e portuguesa",
            descricao:
                "Folhas de mandioca-brava moídas e cozidas por muito tempo, com carnes de porco e defumados. É conhecida como a feijoada paraense.",
            porcoes: "10 porções",
            tempo: "1 dia ou mais",
            dificuldade: "Difícil",
            ingredientes: [
                "1 kg de maniva (folha de mandioca) moída e pré-cozida, comprada pronta",
                "300 g de carne de porco salgada",
                "200 g de paio",
                "200 g de linguiça defumada",
                "200 g de bacon em cubos",
                "1 cebola picada",
                "4 dentes de alho",
                "2 folhas de louro",
                "Pimenta-de-cheiro e sal a gosto",
                "Arroz branco e farinha de mandioca para servir",
            ],
            preparo: [
                "Dessalgue as carnes em água, trocando a água algumas vezes, por cerca de 12 horas.",
                "Cozinhe a maniva em uma panela grande com água e louro, em fogo baixo, pelo tempo indicado na embalagem. Tradicionalmente, ela cozinha por vários dias.",
                "Cozinhe as carnes em outra panela por 40 minutos e corte em pedaços.",
                "Frite o bacon, refogue a cebola e o alho e junte as carnes.",
                "Misture tudo à maniva e cozinhe em fogo baixo por mais 2 horas, mexendo de vez em quando.",
                "Sirva com arroz branco, farinha de mandioca e pimenta.",
            ],
            nota: "A folha de mandioca-brava é tóxica quando crua e só fica segura depois de muitas horas de cozimento. Compre maniva de boa procedência e siga o tempo de cozimento indicado.",
        },
        {
            slug: "acai-com-peixe-frito",
            nome: "Açaí com peixe frito",
            origem: "Indígena",
            descricao:
                "No Pará, o açaí é comida de todo dia: servido sem açúcar, com peixe frito e farinha de mandioca.",
            porcoes: "4 porções",
            tempo: "40 min",
            dificuldade: "Fácil",
            ingredientes: [
                "1 kg de polpa de açaí pura, sem açúcar",
                "4 filés de pescada amarela ou de tilápia",
                "Suco de 1 limão",
                "Sal a gosto",
                "1 xícara de farinha de mandioca para empanar",
                "Mais 2 xícaras de farinha de mandioca para acompanhar",
                "Óleo para fritar",
            ],
            preparo: [
                "Descongele a polpa de açaí. Se estiver muito grossa, bata com um pouco de água até ficar cremosa.",
                "Tempere os filés com o limão e o sal e deixe descansar por 15 minutos.",
                "Passe os filés na farinha e frite em óleo quente até dourar.",
                "Sirva o açaí em tigelas, com o peixe frito e a farinha de mandioca à parte.",
            ],
        },
        {
            slug: "tambaqui-na-brasa",
            nome: "Tambaqui na brasa",
            origem: "Indígena e ribeirinha",
            descricao:
                "Costela de tambaqui, peixe típico dos rios da Amazônia, assada na brasa. É muito comum nas feiras e nos restaurantes de Manaus.",
            porcoes: "4 porções",
            tempo: "1h30",
            dificuldade: "Média",
            ingredientes: [
                "1,5 kg de costela de tambaqui",
                "Suco de 2 limões",
                "4 dentes de alho amassados",
                "2 colheres (sopa) de azeite",
                "Sal e pimenta-do-reino a gosto",
                "Farofa de farinha de mandioca e vinagrete (tomate, cebola e coentro) para servir",
            ],
            preparo: [
                "Tempere a costela com o limão, o alho, o sal e a pimenta e deixe descansar por 1 hora na geladeira.",
                "Pincele com o azeite.",
                "Asse na brasa, com a pele para cima e em fogo médio, por cerca de 40 minutos, virando só uma vez. Em casa, use o forno a 220 °C pelo mesmo tempo.",
                "Sirva quente, com a farofa e o vinagrete.",
            ],
            nota: "Peça ajuda a um adulto para trabalhar com a brasa ou com o forno quente.",
        },
        {
            slug: "bolo-de-macaxeira",
            nome: "Bolo de macaxeira",
            origem: "Indígena",
            descricao:
                "Bolo úmido feito de macaxeira ralada e leite de coco, um doce simples herdado dos povos indígenas, muito comum nas casas do Norte.",
            porcoes: "10 fatias",
            tempo: "1h15",
            dificuldade: "Fácil",
            ingredientes: [
                "500 g de macaxeira (aipim) crua e descascada",
                "1 xícara de leite de coco",
                "1 xícara de leite",
                "3 ovos",
                "1 xícara de açúcar",
                "2 colheres (sopa) de manteiga",
                "1 colher (sopa) de fermento em pó",
                "Coco ralado para decorar",
            ],
            preparo: [
                "Aqueça o forno a 180 °C e unte uma forma.",
                "Rale a macaxeira ou bata no liquidificador com os leites, os ovos, o açúcar e a manteiga.",
                "Junte o fermento e misture bem com uma colher.",
                "Despeje na forma, polvilhe o coco ralado e asse por cerca de 45 minutos, até dourar.",
                "Espere esfriar um pouco antes de desenformar.",
            ],
            nota: "Use macaxeira (também chamada de aipim ou mandioca-mansa), vendida em mercados, e nunca mandioca-brava.",
        },
    ],
};

export default norte;
