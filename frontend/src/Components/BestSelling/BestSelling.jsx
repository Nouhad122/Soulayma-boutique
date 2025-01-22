import React from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import Button from '../Secondary-Comps/Button.jsx';
import useFetch from '../../use/useFetch.js';
import { shuffleArray } from '../../utils/helperFunctions.js';

const requestConfig = {};

const BestSelling = () => {
  const {data: bSellings, error} = useFetch('http://localhost:5000/products?bestSelling=true', requestConfig, []);
  const bestSellings = shuffleArray(bSellings).slice(0,12);
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;

  if(error){
    return <p>{error}</p>
  }
  
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
