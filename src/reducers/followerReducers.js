import { GET_FOLLOWERS, GET_FOLLOWERS_FAILED } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWERS:
      return action.payload;
    case GET_FOLLOWERS_FAILED:
      return state;
    default:
      return state;
  }
}
