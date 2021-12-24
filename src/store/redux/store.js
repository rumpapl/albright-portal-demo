import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';

export const reduxStore = configureStore({
    reducer: {
        user: userReducer,
    },
});
