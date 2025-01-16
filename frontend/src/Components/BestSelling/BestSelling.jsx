import React from 'react';
import './BestSelling.css';
import Products from '../Products/Products.jsx';
import products from '../../Products/products.json';

const BestSelling = () => {
  const topSellIds = [10,96,82,169,97,158,42,176,32,64,77,5];
  const bestSellings = products.filter(product => topSellIds.includes(product.id));
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;
  return (
        <Products
          secondColor
          title="Our Collection's"
          subTitle="Best Sellings" 
          products={bestSellings}
          generateUrl={generateUrl}
        />
  )
}

export default BestSelling
