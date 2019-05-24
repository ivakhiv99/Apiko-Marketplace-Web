import React from 'react';
import T from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import s from './Auth.module.scss';
import { Header } from '../../components';
import { routes } from '../Router';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Api from '../../api';



export default function Auth() {
  return (
    <>
      <Header isLight={true} />

      <Switch>
        {Api.Auth.isLoggedIn && <Redirect to={routes.home} />}
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
      </Switch>
    </>
  );
}

Auth.propTypes = {};
