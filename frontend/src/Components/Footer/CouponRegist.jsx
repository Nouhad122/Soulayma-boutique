import React, { useState } from 'react'
import {FaEnvelope } from "react-icons/fa"
import { Link } from 'react-router-dom'

const CouponRegist = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='coupon-sub-container'>
        <div className='newsletter'>
        <FaEnvelope />
        <h1>Sign Up To Newsletter</h1>
        </div>
        <div className='subscription'>
            <p>...And Receive $25 Coupon For First Shopping.</p>
            <div className='input-button'>
                <input placeholder='Enter Your Email' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button><Link className='sub-link'>Subscribe</Link></button>
            </div>
        </div>
    </div>
  )
}

export default CouponRegist
