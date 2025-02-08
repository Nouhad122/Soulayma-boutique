import React from 'react';
import FilterProducts from '../../Components/FilterProducts/FilterProducts.jsx';
import { useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import ShopProducts from '../../Components/ShopProducts/ShopProducts.jsx';

const Shop = () => {
  const { category, kind } = useParams();
  const [colorParams, setColorParams] = useSearchParams();

  const filterColor = colorParams.get('filter');

  const  productsData = useLoaderData();

  const products = productsData.filter(product => product.category === category && (!kind || product.kind === kind));

  return (
    <div>
      <FilterProducts 
        products={products}
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
