import React, {useEffect} from 'react';
import { Link } from 'react-router-native';
import {useSelector} from 'react-redux';
import {setMovies} from './actions/movieActions';
import {
  StyleSheet,
  Platform,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import FetchMovies from './actions/movieActions';

const isNative = Platform.OS !== 'web';

const addedMovie = () => {
  let title = localStorage.getItem('Title');

  return (
    <View style={styles.box}>
      <Image style={styles.image} />
      <Text style={styles.letters}>{title}</Text>

      <View style={styles.button}>
        <Link to={`/addedMovie`} style={{textDecoration: 'none'}}>
          <Text style={styles.block}> Details</Text>
        </Link>
      </View>
    </View>
  );
};

const Movies = () => {
  const movies = useSelector(state => state.allMovies.movies);
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

  //console.log(movies);

  return (
    <ScrollView>
      <View style={styles.btn}>
        <Link to={`/addMovie`} style={{textDecoration: 'none'}}>
          <Text style={styles.block}> Add Movie</Text>
        </Link>
      </View>
      <View style={styles.container}>
        {movies.map((movies, index) => (
          <View style={styles.box} key={index}>
            <Image style={styles.image} source={{uri: movies.multimedia.src}} />

            <Text style={styles.letters}>{movies.display_title}</Text>

            <View style={styles.button}>
              <Link to={`/movies/${index}`} style={{textDecoration: 'none'}}>
                <Text style={styles.block}> Details</Text>
              </Link>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  block: {
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    borderRadius: 10,
    margin: 5,
    position: 'relative',
  },
  box: {
    width: 200,
    backgroundColor: 'gold',
    borderRadius: 10,
    margin: 5,
    padding: 4,
  },

  letters: {
    fontSize: 17,
    fontWeight: 'bold',
    textShadowColor: 'blue',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3da8ff',
    textAlign: 'center',
    borderRadius: 5,
    position: 'relative',
    margin: 5,
  },
  btn: {
    backgroundColor: '#3da8ff',
    textAlign: 'center',
    width: 200,
    height: 20,
    borderRadius: 5,
    position: 'relative',
    margin: 5,
  },
});

export default Movies;
