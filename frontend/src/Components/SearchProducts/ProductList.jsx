import React from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import shopClasses from '../ShopProducts/ShopProducts.module.css';

const ProductList = ({ products, generateUrl }) => {
  if (products.length === 0) {
    return <p className={shopClasses.noProductsFound}><span>No Products Found</span></p>;
  }

  return <ProductsCont products={products} generateUrl={generateUrl} />;
};

export default ProductList;