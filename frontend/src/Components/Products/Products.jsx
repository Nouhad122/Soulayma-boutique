import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import classes from './Products.module.css'

const Products = ({title, subTitle, products, generateUrl, scrollRef, secondColor}) => {
  const productsContainerClasses = secondColor ?
     `${classes.productsContainer}  ${classes.secondColor}` : 
     classes.productsContainer
    ;
    
  const productsWrapperClasses = scrollRef ?  `${classes.productsWrapper} ${classes.productsSlider}` : classes.productsWrapper;

  const scrollLeft = () =>{
    scrollRef.current.scrollBy({left: window.innerWidth > 350 ? -300 : -380, behavior: 'smooth'}) ;
  };

  const scrollRight = () =>{
    scrollRef.current.scrollBy({left: window.innerWidth > 350 ? 300 : 380, behavior: 'smooth'});
  };

  return (
    <div className={productsContainerClasses}>
      <div className={classes.title}>
            <h3>{title}</h3>
            <h1>{subTitle}</h1>
      </div>

      {scrollRef && <FaLessThan onClick={scrollLeft} className={classes.leftIcon}/>}

      <div className= {productsWrapperClasses} ref={scrollRef}>
          {products.map(product => (
            <Link
              key={product.id}
              to={generateUrl(product)}
              className={classes.productLink}
            >
              <div className={classes.product}>
                <div className={classes.productImages}>
                  <img src={product.image1} alt={product.title} />
                  <img src={product.image2} alt={product.title} />
                </div>
                <h2>{product.title} - {product.color}</h2>
                <h4>{product.price}$</h4>
                <div className={classes.feedbacksContainer}>
                  <div className={classes.feedbacks}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className={classes.rate}>5.0 <span className={classes.numOfRates}>(5)</span></p>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {scrollRef && <FaGreaterThan onClick={scrollRight} className={classes.rightIcon}/>}

    </div>
  )
}

export default Products
