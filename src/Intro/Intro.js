import React, { Component } from 'react';

export default ({ step }) => {
    return ( 

        <main className="etapa">
            <h2 className="title" > Introdução </h2>
            <hr />
            
            <div className="intro">
            <section>
                <p> Aprendizagem Baseada em projetos (ABP) é uma metodologia ativa de ensino, que busca desenvolver o processo de ensino-aprendizagem por meio da aplicação de projetos envolvendo problemas e desafios autênticos e realistas, incentivando autonomia, trabalho em equipe e criatividade no processo de aprendizagem.  </p>
                <p> A ABP se diferencia do simples uso de projeto como ferramenta didática pois prevê uma série de requisitos e atividades para uma aplicação eficaz, o projeto não é uma simples aplicação dos conceitos teóricos  mas o caminho para construção e compreensão destas e outras habilidades. </p>
                <p> Os projetos variam em complexidade, nível de autonomia dos estudantes e extensão. Sendo em grande parte práticas de longo prazo (de 4 semanas à 1 semestre ou 1 ano).</p>
            </section>
            <section class="definitions">
                <div className="card">
                    <h1> Âncora: </h1> 
                    Contexto do mundo real na qual o projeto vai se situar. pode ser apresentada de várias maneiras, correspondências, matérias jornalísticas, um problema comunitário, etc.

                </div>

                <div className="card">
                <h1> Questão direcionadora: </h1> 
                A âncora apresenta um ambiente amplo, já as questões direcionadoras devem ser objetivas e concisas, elas  irão nortear os estudantes a que tipo investigação realizar e que habilidades/conhecimentos devem ser desenvolvidos.
                </div>

                 <div className="card">
                    <h1>Artefatos:</h1>
                    São itens criados ao longo da execução de um projeto, representam possíveis soluções ou aspectos da solução do problema. podem ser portfólios, páginas web, relatórios, apresentações, etc. 
                </div>

                <div className="card">
                    <h1>Rubrica:</h1> 
                    Notas e documentações para avaliação do processo e definir os padrões a serem atingidos. Diversas rubricas devem ser utilizadas durante o processo para se definir parâmetros objetivos de avaliação e feedback dos estudantes.
                </div>

                <div></div>
            </section>

            </div>
        </main>
    );

}