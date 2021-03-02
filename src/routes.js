import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import utility from '@ciro-maciel/utility';
import * as classes from './containers';

// import { useUser } from './hooks';

const Routes = () => {
  // const user = useUser();

  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/:document" />
      <Route exact path="/:document/:id?" />
    </Switch>
  );
};

export default Routes;
