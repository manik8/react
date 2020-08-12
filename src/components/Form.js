import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleUserNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
