import React from 'react';
import ProductsCont from '../Products/ProductsCont';
import classes from '../Products/Products.module.css';
import { shuffleArray } from '../../utils/helperFunctions.js';
import { useLoaderData, useParams } from 'react-router';

const Suggetions = () => {
  const { category } = useParams();
  const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}/${product.color}`;

  const { prodsLoader } = useLoaderData();
  const filteredSuggs = shuffleArray(prodsLoader.filter(product => product.category === category)).slice(0,4);

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
