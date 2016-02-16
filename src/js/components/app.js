var React = require('react');
import { Router, Route } from 'react-router';
var Template = require('./template.js');

var Counter = require('./counter.js');

var NotFound = () => (
    <h1>Not Found!</h1>
);

var About = () => (
    <div>
        <h1>About!</h1>
    </div>
);

var UserRoutes = () => (
    <Route>
        <Route />
    </Route>
);

var App = React.createClass({
    render: function () {
        return (
            <Router>
                <Route component={Template}>
                    <Route path="/" name="Counter" component={Counter}/>
                    <Route path="/about" name="About" component={About}/>
                    <Route path="*" component={NotFound}>
                        {UserRoutes}
                    </Route>

                </Route>
            </Router>
        )
    }
});

module.exports = App;