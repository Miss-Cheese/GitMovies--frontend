import React from 'react';

class MovieReviews extends React.Component {

    state = {
        text: "",
        user_id: this.props.user_id,
        movie_id: this.props.detailedMovie.id
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        let newReview = {review: [this.state, this.props.detailedMovie]}

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
        console.log(this.props.detailedMovie)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>What do you think of this movie? Let us know!</h4>
                    <textarea onChange={this.handleChange} value={this.state.text} />
                    <br></br>
                    <input type="submit" value="Submit Your Review"></input>
                </form>
            </div>
        )
    }
}


export default MovieReviews