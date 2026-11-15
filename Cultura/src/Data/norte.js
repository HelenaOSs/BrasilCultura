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
        "No fim do século XIX, o ciclo da borracha atraiu milhares de migrantes do Nordeste para a Amazônia. Hoje, a culinária do Norte une o conhecimento indígena aos ingredientes da floresta e dos rios.",
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

    comidas: [
        {
            slug: "tacaca",
            nome: "Tacacá",
            origem: "Indígena",
            descricao:
                "Caldo quente de tucupi com goma de mandioca, jambu e camarão seco, servido em cuia. É tradição nas ruas de Belém e de Manaus.",
        },
        {
            slug: "pato-no-tucupi",
            nome: "Pato no tucupi",
            origem: "Indígena e portuguesa",
            descricao:
                "Pato cozido no tucupi com jambu. É o prato principal do almoço do Círio de Nazaré, a grande festa religiosa de Belém.",
        },
        {
            slug: "manicoba",
            nome: "Maniçoba",
            origem: "Indígena e portuguesa",
            descricao:
                "Folhas de mandioca-brava moídas e cozidas por vários dias, com carnes de porco e defumados. É conhecida como a feijoada paraense.",
        },
        {
            slug: "acai-com-peixe-frito",
            nome: "Açaí com peixe frito",
            origem: "Indígena",
            descricao:
                "No Pará, o açaí é comida de todo dia: servido sem açúcar, com peixe frito e farinha de mandioca.",
        },
    ],

    receitas: [
        {
            slug: "tacaca",
            nome: "Tacacá",
            subtitulo: "O caldo das ruas de Belém",
            descricao:
                "Caldo quente e picante de tucupi com goma de mandioca, jambu e camarão seco, servido em cuia. O jambu deixa a boca levemente dormente, e é isso que torna o prato inconfundível.",
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
            nota: "Compre tucupi pronto, de boa procedência, e ferva bem antes de servir: o tucupi cru contém substâncias tóxicas da mandioca-brava.",
        },
        {
            slug: "acai-com-peixe-frito",
            nome: "Açaí com peixe frito e farinha",
            subtitulo: "A refeição de todo dia no Pará",
            descricao:
                "No Pará, o açaí não é só sobremesa: é prato principal. Servido sem açúcar, combina com o peixe frito e a farinha de mandioca.",
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
    ],
};

export default norte;
