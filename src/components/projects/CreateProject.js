import React, { Component } from 'react';
  
class CreateProject extends Component {
  state = {
    title: '',
    content: '',
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
        <h5 className="grey-text text-darken-3">New Project</h5>
        <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Project Content</label>
            <textarea name="content" id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject;