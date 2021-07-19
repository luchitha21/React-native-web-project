import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  Button,
} from 'react-native';
import Movies from './Movies';

const isNative = Platform.OS !== 'web';

const AddMovie = () => {
  var [title, setTitle] = useState('');
  var [date, setDate] = useState('');
  var [summary, setSummary] = useState('');

  const handle = () => {
    localStorage.setItem('Title', title);
    localStorage.setItem('Date', date);
    localStorage.setItem('Summary', summary);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <h3>Title Of The Movie:</h3>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <h3>Opening Date:</h3>
        <input
          type="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <h3>Summary:</h3>
        <input
          placeholder="Summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
        <Button
          title="Submit"
          onPress={() => {
            alert('Movie added');
            handle();
          }}></Button>
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
    width: 300,
    height: 320,
    backgroundColor: 'gold',
    borderRadius: 10,
    margin: 5,
    padding: 4,
    justifyContent: 'space-evenly',
  },
});

export default AddMovie;
