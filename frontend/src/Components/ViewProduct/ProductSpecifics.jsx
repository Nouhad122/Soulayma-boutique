import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductSpecifics = ({productsSpecifics, toggleSpecs}) => {
  return (
    <div className='product-specifics'>
        {
            productsSpecifics.map(prodSpec =>(
                <div className={`prod-spec ${prodSpec.isOpened ? 'opened-spec' : ''}`} key={prodSpec.id}>
                    <div onClick={() => toggleSpecs(prodSpec.id)} className='spec-title'>
                    <h3>{prodSpec.specTitle}</h3>
                    <div className='prod-plus-minus'>
                        <FaPlus className={prodSpec.isOpened ? 'hidden-svg' : ''} />
                        <FaMinus className={!prodSpec.isOpened ? 'hidden-svg' : ''} />
                    </div>
                    </div> 
                    <p dangerouslySetInnerHTML={{ __html: prodSpec.specParag }}></p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductSpecifics
