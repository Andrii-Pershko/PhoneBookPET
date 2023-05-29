import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from 'redux/initialState';


const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter: (state, { payload }) => (state = payload),
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
