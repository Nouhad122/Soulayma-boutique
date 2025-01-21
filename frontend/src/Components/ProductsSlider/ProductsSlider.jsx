import React, { useRef } from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';

const ProductsSlider = ({products, sliderTitle, sliderSub}) => {
    const scrollRef = useRef();
    const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;

  return(
    <div className={classes.productsContainer}>

        <ProductsCont 
          title={sliderTitle}
          subTitle={sliderSub}
          products={products}
          generateUrl={generateUrl}
          scrollRef={scrollRef}
        />
        
    </div>
)
  
}

export default ProductsSlider
