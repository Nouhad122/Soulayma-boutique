import React from 'react';
import './BestSelling.css';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import products from '../../Products/products.json';

const BestSelling = () => {
  const topSellIds = [10,96,82,169,97,158,42,176,32,64,77,5];
  const bestSellings = products.filter(product => topSellIds.includes(product.id))
  return (
    <div className='best-selling-section'>
      <div className='title'>
            <h3>Our Collection's</h3>
            <h1>Best Sellings</h1>
        </div>

        <div className='best-selling-container'>
          {
            bestSellings.map(product =>(
            <Link to={`/shop/product/${product.category}/${product.kind}/${product.id}`} className='best-selling-link' key={product.id}>
                <div className='best-selling-product'>
                  <div className='images'>
                    <img className='best-selling-image1' src={product.image1} alt={product.title}/>
                    <img className='best-selling-image2' src={product.image2} alt={product.title}/>
                  </div>
                    <h2>{product.title} - {product.color}</h2>
                    <h4>{product.price}$</h4>

                    <div className='best-selling-feedbacks'>
                        <div className='feedbacks'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className='rate'>5.0 <span className='num-of-rates'>(5)</span></p>
                    </div>
                </div>
            </Link>
            ))
          }
        </div>
    </div>
  )
}

export default BestSelling
