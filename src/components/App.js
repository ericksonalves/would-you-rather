import { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import ConnectedNavigationBar from './navigation/NavigationBar';
import ConnectedLogin from './login/Login';
import ConnectedLeaderboard from './leaderboard/Leaderboard';
import ConnectedCreateNewQuestion from './question/CreateNewQuestion';
import ConnectedHome from './home/Home';
import ProtectedRoute from './navigation/ProtectedRoute';
import PollRenderer from './question/PollRenderer';
import { handleSetLoggedUser } from '../actions/user';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  loginHandler = (eventKey) => {
    const { dispatch, history, users } = this.props;

    const userId = eventKey;
    const user = users.find((u) => u.id === userId);

    dispatch(handleSetLoggedUser(user));

    history.push('/home');
  };

  logoutHandler = () => {
    const { dispatch } = this.props;

    dispatch(handleSetLoggedUser(null));
  };

  render() {
    const { loading, user } = this.props;

    const isAuthorized = user !== null;
    const isLoading = loading === true;

    return (
      <Fragment>
        <LoadingBar />
        {!isLoading && (
          <Fragment>
            <ConnectedNavigationBar logoutHandler={this.logoutHandler} />

            <ProtectedRoute
              isAuthorized={isAuthorized}
              path='/home'
              component={ConnectedHome}
            />

            <ProtectedRoute
              isAuthorized={isAuthorized}
              path='/leaderboard'
              component={ConnectedLeaderboard}
            />

            <ProtectedRoute
              isAuthorized={isAuthorized}
              path='/add'
              component={ConnectedCreateNewQuestion}
            />

            <ProtectedRoute
              isAuthorized={isAuthorized}
              path='/questions/:id'
              component={PollRenderer}
            />

            <Route
              exact
              path='/'
              render={() => {
                return <ConnectedLogin loginHandler={this.loginHandler} />;
              }}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ loading, user, users, questions }) {
  return {
    loading,
    user,
    users,
    questions,
  };
}

export default withRouter(connect(mapStateToProps)(App));
