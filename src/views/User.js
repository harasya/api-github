import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Repos from './Repos';
export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  load() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          user: user,
        });
      });
  }

  componentDidMount() {
    if (!Object.values(this.state.user).length) {
      this.load();
    }
  }

  renderStat(state) {
    return (
      <li
        className='mx-4 hover:text-green-600 transition-colors'
        key={state.name}
      >
        <NavLink to={state.url} activeClassName='text-green-600'>
          <p>{state.value}</p>
          <p>{state.name}</p>
        </NavLink>
      </li>
    );
  }

  render() {
    const { match } = this.props;
    const { user } = this.state;
    const stats = [
      {
        name: 'Public Repos',
        value: user.public_repos,
        url: `/user/${match.params.username}`,
      },
      {
        name: 'Followers',
        value: user.followers,
        // url: `/user/${match.params.username}/followers`,
      },
      {
        name: 'Following',
        value: user.following,
        // url: `/user/${match.params.username}/following`,
      },
    ];

    return (
      <React.Fragment>
        <div className='flex bg-gray-800 p-4 text-white'>
          <div className='border rounded-full h-16 w-16 flex items-center justify-center'>
            <img src={user.avatar_url} alt={user.name} width='36' height='36' />
          </div>
          <ul className='ml-auto flex items-center justify-center'>
            {stats.map(this.renderStat)}
          </ul>
        </div>
        <div className='m-4'>
          <Repos username={match.params.username} />
        </div>
      </React.Fragment>
    );
  }
}
