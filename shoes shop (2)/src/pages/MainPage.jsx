import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Collection from "../components/Collection.jsx";
import "../styles/MainPage.scss";
import Footer from "../components/Footer.jsx";


export default function MainPage() {
    return (
        <div>
            <Header/>
            <Banner/>
            <div className="main-content">
                <h1>Наша Коллекция</h1>
                <p>Откройте для себя 6 уникальных моделей обуви, каждая из которых воплощает совершенство дизайна и качества</p>
                <Collection/>
            </div>
            <Footer/>
        </div>

    );
}