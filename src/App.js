import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login';
import SearchForm from './components/SearchForm';
import MovieResults from './components/MovieResults';
import MovieDetails from './components/MovieDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = {
    loggedIn: false,
    movies: []
}

  findThatMovie = (newQuery) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d0c033000912e5602757518af0d41cce&query=${newQuery}`)
      .then(response => response.json())
      .then(movieData => this.setState({
          movies:  movieData.results
      }))
  }

  render () {

    return (
     
        <div className="App">
          <Navbar />
          <h2>Welcome to Git Movies!</h2>
          <Login />
          <BrowserRouter>
            <Switch>
              <Route path="/search" >
                  <SearchForm findThatMovie={this.findThatMovie}/>
              </Route>
              <Route path="/results" >
                  <MovieResults movies={this.state.movies}/>
              </Route>
              <Route path="/movies/:id" >
                  <MovieDetails />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
     
    );

  }





}

export default App;
