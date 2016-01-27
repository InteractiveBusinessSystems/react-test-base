var AppStore = require('../stores/app-store.js');

var AppActions = {
    increase: function () {
        return {type: 'INCREMENT'};
    },
    decrease: function () {
        return {type: 'DECREMENT'};
    }
};

module.exports = AppActions;