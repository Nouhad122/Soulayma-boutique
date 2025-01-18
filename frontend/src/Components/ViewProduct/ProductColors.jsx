import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './productDetail.module.css';

const ProductColors = ({chosenProduct, products, kind, id}) => {
    const navigate = useNavigate();
  return (
    <>
        <div className={classes.productColor}>
            <p>Color: {chosenProduct.colorCode}</p>
        </div>

        <div className={classes.otherColors}>
            {   
              products.map(product =>(
                product.kind === kind ?
                <div onClick={() => navigate(`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`)}
                 key={product.id} className={`${classes.color} ${product.id === Number(id) ? `${classes.chosenColor}` : ''}`}
                  style={{backgroundColor: product.colorCode}}>
                </div>
                : null
              ))
            }
        </div>
    </>
  )
}

export default ProductColors
