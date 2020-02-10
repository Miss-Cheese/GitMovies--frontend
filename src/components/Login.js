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
  
    onSubmit =  () => {
      console.log("Submit functionality will be here")
    }
  
    render() {

      return (
        <div className="login-form">
          <input type="text" name='email' placeholder='Email' onChange={e => this.onChange(e)} value={this.state.email} />
          <input type="text" name='password' placeholder='Password' type='password' onChange={e => this.onChange(e)} value={this.state.password} />
          <br />
          <button onClick={() => this.onSubmit()} type="primary">Login</button>
        </div>
      );
    }
  }
  

  
  export default Login;