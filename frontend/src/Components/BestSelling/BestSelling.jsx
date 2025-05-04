import React from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import Button from '../Secondary-Comps/Button.jsx';
import { shuffleArray } from '../../utils/helperFunctions.js';
import { useLoaderData } from 'react-router-dom';

const BestSelling = () => {
  const  productsData = useLoaderData();
  const bestSellings = shuffleArray(productsData.filter(product => product.isBestSeller)).slice(0,12);

  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}/${product.color}`;

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
