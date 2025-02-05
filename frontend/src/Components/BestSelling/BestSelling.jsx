import React from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import Button from '../Secondary-Comps/Button.jsx';
import { shuffleArray } from '../../utils/helperFunctions.js';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../use/useHttp.js';
import LoadingPage from '../Secondary-Comps/LoadingPage.jsx';

const BestSelling = () => {
  const {data: bestSellings, isPending, isError, error} = useQuery({
    queryKey: ['best-sellings', {bestSelling: true}],
    queryFn: ({signal, queryKey}) => fetchProducts({...queryKey[1], signal}),
    select: data => shuffleArray(data).slice(0,12),
    staleTime: 10000
  })


  if (isPending) {
    return <LoadingPage />; 
  }

  if (isError) {
    return <p>Error: {error.message || 'Something went wrong!'}</p>
  }

  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;

 
  
  return (
    <div className={`${classes.productsContainer} ${classes.secondColor}`}>
        <ProductsCont
          secondColor
          title="Our Collection's"
          subTitle="Best Sellings" 
          products={bestSellings}
          generateUrl={generateUrl}
        /> 
        
        <Button url={`#`} absoluteBtn>Shop Best Sellings</Button>
    </div>
  )
}

export default BestSelling
