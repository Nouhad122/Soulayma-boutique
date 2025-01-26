import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPriceOfAllProducts: 0,
    totalQuantity: 0,
    changed: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        replaceCart: (state, action) =>{
            state.products = action.payload.products;
            state.totalPriceOfAllProducts = action.payload.totalPriceOfAllProducts;
            state.totalQuantity = action.payload.totalQuantity;
        },

        addToCart: (state, action) =>{
            state.totalQuantity++;
            state.changed = true;
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
            state.changed = true;
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
            state.changed = true;
        }
    }
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;