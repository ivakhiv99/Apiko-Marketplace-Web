import React from 'react';
import T from 'prop-types';
import s from './LatestList.module.scss';

export default function LatestListView({ list, isLoading }) {
  if (isLoading){
    return <div>Lpading...</div>
  }
  return (
    <div className={s.container}>
      {list.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

LatestListView.propTypes = {};
