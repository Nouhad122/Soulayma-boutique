import React from 'react';
import ProductInfo from './ProductInfo';
import Button from '../Secondary-Comps/Button';
import ProductColors from './ProductColors';
import ProductSpecifics from './ProductSpecifics';
import classes from './ProductDetails.module.css';
import Reviews from '../Secondary-Comps/Reviews';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../redux-toolkit/cart-slice';

const ProductDetails = ({chosenProduct }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () =>{
        dispatch(cartSliceActions.addToCart({
            id: chosenProduct.id,
            title: chosenProduct.title,
            image1: chosenProduct.image1,
            price: chosenProduct.price,
        }))
        }

  return (
    <div className={classes.productDetails}>
            <Reviews />
            
            <div className={classes.productCap}>
                <h1>{chosenProduct.title}</h1>
                <h3>{chosenProduct.price}$</h3>

                <ProductInfo />

                <ProductColors 
                    chosenProduct={chosenProduct}
                />

                <Button onClick={handleAddToCart} className={classes.addCartBtn}>Add To Cart</Button>
                <p className={classes.freeShipping}>free shipping on orders over $50</p>
                <p className={classes.estimatedDelivery}>Estimated delivery to , <strong>October 21 - November 5</strong></p>
            </div>

            <ProductSpecifics />

        </div>
  )
}

export default ProductDetails
