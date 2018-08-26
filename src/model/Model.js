//{nome: "Introdução", icone: "fas fa-book"}
export const PRBLSTEPS = [ {nome: "Planejamento", icone: "fas fa-clipboard-list"}, {nome:"Lançamento do projeto", icone: "far fa-paper-plane"}, {nome:"Pesquisa", icone: "fas fa-search"}, {nome:"Produção", icone: "fas fa-wrench"}, { nome:"Apresentações", icone: "far fa-eye"}];
export const FOURC =  {
    "comunicacao" :  {nome: "Comunicação", icone: "far fa-comments"},
    "critico" :  {nome: "Pensamento Crítico", icone: "fas fa-puzzle-piece"},
    "colaboracao":  {nome: "Colaboração", icone: "fas fa-people-carry"},
    "criatividade" : {nome: "Criatividade", icone: "far fa-lightbulb"} 
}


let planejamento = {
    nome : "Planejamento",
    cont: 1,
    desc: "A etapa de planejamento antecede o início das aulas, é própria do professor para alocar os recursos e esboçar o que e como se desenvolverá o projeto. Diversas questões devem ser levantadas nessa etapa para garantir uma devida aplicação da ABP, dentre elas, Que recursos tecnológicos estão à disposição? Quanto tempo será necessário para preparação de materiais de apoio? Que padrões(ementas, programas) serão seguidos e aplicados?",
    objetivos: ["Definir prazos e cronogramas de atividades",
        "Identificar conhecimentos chaves e a questão direcionadora.",
        "Definir padrões de rubrica de avaliação do projeto",
        "Identificar recursos disponíveis (materiais e imateriais)" 
        ],
    atividades: ["Pesquisa de notícias e publicações sobre os possíveis temas/questões  atuais para abordagem no projeto",
        "Reunião junto à instituição para identificação de recursos disponíveis.",
        ""
         
        ],
    lembrete: {
        texto : "lorem ipsum sic amet nostrum volupta",
        img : "",
    },
    habilidades : {
        "comunicacao" :  ' teste comunicação',
        "critico" : 'teste critico',
        "colaboracao": 'teste colaboração',
        "criatividade" : 'teste criatividade'
    }

}

let pesquisa = {
    nome : "Pesquisa",
    cont: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, nihil necessitatibus explicabo dolor nostrum voluptas mollitia ipsum placeat quidem omnis officiis rerum porro minima ad odit ullam voluptate neque impedit.",
    objetivos: ["Apresentar e refletir âncora e questão direcionadora do projeto", "Estabelecer metas e definir equipes", "Realizar apresentações e aulas introdutórias."],
    atividades: ["Dinâmicas de Brainstorming sobre a âncora e a questão direcionadora ",
                 "Apresentar reportagens, matérias de jornal, cartas e artefatos que ilustrem a âncora e/ou questão direcionadora"],
    lembrete: {
        texto : "Voz de escolha é importante! essa é hora de captar a motivação dos estudantes por meio de um tema que os envolva! Claro, envolvendo a âncora e questão direcionadora do projeto.",
        img : "",
    },
    habilidades : {
        "comunicacao" :  ' teste comunicação',
        "critico" : 'teste critico',
        "colaboracao": 'teste colaboração',
        "criatividade" : 'teste criatividade'
    } }

    let lancamento = {
    nome : "Lançamento do projeto",
    cont: 2,
    desc: "Nessa etapa é apresentada a proposta de projeto para a turma. Costuma iniciar no primeiro dia da Unidade ABP, é o momento de apresentar as problemáticas, contextos e  áreas de conhecimento  envolvidas pelo projeto para os estudantes. Definir equipes, realizar dinâmicas de sondagem ou realizar aulas introdutórias também fazem parte dessa etapa. ",
    objetivos: ["Apresentar e refletir âncora e questão direcionadora do projeto", "Estabelecer metas e definir equipes", "Realizar apresentações e aulas introdutórias."],
    atividades: ["Dinâmicas de Brainstorming sobre a âncora e a questão direcionadora ",
                 "Apresentar reportagens, matérias de jornal, cartas e artefatos que ilustrem a âncora e/ou questão direcionadora"],
    lembrete: {
        texto : "Voz de escolha é importante! essa é hora de captar a motivação dos estudantes por meio de um tema  ou atividade que os envolva!",
        img : "../assets/img/lancamentoComunica.png",
    },
    habilidades : {
        "comunicacao" :  'Incentive os estudantes a comunicarem suas inquietações e idéias acerca da questão direcionadora e a âncora. Proponha que elaborem suas idéias e seus anseios em relação ao projeto, discutam entre si e apresentem à turma em rodas de discussões, dinâmicas de brainstorming, etc.',
        "critico" : 'teste critico',
        "colaboracao": 'teste colaboração',
        "criatividade" : 'teste criatividade'
    }
 }

    let producao = {
    nome : "Produção",
    cont: 4,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, nihil necessitatibus explicabo dolor nostrum voluptas mollitia ipsum placeat quidem omnis officiis rerum porro minima ad odit ullam voluptate neque impedit.",
    objetivos: ["teste", "teste", "teste"],
    atividades: ["teste", "teste", "teste"],
    lembrete: {
        texto : "lorem ipsum sic amet nostrum volupta",
        img : "",
    },
    habilidades : {
        "comunicacao" :  ' teste comunicação',
        "critico" : 'teste critico',
        "colaboracao": 'teste colaboração',
        "criatividade" : 'teste criatividade'
    }
 }

 let apresentacao = {
    nome : "Apresentações",
    cont: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, nihil necessitatibus explicabo dolor nostrum voluptas mollitia ipsum placeat quidem omnis officiis rerum porro minima ad odit ullam voluptate neque impedit.",
    objetivos: ["teste", "teste", "teste"],
    atividades: ["teste", "teste", "teste"],
    lembrete: {
        texto : "lorem ipsum sic amet nostrum volupta",
        img : "",
    },
    habilidades : {
        "comunicacao" :  ' teste comunicação',
        "critico" : 'teste critico',
        "colaboracao": 'teste colaboração',
        "criatividade" : 'teste criatividade'
    }
 }


export const STEP = {
    "Introdução" : {nome: "Introdução"},
    "Planejamento" : planejamento,
    "Pesquisa" : pesquisa,
    "Lançamento do projeto" : lancamento,
    "Produção" : producao,
    "Apresentações" : apresentacao
}

