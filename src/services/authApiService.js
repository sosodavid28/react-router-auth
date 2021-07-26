import axios from 'axios';

export const createUser = (email, password) => {
  return axios({
    method: 'POST',
    url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_xvcH4yY7PbfMYWkMIinbWI1abrjBw0U',
    data: {
      email, password,
      returnSecureToken: true,
    }
  });
}

export const login = (email, password) => {
  return axios({
    method: 'POST',
    url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_xvcH4yY7PbfMYWkMIinbWI1abrjBw0U',
    data: {
      email, password,
      returnSecureToken: true,
    }
  });
}