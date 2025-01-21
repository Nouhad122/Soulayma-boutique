import React from 'react'
import ProductsCont from '../Products/ProductsCont.jsx'

const testShopProducts = ({products}) => {
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`;

  return (
    <ProductsCont 
        products={products}
        generateUrl={generateUrl}
    />
  )
}

export default testShopProducts
