import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Suggetions = ({category, products}) => {

    function getRandomIdsByCategory(products, category, count) {
        const filteredProducts = products.filter(product => product.category === category);
        const ids = filteredProducts.map(product => product.id);
        const shuffledIds = ids.sort(() => 0.5 - Math.random());
        return shuffledIds.slice(0, count);
      }

      const randomIds = getRandomIdsByCategory(products, category, 5);

    const filteredSuggs = products.filter(product => product.category === category && randomIds.includes(product.id)).slice(0,5);
  return (
    <div className='suggested-products-container'>

        <div className='sugg-prod-title'>
            <h3>Products From</h3>
            <h1>The Same Category</h1>
        </div>

        <div className='suggested-products'>
            {
                filteredSuggs.map(sugg =>(
                <Link to={`/shop/product/${sugg.category}/${sugg.kind}/${sugg.id}`} className='sugg-prod-link' key={sugg.id}>
                    <div className='sugg-prod'>
                        <div className='sugg-prod-images'>
                            <img className='sugg-prod-image1' src={sugg.image1} alt={sugg.title}/>
                            <img className='sugg-prod-image2' src={sugg.image2} alt={sugg.title}/>
                        </div>
                            <h2>{sugg.title} - {sugg.color}</h2>
                            <h4>{sugg.price}$</h4>

                            <div className='sugg-prod-feedbacks'>
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
        
        </div>
  )
}

export default Suggetions
