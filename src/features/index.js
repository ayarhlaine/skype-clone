import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import selectedMessageSlice from './selectedMessageSlice';
const reducer = combineReducers({
    selectedMessage: selectedMessageSlice,
});
const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;