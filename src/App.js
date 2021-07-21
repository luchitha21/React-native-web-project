import React from 'react';
import {StyleSheet, Text, Platform, View} from 'react-native';
import {NativeRouter, Route, Link, Switch} from 'react-router-native';
import Movies from './movies.android';
import AddMovie from './addMovie';
import Login from './login';
import store from './store';
import {Provider} from 'react-redux';
import MovieDetails from './MovieDetails';
const isNative = Platform.OS !== 'web';

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Movies} />
            <Route path="/addMovie" exact component={AddMovie} />
            <View style={styles.button}>
              <Link to={`/addMovie`} style={{textDecoration: 'none'}}>
                <Text style={styles.block}> Add Movie</Text>
              </Link>
            </View>
          </Switch>
          <Switch>
            <Route path="/movies/:id" exact component={MovieDetails} />
          </Switch>
        </View>
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#3da8ff',
    textAlign: 'center',
    width: 200,
    height: 20,
    borderRadius: 5,
    position: 'relative',
    margin: 5,
  },
  block: {
    fontWeight: 'bold',
  },
});

export default App;
