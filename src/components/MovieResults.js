import React from 'react';

function MovieResults (props) {

    let displayedMovies = props.movies.slice(0,5)

    
    return (
        <div>
            <ul>
                {displayedMovies.map(movie => 
                    <div key={movie.id} onClick={() => props.showMovieDetails(movie.id)}>
                        <h1>{movie.original_title}</h1>
                        <img src= {movie.backdrop_path ? "https://image.tmdb.org/t/p/w500" + movie.backdrop_path : "https://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"} alt="movie poster"></img>
                    </div>
                    )}
            </ul>
        </div>
    )
}

export default MovieResults


