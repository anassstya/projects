import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieMainPage from "./MovieMainPage.jsx";
import LikedMovies from "./LikedMovies.jsx";
import MovieDetailed from "./MovieDateiled.jsx";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MovieMainPage />} />
            <Route path="/movie/:id" element={<MovieDetailed />} />
            <Route path="/movies/liked" element={<LikedMovies />} />
        </Routes>
    );
}