'use strict';

var React = require('react');
var UpgradesStore = require('../stores/upgradesStore');

function getAvailableUpgrades(){
    return {upgrades: UpgradesStore.getAvailableUpgrades()};
}

var AvailableUpgrades = React.createClass({
    _onChange: function() {
        this.setState(getAvailableUpgrades());
    },
    getInitialState: function(){
        return getAvailableUpgrades();
    },
    componentDidMount: function() {
        UpgradesStore.addAvailableUpgradesChangeListener(this._onChange);
    },
    render: function () {
        return (
            <div>
                <h3> Available upgrades:</h3>
                {this.state.upgrades.map(function(item){
                    return <p> {item.name} </p>;
                })}
            </div>
        );
    }
});

module.exports = AvailableUpgrades;