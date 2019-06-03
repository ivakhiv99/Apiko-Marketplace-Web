import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../scenes/Router';
import s from './UserInfoBlock.module.scss';

function UserInfoBlock({ handleLogout, bg, initials, fullName, email, ...rest }) {
  // console.log(bg)
  return (
    <div
      className={s.userInfo}

      {...rest}
    >
      <div className={s.userInfoTop}>
        <div className={s.userIcon} style={{ backgroundColor: bg }}>
          {initials}
        </div>
        <div>
          <p className={s.userName}>{fullName}</p>
          <p className={s.userName}>{email}</p>
          <Link className={s.profileLink} to={routes.home}>Profile</Link>
          {/*//TODO: link to Profile*/}
        </div>
      </div>
      <div className={s.userInfoBottom}>
        <button className={s.logoutBtn} onClick={handleLogout} type='button'>LOGOUT</button>
      </div>
    </div>
  );
}

export default UserInfoBlock;
