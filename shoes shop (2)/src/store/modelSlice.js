import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedModel: null,
    selectedSize: null,
    basket: [],
}
const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
        setSelectedModel: (state, action) => {
            state.selectedModel = action.payload;
        },
        setSelectedSize: (state, action) => {
            state.selectedSize = action.payload;
        },
        addToBasket: (state, action) => {
            const { id, selectedSize } = action.payload;

            const existingItem = state.basket.find(
                (item) => item.id === id && item.selectedSize === selectedSize
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.basket.push({ ...action.payload, quantity: 1 });
            }
        },
        deleteFromBasket: (state, action) => {
            const { id, selectedSize } = action.payload;

            const itemIndex = state.basket.findIndex(
                (item) => item.id === id && item.selectedSize === selectedSize
            );

            if (itemIndex !== -1) {
                const item = state.basket[itemIndex];
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.basket.splice(itemIndex, 1);
                }
            }
        },
    }
})

export const { setSelectedModel, addToBasket, deleteFromBasket, setSelectedSize } = modelSlice.actions;
export default modelSlice.reducer;