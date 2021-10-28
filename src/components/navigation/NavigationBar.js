import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {
  handleLogout = (eventKey) => {
    if (eventKey === 'logout') {
      this.props.logoutHandler();
    }
  };

  render() {
    return (
      <div>
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Navbar.Brand>Would You Rather</Navbar.Brand>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/add'>
                <Nav.Link>New Question</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/leaderboard'>
                <Nav.Link>Leaderboard</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <Nav.Link href='#' disabled>
                Hello, {this.props.user.name}
              </Nav.Link>
              <Nav.Link eventKey='logout' onSelect={this.handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ users, user }, props) {
  return {
    users,
    user,
    logoutHandler: props.logoutHandler,
  };
}

export default connect(mapStateToProps)(NavigationBar);
