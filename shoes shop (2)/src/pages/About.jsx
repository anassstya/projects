import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/App.css";
import "../styles/About.scss"

import people from "../assets/pics/people.png";
import shop from "../assets/pics/shop.jpg"
export default function About(){
    return(
        <div>
            <Header/>
            <Banner/>
            <div className="aboutContainer">
                <p className="mainText">Мы — команда энтузиастов, объединённых любовью к стилю, комфорту и уличной культуре.
                    Наш магазин — это не просто витрина кроссовок, а пространство, где каждая пара имеет свою историю, дизайн и настроение.
                </p>
                <p className="mainText">
                    Мы тщательно отбираем модели, чтобы вы могли найти то, что подчеркнёт вашу индивидуальность. В ассортименте — как премиальные
                    лимитированные коллекции, так и универсальные пары на каждый день. Особое внимание мы уделяем качеству материалов,
                    деталям и оригинальному внешнему виду.
                </p>
                <div className="container">
                    <img src={people} alt=""/>
                    <div className="containerText">
                    <p> Почему выбирают нас?</p>
                    <ul>
                        <li>Только оригинальная продукция от проверенных поставщиков</li>
                        <li>Быстрая доставка по всей стране</li>
                        <li>Удобный подбор по размерам и стилю</li>
                        <li>Постоянные новинки и коллекции по сезону</li>
                        <li>Поддержка, которая всегда на связи</li>
                    </ul>
                        <img src={shop} alt=""/>
                    </div>
                </div>
                <p className="aboutContainer">Мы верим, что кроссовки — это не просто обувь. Это часть вашей истории. Будь в движении. Будь собой.</p>
            </div>
            <Footer/>
        </div>
    )
}