import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Products.module.css';
import Reviews from '../Secondary-Comps/Reviews';
import Button from '../Secondary-Comps/Button';

const Products = ({products, generateUrl}) => {
  // Helper to get the correct image URL
  const getImageUrl = (img) => {
    if (!img) return '';
    if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('/')) return img;
    return `http://localhost:5000/uploads/${img}`;
  };

  return (
    <>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <Link
            to={generateUrl(product)}
            className={classes.productLink}
          >
            <div className={classes.productImages}>
              <img src={getImageUrl(product.image1)} alt={product.name} />
              <img src={getImageUrl(product.image2)} alt={product.name} />
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