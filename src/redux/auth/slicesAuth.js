import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../operations';
import {
  logOutFulfilled,
  logOutPending,
  loginFulfilled,
  loginPending,
  refreshUsersFulfilled,
  refreshUsersReject,
  registerFulfilled,
} from './sliceFunctions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(refreshUser.fulfilled, refreshUsersFulfilled)
      .addCase(refreshUser.rejected, refreshUsersReject)
      .addCase(register.fulfilled, registerFulfilled)
      .addCase(logIn.fulfilled, loginFulfilled)
      .addCase(logIn.pending, loginPending)
      .addCase(logOut.fulfilled, logOutFulfilled)
      .addCase(logOut.pending, logOutPending);
  },
});

export const authReducer = authSlice.reducer;
