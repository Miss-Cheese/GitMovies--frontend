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
    movies: [],
    detailedMovie: {}
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

  showMovieDetails = (movieId) => {
    
    let targetMovie = this.state.movies.find(movie => movie.id === movieId)
    this.setState({
      detailedMovie: targetMovie
    })

  }

  render () {

    // console.log(this.state.detailedMovie)

    return (
      
        <div className="App">
          <Navbar />
          <h1>Welcome to Git Movies!</h1>
          <Login loginUser={this.loginUser} loggedIn={this.state.loggedIn}/>
          <SearchForm findThatMovie={this.findThatMovie} loggedIn={this.state.loggedIn}/>
          <MovieDetails detailedMovie={this.state.detailedMovie} />
            <Switch>
              {/* <Route path="/login" >
                  <Login />
              </Route> */}
              {/* <Route path="/search" >
                  <SearchForm findThatMovie={this.findThatMovie}/>
              </Route> */}
              <Route
               path="/movies"
               render={routerProps => <MovieResults {...routerProps} movies={this.state.movies} showMovieDetails={this.showMovieDetails}/>}           
             />
              
              {/* path="/movies/:id" 
              render={routerProps => <MovieDetails {...routerProps} detailedMovie={this.state.detailedMovie} />}   */}
              
              
            </Switch>
        </div>
     
    );

  }
}

export default App;
