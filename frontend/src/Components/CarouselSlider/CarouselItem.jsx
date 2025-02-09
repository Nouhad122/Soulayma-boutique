import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import classes from './CarouselSlider.module.css';
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 991);
        };

        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [setIsMobile]);

  return (
    <Carousel.Item className='carousel-item'>
        <img
        className={`d-block w-100 ${classes['carousel-image']}`}
        src=
        {
            isMobile 
            ? `${props.smallImg}`
            : `${props.largeImg}`
        }
        alt={`Carousel slide - ${props.header}`}
        />
        <Carousel.Caption className={classes['slide-label']}>
        <h1>{props.header}</h1>
        <h3>{props.caption}</h3>
        <Link to={props.btnLink} className={classes['carousel-link']}>
        <button className={classes['carousel-btn']}>
            {props.btnContent}
        </button>
        </Link>
        </Carousel.Caption>
    </Carousel.Item>
  )
}

export default CarouselItem
