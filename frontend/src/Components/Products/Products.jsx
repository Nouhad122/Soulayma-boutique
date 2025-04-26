import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Products.module.css';
import Reviews from '../Secondary-Comps/Reviews';

const Products = ({products, generateUrl}) => {
  console.log(products);
  return (
    <>
      {products.map(product => (
        
          <div key={product.id} className={classes.product}>
          <Link
            to={generateUrl(product)}
            className={classes.productLink}
          >
              <div className={classes.productImages}>
              <img src={product.image1} alt={product.name} />
              <img src={product.image2} alt={product.name} />
              </div>
              <h2>{product.name} - {product.color}</h2>
              <h4>{product.currentPrice}$</h4>

              <Reviews inCard/>
            </Link>
          </div>
        
    ))}
    </>
  )
}

export default Products
