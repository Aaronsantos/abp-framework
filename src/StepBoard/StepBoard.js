import React, { Component } from 'react';

export default ({ step }) => {
    return (
        <main className="etapa">
            <h2 className="title" >{step.nome}</h2>
            <hr />
            <div className="etapa-container">
                <section className="card desc"> {step.desc.split('\n').map(par => (<p> {par} </p>))} </section>
                <section className="card objetivos"> <h3 className="title"> Objetivos </h3><hr />   <ul> {step.objetivos.map(objetivo => <li> {objetivo} </li>)} </ul> </section>
                <section className="card atividades"> <h3 className="title">Como realizar? </h3> <hr/>  <ul> {step.atividades.map(atvd => <li> {atvd} </li>)} </ul> </section>
                <section className="card lembrete"> <h3 className="title"> Atenção! </h3><hr /> <i class="fas fa-exclamation-triangle"></i> <br/> <p> {step.lembrete.texto} </p> </section>
            </div>
        </main>
    );

}