import React from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
} from 'react-native';
import Movies from './Movies';

const isNative = Platform.OS !== 'web';

const MovieDetails = ({match}) => {
  const movies = useSelector(state => state.allMovies.movies);
  var obj = movies[0];
  console.log(match);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.letters}>
          {match.params.title}
          {'\n'}
          Opening Date : {match.params.date}
          {'\n'}
          {match.params.summary}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 400,
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
  image: {
    height: 150,
    borderRadius: 10,
    margin: 5,
    position: 'relative',
  },
});

export default MovieDetails;
