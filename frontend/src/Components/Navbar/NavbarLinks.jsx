import React,{ useContext } from 'react';
import logo from '../../assets/S-logo.png';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import classes from './NavbarLinks.module.css';
import SideCompContext from '../../store/SideCompContext.jsx';

const NavbarLinks = () => {
  const { openedList, showList, hideList } = useContext(SideCompContext);

  const navListClasses = `${classes.navList} ${openedList ?
     classes.visible : classes.hiddenList}`; 

  return (
    <>
        <FaBars className={classes.menuBars} onClick={showList}/>
          
        <Link to={'/'}><img src={logo} alt='soulayma logo' /></Link>

        <div className={navListClasses}>
          <FaXmark className={classes.xMark} onClick={hideList}/>
        
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
              <NavLink className={classes.navLink} to={'/add-product'}>Add Product</NavLink>
              <NavLink className={classes.navLink} to={'/admin'}>Admin Panel</NavLink>
        </div>
    </>
  )
}

export default NavbarLinks
