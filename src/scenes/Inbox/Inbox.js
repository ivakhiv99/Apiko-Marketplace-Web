import React from 'react';
import T from 'prop-types';
import s from './Inbox.module.scss';
import {Redirect} from 'react-router-dom';
import Api from '../../api';
import {routes} from '../Router';

export default function Inbox () {
  if(!Api.Auth.isLoggedIn){
    return <Redirect to={routes.login} />
  }
  return(
    <div className={s.container}>

    </div>
  );
}

Inbox.propTypes ={

};
