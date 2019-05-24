export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  // set

  init(){
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
    }catch (e) {
      console.log(e);
    }
  },

  login(){
    //
    this._token = 'token';

    this._storeToken();
  },

  logout(){
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    }catch (e) {
      console.log(e);
    }
  },

  _storeToken(){
    try {
      window.localStorage.setItem('token', JSON.stringify(this._token));
    } catch (e) {
      console.log(e);
    }
  },


};

export function init() {
  Auth.init();
}
