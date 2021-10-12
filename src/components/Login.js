import { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Login.css';
import * as API from '../data/database';

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
      <div className='Login'>
        <h3>Welcome to the Would You Rather app!</h3>

        <h5>Please sign in to continue</h5>

        <DropdownButton title='Sign in'>
          {this.state.users.map((user) => (
            <Dropdown.Item>{user.name}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    );
  }
}
