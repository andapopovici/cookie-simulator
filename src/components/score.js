'use strict';

import React from 'react';
var ScoreStore = require('../stores/scoreStore');

class Score extends React.Component {
    constructor(){
        super();
        this.state = this.getScoreState();
        this._onChange = this._onChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    }

    getScoreState(){
        return {score: ScoreStore.get()};
    }

    _onChange() {
        this.setState(this.getScoreState());
    }

    componentDidMount() {
        ScoreStore.addChangeListener(this._onChange);
    }

    render() {
        return (
                <h2> Your score is {this.state.score}</h2>
        );
    }
}

export default Score;
