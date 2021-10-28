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
import ConnectedPollResult from './question/PollResult';
import ConnectedPoll from './question/Poll';
import { hasAnsweredQuestion } from '../utils/dataUtils';
import { handleSetLoggedUser } from '../actions/user';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  logoutHandler = () => {
    const { dispatch } = this.props;

    dispatch(handleSetLoggedUser(null));

    window.location = '/';
  };

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loading === true ? null : this.props.user !== null ? (
            <div>
              <ConnectedNavigationBar logoutHandler={this.logoutHandler} />
              <Route exact path='/' component={ConnectedHome} />
              <Route
                exact
                path='/leaderboard'
                component={ConnectedLeaderboard}
              />
              <Route exact path='/add' component={ConnectedCreateNewQuestion} />
              <Route
                path='/questions/:id'
                render={(props) => {
                  const questionId = props.match.params.id;

                  const question = this.props.questions.find(
                    (q) => q.id === questionId
                  );

                  return hasAnsweredQuestion(this.props.user.id, question) ? (
                    <ConnectedPollResult {...props} />
                  ) : (
                    <ConnectedPoll {...props} />
                  );
                }}
              />
              <Redirect to='/' />
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
