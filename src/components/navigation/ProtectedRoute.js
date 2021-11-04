import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthorized } = rest;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
