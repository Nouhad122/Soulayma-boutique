import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchProducts = async ({category, bestSelling, kind, signal}) =>{
    let url = 'http://localhost:5000/products';
    if(category) {
        url += `?category=${category}`;
    }
    if(bestSelling) {
        url += `?bestSelling=true`;
    }
    if(kind) {
        url += `?kind=${kind}`
    }
    const response = await fetch(url, {signal:signal});
    if(!response.ok){
        throw new Error("An error occured while fetching products")
    }

    const data = await response.json();
    return data;
}






 import { useCallback, useEffect, useState } from 'react';

const sendHTTPRequest = async (url, config) =>{
    const response = await fetch(url, config);
    const resData = await response.json();
    
    if(!response.ok){
        throw new Error("Something went wrong, Failed to send request.");
    }

    return resData;
}

const useFetch = (url, config, initialData) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(async (data) =>{
        setIsLoading(true);
        try{
            const resData = await sendHTTPRequest(url, {...config, body:data});
            setData(resData);
        }
        catch(error){
            setError(error.message || "Something went wrong!")
        }
        setIsLoading(false);

    },[url, config]);

    useEffect(() =>{
        if((config && config.method === "GET" || !config.method) || !config){
            sendRequest();
        }
    },[sendRequest, config])

    return {
        data,
        isLoading,
        error,
        sendRequest,
    }
}

export default useFetch
