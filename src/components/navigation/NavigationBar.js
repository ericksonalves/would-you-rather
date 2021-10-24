import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
            <Navbar.Brand>Would You Rather</Navbar.Brand>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/new-question'>
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

function mapStateToProps({ users, user }) {
  return {
    users,
    user,
  };
}

export default connect(mapStateToProps)(NavigationBar);
