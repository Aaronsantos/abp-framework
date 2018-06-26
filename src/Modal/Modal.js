import React, { Component } from 'react';
import {FOURC} from "./../model/Model"; 

export default ({ modalInfo, click, skill, step }) => {
    if (modalInfo) {
        return (
            <div id={'modal'} onClick={click}>
            
                <div className={'modalContent'}>
                    <header>
                            {FOURC[skill].nome}
                            <i className={FOURC[skill].icone} /> 
                    </header>
                    <main>
                        {modalInfo.split('\n').map(par => (<p>{par}</p>))}

                    </main>
                </div>
            </div>
        )
    }
    else {
        return (<div />)
    }
}