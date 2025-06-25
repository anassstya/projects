import React from 'react';
import { useSelector } from 'react-redux';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const FinanceSummary = () => {
    const transactions = useSelector((state) => state.transactions.transactions);

    const totalIncome = transactions
        .filter((tx) => tx.transactionType === 'income')
        .reduce((total, tx) => total + tx.amount, 0);

    const totalExpense = transactions
        .filter((tx) => tx.transactionType === 'expense')
        .reduce((total, tx) => total + tx.amount, 0);

    const balance = totalIncome - totalExpense;

    const categoryExpense = transactions.reduce((acc, tx) => {
        if (tx.transactionType === 'expense') {
            acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
        }
        return acc;
    }, {});

    const categories = Object.keys(categoryExpense);
    const categoryAmounts = categories.map((category) => categoryExpense[category]);

    const dataBar = {
        labels: ['Доходы', 'Расходы'],
        datasets: [
            {
                label: 'Сравнение доходов и расходов',
                data: [totalIncome, totalExpense],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };

    const dataPie = {
        labels: categories,
        datasets: [
            {
                label: 'Расходы по категориям',
                data: categoryAmounts,
                backgroundColor: ['#ffeb3b', '#2196f3', '#f44336', '#9c27b0', '#ff9800', '#4caf50'],
            },
        ],
    };

    return (
        <div className="container mt-5">
            <h2>Финансовая сводка</h2>
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h5 className="card-title">Доходы</h5>
                            <p className="card-text">{totalIncome} ₽</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-danger text-white">
                        <div className="card-body">
                            <h5 className="card-title">Расходы</h5>
                            <p className="card-text">{totalExpense} ₽</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h5 className="card-title">Баланс</h5>
                            <p className="card-text">{balance} ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Доходы и расходы по категориям</h3>
            <div className="row">
                {categories.map((category, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{category}</h5>
                                <p className="card-text">Расходы: {categoryExpense[category]} ₽</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <h3>Графики</h3>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Сравнение доходов и расходов</h4>
                        <Bar data={dataBar} />
                    </div>
                    <div className="col-md-6">
                        <h4>Расходы по категориям</h4>
                        <Pie data={dataPie} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceSummary;
