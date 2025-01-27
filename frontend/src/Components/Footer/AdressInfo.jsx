import React from 'react'
import { Link } from 'react-router-dom'

const AdressInfo = () => {
  return (
    <div className="address-info">
        <h3>Adress</h3>
        <Link to={`/about us`} className="footer-link">About Us</Link>
        <Link to={`/faq`} className="footer-link">FAQ</Link>
        <Link to={`/shipping`} className="footer-link">Shipping</Link>
        <Link to={`/returns`} className="footer-link">Returns</Link>
        <Link to={`/tutorials`} className="footer-link">Tutorials</Link>
        <Link to={`/privacy-policy`} className="footer-link">Privacy Policy</Link>
    </div>
  )
}

export default AdressInfo
