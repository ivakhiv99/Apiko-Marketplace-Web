import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import s from './Register.module.scss';
import { routes } from '../../scenes/Router';

export default function Register() {
  return (
    <header>
      <Link to={routes.login}>Login</Link>
    </header>
  );
}

Register.propTypes = {};
