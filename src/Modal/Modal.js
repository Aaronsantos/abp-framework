import React, { Component } from 'react';

export default ({ modalInfo, click }) => {
    if (modalInfo) {
        alert('foi')
        return (
            <div id={'modal'} onClick={click}>
                <div className={'modalContent'}>
                    {modalInfo.split('\n').map(par => (<p>{par}</p>))}
                </div>
            </div>
        )
    }
    else {
        alert('não foi')
        return (<div />)
    }
}