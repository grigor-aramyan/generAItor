import {
    INCREMENT,
    DECREMENT,
    INCREMENT_BY_NUMBER,
    DECREMENT_BY_NUMBER
} from './types';

export const incrementCounter = () => (dispatch, getState) => {
    dispatch({ type: INCREMENT });
}

export const decrementCounter = () => (dispatch, getState) => {
    dispatch({ type: DECREMENT });
}

export const incrementCounterByNumber = (number) => (dispatch, getState) => {
    dispatch({
        type: INCREMENT_BY_NUMBER,
        payload: number
    });
}

export const decrementCounterByNumber = (number) => (dispatch, getState) => {
    dispatch({
        type: DECREMENT_BY_NUMBER,
        payload: number
    });
}