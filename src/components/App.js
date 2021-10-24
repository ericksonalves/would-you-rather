import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import ConnectedNavigationBar from './navigation/NavigationBar';
import ConnectedLogin from './Login';
import ConnectedLeaderboard from './leaderboard/Leaderboard';
import ConnectedCreateNewQuestion from './question/CreateNewQuestion';
import ConnectedHome from './home/Home';
import ConnectedPollResult from './question/PollResult';
import ConnectedPoll from './question/Poll';

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
              <Route
                path='/new-question'
                component={ConnectedCreateNewQuestion}
              />
              <Route path='/results/:id' component={ConnectedPollResult} />
              <Route path='/poll/:id' component={ConnectedPoll} />
            </div>
          ) : (
            <ConnectedLogin />
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ loading, user }) {
  return {
    loading,
    user,
  };
}

export default connect(mapStateToProps)(App);
