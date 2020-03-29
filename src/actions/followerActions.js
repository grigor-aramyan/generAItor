import { GET_FOLLOWERS, GET_FOLLOWERS_FAILED } from './types';

export const getFollowers = id => (dispatch, getState) => {
  const followers = [
    { name: 'Anna', surname: 'Hakobyan', img: 'images/follower1.png' },
    { name: 'Karine', surname: 'Antonyan', img: 'images/follower2.png' },
    { name: 'Anna', surname: 'Hakobyan', img: 'images/follower1.png' }
  ];

  try {
    dispatch({
      type: GET_FOLLOWERS,
      payload: followers
    });
  } catch (e) {
    dispatch({
      type: GET_FOLLOWERS_FAILED,
      payload: e.message
    });
  }
};
