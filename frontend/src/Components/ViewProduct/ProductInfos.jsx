import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import classes from './productDetail.module.css';

const ProductInfos = () => {
  return (
    <div className={classes.productInfo}>
                    <div>
                        <FaCircleCheck />
                        <p>Sustainable Bamboo Fabric, Ethically Produced In Turkey</p>
                    </div>
                    <div>
                        <FaCircleCheck />
                        <p>Buttery Soft, Gentle On Skin & Hair</p>
                    </div>
                    <div>
                        <FaCircleCheck />
                        <p>Easy Styling, No Pins Required</p>
                    </div>
                </div>
  )
}

export default ProductInfos
