import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

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
        <Text style={styles.letters}>Title Of The Movie:</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Text style={styles.letters}>Opening Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <Text style={styles.letters}>Summary:</Text>
        <TextInput
          style={styles.input}
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
});

export default AddMovie;
