import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import Api from '../api';
import AddProduct from './AddProduct/AddProduct'

export const routes = {
  home: '/',
  login: '/auth/login',
  register: '/auth/register',
  auth:'/auth',
  inbox: '/inbox',
  passRecovery:'/pass-recovery',
  addProduct:'/products/add',
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.auth} component={Auth} />
        <Route path={routes.addProduct} component={AddProduct} />

        <PrivateRoute component={Inbox} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({component: Component, ...rest}) {
  return(
    <Route
      {...rest}
      render={props =>
        Api.Auth.isLoggedIn ?
          <Component {...props} />
          :
          <Redirect to={routes.login} />

      }
    />
  )
}
