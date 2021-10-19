import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import ConnectedHome from './Home';
import ConnectedLogin from './Login';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.loading === true ? null : this.props.user !== null ? (
          <ConnectedHome />
        ) : (
          <ConnectedLogin />
        )}
      </Fragment>
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
