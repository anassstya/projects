import React, {useState} from "react";
import Header from "../components/Header.jsx";
import {useDispatch, useSelector} from "react-redux";
import "../styles/App.css";
import "../styles/ModelPage.scss"
import {addToBasket, setSelectedSize} from "../store/modelSlice.js";

import rightArrow from "../assets/pics/rigth.png";
import leftArrow from "../assets/pics/left.png";
import {useNavigate} from "react-router";
import Footer from "../components/Footer.jsx";

export default function ModelPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedModel = useSelector((state) => state.model.selectedModel);
    const selectedSize = useSelector((state) => state.model.selectedSize);

    const handleBack = () => {
        navigate(-1);
    }


    return(
        <div>
            <Header/>
            <div className="model-page">
                <p className="back" onClick={handleBack}>Назад</p>
                <h1>{selectedModel.name}</h1>
                <div className="picsContainer">
                    <img className="left" src={leftArrow} alt=""/>
                    <img src={`/${selectedModel.image}`} alt={selectedModel.name} />
                    <img className="right" src={rightArrow} alt=""/>
                </div>
                <p className="description">{selectedModel.description}</p>
                <p className="price">{selectedModel.price} ₽</p>
                <ul className="sizes">
                    {Object.entries(selectedModel.sizes).map(([size, available]) => (
                        <li
                            key={size}
                            className={
                                `size ${available ? "available" : "unavailable"} ${selectedSize === size ? "selected" : ""}`
                            }
                            onClick={() => {
                                if (available) dispatch(setSelectedSize(size));
                            }}
                        >
                            {size}
                        </li>
                    ))}
                </ul>

                <button
                    className="btn"
                    disabled={!selectedSize}
                    onClick={() => {
                        dispatch(addToBasket({ ...selectedModel, selectedSize }));
                        dispatch(setSelectedSize(null));
                    }}
                >
                    Добавить в корзину
                </button>
            </div>
            <Footer/>
        </div>
    )
}