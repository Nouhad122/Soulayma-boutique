import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchProducts = async ({category, bestSelling, kind, signal}) =>{
    let url = 'http://localhost:5000/products';

    if(category && kind){
        url += `?category=${category}&kind=${kind}`
    }
    else if(category) {
        url += `?category=${category}`;
    }
    else if(bestSelling) {
        url += `?bestSelling=true`;
    }
    else if(kind) {
        url += `?kind=${kind}`
    }

    const response = await fetch(url, { signal });
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
  
