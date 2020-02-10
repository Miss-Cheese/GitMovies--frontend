import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login';
import SearchForm from './components/SearchForm';
import MovieResults from './components/MovieResults';
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = {
    loggedIn: false,
    movies: []
}
  loginUser = () => {
    this.setState({
      loggedIn: true
    })
  }

  findThatMovie = (newQuery) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d0c033000912e5602757518af0d41cce&query=${newQuery}`)
      .then(response => response.json())
      .then(movieData => this.setState({
          movies:  movieData.results
      }))
  }

  render () {

    console.log(this.state.loggedIn)

    return (
      
        <div className="App">
          <Navbar />
          <h2>Welcome to Git Movies!</h2>
          <Login />
          <SearchForm findThatMovie={this.findThatMovie}/>
            <Switch>
              {/* <Route path="/login" >
                  <Login />
              </Route> */}
              {/* <Route path="/search" >
                  <SearchForm findThatMovie={this.findThatMovie}/>
              </Route> */}
              <Route
               path="/movies"
               render={routerProps => <MovieResults {...routerProps} movies={this.state.movies}/>}           
             />

              {/* <Route path="/movies/:id" >
                  <MovieDetails />
              </Route> */}
            </Switch>
        </div>
     
    );

  }
}

export default App;
