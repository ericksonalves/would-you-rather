import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Login.css';
import logo from '../../assets/logo.svg';

class Login extends Component {
  state = {
    redirectToReferrer: false,
  };

  loginHandler = (eventKey) => {
    this.props.loginHandler(eventKey);

    this.setState(() => ({
      redirectToReferrer: true,
    }));
  };

  render() {
    const locationState = this.props.location
      ? this.props.location.state
      : null;

    const { from } = locationState || {
      from: { pathname: '/home' },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className='login'>
        <div className='notice'>
          <p className='welcome-notice'>Welcome to the Would You Rather app!</p>

          <p className='sign-in-notice'>Please sign in to continue</p>
        </div>

        <div className='sign-in'>
          <img src={logo} alt='Logo' className='logo' />

          <p className='sign-in-message'>Sign in</p>

          <DropdownButton title='Select user' onSelect={this.loginHandler}>
            {this.props.users.map((user) => (
              <Dropdown.Item eventKey={user.id} key={user.id}>
                {user.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, user }, props) {
  return {
    users,
    user,
    loginHandler: props.loginHandler,
    ...props,
  };
}

export default connect(mapStateToProps)(Login);
