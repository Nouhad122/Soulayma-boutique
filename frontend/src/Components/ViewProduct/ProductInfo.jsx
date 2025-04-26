import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import classes from './ProductInfo.module.css';

const ProductInfo = ({chosenProduct}) => {
  const InfoAboutProduct = [
    chosenProduct.productInfo1,
    chosenProduct.productInfo2,
    chosenProduct.productInfo3
  ];

  return (
    <div className={classes.productInfo}>
        {
            InfoAboutProduct.map(info =>(
                <div key={info}>
                    {info.length > 0 && <FaCircleCheck />}
                    <p>{info}</p>
                </div>
            ))
        }
                    
    </div>
  )
}

export default ProductInfo
