import React from 'react';
import classes from './productImages.module.css';

const ProductImages = ({chosenProduct, productImagesRef, setOpenedFullImage, point1Ref, point2Ref}) => {
  return (
    <div className={classes.productImages} ref={productImagesRef}>
            <img onClick={() => setOpenedFullImage({isOpen:true, image:1})} src={chosenProduct.image1} alt='' ref={point1Ref}/>
            <img onClick={() => setOpenedFullImage({isOpen:true, image:2})} src={chosenProduct.image2} alt='' ref={point2Ref}/>
    </div>
  )
}

export default ProductImages
