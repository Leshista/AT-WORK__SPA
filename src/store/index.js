import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        null: null,
    },
});

export default store;