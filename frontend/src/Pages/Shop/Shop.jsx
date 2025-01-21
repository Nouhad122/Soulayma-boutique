import React from 'react';
import FilterProducts from '../../Components/FilterProducts/FilterProducts.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import ShopProducts from '../../Components/ShopProducts/ShopProducts.jsx';
import useFetch from '../../use/useFetch.js';


const Shop = ({ openedFilter, setOpenedFilter }) => {
  const { category= '', kind = '' } = useParams();
  const [colorParams, setColorParams] = useSearchParams();

  const filterColor = colorParams.get('filter');

  const { data: products, error } = useFetch(`http://localhost:5000/products?category=${category}&kind=${kind}`);

  if(error){
    return <p>{error}</p>
  }

  return (
    <div>
      <FilterProducts 
        products={products}
        openedFilter={openedFilter}
        setOpenedFilter={setOpenedFilter}
        filterColor={filterColor}
        setColorParams={setColorParams}
      />
      <ShopProducts 
        products={products}
        filterColor={filterColor}
      />
    </div>
  );
};

export default Shop;
