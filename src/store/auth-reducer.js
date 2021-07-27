import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   token: '',
//   isLoading: false
// };

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoading: false
  },
  reducers: {
    authPending(state) {
      state.isLoading = true;
    },
    authFinished(state) {
      state.isLoading = false;
    },
    createUserSuccess(state, action) {
      state.token = action.payload;
    },
    loginSuccess(state, action) {
      state.token = action.payload;
    },
    logout(state, action) {
      state.token = '';
    },
    setTokenFromLocalStorage(state, action) {
      state.token = action.payload;
    },
    clearExpireToken(state, action) {

    }
  }
});

export const authReducerActions = authReducer.actions;

export default authReducer;