import { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Login.css';
import * as API from '../data/database';
import logo from '../assets/logo.svg';

export default class Login extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API._getUsers().then((users) => this.setUsers(users));
  }

  setUsers = (users) => {
    const values = Object.keys(users).map(function (key) {
      return users[key];
    });

    this.setState(() => ({
      users: values,
    }));
  };

  render() {
    return (
      <div className='login'>
        <div className='notice'>
          <p className='welcome-notice'>Welcome to the Would You Rather app!</p>

          <p className='sign-in-notice'>Please sign in to continue</p>
        </div>

        <div className='sign-in'>
          <img src={logo} alt='Logo' className='logo' />

          <p className='sign-in-message'>Sign in</p>

          <DropdownButton title='Select user'>
            {this.state.users.map((user) => (
              <Dropdown.Item>{user.name}</Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    );
  }
}
