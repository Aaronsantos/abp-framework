import React from 'react';
import ProgressBar from './../ProgressBar/ProgressBar';
import FourCbar from './../FourCbar/FourCbar';
import StepBoard from './../StepBoard/StepBoard';
import Modal from './../Modal/Modal'
import {PRBLSTEPS,STEP} from "./../model/Model"

class Framework extends React.Component {

    constructor(props)  {

        super(props);
        this.state = {
            actualStep: "Planejamento",
            modal: false
        }
    }

    componentDidMount() {
        this.setState({actualStep: "Planejamento"})
    }  

    modalClickHandler = e => {
        e.preventDefault();
        let id = e.target.id
        if(id === 'modal')
            this.setState({modal:false})
        else {
            let skill = id.split('-')[1];
            
            this.setState({modal : skill})
        }
        
    }

    changeStepClick = e => {
        e.preventDefault();
        this.setState({actualStep : e.target.id.split('-')[1], modal: false})
    }

    render() {



        console.log(STEP[this.state.actualStep].habilidades[this.state.modal])
        let stepSelected = STEP[this.state.actualStep]
        console.log(stepSelected.habilidades)
        console.log(this.state.modal)
        let modal = this.state.modal ? stepSelected.habilidades[this.state.modal] : false;
        return(
            
            <div className="framework-container">
                <ProgressBar steps={PRBLSTEPS} actualStep={this.state.actualStep} click={this.changeStepClick} />
                <StepBoard step={STEP[this.state.actualStep]}/>
                <FourCbar step = {this.state.actualStep} modal={this.modalClickHandler} count= {STEP[this.state.actualStep]['cont']}/>
                <Modal modalInfo={ modal } click={this.modalClickHandler}  skill={this.state.modal} step={this.state.actualStep}/>
            </div>
        )
    }


}

export default Framework;