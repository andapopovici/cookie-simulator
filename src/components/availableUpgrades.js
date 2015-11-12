'use strict';

import React from 'react';
var UpgradesStore = require('../stores/upgradesStore');

class AvailableUpgrades extends React.Component{
    constructor() {
        super();
        this.state = this.getAvailableUpgrades();
        this._onChange = this._onChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    }

    _onChange() {
        this.setState(this.getAvailableUpgrades());
    }

    getAvailableUpgrades() {
        return {upgrades: UpgradesStore.getAvailableUpgrades()};
    }

    componentDidMount() {
        UpgradesStore.addAvailableUpgradesChangeListener(this._onChange);
    }

    render() {
        return (
            <div>
                <h3> Available upgrades:</h3>
                {this.state.upgrades.map(function(item, idx){
                    return <p key={idx}> {item.name} </p>;
                })}
            </div>
        );
    }
}

export default AvailableUpgrades;
