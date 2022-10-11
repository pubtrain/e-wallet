import { configureStore } from '@reduxjs/toolkit';
import userSlice from './cardSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
