import React from 'react';
import {StyleSheet, Text, Platform, View} from 'react-native';
import {NativeRouter, Route, Link, Switch} from 'react-router-native';
import Movies from './components/movie/movies.android';
import AddMovie from './components/movie/addmovie.android';
import Login from './components/login/login.android';
import store from './store';
import {Provider} from 'react-redux';
import MovieDetails from './components/movie/MovieDetails';
import AddedMovie from './components/movie/addedmovie.android';

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" exact component={MovieDetails} />
            <Route path="/addMovie" exact component={AddMovie} />
            <Route path="/addedMovie" exact component={AddedMovie} />
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
