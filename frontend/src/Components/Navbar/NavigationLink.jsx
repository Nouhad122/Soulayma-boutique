import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classes from './NavigationLink.module.css';
import { NavCategoriesData } from './NavCategoriesData';

const NavigationLink = ({ categoryName }) => {
  const [openedCategory, setOpenedCategory] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1450){
        setOpenedCategory(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1450){
      setTimeout(() => {
          setOpenedCategory(false);
      }, 100);
    }
  };

  const handleLinkClick = () => {
    setOpenedCategory(prevState => !prevState)
  };

  useEffect(() =>{
    const handleCategoryOnResize = () => setOpenedCategory(false);
    window.addEventListener('resize', handleCategoryOnResize);
    return () => window.removeEventListener('resize', handleCategoryOnResize)
  }, []);

  const targetedObj = NavCategoriesData.find(category => category.name === categoryName);

  const linkContainerClasses = openedCategory ? `${classes.linkContainer} ${classes.clickedLink}` :
    classes.linkContainer

  return (
    <div
      className={linkContainerClasses}
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
