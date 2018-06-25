
export const PRBLSTEPS = [{nome: "Introdução", icone: "fas fa-book"}, {nome: "Planejamento", icone: "fas fa-clipboard-list"}, {nome:"Lançamento do projeto", icone: "far fa-paper-plane"}, {nome:"Pesquisa", icone: "fas fa-search"}, {nome:"Produção", icone: "fas fa-wrench"}, { nome:"Apresentações", icone: "far fa-eye"}];

let planejamento = {
    nome : "Planejamento",
    cont: 1,
    desc: "uehauehauehauehaue\n auehau ehaue aue hauehaueaheuaheu aeua huaeauehaue h",
    objetivos: ["testar", "testar", "testar"],
    atividades: ["programar", "programar", "programar"],
    lembrete: {
        texto : "lorem ipsum sic amet iaheuaheauehuaheuaheuahe uahue haueahuehauehaueh a",
        img : "",
    },
    habilidades : {
        "comunicacao" :  ' AEAEAEAEA',
        "critico" : 'AEAEAEA',
        "coolaboracao": 'AEAEAE',
        "criatividade" : 'AEAEAEAEAE'
    }

}

let pesquisa = {
    nome : "Pesquisa",
    cont: 3,
    desc: "uehauehauehauehaue auehau ehaue aue hauehaueaheuaheu aeua huaeauehaue h uaheuaheuaehuaheuaheuaheuaheuaheuahe uaheuaehuahe uaheuaheuah u hauehaueh auu aheuah uahueaheua heua eua huah euah uaheuaheuaheuaehuaehuaheuaehauehauehauhe uehauehauehauehaue auehau ehaue aue hauehaueaheuaheu aeua huaeauehaue h uaheuaheuaehuaheuaheuaheuaheuaheuahe uaheuaehuahe uaheuaheuah u hauehaueh auu aheuah uahueaheua heua eua huah euah uaheuaheuaheuaehuaehuaheuaehauehauehauhe",
    objetivos: ["pesquisar", "pesquisar", "pesquisar", "pesquisar muitas coisas teste", "pesquisar" ],
    atividades: ["programar", "programar", "programar"],
    lembrete: {
        texto : "lorem ipsum sic amet iaheuaheauehuaheuaheuahe uahue haueahuehauehaueh a",
        img : "",
    },
    habilidades : {
        "comunicacao" :  ' AEAEAEAEA',
        "critico" : 'AEAEAEA',
        "coolaboracao": 'AEAEAE',
        "criatividade" : 'AEAEAEAEAE'
    }
}

let lancamento = {
    nome : "Lançamento do projeto",
    cont: 2,
    desc: "uehauehauehauehaue auehau ehaue aue hauehaueaheuaheu aeua huaeauehaue h",
    objetivos: ["lançar", "lançar", "lançar"],
    atividades: ["programar", "programar", "programar"],
    lembrete: {
        texto : "lorem ipsum sic amet iaheuaheauehuaheuaheuahe uahue haueahuehauehaueh a",
        img : "",
    },
    habilidades : {
        "comunicacao" :  '',
        "critico" : '',
        "coolaboracao": '',
        "criatividade" : ''
    }
}



export const STEP = {
    "Planejamento" : planejamento,
    "Pesquisa" : pesquisa,
    "Lançamento do projeto" : lancamento
}

