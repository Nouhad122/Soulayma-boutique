export const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    INCREASE_QUANTITY: "INCREASE_QUANTITY",
    DECREASE_QUANTITY: "DECREASE_QUANTITY",
    SET_CART_FROM_STORAGE: "SET_CART_FROM_STORAGE",
}


export const addToCartAction = (product) =>{
    return{
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product
    }
    
}

export const removeFromCartAction = (product) =>{
    return{
        type: CART_ACTION_TYPES.REMOVE_FROM_CART,
        payload: product
    }
}

export const increaseQuantityAction = (product) =>{
    return{
        type: CART_ACTION_TYPES.INCREASE_QUANTITY,
        payload: product
    }
}

export const decreaseQuantityAction = (product) =>{
    return{
        type: CART_ACTION_TYPES.DECREASE_QUANTITY,
        payload: product
    }
}

export const setCartFromStorageAction = (cart) =>{
    return{
        type:CART_ACTION_TYPES.SET_CART_FROM_STORAGE,
        payload: cart
    }
}