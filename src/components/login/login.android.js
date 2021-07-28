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
import {get} from 'lodash';

import axios from 'axios';

import {useHistory} from 'react-router-dom';
const isNative = Platform.OS !== 'web';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // axios.defaults.baseURL = 'https://reqres.in/';

  async function sucess() {
    try {
      const data = await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
      });
      const res = get(data, 'data');
      console.log(res);
      history.push('/movies');
      alert('Login Successfull');

      return res;
    } catch (e) {
      const err = get(e, 'response'); //while 'Error' response from server is inside e.response
      console.log(e);
      throw err.data;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.letters}>Login</Text>
        <Text style={styles.letters}>Enter the Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Text style={styles.letters}>Password:</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
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
