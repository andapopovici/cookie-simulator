'use strict';

var React = require('react');
var Title = require('./components/title');
var Score = require('./components/score');
var IncreaseButton = require('./components/increaseButton');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Title />
                <Score />
                <IncreaseButton />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));