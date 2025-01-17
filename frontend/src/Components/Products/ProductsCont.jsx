import React from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import classes from './Products.module.css';
import Title from './Title';
import Products from './Products';

const ProductsCont = ({title, subTitle, products, generateUrl, scrollRef}) => {
    
  const productsWrapperClasses = scrollRef ?  `${classes.productsWrapper} ${classes.productsSlider}` : classes.productsWrapper;

  const scrollLeft = () =>{
    scrollRef.current.scrollBy({left: window.innerWidth > 350 ? -315 : -330, behavior: 'smooth'}) ;
  };

  const scrollRight = () =>{
    scrollRef.current.scrollBy({left: window.innerWidth > 350 ? 315 : 330, behavior: 'smooth'});
  };

  return (
    <>
      {title && subTitle && <Title title={title} subTitle={subTitle}/>}

      {scrollRef && <FaLessThan onClick={scrollLeft} className={classes.leftIcon}/>}

      <div className= {productsWrapperClasses} ref={scrollRef}>
          <Products products={products} generateUrl={generateUrl}/>
      </div>

      {scrollRef && <FaGreaterThan onClick={scrollRight} className={classes.rightIcon}/>}

    </>
  )
}

export default ProductsCont
