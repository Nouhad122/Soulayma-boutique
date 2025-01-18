import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const ProductInfos = () => {
  return (
    <div className='product-infos'>
                    <div className='checked-info'>
                        <FaCircleCheck />
                        <p>Sustainable Bamboo Fabric, Ethically Produced In Turkey</p>
                    </div>
                    <div className='checked-info'>
                        <FaCircleCheck />
                        <p>Buttery Soft, Gentle On Skin & Hair</p>
                    </div>
                    <div className='checked-info'>
                        <FaCircleCheck />
                        <p>Easy Styling, No Pins Required</p>
                    </div>
                </div>
  )
}

export default ProductInfos
