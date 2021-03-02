import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import utility from '@ciro-maciel/utility';
import * as containers from './containers';

// import { useUser } from 'hooks';

const Routes = () => {
  // const user = useUser();

  return (
    <Switch>
      <Route exact path="/auth" type="forAuth" user={{ data: null }} component={containers.Auth} />

      <Route exact path="/" user={{ data: {} }} component={containers.Home} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
