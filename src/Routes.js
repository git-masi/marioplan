import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

const Routes = () => {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => (
          <Dashboard/>
        )}/>
        <Route exact path="/project/:id" render={routeProps => (
          <ProjectDetails {...routeProps}/>
        )}/>
      </Switch>
    </Fragment>
  )
}

export default Routes;