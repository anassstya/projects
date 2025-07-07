import React, {useEffect, useState} from "react";
import "../styles/App.css";
import "../styles/Collection.scss";
import {useDispatch} from "react-redux";
import {setSelectedModel} from "../store/modelSlice.js";
import {useNavigate} from "react-router";

export default function Collection(){
    const [models, setModels] =useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                setModels(data);
                console.log("Модели загружены:", data);
            })
            .catch(error => console.error("Ошибка при загрузке моделей:", error));
    }, []);

    const handleClick = (model) => {
        dispatch(setSelectedModel(model));
        navigate(`/model/${model.id}`);
        console.log(model)
    };

    return(
        <div className="collection">
            {models ? (
                models.map((model) => (
                    <div key={model.id} className="collection__card" onClick={() => handleClick(model)}>
                        <img src={model.image} alt={model.name} />
                        <h3>{model.name}</h3>
                        <p className="description">{model.description}</p>
                        <p className="price">{model.price} ₽</p>
                    </div>
                ))
            ) : (
                <p>Загрузка моделей...</p>
            )}
        </div>
    )
}