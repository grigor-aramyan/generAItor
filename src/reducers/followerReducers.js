import { GET_FOLLOWERS, GET_FOLLOWERS_FAILED } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWERS:
      state = action.payload;
      return state;
    case GET_FOLLOWERS_FAILED:
      state;
      return state;
    default:
      return state;
  }
}
