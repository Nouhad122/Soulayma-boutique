import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondaryComp.module.css';

const NoMatch = () => {
    const navigate = useNavigate();
    return (
      <div className='no-match-page'>
        <h1>404</h1>
        <p>We could not find the page you were looking for. Please use the navigation or
             the button below to go back to our website.</p>
        <button onClick={() => navigate('/shop/all/Hijabs/page/1')}
         className="custom-btn btn-15 no-match-btn">Continue Shopping
        </button>
      </div>
    )
}

export default NoMatch
