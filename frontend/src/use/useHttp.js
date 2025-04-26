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
    const response = await fetch('http://localhost:8080/cart');
    if (!response.ok){
        throw new Response(JSON.stringify({message: "Failed To Fetch Cart"}), {status: response.status})
    } 
    
    const data = await response.json();

    return data;
  };

  export const updateCart = async (cart) => {
    const response = await fetch('http://localhost:8080/cart', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    });
    if (!response.ok){
        throw new Response(JSON.stringify({message: "Failed To Update The Cart"}), {status: response.status})
    } 
    return response.json();
  };
  
