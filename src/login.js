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
import axios from 'axios';
import {Redirect, Route} from 'react-router';
import {useHistory} from 'react-router-dom';
const isNative = Platform.OS !== 'web';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const sucess = () => {
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .then(
        response => {
          console.log(response);
          alert('Token', response.data.token);
          history.push('/movies');
        },
        error => {
          console.log(error);
          alert(error);
        },
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <h3>Enter the Email:</h3>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <h3>Password:</h3>
        <input
          type="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Submit"
          onPress={() => {
            sucess();
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

export default Login;
