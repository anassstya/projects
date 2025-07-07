import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/App.css";
import "../styles/Contacts.scss"


import contactPics from "../assets/pics/contacts.jpg"
import contactPics2 from "../assets/pics/contacts2.jpg"

export default function Contacts(){
    return(
        <div>
            <Header/>
            <Banner/>
            <div className="contacts">
                <p className="contactsHeader">Контакты</p>
                <ul>
                    <li><span>Телефон:</span> +7 (999) 123-45-67</li>
                    <li><span>Почта:</span> info@solestyle.ru</li>
                    <li><span>Адрес:</span> Москва, ул. Стильная, 1</li>
                </ul>
                <div className="pics">
                    <img src={contactPics} alt=""/>
                    <img src={contactPics2} alt=""/>
                </div>

            </div>
            <Footer/>
        </div>
    )
}