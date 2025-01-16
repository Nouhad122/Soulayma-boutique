import React from 'react';
import './AbayasGlance.css';
import products from '../../Products/products.json';
import Button from '../Secondary-Comps/Button.jsx';
import Products from '../Products/Products.jsx';

const AbayasGlance = () => {
  const abyasProduct = products.filter(product => product.category === "Abayas").slice(0,4);
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;
  return (
    // <div className='abayas-glance'>
    //   <div className='title'>
    //         <h3>Quick Glance</h3>
    //         <h1>Soulayma Abayas</h1>
    //     </div>
    <>
        <Products
         secondColor
         title="Quick Glance"
         subTitle="Soulayma Abayas"
         products={abyasProduct}
         generateUrl={generateUrl}
        />
        
        {/* <Button url={`/shop/all/Abayas/page/1`} absoluteBtn>Shop The Collection</Button> */}
    </>
    // </div>
  )
}

export default AbayasGlance
