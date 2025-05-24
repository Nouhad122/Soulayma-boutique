import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const BACKEND_URL = 'http://localhost:5000/api';

export const fetchProducts = async ({ signal }) =>{
    const response = await fetch(`${BACKEND_URL}/products`, { signal });
    
    if(!response.ok){
        throw new Response(JSON.stringify({message: "Failed To Fetch Products"}), {status: response.status})
    }

    const data = await response.json();
    
    return data.products;
}

export const fetchProductDetails = async ({id, signal}) =>{
    const response = await fetch(`${BACKEND_URL}/products/${id}`, { signal });
    if(!response.ok){
        throw new Response(JSON.stringify({message: "Failed To Fetch Product Details"}), {status: response.status})
    }
    const data = await response.json();

    return data.product;
}

export const fetchCart = async () => {
    const token = localStorage.getItem('token');
    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(`${BACKEND_URL}/cart`, {
        headers
    });
    
    if (!response.ok){
        throw new Response(JSON.stringify({message: "Failed To Fetch Cart"}), {status: response.status})
    } 
    
    const data = await response.json();
    // Always return the cart in the expected frontend format
    return data.cart;
};

export const updateCart = async (cart) => {
    const token = localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    // Only send the products array with id and quantity
    const cartData = {
        products: cart.products.map(product => ({
            id: product.id,
            quantity: product.quantity
        }))
    };
    
    const response = await fetch(`${BACKEND_URL}/cart`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(cartData),
    });
    
    if (!response.ok){
        throw new Response(JSON.stringify({message: "Failed To Update The Cart"}), {status: response.status})
    }
    
    return response.json();
};

export const addProduct = async (productData) => {
    const token = localStorage.getItem('token');
    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${BACKEND_URL}/products`, {
        method: 'POST',
        headers,
        body: productData,
    });
    if (!response.ok) {
        // Try to parse the error message from the backend
        let errorMsg = 'Failed to add product';
        try {
            const errorData = await response.json();
            errorMsg = errorData.message || errorMsg;
            const error = new Error(errorMsg);
            error.backend = errorData;
            throw error;
        } catch (e) {
            throw new Error(errorMsg);
        }
    }
    return response.json();
};

export const updateProduct = async (productId, productData) => {
    const token = localStorage.getItem('token');
    let headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    // If productData is FormData, do not set Content-Type
    const response = await fetch(`${BACKEND_URL}/products/${productId}`, {
        method: 'PATCH',
        headers,
        body: productData,
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    return response.json();
};

export const placeOrder = async (order) => {
    const token = localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${BACKEND_URL}/orders`, {
        method: 'POST',
        headers,
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        throw new Error('Order failed');
    }
    return response.json();
};
  
