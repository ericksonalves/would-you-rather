import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>Would You Rather</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#new-question'>New Question</Nav.Link>
              <Nav.Link href='#leaderboard'>Leaderboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#' disabled>
                Hello, {this.props.user.name}
              </Nav.Link>
              <Nav.Link href='#logout'>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
  user: state.user,
}))(Home);
