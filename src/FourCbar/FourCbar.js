import React, { Component } from 'react';

class FourCbar extends Component {
    render() {
        return( 
            <nav className="fCBar">
                <h1> {this.props.count} </h1>
                
                <ul>
                    <li onClick={this.props.modal} id={this.props.step + "-critico"}>
                        <i class="fas fa-puzzle-piece"></i>
                        <br/>
                        Pensamento<br/>Crítico
                    </li>
                    <li onClick={this.props.modal} id={this.props.step + "-criatividade"}>
                        <i class="far fa-lightbulb"></i>
                        <br />
                        Criatividade
                    </li>
                    <li onClick={this.props.modal} id={this.props.step + "-colaboracao"}>
                        <i class="fas fa-people-carry"></i>
                        <br/>
                        Colaboração
                    </li>
                    <li onClick={this.props.modal} id={this.props.step + "-comunicacao"}>
                        <i class="far fa-comments"></i>
                        <br />
                        Comunicação
                    </li>
                </ul>
            </nav>
        )
    }
}

export default FourCbar;