import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-reducer';

const store = configureStore({
  reducer: {
    auth: authReducer.reducer
  }
});

export default store;