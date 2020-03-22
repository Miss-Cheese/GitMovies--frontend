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
        // console.log(newReview)
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

    updateReviewInState = (updatedReview) => {
        this.setState({
            ...this.state,
            review:{
            ...this.state.review,
                text: updatedReview,
                movie_id: this.state.targetMovie.id
            }
        })
    }

    updateReviewInDb = (reviewId) => {    
        fetch(`http://localhost:3000/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
            body: JSON.stringify({
                text: this.state.review
            })
        })
        .then(response => response.json())
        .then(responseData => console.log(responseData))
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
          });
    }

    render () {
        let targetMovieReviews = this.props.reviews.filter(review => review.movie_id === this.state.targetMovie.movie_id)
        // let targetMovieReviews = this.props.dbMovies.filter(movie => movie.movie_id === this.state.targetMovie.movie_id)

        // console.log(this.state.review)

        let displayedReviews = targetMovieReviews.map(review => 
            <ReviewCard 
                editReview={this.props.editReview} 
                isClicked={this.state.isClicked}
                deleteReviewHandler={this.props.deleteReviewHandler} 
                key={review.id} 
                review={this.state.review}
                editClickHandler={this.editClickHandler}
                updateReviewInState={this.updateReviewInState}
                updateReviewInDb={this.updateReviewInDb}
                {...review}
                />)
        
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