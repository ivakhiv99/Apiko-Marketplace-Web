import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import s from './Register.module.scss';
import { routes } from '../Router';
import { Input } from '../../components';

export default function RegisterView({ handleLogin, isLoading, handleFieldChange, fields }) {
  return (
    <div className={s.container}>
      <div className={s.registerContainer}>
        <h2>Register</h2>
        <Input
          fields={fields}
          name='email'
          placeholder='Example@gmail.com'
          label='EMAIL'
          onChange={handleFieldChange}
        />
        <Input
          fields={fields}
          name='fullName'
          placeholder='Tony Stark'
          label='FULL NAME'
          onChange={handleFieldChange}
        />
        <Input
          fields={fields}
          name='password'
          type='password'
          label='PASSWORD'
          onChange={handleFieldChange}
        />
        <Input
          fields={fields}
          name='passwordAgain'
          type='password'
          label='PASSWORD AGAIN'
          onChange={handleFieldChange}
        />
        <button className={s.registerBtn} type='button' onClick={handleLogin}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>
      </div>
      <div className={s.linkContiner}>
        <p>I already have an account,</p>
        <Link className={s.loginLink} to={routes.login}>LOG IN</Link>
      </div>
    </div>
  );
}

RegisterView.propTypes = {};
