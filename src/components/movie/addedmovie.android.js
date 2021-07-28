import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Link} from 'react-router-native';

const AddedMovie = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');

  const getMovie = () => {
    AsyncStorage.getItem('Title').then(title => {
      setTitle(title);
    });
  };
  getMovie();
  const getValue = () => {
    AsyncStorage.getItem('Date').then(date => {
      setDate(date);
    });
  };
  getValue();
  const getAll = () => {
    AsyncStorage.getItem('Summary').then(summary => {
      setSummary(summary);
    });
  };
  getAll();

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Link to={`/movies`} style={{textDecoration: 'none'}}>
          <Text style={styles.block}>Back To Movies</Text>
        </Link>
      </View>
      <View style={styles.box}>
        <Text style={styles.letters}>
          {title}
          {'\n'}
          Opening Date : {date}
          {'\n'}
          {summary}
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
    height: 250,
    borderRadius: 10,
    margin: 5,
    position: 'relative',
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

export default AddedMovie;
