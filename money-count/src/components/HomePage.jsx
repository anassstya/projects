import React, { useState } from 'react';
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {addTransaction} from "../redux/transactionSlice.js";
import AllTransactions from "./AllTransactions.jsx";
import {Link} from "react-router-dom";
import FinanceSummary from "./FinanceSummary.jsx";


const HomePage = () => {
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('expense');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.transactions);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !category) {
            alert('Please fill in all fields');
            return;
        }

        const newTransaction = {
            id: Date.now(),
            amount: parseFloat(amount),
            transactionType,
            category
        }

        dispatch(addTransaction(newTransaction));

        setAmount('');
        setTransactionType('expense');
        setCategory('');
    };

    return (
        <div className="container mt-5">
            <h1>Track Your Finance</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Сумма (в руб.)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Тип</label>
                    <select
                        className="form-select"
                        value={transactionType}
                        onChange={(e) => setTransactionType(e.target.value)}
                        required
                    >
                        <option value="expense">Расходы</option>
                        <option value="income">Доходы</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Категория</label>
                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Выбери Категорию</option>
                        <option value="Food">Еда</option>
                        <option value="Transport">Транспорт</option>
                        <option value="Entertainment">Развлечения</option>
                        <option value="Bills">Счета</option>
                        <option value="Work">Работа</option>
                        <option value="Health">Здоровье</option>
                        <option value="Shopping">Покупки</option>
                        <option value="Travel">Путешествия</option>
                        <option value="Education">Образование</option>
                        <option value="Gifts">Подарки</option>
                        <option value="Other">Другое</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
            <AllTransactions/>
            <FinanceSummary/>
        </div>
    );
};

export default HomePage;
