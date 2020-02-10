import React from 'react';

class SearchForm extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    
    submitHandler = (event) => {
        event.preventDefault()
        let newQuery = this.state.searchTerm 
        this.props.findThatMovie(newQuery)
        this.setState({
            searchTerm: ""
        })
    }


    render () {
        return (     
            <div>
                {this.props.loggedIn && 
                    <form onSubmit={this.submitHandler}>
                        <input onChange={this.changeHandler} type="text" value={this.state.searchTerm} placeholder="Search Movie"></input>
                        <input type="submit" value="Find That Movie!"></input>
                    </form>}
             </div>
        )
    }
}

export default SearchForm