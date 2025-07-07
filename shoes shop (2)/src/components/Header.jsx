import React, {useState} from "react";
import "../styles/App.css";
import "../styles/Header.scss";
import { Link, useNavigate } from "react-router-dom";
export default function Header(){
    const [menu, setMenu] = useState(false);

    return(
        <header>
            <div>
                <a href="/">Sole Style</a>
                <ul className={menu ? "open" : "closed"}>
                    <li><Link className="item" to="/">Главная</Link></li>
                    <li><Link to="/about-us" className="item">О нас</Link></li>
                    <li><Link to="/contacts" className="item">Контакты</Link></li>
                </ul>
                {menu? (<img
                    className="cross"
                    src="/src/assets/pics/cross.svg" alt="cross"
                    onClick={() => setMenu(!menu)}
                />) : ''}

            </div>
            <div>
                <img
                    className="burgerMenu"
                    src="/src/assets/pics/burger-menu.svg"
                    alt="menu" width={35} height={35}
                    onClick={() => setMenu(!menu)}
                />
                <Link to="/basket"><img src="/src/assets/pics/basket.svg" alt="Cart" /></Link>
            </div>
        </header>
    )
}