import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { useUser } from 'hooks';

import * as containers from './containers';

const NotFound = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div>
      <h1>Sorry, can’t find that.</h1>
      <p>
        Go to {` `}
        <Link to="/">Home</Link>
      </p>
    </div>
  </div>
);

const PriveteRoute = ({ isLogged, ...props }) => (isLogged ? <Route {...props} /> : <Redirect to="/auth" />);

PriveteRoute.propTypes = {
  isLogged: PropTypes.bool,
};

const AuthRoute = ({ isLogged, ...props }) => (isLogged ? <Redirect to="/" /> : <Route {...props} />);

AuthRoute.propTypes = {
  isLogged: PropTypes.bool,
};

const Routes = () => {
  const user = useUser();
  const isLogged = !!user.data;

  return (
    <Switch>
      <Route exact path="/" component={containers.Home} />
      <Route exact path="/changelog" isLogged={isLogged} component={containers.Changelog} />

      <AuthRoute exact path="/auth" isLogged={isLogged} component={containers.Auth} />

      <PriveteRoute exact path="/board" isLogged={isLogged} component={containers.Board} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
