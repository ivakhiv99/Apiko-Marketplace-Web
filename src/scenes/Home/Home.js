import React from 'react';
import T from 'prop-types';
import s from './Home.module.scss';
import {Header} from '../../components';

export default function Home () {
  return(
    <div className={s.container}>
      <Header isLight={false} />
    </div>
  );
}

Home.propTypes ={

};
