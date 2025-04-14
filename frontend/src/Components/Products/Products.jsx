import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Products.module.css';
import Reviews from '../Secondary-Comps/Reviews';

const Products = ({products, generateUrl}) => {
  return (
    <>
      {products.map(product => (
        
          <div key={product.id} className={classes.product}>
          <Link
            to={generateUrl(product)}
            className={classes.productLink}
          >
              <div className={classes.productImages}>
              <img src={product.image1} alt={product.title} />
              <img src={product.image2} alt={product.title} />
              </div>
              <h2>{product.title} - {product.color}</h2>
              <h4>{product.price}$</h4>
              
              <Reviews inCard/>
            </Link>
          </div>
        
    ))}
    </>
  )
}

export default Products
