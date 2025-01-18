import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import classes from './productDetail.module.css';

const ProductSpecifics = ({productsSpecifics, toggleSpecs}) => {
  return (
    <div>
        {
            productsSpecifics.map(prodSpec =>(
                <div className={`${classes.prodSpec} ${prodSpec.isOpened ? `${classes.openedSpec}` : ''}`} key={prodSpec.id}>
                    <div onClick={() => toggleSpecs(prodSpec.id)} className={classes.specTitle}>
                    <h3>{prodSpec.specTitle}</h3>
                    <div className={classes.prodPlusMinus}>
                        <FaPlus className={prodSpec.isOpened ? `${classes.hiddenSvg}` : ''} />
                        <FaMinus className={!prodSpec.isOpened ? `${classes.hiddenSvg}` : ''} />
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
