import React from 'react';
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

const AddMovie = ({match}) => {
  console.log(match);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <form>
          <label for="movietitle"> Movie Title : </label>
          <input type="text" name="movietitle" id="movie_title" />

          <label for="date"> Opening Date: </label>
          <input type="text" name="date" id="op_date" />

          <label for="details"> Summary: </label>
          <input type="text" name="summary" id="summary" />

          <label for="pic"> Image : </label>
          <input type="file" name="pic" accept="image/*" />
        </form>
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
  body: {
    width: 280,
    height: 200,
    backgroundColor: 'gold',
    borderRadius: 10,
    margin: 5,
    padding: 4,
    justifyContent: 'space-evenly',
  },
});

export default AddMovie;
