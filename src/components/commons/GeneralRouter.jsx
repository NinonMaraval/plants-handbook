import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import PlantForm from '../views/PlantForm';
import PlantItem from '../views/PlantItem';
import PlantsList from '../views/PlantsList';
import Header from './Header';
import NavigationList from './NavigationList';

function GeneralRouter() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <PlantForm />
          </Route>
          <Route exact path="/list">
            <PlantsList />
          </Route>
          <Route exact path="/item">
            <PlantItem />
          </Route>
        </Switch>
      </div>
      <NavigationList />
    </Router>
  );
}

export default GeneralRouter;
