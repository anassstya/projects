import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTransaction } from '../redux/transactionSlice';

const AllTransactions = () => {
    const categoryNames = {
        Food: 'Еда',
        Transport: 'Транспорт',
        Entertainment: 'Развлечения',
        Bills: 'Счета',
        Work: 'Работа',
        Health: 'Здоровье',
        Shopping: 'Шоппинг',
        Travel: 'Путешествия',
        Education: 'Образование',
        Gifts: 'Подарки',
        Other: 'Другое'
    };

    const [transactionTypeFilter, setTransactionTypeFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.transactions);

    const handleDelete = (id) => {
        dispatch(removeTransaction(id));
    };

    const filteredTransactions = transactions.filter((tx) => {
        const matchesType = transactionTypeFilter ? tx.transactionType === transactionTypeFilter : true;
        const matchesCategory = categoryFilter ? tx.category === categoryFilter : true;
        return matchesType && matchesCategory;
    });

    return (
        <div className="mt-5">
            <h2 className="mb-3">Список транзакций</h2>

            <div className="mb-3">
                <label className="form-label">Тип транзакции</label>
                <select
                    className="form-select"
                    value={transactionTypeFilter}
                    onChange={(e) => setTransactionTypeFilter(e.target.value)}
                >
                    <option value="">Все</option>
                    <option value="income">Доход</option>
                    <option value="expense">Расход</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Категория</label>
                <select
                    className="form-select"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="">Все</option>
                    {Object.keys(categoryNames).map((categoryKey) => (
                        <option key={categoryKey} value={categoryKey}>
                            {categoryNames[categoryKey]}
                        </option>
                    ))}
                </select>
            </div>

            {filteredTransactions.length === 0 ? (
                <p className="text-center mt-4">Нет добавленных транзакций</p>
            ) : (
                <ul className="list-group">
                    {filteredTransactions.map((tx) => (
                        <li
                            key={tx.id}
                            className={`list-group-item d-flex justify-content-between align-items-center ${
                                tx.transactionType === 'income' ? 'list-group-item-success' : 'list-group-item-danger'
                            }`}
                        >
                            <div>
                                <strong>{categoryNames[tx.category] || tx.category}</strong> — {tx.transactionType === 'income' ? 'Доход' : 'Расход'}
                            </div>
                            <div>
                                <span className="me-3">{tx.amount} ₽</span>
                                <button
                                    className="btn btn-sm btn-outline-light"
                                    onClick={() => handleDelete(tx.id)}
                                >
                                    ✖
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllTransactions;
