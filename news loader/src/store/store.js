import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import newsSlice from "./newsSlice.js";
import {newsSaga} from "./newsSaga.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        news: newsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(newsSaga);
export default store;