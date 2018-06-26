
export const PRBLSTEPS = [{nome: "Introdução", icone: "fas fa-book"}, {nome: "Planejamento", icone: "fas fa-clipboard-list"}, {nome:"Lançamento do projeto", icone: "far fa-paper-plane"}, {nome:"Pesquisa", icone: "fas fa-search"}, {nome:"Produção", icone: "fas fa-wrench"}, { nome:"Apresentações", icone: "far fa-eye"}];
export const FOURC =  {
    "comunicacao" :  {nome: "Comunicação", icone: "far fa-comments"},
    "critico" :  {nome: "Pensamento Crítico", icone: "fas fa-puzzle-piece"},
    "colaboracao":  {nome: "Colaboração", icone: "fas fa-people-carry"},
    "criatividade" : {nome: "Criatividade", icone: "far fa-lightbulb"} 
}


let planejamento = {
    nome : "Planejamento",
    cont: 1,
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

let pesquisa = {
    nome : "Pesquisa",
    cont: 3,
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
    } }

    let lancamento = {
    nome : "Lançamento do projeto",
    cont: 2,
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

