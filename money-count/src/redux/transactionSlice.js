import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions: []
}

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
        },
        clearTransactions: (state) => {
            state.transactions = [];
        },
        removeTransaction: (state, action) => {
            state.transactions = state.transactions.filter(tx => tx.id !== action.payload);
        }
    },
});

export const { addTransaction,
    clearTransactions,
    removeTransaction}
    = transactionSlice.actions;
export default transactionSlice.reducer;