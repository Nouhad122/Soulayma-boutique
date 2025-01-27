import React from 'react'
import logo from '../../assets/S-logo.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'
const OwnerInfo = () => {
  return (
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
  )
}

export default OwnerInfo
