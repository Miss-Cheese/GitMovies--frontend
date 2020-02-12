import React from 'react';
import ReviewCard from './ReviewCard'

class MovieReviews extends React.Component {
    
    state = {
        review: {
            text: "",
            user_id: this.props.user_id,
            movie_id: this.props.detailedMovie.id
        },
        targetMovie: {}
    }
    
    handleChange = (event) => {
        this.setState({
            ...this.state,
            review:{
            ...this.state.review,
                text: event.target.value
            }
        })
    }
    
    handleSubmit = (event, movieId) => {
        event.preventDefault()
        let targetMovie
        let newReview = {review: [this.state, this.props.detailedMovie]}
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(newReview)
          })
          .then(resp => resp.json())
          .then(data => {
            targetMovie = this.props.dbMovies.find(movie => movie.id === data.movie_id)
            console.log(targetMovie.reviews)
        })
    }

    render () {
        // this.props.dbMovies.find(movie => movie.id === )
        // let dbReviews = this.props.dbMovies.map(movie => console.log(movie.reviews))
        // console.log(dbReviews)
        // let dbReviews = this.props.dbMovies.map(movie => {
        //     return movie.reviews
        // })
        console.log(this.props.dbMovies)
        // debugger
        // let displayedReviews = this.props.dbMovies.forEach(movie => {movie.reviews.map(review => <ReviewCard key={review.id} {...review}/>)});
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>What do you think of this movie? Let us know!</h4>
                    <textarea onChange={this.handleChange} value={this.state.text} />
                    <br></br>
                    <input type="submit" value="Submit Your Review"></input>
                </form>
                {/* {displayedReviews} */}
            </div>
        )
    }
}


export default MovieReviews