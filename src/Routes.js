import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => (
        <Navbar/>
      )}/>
    </Switch>
  )
}

export default Routes;