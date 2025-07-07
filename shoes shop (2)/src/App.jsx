import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ModelPage from "./pages/ModelPage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import BasketPage from "./pages/BasketPage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/model/:id" element={<ModelPage />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/basket" element={<BasketPage />} />
            </Routes>
        </BrowserRouter>
    );
}
