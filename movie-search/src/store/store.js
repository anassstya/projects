import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "./MovieSlice.js"

const store = configureStore({
    reducer: {
        movies: movieSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;