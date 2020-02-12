import React from 'react';
import MovieReviews from './MovieReviews'

class MovieDetails extends React.Component {

    state ={
        dbMovies: []
    }


    fetchdbMovies = () => {
        fetch(`http://localhost:3000/movies/`)
        .then(resp => resp.json())
        .then(data => this.setState({
            dbMovies: data
        }))
    }

    componentDidMount(){
        this.fetchdbMovies()
        console.log(this.state.dbMovies)
    }

    render(){
        console.log(this.state.dbMovies)
       let  { title, release_date, vote_average, overview, poster_path } = this.props.detailedMovie
       
        return (
            <div className="container">
                <div className="movie-text-block">
                    <h1>{title}</h1>
                    <h3>{release_date}</h3>
                    <h3>{vote_average}</h3>
                    <p>{overview}</p>
                    <MovieReviews dbMovies={this.state.dbMovies} detailedMovie={this.props.detailedMovie} user_id={this.props.user_id}/>
                </div>
                <div className="movie-poster">
                    <img src= {"https://image.tmdb.org/t/p/w500" + poster_path}></img>
                    {/* <img src= {props.detailedMovie.poster_path ? "https://image.tmdb.org/t/p/w500" + props.detailedMovie.poster_path : "https://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"} alt="movie poster"></img> */}
                </div>
            </div>
        )
    }
}

export default MovieDetails