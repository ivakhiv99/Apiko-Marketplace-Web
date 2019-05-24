import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';

export const routes = {
  home: '/',
  login: '/auth/login',
  register: '/auth/register',
  auth:'/auth',
  inbox: '/inbox',
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.inbox} component={Inbox} />
        <Route path={routes.auth} component={Auth} />
        {/*<Auth />*/}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
