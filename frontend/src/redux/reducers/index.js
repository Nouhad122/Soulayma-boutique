import { CART_ACTION_TYPES } from "../actions/cartActions";
import products from '../../Products/products.json';

const INITIAL_STATE = {
    cart: (() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch (e) {
            console.warn("Invalid JSON in localStorage for 'cart'. Resetting to an empty array.");
            localStorage.setItem("cart", JSON.stringify([]));
            return [];
        }
    })(),
    cartTotal: 0,
    products,
};

const getCartTotal = (newCart) => {
    return parseFloat(newCart.reduce((a, b) => a + b.price * b.quantity, 0));
};

const rootReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    let newCart;

    switch (type) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            newCart = [...state.cart];
            const PRODUCT_INDEX = newCart.findIndex(product => product.id === payload.id);

            if (PRODUCT_INDEX === -1) {
                newCart = newCart.concat({ ...payload, quantity: 1 });
            } else {
                newCart = newCart.map(product =>
                    product.id === payload.id ? { ...product, quantity: product.quantity + 1 } : product
                );
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
                cartTotal: getCartTotal(newCart),
            };
        }

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            newCart = state.cart.filter(product => product.id !== payload);
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
                cartTotal: getCartTotal(newCart),
            };
        }

        case CART_ACTION_TYPES.INCREASE_QUANTITY: {
            newCart = state.cart.map(product =>
                product.id === payload && product.quantity < 99 ? { ...product, quantity: product.quantity + 1 } : product
            );
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
                cartTotal: getCartTotal(newCart),
            };
        }

        case CART_ACTION_TYPES.DECREASE_QUANTITY: {
            newCart = state.cart.map(product =>
                product.id === payload && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
                cartTotal: getCartTotal(newCart),
            };
        }

        case CART_ACTION_TYPES.SET_CART_FROM_STORAGE: {
            localStorage.setItem("cart", JSON.stringify(payload));
            return {
                ...state,
                cart: payload,
                cartTotal: getCartTotal(payload),
            };
        }

        default:
            return state;
    }
};

export default rootReducer;
