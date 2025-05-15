import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchProducts = async ({ signal }) =>{
    const response = await fetch('http://localhost:5000/api/products', { signal });
    
    if(!response.ok){
        throw new Response(JSON.stringify({message: "Failed To Fetch Products"}), {status: response.status})
    }

    const data = await response.json();
    
    return data.products;
}

export const fetchProductDetails = async ({id, signal}) =>{
    const response = await fetch(`http://localhost:5000/api/products/${id}`, { signal });
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
    
    const response = await fetch('http://localhost:5000/api/cart', {
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
    
    const response = await fetch('http://localhost:5000/api/cart', {
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
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers,
        body: JSON.stringify(productData),
    });
    if (!response.ok) {
        throw new Error('Failed to add product');
    }
    return response.json();
};

export const updateProduct = async (productId, productData) => {
    const token = localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(productData),
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    return response.json();
};
  
