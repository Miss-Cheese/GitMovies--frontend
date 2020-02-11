import React from 'react';
import MovieReviews from './MovieReviews'

function MovieDetails (props) {

    // console.log(props.detailedMovie)

    return (
        <div className="container">
            <div className="movie-text-block">
                <h1>{props.detailedMovie.title}</h1>
                <h3>{props.detailedMovie.release_date}</h3>
                <h3>{props.detailedMovie.vote_average}</h3>
                <p>{props.detailedMovie.overview}</p>
                <MovieReviews />
            </div>
            <div className="movie-poster">
                <img src= {"https://image.tmdb.org/t/p/w500" + props.detailedMovie.poster_path}></img>
                {/* <img src= {props.detailedMovie.poster_path ? "https://image.tmdb.org/t/p/w500" + props.detailedMovie.poster_path : "https://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"} alt="movie poster"></img> */}
            </div>
        </div>
    )
}

export default MovieDetails