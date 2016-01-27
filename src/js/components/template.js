var React = require('react');

import { Link } from 'react-router'

var Template = React.createClass({
    render: function () {
        var routes = this.props.routes[0].childRoutes
            .filter(x => x.path !== "*")
            .map(x => (
                <li key={x.path}>
                    <Link to={x.path}>{x.name}</Link>
                </li>
            ));
        return (
            <div className="container">
                <ul>
                    {routes}
                </ul>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Template;