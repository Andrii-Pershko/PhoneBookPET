import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/slicesAuth';
import { filterReducer } from './contacts/filterSlice';
import { phonebookReducer } from './contacts/phoneBook';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: phonebookReducer,
  filter: filterReducer,
});
