import { authReducerActions } from './auth-reducer';
import * as authApiService from '../services/authApiService';

export const createUser = (email, password) => {
  return async (dispatch) => {
    dispatch(authReducerActions.authPending());

    try {
      const response = await authApiService.createUser(email, password);
      dispatch(authReducerActions.createUserSuccess(response.data.idToken));
    } catch (error) {
      dispatch(authError(error.response.data.error));
    }

    dispatch(authReducerActions.authFinished());
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(authReducerActions.authPending());

    try {
      const response = await authApiService.login(email, password);
      dispatch(authReducerActions.loginSuccess(response.data.idToken));
    } catch (error) {
      dispatch(authError(error.response.data.error));
    }

    dispatch(authReducerActions.authFinished());
  }
}

export const authError = (error) => {
  return () => {
    alert(error.message);
  }
}
