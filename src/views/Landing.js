import React, { Component } from 'react';

function Header() {
  return <h1 className='text-center font-bold mb-4'>Github API</h1>;
}

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    });
  };

  handleFind = (event) => {
    event.preventDefault();
    const { username } = this.state;
    if (username) {
      this.props.history.push(`/user/${username}`);
    }
  };

  render() {
    const { username } = this.props;
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <Header />

        <form onClick={this.handleFind}>
          <input
            className='border px-4 py-2 mr-4'
            value={username}
            onChange={this.handleChange}
          />
          <button className='bg-black text-white border rounded px-4 py-2'>
            Find
          </button>
        </form>
      </div>
    );
  }
}
