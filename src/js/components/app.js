var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var History = require('react-router').hashHistory;
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
                <Router history={History}>
                    <Route path="/" component={Counter} />
                    <Route path="*" component={NotFound} />
                </Router>
            </Template>
        )
    }
});

module.exports = App;