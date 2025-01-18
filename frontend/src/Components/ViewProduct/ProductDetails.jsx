import React from 'react';
import ProductInfo from './ProductInfo';
import Button from '../Secondary-Comps/Button';
import ProductColors from './ProductColors';
import ProductSpecifics from './ProductSpecifics';
import classes from './ProductDetails.module.css';
import Reviews from '../Secondary-Comps/Reviews';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../redux/actions/cartActions';

const ProductDetails = ({chosenProduct, products, kind, id }) => {
    const dispatch = useDispatch();
    const addToCart = () =>{
        dispatch(addToCartAction(chosenProduct));
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

export default ProductDetails
