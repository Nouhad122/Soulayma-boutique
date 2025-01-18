import React from 'react';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import classes from './productDetail.module.css';

const ViewProduct = ({chosenProduct, setOpenedFullImage, products, kind, id}) => {
    
  return (
        
    <div className={classes.productContainer}>
        <ProductImages 
            chosenProduct={chosenProduct}
            setOpenedFullImage={setOpenedFullImage}
        />

        <ProductDetails 
            chosenProduct={chosenProduct}
            products={products}
            kind={kind}
            id={id}
        />
        
    </div>

  )
}

export default ViewProduct
