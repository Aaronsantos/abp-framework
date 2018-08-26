import React, { Component } from 'react';
import logo from '../assets/img/logo.png';

class ProgressBar extends Component {

    render() {
        let cont = 1;
        return (<nav className="etapas-barra animated slideInLeft"> 
            <h1 class="logo"><img  src={logo} alt="ABP framework"/></h1>
            <div className="opcoes-container">
            {
                this.props.steps.map( step => {
                    
                     let classnames = this.props.actualStep === step.nome ? ("selectedStep title") : ("title");
    
                    return (<button key={step.nome} id={"btn-" + step.nome} onClick={this.props.click} className={classnames}> 
                        <i className={step.icone} id={"icon-"+step.nome} ></i> <br/> {cont++ + ' ' + step.nome} </button>) 

                })
            }

            </div>
        </nav> )
    }


}

export default ProgressBar;