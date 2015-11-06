'use strict';

var React = require('react');
var ScoreStore = require('../stores/scoreStore');

function getScore(){
    return {score: ScoreStore.get()};
}

var Score = React.createClass({
    _onChange: function() {
        this.setState(getScore());
    },
    getInitialState: function(){
        return getScore();
    },
    componentDidMount: function() {
        ScoreStore.addChangeListener(this._onChange);
    },
    render: function () {
        return (
                <h2> Your score is {this.state.score}</h2>
        );
    }
});

module.exports = Score;
