import React, { Component } from 'react';

class FourCbar extends Component {
    render() {
        return( 
            <nav className="fCBar animated slideInRight">
                <h1> {this.props.count} </h1>
                
                <ul>
                    <li onClick={this.props.modal} id={ "btn-critico"}>
                        <i className="fas fa-puzzle-piece"></i>
                        <br/>
                        Pensamento<br/>Crítico
                    </li>
                    <li onClick={this.props.modal} id={ "btn-criatividade"}>
                        <i className="far fa-lightbulb"></i>
                        <br />
                        Criatividade
                    </li>
                    <li onClick={this.props.modal} id={ "btn-colaboracao"}>
                        <i className="fas fa-people-carry"></i>
                        <br/>
                        Colaboração
                    </li>
                    <li onClick={this.props.modal} id={ "btn-comunicacao"}>
                        <i className="far fa-comments"></i>
                        <br />
                        Comunicação
                    </li>
                </ul>
            </nav>
        )
    }
}

export default FourCbar;