import React from 'react';
import {SafeAreaView, StyleSheet, Text, Platform, View} from 'react-native';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import AddMovie from './addMovie';

const isNative = Platform.OS !== 'web';

const App = () => {
  return (
    <Router>
      <View style={styles.container}>
        <Switch>
          <Route path="/addMovie" exact component={AddMovie} />
          <View style={styles.button}>
            <Link to={`/addMovie`} style={{textDecoration: 'none'}}>
              <Text style={styles.block}> Add Movie</Text>
            </Link>
          </View>
        </Switch>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route
            path="/movies/:title/:date/:summary"
            exact
            component={MovieDetails}
          />
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
  button: {
    backgroundColor: '#8003fc',
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
