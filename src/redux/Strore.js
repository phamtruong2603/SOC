import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer/reducerCounter.js';
// import { userReducer } from './reducer/userReducer.js';

const store = configureStore({
    reducer: {
        counterReducer,
        // userReducer
    }
})

export default store;