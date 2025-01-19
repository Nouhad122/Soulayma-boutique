import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classes from './NavigationLinks.module.css';
import { NavCategoriesData } from './NavCategoriesData';

const NavigationLink = ({ openedCategories, setOpenedCategories, openedList, categoryName }) => {
    const [openedCategory, setOpenedCategory] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1450) {
        setOpenedCategory(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1450) {
      setTimeout(() => {
        if (
          !document.querySelector(`.${classes.linkContainer}.${targetedObj.name}:hover`) &&
          !document.querySelector(`.${classes.listLinks}.${targetedObj.name}:hover`)
        ) {
          setOpenedCategory(false);
        }
      }, 100);
    }
  };

  const handleLinkClick = () => {
    setOpenedCategory(prevState => !prevState)
  };

  const targetedObj = NavCategoriesData.find(category => category.name === categoryName);

  return (
    <div
      className={`${classes.linkContainer} ${openedCategory ? `${classes.clickedLink}` : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleLinkClick}
    >
        <p>{targetedObj.title}</p>
          <FaPlus
            className={!openedCategory ? classes.opacity : classes.noOpacity}
          />
          <FaMinus
            className={openedCategory ? classes.opacity : classes.noOpacity}
          />
      
      {openedCategory && (
        <div
          className={classes.listLinks}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            {
                targetedObj.links.map(link =>(
                    <Link key={link.label} to={link.path} className={classes.navbarMiniLink}>
                        {link.label}
                    </Link>
                ))
            }
            
        </div>
      )}
    </div>
  );
};

export default NavigationLink;
