import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/App.css";
import "../styles/BasketPage.scss";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {deleteFromBasket} from "../store/modelSlice.js";

export default function BasketPage(){
    const basket = useSelector(state => state.model.basket);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBack = () => {
        navigate(-1);
    }
    const handleDelete = (id, size) => {
        dispatch(deleteFromBasket({ id, selectedSize: size }));
    };

    const totalPrice = basket.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return(
        <div className="main-content">
            <Header/>
            <div className="basket-content">
                <p className="back" onClick={handleBack}>Назад</p>
                    <h1 className="basket-title">Корзина</h1>
                    {basket.length > 0 ? (
                        <div>
                            <ul className="basket-list">
                                {basket.map((item, index) => (
                                    <li key={index} className="basket-item">
                                        <div className="basket-item-details">
                                            <img src={item.image} alt={item.name}/>
                                            <h2 className="basket-item-name">{item.name}</h2>
                                            <p className="basket-item-price">
                                                <span>Сумма:</span> {item.price * item.quantity} ₽
                                            </p>

                                            <p className="basket-item-size"><span>Размер:</span> {item.selectedSize}</p>
                                            <p className="basket-item-quantity"><span>Количество:</span> {item.quantity}</p>
                                        </div>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDelete(item.id, item.selectedSize)}
                                        >
                                            Удалить
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <p><span className="totalSum">Общая сумма:</span> {totalPrice} ₽</p>
                        </div>


                    ) : (
                        <p className="empty-basket">Ваша корзина пуста.</p>
                    )}
                </div>
            <Footer/>
        </div>
    )
}