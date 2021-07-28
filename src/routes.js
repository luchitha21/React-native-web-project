import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetails from './components/movie/MovieDetails';
import Movies from './components/movie/Movies';
import AddMovie from './components/movie/addMovie';
import Login from './components/login/login';
import AddedMovie from './components/movie/addedMovie';

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
