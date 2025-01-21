import React, { useState, useEffect } from 'react';
import FilterProducts from '../../Components/FilterProducts/FilterProducts.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import products from '../../Products/products.json';
import ShopProducts from '../../Components/ShopProducts/ShopProducts.jsx';
import TestShopProducts from '../../Components/ShopProducts/testShopProducts.jsx'

const Shop = ({ openedFilter, setOpenedFilter }) => {
  const [dummyProducts, setDummyProducts] = useState([]);
  const [error, setError] = useState(null); 
  
  const { category = '', kind = '', page } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterColor = searchParams.get('filter');

 useEffect(() => {
    if (filterColor) {
      setOpenedFilter(false);
    }
  }, [filterColor, setOpenedFilter]);


  useEffect(() =>{
    const fetchPoruducts = async () =>{
      try{
        const response = await fetch(`http://localhost:5000/products?category=${category}&kind=${kind}`);
        if(!response.ok){
          throw new Error({message: "An error occured with the response"});
        }
        const resData = await response.json();
        setDummyProducts(resData);
      }
      catch(error){
        setError('Failed to fetch products');
        console.error('Error fetching products:', error);
      }
      
    }
    fetchPoruducts();
  }, []);

  return (
    <div>
      <FilterProducts
        category={category}
        kind={kind}
        products={dummyProducts}
        page = {page}
        openedFilter={openedFilter}
        setOpenedFilter={setOpenedFilter}
        filterColor = {filterColor}
        setSearchParams={setSearchParams}
      />
      {/* <ShopProducts
        category={category}
        page={page}
        kind={kind}
        filterColor = {filterColor}
      /> */}
      <TestShopProducts 
        products={dummyProducts}
      />
      
    </div>
  );
};

export default Shop;
