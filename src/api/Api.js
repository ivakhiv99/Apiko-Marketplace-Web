import axios from 'axios';

const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  getViewer: '/api/account/user',
  getLatest:'/api/products/latest',
};


export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token){
    this._token = token;
    this._storeToken();
    this._setTokenToAxios(token);
  },

  init(){
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);

      this._setTokenToAxios();
    }catch (e) {
      console.log(e);
    }
  },

  login(body){
    return axios.post(urls.login, body);
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

  _setTokenToAxios(){
    axios.defaults.headers.common.Authorization = `Bearer ${this._token}`;  //  Unresolved common
  },
};

export const Viewer ={
  get(){
    return axios.get(urls.getViewer);
  }
};

export const Products ={
  getLatest(){
    return axios.get(urls.getLatest);
  }
};

export function init() {
  Auth.init();
}
