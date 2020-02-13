import React from 'react';
import MovieReviews from './MovieReviews'

class MovieDetails extends React.Component {

    render(){
       let  { title, release_date, vote_average, overview, poster_path } = this.props.detailedMovie
       console.log(this.props.dbMovies)
       console.log(this.props.reviews)
        return (
            <div className="container">
                <div className="movie-text-block">
                    <h1>{title}</h1>
                    <h3>Release Date: {release_date}</h3>
                    <h3>Average Rating: {vote_average}</h3>
                    <p>{overview}</p>
                    <MovieReviews reviews={this.props.reviews} dbMovies={this.props.dbMovies} detailedMovie={this.props.detailedMovie} user_id={this.props.user_id}/>
                </div>
                <div className="movie-poster">
                    <img src= {"https://image.tmdb.org/t/p/w500" + poster_path}></img>
                </div>
            </div>
        )
    }
}

export default MovieDetails