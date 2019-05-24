import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import T from 'prop-types';
import s from './Login.module.scss';
import { routes } from '../../scenes/Router';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';


function Login({handleLogin}) {
  return (
    <header>
      <button type='button' onClick={handleLogin}>
        Login
      </button>
      <Link to={routes.register}>Register</Link>
    </header>
  );
}


const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogin: props => () => {
      Api.Auth.login();
      props.history.push(routes.home);
    },
  }),
);


Login.propTypes = {};


export default enhancer(Login);
