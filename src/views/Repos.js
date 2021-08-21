import React, { Component } from 'react';

export default class Repos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.username}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        this.setState({
          repos: repos,
        });
      });
  }

  render() {
    if (!this.state.repos) {
      return <div className='user-page'>LOADING...</div>;
    }

    return (
      <React.Fragment>
        <h2 className='font-bold'>List Repos for user {this.props.username}</h2>
        <ul>
          {this.state.repos.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
