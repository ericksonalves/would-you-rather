import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render() {
    const { element, path, user } = this.props;

    const ele = user !== null ? element : <Redirect to='/' replace />;

    return <Route path={path} component={ele} />;
  }
}

function mapStateToProps({ user }, props) {
  return {
    user,
    element: props.element,
    path: props.path,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
