import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, deleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const phonebookReducer = phonebookSlice.reducer;
