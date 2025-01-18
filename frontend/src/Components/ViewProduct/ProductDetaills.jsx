import React from 'react';
import ProductInfos from './ProductInfos';
import Button from '../Secondary-Comps/Button';
import { FaStar } from "react-icons/fa";
import ProductColors from './ProductColors';
import ProductSpecifics from './ProductSpecifics';
import classes from './productDetail.module.css';

const ProductDetaills = ({chosenProduct, products,  productsSpecifics, addToCart, kind, id, toggleSpecs }) => {
    
  return (
    <div className={classes.productDetails}>

            <div className={classes.productReviews}>
            <div className={classes.feedbacks}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p>5.0 based on 16 reviews</p>
            </div>

            <div className={classes.productCap}>
                <h1>{chosenProduct.title}</h1>
                <h3>{chosenProduct.price}$</h3>

                <ProductInfos />

                <ProductColors 
                    chosenProduct={chosenProduct}
                    products={products}
                    kind={kind}
                    id={id}
                />

                <Button onClick={addToCart} className={classes.addCartBtn}>Add To Cart</Button>
                <p className={classes.freeShipping}>free shipping on orders over $50</p>
                <p className={classes.estimatedDelivery}>Estimated delivery to , <strong>October 21 - November 5</strong></p>
            </div>

            <ProductSpecifics 
                productsSpecifics={productsSpecifics}
                toggleSpecs={toggleSpecs}
            />

        </div>
  )
}

export default ProductDetaills
