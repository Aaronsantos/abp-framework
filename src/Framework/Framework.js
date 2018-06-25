import React from 'react';
import ProgressBar from './../ProgressBar/ProgressBar';
import FourCbar from './../FourCbar/FourCbar';
import StepBoard from './../StepBoard/StepBoard';
import {PRBLSTEPS, STEP} from "./../model/Model"

class Framework extends React.Component {

    constructor(props)  {

        super(props);
        this.state = {
            actualStep: "Planejamento"
        }
    }

    componentDidMount() {
        this.setState({actualStep: "Planejamento"})
    }  

    modalClickHandler = e => {
        e.preventDefault();
        alert(e.target.id)
    }

    changeStepClick = e => {
        e.preventDefault();
        this.setState({actualStep : e.target.id.split('-')[1]})
    }

    render() {
        return(
            
            <div className="framework-container">
                <ProgressBar steps={PRBLSTEPS} actualStep={this.state.actualStep} click={this.changeStepClick} />
                <StepBoard step={STEP[this.state.actualStep]}/>
                <FourCbar step = {this.state.actualStep} modal={this.modalClickHandler} count= {STEP[this.state.actualStep]['cont']}/>
            </div>
        )
    }


}

export default Framework;