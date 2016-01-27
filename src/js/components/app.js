var React = require('react');
import {Router, Route, hashHistory} from 'react-router';
var Template = require('./template.js');

var Counter = require('./counter.js');

var NotFound = React.createClass({
    render: function () {
        return (
            <h1>Not Found!</h1>
        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <Template>
                <Router history={hashHistory}>
                    <Route path="/" component={Counter} />
                    <Route path="*" component={NotFound} />
                </Router>
            </Template>
        )
    }
});

module.exports = App;