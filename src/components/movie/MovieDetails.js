import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, Platform, View, Image} from 'react-native';

const MovieDetails = ({match}) => {
  const movies = useSelector(state => state.allMovies.movies);
  var obj = movies[match.params.id];

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.image} source={{uri: obj.multimedia.src}} />
        <Text style={styles.letters}>{obj.display_title}</Text>

        <Text style={styles.letters}>Opening Date : {obj.opening_date}</Text>

        <Text style={styles.letters}>{obj.summary_short}</Text>
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
    height: 250,
    borderRadius: 10,
    margin: 5,
    position: 'relative',
  },
});

export default MovieDetails;
