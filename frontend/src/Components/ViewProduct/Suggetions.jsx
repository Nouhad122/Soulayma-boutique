import React from 'react';
import ProductsCont from '../Products/ProductsCont';
import classes from '../Products/Products.module.css';
import { shuffleArray } from '../../utils/helperFunctions.js';
import { fetchProducts } from '../../use/useHttp.js';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../Secondary-Comps/LoadingPage.jsx';
import { useParams } from 'react-router';

const Suggetions = () => {
  const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}`;

  const { category } = useParams();

  const {data: filteredSuggs, isPending, isError, error} = useQuery({
    queryKey:['products'],
    queryFn:({ signal }) => fetchProducts({ signal }),
    select: data => shuffleArray(data.filter(product => product.category === category)).slice(0,4),
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
