import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import ConnectedNavigationBar from './navigation/NavigationBar';
import ConnectedLogin from './login/Login';
import ConnectedLeaderboard from './leaderboard/Leaderboard';
import ConnectedCreateNewQuestion from './question/CreateNewQuestion';
import ConnectedHome from './home/Home';
import ConnectedPollResult from './question/PollResult';
import ConnectedPoll from './question/Poll';
import { hasAnsweredQuestion } from '../utils/dataUtils';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loading === true ? null : this.props.user !== null ? (
            <div>
              <ConnectedNavigationBar />
              <Route exact path='/' component={ConnectedHome} />
              <Route path='/leaderboard' component={ConnectedLeaderboard} />
              <Route path='/add' component={ConnectedCreateNewQuestion} />
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
            </div>
          ) : (
            <ConnectedLogin />
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
