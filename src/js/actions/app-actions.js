var AppStore = require('../stores/app-store.js');

export function increase (num) {
    return {
        amt: num,
        type: 'INCREMENT'
    };
}

export function decrease (num) {
    return {
        amt: num,
        type: 'DECREMENT'
    };
}