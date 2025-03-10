import React from 'react';
import Button from '../Secondary-Comps/Button.jsx';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import { useLoaderData } from 'react-router-dom';

const AbayasGlance = () => {
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}/${product.color}`;
  const  productsData = useLoaderData();
  const abayaProducts = productsData.filter(product => product.category === 'Abayas').slice(0,4);
  
  return (
    <div className={`${classes.productsContainer} ${classes.secondColor}`}>
        <ProductsCont
         secondColor
         title="Quick Glance"
         subTitle="Soulayma Abayas"
         products={abayaProducts}
         generateUrl={generateUrl}
        />

        <Button url={`/shop/all/Abayas/page/1`} absoluteBtn>Shop The Collection</Button>
    </div>
  )
}

export default AbayasGlance
