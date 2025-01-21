import React, { useEffect, useState } from 'react';
import FilterProducts from '../../Components/FilterProducts/FilterProducts.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import ShopProducts from '../../Components/ShopProducts/ShopProducts.jsx';


const Shop = ({ openedFilter, setOpenedFilter }) => {
  const [dummyProducts, setDummyProducts] = useState([]);
  const [error, setError] = useState();
  const { category= '', kind = '' } = useParams();
  const [colorParams, setColorParams] = useSearchParams();


  const filterColor = colorParams.get('filter');

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
  }, [category, kind]);

  return (
    <div>
      {/* <FilterProducts
        category={category}
        kind={kind}
        products={products}
        page = {page}
        openedFilter={openedFilter}
        setOpenedFilter={setOpenedFilter}
        filterColor = {filterColor}
        setSearchParams={setSearchParams}
      />
      <ShopProducts
        category={category}
        page={page}
        kind={kind}
        products={products}
        filterColor = {filterColor}
      /> */}
      <FilterProducts 
        products={dummyProducts}
        openedFilter={openedFilter}
        setOpenedFilter={setOpenedFilter}
        filterColor={filterColor}
        setColorParams={setColorParams}
      />
      <ShopProducts 
        products={dummyProducts}
        filterColor={filterColor}
      />
    </div>
  );
};

export default Shop;
