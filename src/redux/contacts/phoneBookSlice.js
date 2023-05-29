import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../operations';
import {
  addContactFulfilled,
  chekTypeThunk,
  deleteContactFulfilled,
  fetchContactsFulfilled,
  handlePending,
  handleRejected,
} from './sliceFunctions';
import { stateContacts } from 'redux/initialState';

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: stateContacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(deleteContact.fulfilled, deleteContactFulfilled)
      .addMatcher(isAnyOf(...chekTypeThunk('pending')), handlePending)
      .addMatcher(isAnyOf(...chekTypeThunk('rejected')), handleRejected);
  },
});

export const phonebookReducer = phonebookSlice.reducer;
