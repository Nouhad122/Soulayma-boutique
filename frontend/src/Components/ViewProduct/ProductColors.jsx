import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductColors = ({chosenProduct, products, kind, id}) => {
    const navigate = useNavigate();
  return (
    <>
        <div className='product-color'>
            <p>Color: {chosenProduct.colorCode}</p>
        </div>

        <div className='other-colors'>
            {   
              products.map(product =>(
                product.kind === kind ?
                <div onClick={() => navigate(`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`)} key={product.id} className={`color ${product.id === Number(id) ? 'chosen-color' : ''}`} style={{backgroundColor: product.colorCode}}></div>
                : null
              ))
            }
        </div>
    </>
  )
}

export default ProductColors
