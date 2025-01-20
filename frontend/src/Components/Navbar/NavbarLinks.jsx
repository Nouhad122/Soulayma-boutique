import React from 'react';
import logo from '../../assets/S-logo.png';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';

const NavbarLinks = ({openedList, setOpenedList}) => {
  return (
    <div className='left-side'>
        <FaBars className='menu-bars' onClick={() => setOpenedList(true)}/>
          
        <Link to={'/'}><img src={logo} alt='soulayma logo' /></Link>

        <div className={`nav-list ${openedList ? 'visible' : 'hidden-list'}`}>
          <FaXmark className='x-mark' onClick={() => setOpenedList(false)}/>
        
            <NavigationLink 
              categoryName="hijabs"
            />
            <NavigationLink 
              categoryName="pins"
            />
            <NavigationLink 
              categoryName="underscarves"
            />
            <NavigationLink 
              categoryName="abayas"
            />
            <NavigationLink 
              categoryName="jilbabs"
            />
        </div>
      </div>
  )
}

export default NavbarLinks
