import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header/HeaderContainer';
import Home from '../home/Home';
import CreateUser from '../createUser/CreateUser';
import EditUser from '../editUser/EditUser';
import Users from '../users/UsersContainer';
import SignIn from '../signIn/SignInContainer';
import SignOut from '../signOut/SignOut';
import Admin from '../admin/AdminContainer';

import CheckAuth from '../../HoC/CheckAuth';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createUser" component={CreateUser} />
          <Route exact path="/editUser/:id" component={EditUser} />
          <Route exact path="/users" component={CheckAuth(Users)} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
