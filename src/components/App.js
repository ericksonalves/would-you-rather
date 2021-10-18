import { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import ConnectedHome from './Home';
import ConnectedLogin from './Login';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    if (this.props.loading === true) {
      return <h3>Loading...</h3>;
    }

    return <ConnectedLogin />;
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
