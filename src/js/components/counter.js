var React = require('react');
var connect = require('react-redux').connect;
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

function getState() {
    return AppStore.getState();
}

var Counter = React.createClass({
    getInitialState: function () {
        return {
            val: 1
        }
    },
    handleChange: function (event) {
        this.setState({val: event.target.value});
    },
    getNum: function () {
        var num = this.state.val;
        num = num === "" ? 1 : num;
        return parseInt(num);
    },
    increase: function () {
        this.props.increase(this.getNum());
    },
    decrease: function () {
        AppStore.dispatch(AppActions.decrease(this.getNum()));
    },

    render: function () {
        return (
            <div>
                <h1>Test {this.props.count}</h1>
                <button onClick={this.increase}>Inc</button>
                <button onClick={this.decrease}>Dec</button>
                <input type="number" value={this.state.val} onChange={this.handleChange}/>
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