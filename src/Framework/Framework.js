import React from 'react';
import ProgressBar from './../ProgressBar/ProgressBar';
import FourCbar from './../FourCbar/FourCbar';
import StepBoard from './../StepBoard/StepBoard';
import Modal from './../Modal/Modal'
import {PRBLSTEPS,STEP} from "./../model/Model"
import Intro from "./../Intro/Intro"

class Framework extends React.Component {

    constructor(props)  {

        super(props);
        this.state = {
            actualStep: "Introdução",
            modal: false
        }
    }

    componentDidMount() {
        this.setState({actualStep: "Introdução"})
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


        if(this.state.actualStep === "Introdução") {
            return(
            
                <div className="framework-container">
                    <ProgressBar steps={PRBLSTEPS} actualStep={this.state.actualStep} click={this.changeStepClick} />
                    <Intro step={STEP[this.state.actualStep]}/>
                </div>
            )
        } else {
        
        let stepSelected = STEP[this.state.actualStep]
        let modal = this.state.modal ?
            stepSelected.habilidades[this.state.modal] : 
            false;
        
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


}

export default Framework;