import React from "react";
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./redux/store.js";
import HomePage from "./components/HomePage.jsx";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <HomePage/>
        </Provider>
    </React.StrictMode>
);