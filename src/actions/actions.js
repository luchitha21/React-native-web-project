import {useDispatch} from 'react-redux';
import axios from 'axios';
import {setMovies} from './movieActions';
import {useEffect} from 'react';

export const Actions = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const data = await axios
      .get(
        'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=F493stB50gvFVeedyFlTKBA9UzA7odGY',
      )
      .catch(err => {
        console.log('Err', err);
      });
    console.log(data.data);
    dispatch(setMovies(data.data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default Actions;
