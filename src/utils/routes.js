import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Link } from 'react-router-dom';

// import { utility } from '@ciro-maciel/utility';

// https://reacttraining.com/react-router/web/guides/server-rendering/404-401-or-any-other-status
const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

Status.propTypes = {
  code: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export const NotFound = () => (
  <Status code={404}>
    <h1>Sorry, can’t find that.</h1>
    <p>
      Go to <Link to="/">Home</Link>
    </p>
  </Status>
);

export const Mount = ({ type, component: Component, user, project, document, ...rest }) => {
  const userLogged = !!user.data;

  const MakeComponet = ({ history, ...rest }) => (
    <Component
      {...rest}
      user={user}
      project={project}
      document={document}
      navigation={{ history, Link }}
      // utility={utility}
    />
  );

  return (
    <Route
      {...rest}
      render={(props) => (type === 'Auth' && userLogged ? <Redirect to="/" /> : <MakeComponet {...props} />)}
    />
  );
};

Mount.propTypes = {
  type: PropTypes.string,
  component: PropTypes.func,
};
