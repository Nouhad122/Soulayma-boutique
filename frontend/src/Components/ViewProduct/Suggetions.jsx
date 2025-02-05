import React from 'react';
import ProductsCont from '../Products/ProductsCont';
import classes from '../Products/Products.module.css';
import { shuffleArray } from '../../utils/helperFunctions.js';
import { fetchProducts } from '../../use/useFetch.js';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../Secondary-Comps/LoadingPage.jsx';
import { useParams } from 'react-router';

const Suggetions = () => {
  const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}`;

  const { category } = useParams();

  const {data: filteredSuggs, isPending, isError, error} = useQuery({
    queryKey:['products', {category}],
    queryFn:({signal, queryKey}) => fetchProducts({...queryKey[1], signal}),
    select: data => shuffleArray(data).slice(0,4),
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
      title="Products From"
      subTitle="The Same Category"
      products={filteredSuggs}
      generateUrl={generateUrl}
    />
    </div>
  )
}

export default Suggetions
