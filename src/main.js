'use strict';

import React from 'react';
import Title from './components/title';
import Score from './components/score';
import IncreaseButton from './components/increaseButton';
import AvailableUpgrades from './components/availableUpgrades';

class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Score />
                <IncreaseButton />
                <AvailableUpgrades />
            </div>
        );
    }
}

React.render(<App />, document.getElementById('app'));
