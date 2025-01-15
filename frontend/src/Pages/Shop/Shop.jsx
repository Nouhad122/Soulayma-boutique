import React, { useEffect } from 'react';
import FilterProducts from '../../Components/FilterProducts/FilterProducts.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import products from '../../Products/products.json';
import ShopProducts from '../../Components/ShopProducts/ShopProducts.jsx';

const Shop = ({ openedFilter, setOpenedFilter }) => {
  const { category = '', kind = '', page } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterColor = searchParams.get('filter');

 useEffect(() => {
    if (filterColor) {
      setOpenedFilter(false);
    }
  }, [filterColor, setOpenedFilter]);

  return (
    <div>
      <FilterProducts
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
      />
      
    </div>
  );
};

export default Shop;
