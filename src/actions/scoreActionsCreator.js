'use strict';

var Actions = require('../constants/actions');
var AppDispatcher = require('../dispatcher/AppDispatcher');

class ScoreActionsCreator {
    static increaseByOne() {
        AppDispatcher.handleAction({
            type: Actions.SCORE_INCREASE_BY_1
        });
    }
}

export default ScoreActionsCreator;
