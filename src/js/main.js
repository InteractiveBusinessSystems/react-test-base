var App = require('./components/app.js');
var React = require('react');
import { Provider } from 'react-redux';
var AppStore = require('./stores/app-store.js');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <Provider store={AppStore}>
        <App />
    </Provider>
    , document.getElementById('main'));