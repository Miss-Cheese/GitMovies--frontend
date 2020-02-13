import React from 'react'

class ReviewCard extends React.Component {

  state = {
    review: ""
  }

  updateReview = (e) => {
    this.setState({
      review: e.target.value
    })
  }
  

  submitReview = (e, id) => {
    e.preventDefault()
    let newestReview = this.state.review
    this.props.reviewUpdate(newestReview)
    console.log(id)
  }

  render () {

    // console.log("New review", this.state.review)

    return (
      <ul>
        <li>{this.props.text} 
          <button onClick={this.props.editClickHandler}>edit</button>
          <button onClick={(e) => this.props.deleteReviewHandler(this.props.id)}>delete</button>
          {this.props.isClicked && 
          <form onSubmit={this.submitReview(this.props.id)}>
            <input type="text" value={this.state.review} onChange={this.updateReview}></input>
            <input type="submit" value="Update"></input>
          </form>
          }
        </li>
      </ul>
        
    )
  }

}

export default ReviewCard