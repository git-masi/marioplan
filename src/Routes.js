import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch location={location}>
      <Route exact path="/" render={<h1>I'm the root route!</h1>}/>
    </Switch>
  )
}

export default Routes;