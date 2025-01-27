import React from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import classes from '../Products/Products.module.css';

const Slider = ({scrollRef, children}) => {
    const scrollLeft = () =>{
        scrollRef.current.scrollBy({left: window.innerWidth > 350 ? -315 : -330, behavior: 'smooth'}) ;
      };
    
      const scrollRight = () =>{
        scrollRef.current.scrollBy({left: window.innerWidth > 350 ? 315 : 330, behavior: 'smooth'});
      };
    
      return (
        <>
        {scrollRef && <FaLessThan onClick={scrollLeft} className={classes.leftIcon}/>}
        {children}
        {scrollRef && <FaGreaterThan onClick={scrollRight} className={classes.rightIcon}/>} 
        </>
      )
}

export default Slider
