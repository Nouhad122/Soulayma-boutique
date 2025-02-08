import React, { useRef } from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import { useLoaderData } from 'react-router-dom';

const ProductsSlider = ({ kind, sliderTitle, sliderSub }) => {
    const  productsData = useLoaderData();
    const scrollRef = useRef();
    const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}/${product.color}`;
    
    const sliderProducts = productsData.filter(product => product.kind === kind);

  return(
    <div className={classes.productsContainer}>

        <ProductsCont 
          title={sliderTitle}
          subTitle={sliderSub}
          products={sliderProducts}
          generateUrl={generateUrl}
          scrollRef={scrollRef}
        />
        
    </div>
)
  
}

export default ProductsSlider
