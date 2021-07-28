import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-native';
import {useSelector} from 'react-redux';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Actions from '../../actions/actions';
import styles from '../../styles/styles';

const Movies = () => {
  Actions();
  const [title, setTitle] = useState('');
  const movies = useSelector(state => state.allMovies.movies);
  const getValue = () => {
    AsyncStorage.getItem('Title').then(title => {
      setTitle(title);
    });
  };
  getValue();

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <View style={styles.btn}>
        <Link to={`/addMovie`} style={{textDecoration: 'none'}}>
          <Text style={styles.block}> Add Movie</Text>
        </Link>
      </View>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image style={styles.image} />
          <Text style={styles.letters}>{title}</Text>
          <View style={styles.button}>
            <Link to={`/addedMovie`} style={{textDecoration: 'none'}}>
              <Text style={styles.block}> Details</Text>
            </Link>
          </View>
        </View>

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

export default Movies;
