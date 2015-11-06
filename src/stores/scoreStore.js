'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Events = require('../constants/events');
var Actions = require('../constants/actions');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var score = 0;

var ScoreStore = assign({}, EventEmitter.prototype, {
    get: function() {
        return score;
    },

    emitChange: function() {
        this.emit(Events.SCORE_CHANGED);
    },

    addChangeListener: function(callback) {
        this.on(Events.SCORE_CHANGED, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(Events.SCORE_CHANGED, callback);
    }
});

ScoreStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {
        case Actions.SCORE_INCREASE_BY_1:
            score++;
            ScoreStore.emitChange();
            break;
    }
});

module.exports = ScoreStore;