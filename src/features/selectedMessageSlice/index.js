import { createSlice, createAction } from '@reduxjs/toolkit';

// // Actions
// const setSelectedMessageAction = createAction('message/setSelectedMessage');

// initial state
const initialState = { selectedMessage: null };

// Slice
const userMessageSlice = createSlice({
  name: 'selectedMessage',
  initialState,
  reducers: {
    setSelectedMessageAction(state, action) {
      state.selectedMessage = action.payload
    },
  },
})

export const { setSelectedMessageAction } = userMessageSlice.actions;
export default userMessageSlice.reducer;