import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import CreateUser from '../createUser/CreateUser';
import EditUser from '../editUser/EditUser';
import Users from '../users/UsersContainer';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createUser" component={CreateUser} />
          <Route exact path="/editUser/:id" component={EditUser} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
