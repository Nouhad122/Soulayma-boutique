import React from 'react'
import { Link } from 'react-router-dom'

const AccInfo = () => {
  return (
    <div className="account-info">
        <h3>My Account</h3>
        <Link to={`/auth`} className="footer-link">Sign In</Link>
        <Link to={`/cart`} className="footer-link">View Cart</Link>
        <Link className="footer-link">Track My Order</Link>
        <Link className="footer-link">Help Center</Link>
    </div>
  )
}

export default AccInfo
