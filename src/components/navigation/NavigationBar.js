import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { handleSetLoggedUser } from '../../actions/user';

class NavigationBar extends Component {
  handleSelection = (eventKey) => {
    if (eventKey === 'logout') {
      const { dispatch } = this.props;

      dispatch(handleSetLoggedUser(null));
    }
  };

  render() {
    return (
      <div>
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Navbar.Brand href=''>Would You Rather</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href=''>Home</Nav.Link>
              <Nav.Link href='new-question'>New Question</Nav.Link>
              <Nav.Link href='leaderboard'>Leaderboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#' disabled>
                Hello, {this.props.user.name}
              </Nav.Link>
              <Nav.Link eventKey='logout' onSelect={this.handleSelection}>
                Logout
              </Nav.Link>
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
}))(NavigationBar);
