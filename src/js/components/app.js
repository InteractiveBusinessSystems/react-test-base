var React = require('react');
import {Router, Route, hashHistory} from 'react-router';
var Template = require('./template.js');

var Counter = require('./counter.js');

var NotFound = () => (
    <h1>Not Found!</h1>
);

var About = () => (
    <h1>About!</h1>
);

var App = React.createClass({
    render: function () {
        return (
                <Router history={hashHistory}>
                    <Route component={Template}>
                        <Route path="/" name="Counter" component={Counter} />
                        <Route path="/c2" name="About" component={About} />
                        <Route path="*" component={NotFound} />
                    </Route>
                </Router>
        )
    }
});

module.exports = App;