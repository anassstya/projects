import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./modelSlice";

export const store = configureStore({
    reducer: {
        model: modelReducer,
    },
});