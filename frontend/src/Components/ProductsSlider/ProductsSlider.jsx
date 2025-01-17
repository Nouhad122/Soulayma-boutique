import React, { useRef } from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';

const ProductsSlider = ({products}) => {
    const scrollRef = useRef(null);
    const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;

  return(
    <div className={classes.productsContainer}>

        <ProductsCont 
          title="Featured Collection"
          subTitle="SpeakPure X Soulayma"
          products={products}
          generateUrl={generateUrl}
          scrollRef={scrollRef}
        />
        
    </div>
)
  
}

export default ProductsSlider
