import React from "react";
import "../styles/App.css";
import "../styles/Footer.scss";

import twitter from "../assets/pics/twitter.svg";
import instagram from "../assets/pics/inst.svg";
import facebook from "../assets/pics/facebook.svg";
import {Link} from "react-router-dom";

export default function Footer() {
    return(
        <footer>
            <div>
                <p className="logo">Sole Style</p>
                <p>Премиальная обувь для тех, кто ценит качество и стиль.</p>
                <ul className="social-medias">
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" color="white"/>
                    <img src={facebook} alt=""/>
                </ul>
            </div>
            <div>
                <p className="footerHeader">Каталог</p>
                <ul>
                    <li>Кроссовки</li>
                    <li>Классические</li>
                    <li>Женские</li>
                    <li>Мужские</li>
                </ul>
            </div>
            <div>
                <p className="footerHeader">Информация</p>
                <ul>
                    <li><Link className="item" to="/about-us">О нас</Link></li>
                    <li>Доставка</li>
                    <li>Возврат</li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </div>
            <div>
                <p className="footerHeader">Контакты</p>
                <ul>
                    <li>+7 (999) 123-45-67</li>
                    <li>info@solestyle.ru</li>
                    <li>Москва, ул. Стильная, 1</li>
                </ul>
            </div>
        </footer>
    )
}