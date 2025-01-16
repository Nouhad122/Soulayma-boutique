import React from 'react';
import products from '../../Products/products.json';
import Button from '../Secondary-Comps/Button.jsx';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';

const AbayasGlance = () => {
  const abyasProduct = products.filter(product => product.category === "Abayas").slice(0,4);
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;
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
