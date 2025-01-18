import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import classes from './ProductInfo.module.css';

const InfoAboutProduct = [
    "Sustainable Bamboo Fabric, Ethically Produced In Turkey",
    "Buttery Soft, Gentle On Skin & Hair",
    "Easy Styling, No Pins Required",
  ];

const ProductInfo = () => {
  return (
    <div className={classes.productInfo}>
        {
            InfoAboutProduct.map(info =>(
                <div key={info}>
                    <FaCircleCheck />
                    <p>{info}</p>
                </div>
            ))
        }
                    
    </div>
  )
}

export default ProductInfo
