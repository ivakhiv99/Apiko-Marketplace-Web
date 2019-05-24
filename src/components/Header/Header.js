import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import T from 'prop-types';
import { compose, withHandlers } from 'recompose';
import s from './Header.module.scss';
import { routes } from '../../scenes/Router';
import Api from '../../api';
import logoWhite from '../../images/logoWhite.png';
import logoBlack from '../../images/logoBlack.png';

import SellBtn from '../../atoms/SellBtn/SellBtn';
import SavedBtn from '../../atoms/SavedBtn/SavedBtn';


function Header({ handleLogout, isLight }) {
  // const headerClases =
  return (
    <header className={`${s.header} ${isLight ? s.lightHeader : s.darkHeader} `}>
      <div className={s.left}>
        <Link to={routes.home}>
          <img alt='logo' src={isLight ? logoBlack : logoWhite} />
        </Link>
      </div>
      <div className={s.right}>
        <SellBtn />
        {Api.Auth.isLoggedIn ?
          <button type='button' onClick={handleLogout}>Logout</button>
          :
          <Link className={`${s.loginLink} ${isLight ? s.blackLink : s.whiteLink} `} to={routes.login}>Login</Link>
        }
        {/*<Link to={routes.register}>Register</Link>*/}
        <SavedBtn isWhite={!isLight} />
      </div>

    </header>
  );
}


Header.propTypes = {};

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    },
  }),
);

export default enhancer(Header);


