import {
    INCREMENT,
    INCREMENT_BY_NUMBER,
    DECREMENT,
    DECREMENT_BY_NUMBER
} from '../actions/types';

const initialState = {
    counter: 0
};

export default function(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case INCREMENT_BY_NUMBER:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case DECREMENT_BY_NUMBER:
            return {
                ...state,
                counter: state.counter - action.payload
            };
        default:
            return state;
    }
}