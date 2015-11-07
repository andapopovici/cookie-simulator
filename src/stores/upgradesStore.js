'use strict';

var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var appDispatcher = require('../dispatcher/AppDispatcher');
var scoreStore = require('./scoreStore');
var ACTIONS = require('../constants/actions');
var UPGRADES = require('../constants/upgrades');
var EVENTS = require('../constants/events');


var availableUpgrades = [];

var UpgradesStore = assign({}, EventEmitter.prototype, {
    getAvailableUpgrades: function(){
        return availableUpgrades;
    },

    emitAvailableUpgradesChange: function(){
        this.emit(EVENTS.AVAILABLE_UPGRADES_CHANGED);
    },

    addAvailableUpgradesChangeListener: function(callback) {
        this.on(EVENTS.AVAILABLE_UPGRADES_CHANGED, callback);
    },

    removeAvailableUpgradesChangeListener: function(callback){
        this.removeListener(EVENTS.AVAILABLE_UPGRADES_CHANGED, callback);
    }
});

UpgradesStore.listenToScore = scoreStore.addChangeListener(function(){
    var score = scoreStore.get();

    // find the available upgrades for this score
    availableUpgrades = _.filter(UPGRADES, function(upgrade){
        return upgrade.cost <= score;
    });

    if (availableUpgrades.length > 0){
        UpgradesStore.emitAvailableUpgradesChange();
    }
});

UpgradesStore.dispatchToken = appDispatcher.register(function(payload) {

});

module.exports = UpgradesStore;