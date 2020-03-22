import React from 'react'

class ReviewCard extends React.Component {

  state = {
    review: this.props.text
  }

  updateReview = (e) => {
    this.setState({
      review: e.target.value
    }, () => this.props.updateReviewInState(this.state.review, this.props.id))
  }

  submitReview = (e, id) => {
    e.preventDefault()
    // console.log(e, id)
    this.props.updateReviewInDb(id)
  }

  render () {

    // console.log(this.state)

    return (
      <ul>
        <li>{this.props.text} 
          <button onClick={this.props.editClickHandler}>edit</button>
          <button onClick={() => this.props.deleteReviewHandler(this.props.id)}>delete</button>
          {this.props.isClicked && 
          <form onSubmit={(e) => this.submitReview(e, this.props.id)}>
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