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
    
    // Calculate current date and date 20 days later
    const getCurrentDateRange = () => {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 20);
        
        const formatDate = (date) => {
            const options = { month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        };
        
        return `${formatDate(today)} - ${formatDate(futureDate)}`;
    };

    const handleAddToCart = () =>{
        dispatch(cartSliceActions.addToCart({
            id: chosenProduct.id,
            name: chosenProduct.name,
            image1: chosenProduct.image1,
            currentPrice: chosenProduct.currentPrice,
        }))
        }

  return (
    <div className={classes.productDetails}>
            <Reviews />
            
            <div className={classes.productCap}>
                <h1>{chosenProduct.name}</h1>
                <h3>{chosenProduct.currentPrice}$</h3>

                <ProductInfo chosenProduct={chosenProduct}/>

                <ProductColors 
                    chosenProduct={chosenProduct}
                />

                <Button onClick={handleAddToCart} className={classes.addCartBtn}>Add To Cart</Button>
                <p className={classes.freeShipping}>free shipping on orders over $50</p>
                <p className={classes.estimatedDelivery}>Estimated delivery to , <strong>{getCurrentDateRange()}</strong></p>
            </div>

            <ProductSpecifics chosenProduct={chosenProduct}/>

        </div>
  )
}

export default ProductDetails
