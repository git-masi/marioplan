import React, { Component } from 'react';
  
class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;