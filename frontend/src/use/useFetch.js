import {useState, useEffect} from "react";


const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    
    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("An error occurred with the response");
                }
                const resData = await response.json();
                setData(resData);
            }
            catch(error){
                setError('Failed to fetch products');
            }
        }
        fetchData();
    }, [url]);

    return { data, error};
}

export default useFetch 