import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { reducer } from './rootReducer';
import { middleware } from './rootReducer';

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
