import React from 'react'
import { FaPaypal, FaCcMastercard, FaApplePay } from "react-icons/fa"
import { Link } from 'react-router-dom'

const PaymentInfo = () => {
  return (
    <div className="payment-info">
        <h3>Secured Payment Gateways</h3>
        <Link className="footer-link"><FaPaypal /></Link>
        <Link className="footer-link"><FaCcMastercard /></Link>
        <Link className="footer-link"><FaApplePay /></Link>
    </div>
  )
}

export default PaymentInfo
