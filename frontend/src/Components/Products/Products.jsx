import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import classes from './Products.module.css';

const Products = ({products, generateUrl}) => {
  return (
    <>
      {products.map(product => (
        <Link
        key={product.id}
        to={generateUrl(product)}
        className={classes.productLink}
        >
        <div className={classes.product}>
            <div className={classes.productImages}>
            <img src={product.image1} alt={product.title} />
            <img src={product.image2} alt={product.title} />
            </div>
            <h2>{product.title} - {product.color}</h2>
            <h4>{product.price}$</h4>
            <div className={classes.feedbacksContainer}>
            <div className={classes.feedbacks}>
                {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
                ))}
            </div>
            <p className={classes.rate}>5.0 <span className={classes.numOfRates}>(5)</span></p>
            </div>
        </div>
        </Link>
    ))}
    </>
  )
}

export default Products
