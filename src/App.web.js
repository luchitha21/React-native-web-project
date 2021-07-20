import React from 'react';
import {SafeAreaView, StyleSheet, Text, Platform, View} from 'react-native';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import AddMovie from './addMovie';
import Login, {Form, login} from './login';

const isNative = Platform.OS !== 'web';

const App = () => {
  return (
    <Router>
      <View style={styles.container}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/movies" exact component={Movies} />
          <Route
            path="/movies/:title/:date/:summary"
            exact
            component={MovieDetails}
          />
          <Route path="/addMovie" exact component={AddMovie} />
        </Switch>
      </View>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    overflow: 'scroll,',
    justifyContent: 'space-evenly',
  },

  block: {
    fontWeight: 'bold',
  },
});

export default App;
