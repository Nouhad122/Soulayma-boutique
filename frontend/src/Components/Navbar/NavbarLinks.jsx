import React from 'react';
import logo from '../../assets/S-logo.png';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import classes from './NavbarLinks.module.css';

const NavbarLinks = ({openedList, setOpenedList}) => {
  const navListClasses = `${classes.navList} ${openedList ? classes.visible : classes.hiddenList}`; 

  return (
    <>
        <FaBars className={classes.menuBars} onClick={() => setOpenedList(true)}/>
          
        <Link to={'/'}><img src={logo} alt='soulayma logo' /></Link>

        <div className={navListClasses}>
          <FaXmark className={classes.xMark} onClick={() => setOpenedList(false)}/>
        
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
    </>
  )
}

export default NavbarLinks
