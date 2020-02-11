import React from 'react';

class Login extends React.Component {
    state = {
      email: '',
      password: '',
    }
  
    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  
    onSubmit =  (props) => {
      let loginDetails = this.state
      
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(loginDetails)
      })
      this.props.loginUser(loginDetails)
    }
  
    render() {

      return (
        <div>
          {!this.props.loggedIn && 
           <div className="login-form">
            <input type="text" name='email' placeholder='Email' onChange={this.onChange} value={this.state.email} />
            <input type="text" name='password' placeholder='Password' type='password' onChange={this.onChange} value={this.state.password} />
            <br />
            <button onClick={() => this.onSubmit()} type="primary">Login/Signup</button>
          </div>
          }
        </div>
       
      );
    }
  }
  

  
  export default Login;