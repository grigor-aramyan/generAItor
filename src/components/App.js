import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainMenu from './profiles/userProfile/MainMenu';

// actions
import {
    incrementCounter,
    incrementCounterByNumber,
    decrementCounter,
    decrementCounterByNumber
} from '../actions/counterActions';

class App extends Component {
    state = {
        counterInput: 0
    }

    onIncrementWithNumber = () => {
        const {
            counterInput
        } = this.state;
        this.props.incrementCounterByNumber(parseInt(counterInput));
        this.setState({
            counterInput: 0
        });
    }

    onDecrementWithNumber = () => {
        const {
            counterInput
        } = this.state;
        this.props.decrementCounterByNumber(parseInt(counterInput));
        this.setState({
            counterInput: 0
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {
            counterInput
        } = this.state;

        const {
            counter
        } = this.props;

        return(
            <div>
                <h1>home page</h1>
                <br />
                <button onClick={this.props.incrementCounter}>+</button>
                <p>{ counter }</p>
                <button onClick={this.props.decrementCounter}>-</button>
                <br />
                <label htmlFor='counter-input'>Enter number to add/subtract from counter:</label>
                <input
                    name='counterInput'
                    value={counterInput}
                    onChange={this.onChange}
                    id='counter-input'
                    type='number' />
                <button onClick={this.onIncrementWithNumber}>+</button>
                <button onClick={this.onDecrementWithNumber}>-</button>
                {/* <MainMenu /> */}
            </div>
        );
    }
}

App.propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    incrementCounterByNumber: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    decrementCounterByNumber: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
    counter: state.counter.counter
});

export default connect(mapStateToProps, {
    incrementCounter,
    incrementCounterByNumber,
    decrementCounter,
    decrementCounterByNumber
})(App);
