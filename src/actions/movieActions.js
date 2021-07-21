import {ActionTypes} from '../action-types';
import useEffect from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
let nextId = 0;
export const setMovies = movies => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};
