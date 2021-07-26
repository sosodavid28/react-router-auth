import { authReducerActions } from './auth-reducer';
import * as authApiService from '../services/authApiService';

export const createUser = (email, password) => {
  return async (dispatch) => {
    dispatch(authReducerActions.authPending());

    try {
      const response = await authApiService.createUser(email, password);
      console.log('response', response)
      dispatch(authReducerActions.createUserSuccess(response.data.idToken));

    } catch (error) {

    }

    dispatch(authReducerActions.authFinished());
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(authReducerActions.authPending());

    try {
      const response = await authApiService.login(email, password);
      console.log('response', response)
      dispatch(authReducerActions.loginSuccess(response.data.idToken));

    } catch (error) {

    }

    dispatch(authReducerActions.authFinished());
  }
}
