import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AddedMovie = () => {
  let title = localStorage.getItem('Title');
  let date = localStorage.getItem('Date');
  let summary = localStorage.getItem('Summary');

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.letters}>
          {title}
          {'\n'}
          Opening Date : {date}
          {'\n'}
          {summary}
        </Text>
      </View>
      )
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

export default AddedMovie;
