import React from 'react';
import FilterProducts from '../../Components/FilterProducts/FilterProducts.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import ShopProducts from '../../Components/ShopProducts/ShopProducts.jsx';
import { fetchProducts } from '../../use/useFetch.js';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../Components/Secondary-Comps/LoadingPage.jsx'

const Shop = () => {
  const { category= '', kind = '' } = useParams();
  const [colorParams, setColorParams] = useSearchParams();

  const filterColor = colorParams.get('filter');
  
  const { data: products, isPending, isError, error} = useQuery({
    queryKey: ['products', { category, kind }],
    queryFn: ({ signal, queryKey }) => fetchProducts({ ...queryKey[1], signal }),
    staleTime: 10000
  });

  if(isPending){
    return <LoadingPage />
  }
  if(isError){
    return <p>Error: {error.message || 'Something went wrong!'}</p>
  }

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
