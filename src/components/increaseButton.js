'use strict';

var React = require('react');
import ScoreActions from '../actions/scoreActionsCreator';

var IncreaseButton = React.createClass({
    _onClick: function(){
        ScoreActions.increaseByOne();
    },

    render: function () {
        return (
            <button onClick={this._onClick}> +1 </button>
        );
    }
});

module.exports = IncreaseButton;
