import React from 'react';
import T from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import s from './Auth.module.scss';
import { Header } from '../../components';
import { routes } from '../Router';
import Login from '../Login/LoginContainer';
import Register from '../Register/RegisterContainer';
import PassRecovery from '../PasswordRecovery/PassRecovery';
import Api from '../../api';



export default function Auth() {
  return (
    <>
      <Header isLight={true} />

      <Switch>
        {Api.Auth.isLoggedIn && <Redirect to={routes.home} />}
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.passRecovery} component={PassRecovery} />
      </Switch>
    </>
  );
}

Auth.propTypes = {};
