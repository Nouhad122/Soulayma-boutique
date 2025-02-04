import React from 'react';
import Button from '../Secondary-Comps/Button.jsx';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import { fetchProducts } from '../../use/useFetch.js';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../Secondary-Comps/LoadingPage.jsx';

const AbayasGlance = () => {
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;
  
  const {data: abayaProducts, isPending, isError, error} = useQuery({
    queryKey:['products', {category: 'Abayas'}],
    queryFn:({signal, queryKey}) => fetchProducts({...queryKey[1], signal}),
    select: data => data.slice(0,4),
    staleTime: 10000
  });

  if (isPending) {
    return <LoadingPage />; 
  }

  if (isError) {
    return <p>Error: {error.message || 'Something went wrong!'}</p>
  }

  return (
    <div className={`${classes.productsContainer} ${classes.secondColor}`}>
        <ProductsCont
         secondColor
         title="Quick Glance"
         subTitle="Soulayma Abayas"
         products={abayaProducts}
         generateUrl={generateUrl}
        />

        <Button url={`/shop/all/Abayas/page/1`} absoluteBtn>Shop The Collection</Button>
    </div>
  )
}

export default AbayasGlance
