'use strict';

var Actions = require('../constants/actions');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ScoreActions = {
    increaseByOne: function(){
        AppDispatcher.handleAction({
            type: Actions.SCORE_INCREASE_BY_1
        });
    }
};

module.exports = ScoreActions;