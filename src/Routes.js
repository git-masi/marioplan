import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

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
        <Route exact path="/signin" render={() => (
          <SignIn/>
        )}/>
        <Route exact path="/signup" render={() => (
          <SignUp/>
        )}/>
      </Switch>
    </Fragment>
  )
}

export default Routes;