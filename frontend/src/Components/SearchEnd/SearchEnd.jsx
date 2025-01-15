import React from 'react';
import './SearchEnd.css';
import Button from '../Secondary-Comps/Button';

const SearchEnd = () => {
  return (
    <div className='search-end-section'>
        <div className='search-end-container'>
            <img src='https://voilechic.com/cdn/shop/files/Image_a042cad6-4549-43fe-b109-04e1eef972ba.png?v=1719584745' alt=''/>
            <div className='end-text'>
                <h2>the search for your favourite hijab brand ends here.</h2>
                <p>
                    We take the guess work out and make it easy for you to access the perfect hijabs -
                    designed with intention and crafted with quality and precision, Take a look on our Underscarves .
                </p>
                <p>Walk with us, walk in confidence.</p>
                <Button url={`/shop/all/Underscarves/page/1`}>Shop All Underscarves</Button>
            </div>
        </div>
      
    </div>
  )
}

export default SearchEnd
