import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/S-logo.png';
import { FaFacebookF, FaInstagram, FaPaypal, FaCcMastercard, FaApplePay, FaEnvelope  } from "react-icons/fa";

const Footer = () => {
    const [inputValue, setInputValue] = useState('');
  return (
    <>
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
    <footer>
    <div className="all-footer-elements">
    <div className="owner-info">
        <div className="logo">
        <img src={logo} alt='logo'/>
        </div>
        <h3>Contact</h3>
        <p><strong>Adress: </strong>Tripoli,Abu Samra,Alshiraa</p>
        <p><strong>Phone: </strong>(+90) 534 442 1873/(+961) 06 422 189</p>
        <p><strong>Hours: </strong>9:00-21:00,Mon-Sat</p>
        <div className="follow-me">
            <Link className="footer-link"><FaFacebookF /></Link>
            <Link className="footer-link"><FaInstagram /></Link>
        </div>
    </div>
    <div className="address-info">
        <h3>Adress</h3>
        <Link to={`/about us`} className="footer-link">About Us</Link>
        <Link to={`/faq`} className="footer-link">FAQ</Link>
        <Link to={`/shipping`} className="footer-link">Shipping</Link>
        <Link to={`/returns`} className="footer-link">Returns</Link>
        <Link to={`/tutorials`} className="footer-link">Tutorials</Link>
        <Link to={`/privacy-policy`} className="footer-link">Privacy Policy</Link>
    </div>
    <div className="account-info">
        <h3>My Account</h3>
        <Link to={`/sign-in`} className="footer-link">Sign In</Link>
        <Link to={`/cart`} className="footer-link">View Cart</Link>
        <Link className="footer-link">Track My Order</Link>
        <Link className="footer-link">Help Center</Link>
    </div>
    <div className="payment-info">
        <h3>Secured Payment Gateways</h3>
        <Link className="footer-link"><FaPaypal /></Link>
        <Link className="footer-link"><FaCcMastercard /></Link>
        <Link className="footer-link"><FaApplePay /></Link>
    </div>
</div>
<div className="owner">
    <p>From 1980 - Bassam Elhallab</p>
</div>
   </footer>
    </>
  )
}

export default Footer
