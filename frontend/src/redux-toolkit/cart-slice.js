import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPriceOfAllProducts: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addToCart: (state, action) =>{
            state.totalQuantity++;
            const newProduct = action.payload;
            const existingProduct = state.products.find(product => product.id === newProduct.id);
            if(!existingProduct){
                state.products.push({
                    id: newProduct.id,
                    title: newProduct.title,
                    image1: newProduct.image1,
                    price: newProduct.price,
                    quantity: 1,
                    totalPrice: newProduct.price
                });
            }
            else{
                existingProduct.quantity++;
                existingProduct.totalPrice += newProduct.price;
            }
            state.totalPriceOfAllProducts = state.products.reduce((total, product) => total + product.totalPrice, 0);
        },

        reduceProdCountFromCart: (state, action) =>{
            const id = action.payload;
            const existingProduct = state.products.find(product => product.id === id);
            if(existingProduct.quantity > 1){
                state.totalQuantity--;
                existingProduct.quantity--;
                existingProduct.totalPrice -= existingProduct.price;
            }
            state.totalPriceOfAllProducts = state.products.reduce((total, product) => total + product.totalPrice, 0);
        },

        removeFromCart: (state, action) =>{
            const id = action.payload;
            state.products = state.products.filter(product => product.id !== id);
            state.totalPriceOfAllProducts = state.products.reduce((total, product) => total + product.totalPrice, 0);
            state.totalQuantity = state.products.reduce((totalQuant, product) => totalQuant + product.quantity, 0);
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;