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
            if (action.payload.items) {
                state.products = action.payload.items.map(item => ({
                    id: item.productId._id || item.productId,
                    title: item.productId.name || 'Product',
                    image1: item.productId.image1 || '',
                    price: Number(item.productId.currentPrice) || 0,
                    quantity: Number(item.quantity) || 0,
                    totalPrice: Number(item.productId.currentPrice) * Number(item.quantity) || 0
                }));
            } else {
                state.products = (action.payload.products || []).map(product => ({
                    ...product,
                    price: Number(product.price) || 0,
                    quantity: Number(product.quantity) || 0,
                    totalPrice: Number(product.totalPrice) || Number(product.price) * Number(product.quantity) || 0
                }));
            }
            
            // Calculate totals
            state.totalPriceOfAllProducts = Number(action.payload.totalPriceOfAllProducts) || 
                state.products.reduce((total, product) => total + Number(product.totalPrice), 0);
            
            state.totalQuantity = Number(action.payload.totalQuantity) || 
                state.products.reduce((total, product) => total + Number(product.quantity), 0);
        },

        addToCart: (state, action) =>{
            state.totalQuantity++;
            state.changed = true;
            const newProduct = action.payload;
            // Handle both price and currentPrice fields
            const price = Number(newProduct.price || newProduct.currentPrice || 0);
            
            const existingProduct = state.products.find(product => product.id === newProduct.id);
            if(!existingProduct){
                state.products.push({
                    id: newProduct.id,
                    title: newProduct.title || newProduct.name,
                    image1: newProduct.image1,
                    price: price,
                    quantity: 1,
                    totalPrice: price
                });
            }
            else{
                existingProduct.quantity++;
                existingProduct.totalPrice = Number(existingProduct.totalPrice) + price;
            }
            state.totalPriceOfAllProducts = state.products.reduce(
                (total, product) => total + Number(product.totalPrice), 0
            );
        },

        reduceProdCountFromCart: (state, action) =>{
            const id = action.payload;
            const existingProduct = state.products.find(product => product.id === id);
            state.changed = true;
            if(existingProduct && existingProduct.quantity > 1){
                state.totalQuantity--;
                existingProduct.quantity--;
                existingProduct.totalPrice = Number(existingProduct.totalPrice) - Number(existingProduct.price);
            }
            state.totalPriceOfAllProducts = state.products.reduce(
                (total, product) => total + Number(product.totalPrice), 0
            );
        },

        removeFromCart: (state, action) =>{
            const id = action.payload;
            state.products = state.products.filter(product => product.id !== id);
            state.totalPriceOfAllProducts = state.products.reduce(
                (total, product) => total + Number(product.totalPrice), 0
            );
            state.totalQuantity = state.products.reduce(
                (totalQuant, product) => totalQuant + Number(product.quantity), 0
            );
            state.changed = true;
        },

        clearCart: (state) => {
            state.products = [];
            state.totalPriceOfAllProducts = 0;
            state.totalQuantity = 0;
            state.changed = false;
        }
    }
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;