import React from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import products from '../../Products/products.json';
import classes from '../Products/Products.module.css';
import Button from '../Secondary-Comps/Button.jsx';

const BestSelling = () => {
  const topSellIds = [10,96,82,169,97,158,42,176,32,64,77,5];
  const bestSellings = products.filter(product => topSellIds.includes(product.id));
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
