import { createSlice } from '@reduxjs/toolkit';

const contactsFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { filterContacts } = contactsFilter.actions;

export const filterReducer = contactsFilter.reducer;
