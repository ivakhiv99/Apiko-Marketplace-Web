import React from 'react';
import s from './SavedBtn.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/Router';

import heartBlack from '../../images/heartBlack.png';
import heartWhite from '../../images/heartWhite.png';


export default function SavedBtn({ isWhite }) {
  return (
    <Link to={routes.home}>
      <img alt='heart_icon' src={isWhite ? heartWhite : heartBlack} className={s.SavedBtn}/>
    </Link>
  );
}
//should return link?
