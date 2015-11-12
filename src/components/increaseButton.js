'use strict';

import React from 'react';
import ScoreActions from '../actions/scoreActionsCreator';

class IncreaseButton extends React.Component {
    constructor(){
        super();
        this.render = this.render.bind(this);
    }

    _onClick() {
        ScoreActions.increaseByOne();
    }

    render() {
        return (
            <button onClick={this._onClick}> +1 </button>
        );
    }
}

export default IncreaseButton;
