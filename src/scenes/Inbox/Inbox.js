import React from 'react';
import T from 'prop-types';
import s from './Inbox.module.scss';
import Header from '../../components/Header/Header';

export default function Inbox () {
  return(
    <div className={s.container}>
      <Header />
    </div>
  );
}

Inbox.propTypes ={

};
