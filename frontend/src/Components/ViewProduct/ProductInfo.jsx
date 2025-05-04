import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import classes from './ProductInfo.module.css';

const ProductInfo = ({chosenProduct}) => {
  const InfoAboutProduct = [
    { id: 'info1', content: chosenProduct.productInfo1 },
    { id: 'info2', content: chosenProduct.productInfo2 },
    { id: 'info3', content: chosenProduct.productInfo3 }
  ];

  return (
    <div className={classes.productInfo}>
        {
            InfoAboutProduct.map((info, index) =>(
                <div key={info.id || index}>
                    {info.content && info.content.length > 0 && <FaCircleCheck />}
                    <p>{info.content}</p>
                </div>
            ))
        }
                    
    </div>
  )
}

export default ProductInfo
