import React from 'react';
import './Footer.css';
import OwnerInfo from './OwnerInfo';
import CouponRegist from './CouponRegist';
import AdressInfo from './AdressInfo';
import AccInfo from './AccInfo';
import PaymentInfo from './PaymentInfo';

const Footer = () => {
  return (
    <>
    <CouponRegist />
    <footer>
        <div className="all-footer-elements">
            <OwnerInfo />
            <AdressInfo />
            <AccInfo />
            <PaymentInfo />
        </div>

        <div className="owner">
            <p>From 1980 - Bassam Elhallab</p>
        </div>
   </footer>
   </>
  )
}

export default Footer
