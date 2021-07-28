import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Link} from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddMovie = () => {
  var [title, setTitle] = useState('');
  var [date, setDate] = useState('');
  var [summary, setSummary] = useState('');

  const handle = () => {
    AsyncStorage.setItem('Title', title);
    AsyncStorage.setItem('Date', date);
    AsyncStorage.setItem('Summary', summary);
  };
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Link to={`/movies`} style={{textDecoration: 'none'}}>
          <Text style={styles.block}>Back To Movies</Text>
        </Link>
      </View>
      <View style={styles.body}>
        <Text style={styles.letters}>Title Of The Movie:</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={title => setTitle(title)}
        />
        <Text style={styles.letters}>Opening Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChangeText={date => setDate(date)}
        />
        <Text style={styles.letters}>Summary:</Text>
        <TextInput
          style={styles.input}
          placeholder="Summary"
          value={summary}
          onChangeText={summary => setSummary(summary)}
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
  letters: {
    fontSize: 17,
    fontWeight: 'bold',
    textShadowColor: 'blue',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
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

export default AddMovie;
