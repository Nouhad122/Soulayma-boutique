import React from 'react';
import ProductsCont from '../Products/ProductsCont';
import classes from '../Products/Products.module.css';
import { shuffleArray } from '../../utils/helperFunctions.js';
import useFetch from '../../use/useFetch.js';
import { useParams } from 'react-router';

const requestConfig = {};

const Suggetions = () => {
  const { category } = useParams();
  const { data: categoryProducts } = useFetch(`http://localhost:5000/products?category=${category}`,requestConfig, []);

    const filteredSuggs = shuffleArray(categoryProducts).slice(0,4);
    const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}`;

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
