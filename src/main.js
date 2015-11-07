'use strict';

var React = require('react');
var Title = require('./components/title');
var Score = require('./components/score');
var IncreaseButton = require('./components/increaseButton');
var AvailableUpgrades = require('./components/availableUpgrades');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Title />
                <Score />
                <IncreaseButton />
                <AvailableUpgrades />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));