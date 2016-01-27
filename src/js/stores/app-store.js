var createStore = require('redux').createStore;

function counter(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                count: state.count + action.amt
            });
        case 'DECREMENT':
            return Object.assign({}, state, {
                count: state.count - action.amt
            });
        default:
            return state
    }
}

function defaultState() {
    return {count: 0};
}

var store = createStore(counter, defaultState());

module.exports = store;