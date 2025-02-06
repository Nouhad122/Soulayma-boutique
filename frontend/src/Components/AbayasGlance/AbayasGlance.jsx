import React from 'react';
import Button from '../Secondary-Comps/Button.jsx';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import { fetchProducts } from '../../use/useHttp.js';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../Secondary-Comps/LoadingPage.jsx';

const AbayasGlance = () => {
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;
  
  const {data: abayaProducts, isPending, isError, error} = useQuery({
    queryKey:['products'],
    queryFn:({ signal }) => fetchProducts({ signal }),
    select: data => data.filter(product => product.category === 'Abayas').slice(0,4),
    staleTime: 60000
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
