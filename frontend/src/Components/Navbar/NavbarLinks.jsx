import React,{ useContext } from 'react';
import logo from '../../assets/S-logo.png';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import classes from './NavbarLinks.module.css';
import SideCompContext from '../../store/SideCompContext.jsx';

const NavbarLinks = () => {
  const sideCompController = useContext(SideCompContext);

  const navListClasses = `${classes.navList} ${sideCompController.openedList ?
     classes.visible : classes.hiddenList}`; 

  return (
    <>
        <FaBars className={classes.menuBars} onClick={sideCompController.showList}/>
          
        <Link to={'/'}><img src={logo} alt='soulayma logo' /></Link>

        <div className={navListClasses}>
          <FaXmark className={classes.xMark} onClick={sideCompController.hideList}/>
        
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
