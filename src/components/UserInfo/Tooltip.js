import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withState, withHandlers } from 'recompose';
import s from './UserInfo.module.scss';
import Icon from './UserInfo';
import UserInfoBlock from './UserInfoBlock/UserInfoBlock';
import { getInitials } from '../../helpers/helperFunctions';
import { routes } from '../../scenes/Router';
import { authOperations } from '../../modules/auth';


function UserInfo({ show, hide, isVisible, isLoading, initials, iconBg, user, handleLogout }) {

  return (
    <div className={s.wrapper}>
      <Icon
        isLoading={isLoading}
        initials={initials}
        bg={iconBg}
        onMouseOver={show}
      />

      {
        isVisible &&

        <UserInfoBlock
          bg={iconBg}
          initials={initials}
          fullName={user.fullName}
          email={user.email}
          onMouseLeave={hide}
          handleLogout={handleLogout}
        />
      }
    </div>
  );
}


const mapStateToProps = state => {
  return {
    user: state.viewer.user,
    initials: state.viewer.user ? getInitials(state.viewer.user.fullName) : null,
    isLoading: state.viewer.fetchViewer.isLoading,
  };
};

const mapDispatchToProps = {
  logout: authOperations.logout,
};

const enhancer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState(
    'isVisible',
    'setVisibility',
    false,
  ),
  withHandlers({
    show: ({ setVisibility }) => () => {
      setVisibility(true);
    },
    hide: ({ setVisibility }) => () => {
      setVisibility(false);
    },
    handleLogout: props => async () => {
      await props.logout();
      props.history.push(routes.home);
    },
  }),
);


export default enhancer(UserInfo);
