import React from 'react';

class MovieReviews extends React.Component {

    state = {
        reviewText: ""
    }

    handleChange = (event) => {
        this.setState({
            reviewText: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        let newReview = this.state

        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(newReview)
          })
    }

    render () {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>What do you think of this movie? Let us know!</h4>
                    <textarea onChange={this.handleChange} value={this.state.reviewText} />
                    <br></br>
                    <input type="submit" value="Submit Your Review"></input>
                </form>
            </div>
        )
    }
}


export default MovieReviews