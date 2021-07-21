import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import AddMovie from './addMovie';
import Login from './login';
import AddedMovie from './addedMovie';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id" exact component={MovieDetails} />
        <Route path="/addMovie" exact component={AddMovie} />
        <Route path="/addedMovie" exact component={AddedMovie} />
      </Switch>
    </Router>
  );
};

export default Routes;
