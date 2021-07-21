import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  View,
  Button,
  TextInput,
} from 'react-native';

import axios from 'axios';

import {useHistory} from 'react-router-dom';
const isNative = Platform.OS !== 'web';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          alert(response.data.token);
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
        <Text style={styles.letters}>Login</Text>
        <Text style={styles.letters}>Enter the Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Text style={styles.letters}>Password:</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
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

export default Login;
