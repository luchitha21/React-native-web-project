import {ActionTypes} from '../action-types';
import {useDispatch} from 'react-redux';

export const setMovies = movies => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};
