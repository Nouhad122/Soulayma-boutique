import React, { useRef } from 'react';
import './ProductsSlider.css';
import products from '../../Products/products.json';
import Products from '../Products/Products.jsx';

const ProductsSlider = () => {

    const scrollRef = useRef(null);

    const speakPureProducts = products.filter(product => product.title === "SpeakPure Set Satin Lined" || product.title === "SpeakPure Set Mesh Tie-Back");

    const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;

  return(

        <Products 
          title="Featured Collection"
          subTitle="SpeakPure X Soulayma"
          products={speakPureProducts}
          generateUrl={generateUrl}
          scrollRef={scrollRef}
        />
      
)
  
}

export default ProductsSlider
