import React from 'react';
import ProductInfos from './ProductInfos';
import Button from '../Secondary-Comps/Button';
import { FaStar } from "react-icons/fa";
import ProductColors from './ProductColors';
import ProductSpecifics from './ProductSpecifics';

const ProductDetaills = ({chosenProduct, products,  productsSpecifics, addToCart, kind, id, toggleSpecs }) => {
    
  return (
    <div className='product-details'>

            <div className='product-reviews'>
            <div className='feedbacks'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className='rate'>5.0 based on 16 reviews</p>
            </div>

            <div className='product-cap'>
                <h1>{chosenProduct.title}</h1>
                <h3>{chosenProduct.price}$</h3>

                <ProductInfos />

                <ProductColors 
                chosenProduct={chosenProduct}
                products={products}
                kind={kind}
                id={id}
                />

                <Button onClick={addToCart} className="add-cart-btn">Add To Cart</Button>
                <p className='free-shipping'>free shipping on orders over $50</p>
                <p className='estimated-delivery'>Estimated delivery to , <strong>October 21 - November 5</strong></p>
            </div>

            <ProductSpecifics 
                productsSpecifics={productsSpecifics}
                toggleSpecs={toggleSpecs}
            />

        </div>
  )
}

export default ProductDetaills
