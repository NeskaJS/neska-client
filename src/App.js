import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from 'Containers';

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
  </Switch>
);

export default App;
