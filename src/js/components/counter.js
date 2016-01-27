var React = require('react');
var connect = require('react-redux').connect;
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

function getState() {
    return AppStore.getState();
}

var Counter = React.createClass({
    increase: function () {
        this.props.increase();
    },
    decrease: function () {
        AppStore.dispatch(AppActions.decrease());
    },

    render: function () {
        return (
            <div>
                <h1>Test {this.props.count}</h1>
                <button onClick={this.increase}>Inc</button>
                <button onClick={this.decrease}>Dec</button>
                <input type="number" ref="num"/>
            </div>
        )
    }
});

function select(state) {
    return {
        count: state.count
    }
}

module.exports = connect(select, AppActions)(Counter);