import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../redux/authOperations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from '../redux/contactOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [updateContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [updateContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [updateContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(item => {
        return item.id === action.payload.id
          ? {
              ...item,
              name: action.payload.name,
              number: action.payload.number,
            }
          : item;
      });
    },
  },
  [logOut.fulfilled](state) {
    state.items = [];
    state.error = null;
    state.isLoading = false;
  },
});

export const contactsReducer = contactsSlice.reducer;
