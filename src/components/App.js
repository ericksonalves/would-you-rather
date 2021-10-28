import { Component, Fragment } from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import ConnectedNavigationBar from './navigation/NavigationBar';
import ConnectedLogin from './login/Login';
import ConnectedLeaderboard from './leaderboard/Leaderboard';
import ConnectedCreateNewQuestion from './question/CreateNewQuestion';
import ConnectedHome from './home/Home';
import ConnectedProtectedRoute from './navigation/ProtectedRoute';
import PollRenderer from './question/PollRenderer';
import { handleSetLoggedUser } from '../actions/user';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  logoutHandler = () => {
    const { dispatch } = this.props;

    dispatch(handleSetLoggedUser(null));
  };

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loading === true ? null : this.props.user !== null ? (
            <div>
              <ConnectedNavigationBar logoutHandler={this.logoutHandler} />
              <ConnectedProtectedRoute path='/home' element={ConnectedHome} />
              <ConnectedProtectedRoute
                path='/leaderboard'
                element={ConnectedLeaderboard}
              />
              <ConnectedProtectedRoute
                path='/add'
                element={ConnectedCreateNewQuestion}
              />
              <ConnectedProtectedRoute
                path='/questions/:id'
                element={PollRenderer}
              />
              <Redirect to='/home' />
            </div>
          ) : (
            <div>
              <Route exact path='/' component={ConnectedLogin} />
              <Redirect to='/' />
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ loading, user, questions }) {
  return {
    loading,
    user,
    questions,
  };
}

export default connect(mapStateToProps)(App);
