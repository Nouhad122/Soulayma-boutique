import React from 'react';
import './AbayasGlance.css';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import products from '../../Products/products.json';
import Button from '../Secondary-Comps/Button.jsx';

const AbayasGlance = () => {
  const abyasProduct = products.filter(product => product.category === "Abayas").slice(0,4);
  return (
    <div className='abayas-glance'>
      <div className='title'>
            <h3>Quick Glance</h3>
            <h1>Soulayma Abayas</h1>
        </div>

        <div className='abayas-container'>
          {
            abyasProduct.map(product =>(
              <Link to={`/shop/product/${product.category}/${product.kind}/${product.id}`} className='abaya-link' key={product.id}>
                    <div className='abaya-product'>
                      <div className='images'>
                        <img className='abaya-image1' src={product.image1} alt={product.title}/>
                        <img className='abaya-image2' src={product.image2} alt={product.title}/>
                      </div>

                        <h2>{product.title} - {product.color}</h2>
                        <h4>{product.price}$</h4>

                        <div className='abayas-feedbacks'>
                            <div className='feedbacks'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className='rate'>5.0 <span className='num-of-rates'>(5)</span></p>
                        </div>
                    </div>
             </Link>
            ))
          }
            
        </div>
        {/* <div className='button-container'>
        <Link to={`/shop/all/Abayas/page/1`} className='button-link'><button className="custom-btn btn-15">Shop The Collection</button></Link>
         </div> */}
         <Button url={`/shop/all/Abayas/page/1`} absoluteBtn>Shop The Collection</Button>
    </div>
  )
}

export default AbayasGlance
