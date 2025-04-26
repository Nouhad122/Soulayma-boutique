import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import classes from './ProductSpecifics.module.css';

const ProductSpecifics = ({chosenProduct}) => {
    const [productsSpecifics, setProductsSpecifics] = useState([
            {
                specTitle: "Description",
                specParag: chosenProduct.description,
                isOpened: false
            },
            {
                specTitle: "Fabric specification",
                specParag: chosenProduct.fabricSpecifications,
                isOpened: false
            }
        ]);
    
        const toggleSpecs = (specTitle) =>{
            setProductsSpecifics(productsSpecifics.map(spec => spec.specTitle === specTitle ?{
              ...spec, isOpened: !spec.isOpened
            }
            : spec))
        }
  return (
    <div>
        {
            productsSpecifics.map(prodSpec =>(
                <div className={`${classes.prodSpec} ${prodSpec.isOpened ? `${classes.openedSpec}` : ''}`} key={prodSpec.specTitle}>
                    <div onClick={() => toggleSpecs(prodSpec.specTitle)} className={classes.specTitle}>
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
