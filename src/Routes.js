import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

const Routes = () => {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => (
          <Dashboard/>
        )}/>
      </Switch>
    </Fragment>
  )
}

export default Routes;