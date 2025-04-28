import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Products.module.css';
import Reviews from '../Secondary-Comps/Reviews';
import Button from '../Secondary-Comps/Button';

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
          <div className={classes.productActions}>
            <Link to={`/update-product/${product.id}`}>
              <Button>Edit</Button>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default Products