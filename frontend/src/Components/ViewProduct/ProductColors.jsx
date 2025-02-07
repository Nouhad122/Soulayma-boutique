import React from 'react';
import { useNavigate, useParams, useLoaderData } from 'react-router-dom';
import classes from './ProductColors.module.css';

const ProductColors = ({chosenProduct}) => {
  const { id, kind } = useParams();
  const navigate = useNavigate();

  const { prodsLoader } = useLoaderData();

  const kindProducts = prodsLoader.filter(product => product.kind === kind);

  return (
    <>
        <div className={classes.productColor}>
            <p>Color: {chosenProduct.color}</p>
        </div>

        <div className={classes.otherColors}>
            {   
              kindProducts.map(product =>(
                <div onClick={() => navigate(`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`)}
                 key={product.id} className={`${classes.color} ${product.id === id ? `${classes.chosenColor}` : ''}`}
                  style={{backgroundColor: product.colorCode}}>
                </div>
              ))
            }
        </div>
    </>
  )
}

export default ProductColors
