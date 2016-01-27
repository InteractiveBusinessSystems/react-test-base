var AppStore = require('../stores/app-store.js');

var AppActions = {
    increase: function (num) {
        return {
            amt: num,
            type: 'INCREMENT'
        };
    },
    decrease: function (num) {
        return {
            amt: num,
            type: 'DECREMENT'
        };
    }
};

module.exports = AppActions;