import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import classes from './NavigationLinks.module.css';

const NavigationLink = ({openedCategories, setOpenedCategories, openedList}) => {

    const handleMouseEnter = (linkName) => {
        if (window.innerWidth >= 1450) {
          setOpenedCategories((prevOpenedCategories) => ({
            ...prevOpenedCategories,
            [linkName]: true,
          }));
        }
      };
    
      const handleMouseLeave = (linkName) => {
        if (window.innerWidth >= 1450) {
          setTimeout(() => {
            if (!document.querySelector(`${classes.linkContainer}.${linkName}:hover`) && !document.querySelector(`${classes.listLinks}.${linkName}:hover`)) {
              setOpenedCategories((prevOpenedCategories) => ({
                ...prevOpenedCategories,
                [linkName]: false,
              }));
            }
          }, 100);
        }
      };

      const handleLinkClick = (linkName) => {
        setOpenedCategories((prevOpenedCategories) => ({
          ...prevOpenedCategories,
          [linkName]: !prevOpenedCategories[linkName],
        }));
      };
  return (
    <div 
        className={`${classes.linkContainer} ${openedCategories.hijabs ? `${classes.clickedLink} hijabs` : ''}`}
        onMouseEnter={() => handleMouseEnter('hijabs')}
        onMouseLeave={() => handleMouseLeave('hijabs')}
    >
        <div className={`${classes.listTitle} ${openedList ? classes.titleAnimation : ''}`}
         onClick={() => handleLinkClick('hijabs')}>
        <p>Hijabs</p>
        <div className={classes.plusMinus}>
            <FaPlus className={!openedCategories.hijabs ? classes.opacity : classes.noOpacity} />
            <FaMinus className={openedCategories.hijabs ? classes.opacity : classes.noOpacity}/>
        </div>
        </div>
        {openedCategories.hijabs && (
        <div
            className={classes.listLinks} 
            onMouseEnter={() => handleMouseEnter('hijabs')}
            onMouseLeave={() => handleMouseLeave('hijabs')}
        >
            <Link to={`/shop/all/Hijabs/page/1`} className={classes.navbarMiniLink}>Shop All Hijabs</Link>
            <Link to={`/shop/Hijabs/Premium Jersey Hijabs`} className={classes.navbarMiniLink}>Premium Jersey Hijabs</Link>
            <Link to={`/shop/Hijabs/Instant Hijabs`} className={classes.navbarMiniLink}>Instant Hijabs</Link>
            <Link to={`/shop/Hijabs/Bamboo Ribbed Jersey Hijabs`} className={classes.navbarMiniLink}>Bamboo Ribbed Jersey Hijabs</Link>
            <Link to={`/shop/Hijabs/Premium Chiffon Hijabs`} className={classes.navbarMiniLink}>Premium Chiffon Hijabs</Link>
            <Link to={`/shop/Hijabs/Instant Bamboo Ribbed Jersey Hijabs`} className={classes.navbarMiniLink}>Instant Bamboo Ribbed Jersey Hijabs</Link>
            <Link to={`/shop/Hijabs/Small Luxury Chiffon Hijabs`} className={classes.navbarMiniLink}>Small Luxury Chiffon Hijabs</Link>
            <Link to={`/shop/Hijabs/Small Chiffon Hijabs`} className={classes.navbarMiniLink}>Small Chiffon Hijabs</Link>
            <Link to={`/shop/Hijabs/Breathable Modal (Viscose)`} className={classes.navbarMiniLink}>Breathable Modal (Viscose)</Link>
            <Link to={`/shop/Hijabs/SpeakPure Set Satin Lined`} className={classes.navbarMiniLink}>SpeakPure Set Satin Lined</Link>

        </div>
        )}
    </div> 
  )
}

export default NavigationLink
