import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login';
import SearchForm from './components/SearchForm';
import MovieResults from './components/MovieResults';
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, withRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {

  state = {
    loggedIn: false,
    user_id: "",
    movies: [],
    detailedMovie: {},
    dbMovies: [],
    reviews: []
  }

  loginUser = (loginDetails) => {
    
    fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(data => {
        let loggedInUser = data.find(user => user.email === loginDetails.email )
        this.setState({
          loggedIn: true,
          user_id: loggedInUser.id
        })
      })
  }

  fetchdbMovies = () => {
    fetch(`http://localhost:3000/movies/`)
    .then(resp => resp.json())
    .then(data => this.setState({
        dbMovies: data
    }))
  }

  fetchReviews = () => {
      fetch(`http://localhost:3000/reviews`)
      .then(resp => resp.json())
      .then(data => this.setState({
      reviews: data
      }))
  }

  componentDidMount(){
      this.fetchdbMovies()
      this.fetchReviews()
  }
  
  findThatMovie = (newQuery) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${newQuery}`)
      .then(response => response.json())
      .then(movieData => this.setState({
        movies: movieData.results
      }))
      // go through every movie in state and query the backend
      // this.state.movies => check if they exist in the db and if yes, give me their Active Record ID
  }

  showMovieDetails = (movieId) => {

    let targetMovie = this.state.movies.find(movie => movie.id === movieId)
    this.setState({
      detailedMovie: targetMovie
    }, () =>  this.props.history.push(`/movies/${this.state.detailedMovie.id}`)
    )
  }

  findMovie = (routerID) => {
    let foundMovie = this.state.movies.find(movie => movie.id === parseInt(routerID))
    return foundMovie
  }

  
  deleteReviewHandler = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    })
    let newReviews = this.state.reviews.filter(review => review.id !== id)
    this.setState({
      reviews: newReviews
    })
  }

  editReview = (review) => {
    console.log('trying to edit', review)
    // fetch(`http://localhost:3000/reviews/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     'content-type':'applicaton/json',
    //     accepts:'application/json'
    //   },
    //   body: JSON.stringify()
    // })
  }

  render() {

    return (

      <div className="App">
        <Navbar />
        <h1>Welcome to Git Movies!</h1>
        <Login loginUser={this.loginUser} loggedIn={this.state.loggedIn} />
        <SearchForm findThatMovie={this.findThatMovie} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route path="/profile" >
          </Route>
          <Route
            exact path="/movies"
            render={routerProps =>
              <MovieResults 
                {...routerProps} 
                movies={this.state.movies} 
                deleteReviewHandler={this.deleteReviewHandler}
                showMovieDetails={this.showMovieDetails} />}
          />
          <Route
            exact
            path="/movies/:id"
            render={routerProps => {
              let movie = this.findMovie(routerProps.match.params.id)
              return movie ? (
                <MovieDetails
                  {...routerProps}
                  detailedMovie={this.state.detailedMovie} 
                  reviews={this.state.reviews}
                  dbMovies={this.state.dbMovies}
                  editReview={this.editReview}
                  deleteReviewHandler={this.deleteReviewHandler}
                  fetchReviews={this.fetchReviews}
                  user_id={this.state.user_id}/>
              ) : (<p>loading selected movie</p>)
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);