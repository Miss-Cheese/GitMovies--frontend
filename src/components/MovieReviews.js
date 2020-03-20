import React from 'react';
import ReviewCard from './ReviewCard'

class MovieReviews extends React.Component {
    
    state = {
        review: {
            text: "",
            user_id: this.props.user_id,
            movie_id: this.props.detailedMovie.id
        },
        targetMovie: {},
        isClicked: false
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
    
    handleSubmit = (event) => {
        event.preventDefault()
        let newReview = {review: [this.state.review, this.props.detailedMovie]}
        console.log(newReview)
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(newReview)
          })
          .then(response => response.json())
          .then(responseData => this.setState({
              targetMovie: responseData
          }))
          .then(() => this.setState({
              ...this.state,
              review: {
                  ...this.state.review,
                  text: ""
              }
          }))
          .then(() => this.props.fetchReviews())
          
    }

    editClickHandler = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    reviewUpdate = (newReview) => {
        console.log("Editing review", newReview)
    }

    render () {
        let targetMovieReviews = this.props.reviews.filter(review => review.movie_id === this.state.targetMovie.movie_id)
        // let targetMovieReviews = this.props.dbMovies.filter(movie => movie.movie_id === this.state.targetMovie.movie_id)

        // console.log(this.props.dbMovies)

        let displayedReviews = targetMovieReviews.map(review => 
            <ReviewCard 
                editReview={this.props.editReview} 
                isClicked={this.state.isClicked}
                deleteReviewHandler={this.props.deleteReviewHandler} 
                key={review.id} 
                review={this.state.review}
                editClickHandler={this.editClickHandler}
                reviewChange={this.reviewChange}
                reviewUpdate={this.reviewUpdate}
                {...review}/>)
                                                      
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>What do you think of this movie? Let us know!</h4>
                    <textarea onChange={this.handleChange} value={this.state.review.text} />
                    <br></br>
                    <input className="submit-review-button" type="submit" value="Submit Your Review"></input>
                </form>
                Reviews:
                {displayedReviews}
            </div>
        )
    }
}


export default MovieReviews