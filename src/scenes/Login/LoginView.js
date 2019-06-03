import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import s from './Login.module.scss';
import { routes } from '../Router';
import { Input } from '../../components';

function LoginView({ handleLogin, isLoading, handleFieldChange, fields }) {
  // console.log(fields);

  return (
    <div className={s.container}>
      <div className={s.loginContainer}>
        <h2>Login</h2>
        <Input
          fields={fields}
          name='email'
          placeholder='example@gmail.com'
          label='EMAIL'
          onChange={handleFieldChange}
        />
        <Input
          fields={fields}
          name='password'
          type='password'
          label='PASSWORD'
          onChange={handleFieldChange}
        />
        <Link className={s.recoveryLink} to={routes.passRecovery}>Don't remember password?</Link>
        <button className={s.loginBtn} type='button' onClick={handleLogin}>
          {isLoading ? 'Loading...' : 'Continue'}
        </button>
      </div>
      <div className={s.linkContiner}>
        <p>I have no account,</p>
        <Link className={s.registerLink} to={routes.register}>register now</Link>
      </div>
    </div>

  );
}


LoginView.propTypes = {};


export default LoginView;
