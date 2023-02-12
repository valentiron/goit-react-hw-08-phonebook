import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

Notify.init({
  width: '720px',
  closeButton: false,
  timeout: 5000,
});

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetshAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { name, number });
      Notify.info(`${res.data.name} added to contacts. `);
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      Notify.info(`${res.data.name} removed from contacts.`);
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
