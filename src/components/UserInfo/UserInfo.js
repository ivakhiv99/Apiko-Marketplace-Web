import React from 'react';
import s from './UserInfo.module.scss';

function UserInfoIcon({isLoading, bg, initials, ...rest }) {
  return (
    <div className={s.userIcon} style={{backgroundColor: bg}} {...rest}>
      {
        isLoading ?
          null
          :
          <p>{initials}</p>
      }
    </div>
  );
}

export default UserInfoIcon;
