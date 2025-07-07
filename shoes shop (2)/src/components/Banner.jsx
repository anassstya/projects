import React from "react";
import "../styles/App.css";
import "../styles/Banner.scss";
import {Link} from "react-router-dom";

export default function Banner(){

    return(
        <div className="banner">
            <img src="/src/assets/pics/banner.png" alt="Banner" />
            <div className="banner-text">
                <p>Коллекция премиальной обуви для тех, кто ценит стиль и качество</p>
                <button><Link to="/">Смотреть коллекцию</Link></button>
            </div>
        </div>
    )
}