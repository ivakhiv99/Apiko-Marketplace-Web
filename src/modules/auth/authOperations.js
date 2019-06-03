import * as actions from './authActions';
import Api from '../../api';
import { routes } from '../../scenes/Router';

export function login(body) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Auth.login(body);

      const { user, token } = res.data;

      Api.Auth.setToken(token);

      dispatch(actions.login.success(user));
    } catch (e) {
      dispatch(actions.login.error({ message: e.message }));
    }
  };
}

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register(body);

      const { user, token } = res.data;

      Api.Auth.setToken(token);

      dispatch(actions.login.success(user));
    } catch (e) {
      dispatch(actions.register.error({ message: e.message }));
    }
  };
}

export function logout() {
  return async function logoutThunk(dispatch) {
    try {
      dispatch(actions.logout.start());

      Api.Auth.logout();

      dispatch(actions.logout.success());
    } catch (e) {
      console.error(e);
      // dispatch(actions.logout.error({ message: e.message }));
    }
  };
}
