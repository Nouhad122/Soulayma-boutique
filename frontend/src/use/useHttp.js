import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchProducts = async ({ signal }) =>{
    const response = await fetch('http://localhost:5000/products', { signal });
    
    if(!response.ok){
        throw new Error("An error occured while fetching products")
    }

    const data = await response.json();
    
    return data;
}

export const fetchProductDetails = async ({id, signal}) =>{
    const response = await fetch(`http://localhost:5000/products/${id}`, { signal });
    if(!response.ok){
        throw new Error('An error occured while fetching the details of the product')
    }
    const data = await response.json();

    return data;
}

export const fetchCart = async () => {
    const response = await fetch('http://localhost:5000/cart');
    if (!response.ok){
        throw new Error('Failed to fetch cart');
    } 
    
    const data = await response.json();

    return data;
  };

  
  
  export const updateCart = async (cart) => {
    const response = await fetch('http://localhost:5000/cart', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    });
    if (!response.ok){
        throw new Error('Failed to update cart');
    } 
    return response.json();
  };
  
