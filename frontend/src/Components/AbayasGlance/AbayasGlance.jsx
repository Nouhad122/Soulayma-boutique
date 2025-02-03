import React from 'react';
import Button from '../Secondary-Comps/Button.jsx';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import useFetch from '../../use/useFetch.js';

const requestConfig = {};

const AbayasGlance = () => {
  const {data: products, error} = useFetch('http://localhost:5000/products?category=Abayas',requestConfig, []);

  const abyasProduct = products.slice(0,4);
  
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;

  if(error){
    return <p>{error}</p>
  }
  return (
    <div className={`${classes.productsContainer} ${classes.secondColor}`}>
        <ProductsCont
         secondColor
         title="Quick Glance"
         subTitle="Soulayma Abayas"
         products={abyasProduct}
         generateUrl={generateUrl}
        />

        <Button url={`/shop/all/Abayas/page/1`} absoluteBtn>Shop The Collection</Button>
    </div>
  )
}

export default AbayasGlance
