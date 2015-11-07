var Actions = require('./actions');

module.exports = [
    {
        id: 1,
        name: 'One per second',
        cost: 5,
        description: 'Get a star every second',
        action: Actions.SCORE_AUTO_INCREASE_1_PER_SEC
    },

    {
        id: 2,
        name: 'Five per second',
        cost: 15,
        description: 'Get five stars every second',
        action: Actions.SCORE_AUTO_INCREASE_5_PER_SEC
    }
];