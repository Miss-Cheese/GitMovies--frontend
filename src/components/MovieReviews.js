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
    
    handleSubmit = (event, movieId) => {
        event.preventDefault()
        let movieData
        let newReview = {review: [this.state.review, this.props.detailedMovie]}
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(newReview)
          })
          .then(resp => resp.json())
          .then(data => {console.log(data, movieId)
        })
    }

    editClickHandler = () => {
        console.log('click handling')
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    reviewUpdate = (newReview) => {
        console.log("Editing review", newReview)
    }

    render () {
        console.log(this.state.isClicked)
        let displayedReviews = this.props.reviews.map(review => 
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
                    <textarea onChange={this.handleChange} value={this.state.text} />
                    <br></br>
                    <input type="submit" value="Submit Your Review"></input>
                </form>
                Reviews:
                {displayedReviews}
            </div>
        )
    }
}


export default MovieReviews