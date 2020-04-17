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
  LOAD_LOCAL_TOKEN,
} from '../actions/types';

const initialState = {
  token: '',
  isAuthenticated: false,
  user: null,
  organization: null,
  ideaGeneraitor: null,
  currentUser: null,
  currentOrganization: null,
  currentIdeaGeneraitor: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      localStorage.setItem('innojwt', action.token);

      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
      };
    case SIGN_UP_FAILED:
    case SIGN_IN_FAILED:
    case SIGN_OUT:
      localStorage.removeItem('innojwt');

      return {
        ...state,
        token: '',
        isAuthenticated: false,
        user: null,
        organization: null,
        ideaGeneraitor: null,
        currentUser: null,
        currentIdeaGeneraitor: null,
        currentOrganization: null,
      };
    case SIGN_OUT_FAILED:
      return state;
    case GET_PROFILE_DATA:
      const profileType = action.payload.user.profile_type;

      if (profileType == 'Organization') {
        return {
          ...state,
          user: action.payload.user,
          organization: action.payload.profile,
        };
      } else if (profileType == 'IdeaGeneraitor') {
        return {
          ...state,
          user: action.payload.user,
          ideaGeneraitor: action.payload.profile,
        };
      }
    case GET_MY_PROFILE_DATA:
      const profileType2 = action.payload.user.profile_type;

      if (profileType2 == 'Organization') {
        return {
          ...state,
          currentUser: action.payload.user,
          currentOrganization: action.payload.profile,
        };
      } else if (profileType2 == 'IdeaGeneraitor') {
        return {
          ...state,
          currentUser: action.payload.user,
          currentIdeaGeneraitor: action.payload.profile,
        };
      }
    case GET_MY_PROFILE_DATA_FAILED:
    case GET_PROFILE_DATA_FAILED:
      return state;
    case LOAD_LOCAL_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
