import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  SIGN_IN,
  SIGN_IN_FAILED,
  SIGN_OUT,
  SIGN_OUT_FAILED,
  SIGN_UP,
  SIGN_UP_FAILED,
  GET_PROFILE_DATA,
  GET_PROFILE_DATA_FAILED,
  GET_MY_PROFILE_DATA,
  GET_MY_PROFILE_DATA_FAILED,
  LOAD_LOCAL_TOKEN
} from '../actions/types';

// Constants
export const BASE_URI = 'https://intense-temple-11495.herokuapp.com';
// export const BASE_URI = 'http://localhost:3000';

export const getMyProfileData = () => (dispatch, getState) => {
  const uri = `${BASE_URI}/profiles/show/me`;

  axios
    .get(uri, tokenConfig(getState))
    .then(res => {
      if (res.status == 200 && res.statusText == 'OK') {
        dispatch({
          type: GET_MY_PROFILE_DATA,
          payload: res.data.data
        });
      } else {
        dispatch({
          type: GET_MY_PROFILE_DATA_FAILED
        });
        dispatch(
          returnErrors(res.statusText, res.status, GET_MY_PROFILE_DATA_FAILED)
        );
      }
    })
    .catch(err => {
      dispatch({
        type: GET_MY_PROFILE_DATA_FAILED
      });
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          GET_MY_PROFILE_DATA_FAILED
        )
      );
    });
};

export const getProfileData = id => (dispatch, getState) => {
  const uri = `${BASE_URI}/profiles/show/${id}`;

  axios
    .get(uri, tokenConfig(getState))
    .then(res => {
      if (res.status == 200 && res.statusText == 'OK') {
        dispatch({
          type: GET_PROFILE_DATA,
          payload: res.data.data
        });
      } else {
        dispatch({
          type: GET_PROFILE_DATA_FAILED
        });
        dispatch(
          returnErrors(res.statusText, res.status, GET_PROFILE_DATA_FAILED)
        );
      }
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE_DATA_FAILED
      });
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          GET_PROFILE_DATA_FAILED
        )
      );
    });
};

export const signUpUser = userData => (dispatch, getState) => {
  const uri = `${BASE_URI}/users`;

  axios
    .post(uri, userData, tokenConfig(getState))
    .then(res => {
      const authToken = res.headers.authorization;

      if (authToken) {
        dispatch({
          type: SIGN_UP,
          token: authToken
        });
      } else {
        dispatch({
          type: SIGN_UP_FAILED
        });
        dispatch(returnErrors('Registration failed', '400', SIGN_UP_FAILED));
      }
    })
    .catch(err => {
      dispatch({
        type: SIGN_UP_FAILED
      });
      dispatch(
        returnErrors(err.response.data, err.response.status, SIGN_UP_FAILED)
      );
    });
};

export const logoutUser = () => (dispatch, getState) => {
  const uri = `${BASE_URI}/users/sign_out`;

  axios
    .delete(uri, {}, tokenConfig(getState))
    .then(res => {
      if (res.status == 200 && res.statusText == 'OK') {
        dispatch({
          type: SIGN_OUT
        });
      } else {
        dispatch({
          type: SIGN_OUT_FAILED
        });
        dispatch(returnErrors('Sign out failed!', res.status, SIGN_OUT_FAILED));
      }
    })
    .catch(err => {
      dispatch({
        type: SIGN_OUT_FAILED
      });
      dispatch(
        returnErrors(err.response.data, err.response.status, SIGN_OUT_FAILED)
      );
    });
};

export const loginUser = (email, password) => (dispatch, getState) => {
  const uri = `${BASE_URI}/users/sign_in`;

  const body = {
    user: {
      email,
      password
    }
  };

  axios
    .post(uri, body, tokenConfig(getState))
    .then(res => {
      const authToken = res.headers.authorization;

      if (authToken) {
        dispatch({
          type: SIGN_IN,
          token: authToken
        });
      } else {
        dispatch({
          type: SIGN_IN_FAILED
        });
        dispatch(returnErrors('Login failed', '400', SIGN_IN_FAILED));
      }
    })
    .catch(err => {
      dispatch({
        type: SIGN_IN_FAILED
      });
      dispatch(
        returnErrors(err.response.data, err.response.status, SIGN_IN_FAILED)
      );
    });
};

export const loadLocalToken = () => dispatch => {
  try {
    const token = localStorage.getItem('innojwt');

    dispatch({
      type: LOAD_LOCAL_TOKEN,
      payload: {
        token: token
      }
    });
  } catch (e) {}
};

export const tokenConfig = getState => {
  const token = getState().user.token;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = token;
  }

  return config;
};
