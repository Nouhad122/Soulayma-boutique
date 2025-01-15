import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselSlider.css';
import { Link } from 'react-router-dom';

const CarouselSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Carousel data-bs-theme="dark" className='carousel-container'>
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100 carousel-image"
            src={isMobile 
              ? "https://voilechic.com/cdn/shop/files/Untitled_design_21.png?v=1725361985" 
              : "https://voilechic.com/cdn/shop/files/imgpsh_fullsize_anim.jpg?v=1722524150"}
            alt="First slide"
          />
          <Carousel.Caption className='slide-label'>
            <h1>Discover the perfect Hijab for every style</h1>
            <h3>From 1980, 40+ Years</h3>
            <Link to={`/shop/all/Hijabs/page/1`} className='carousel-link'>
            <button className="carousel-btn">
              Shop All Hijabs
            </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100 carousel-image"
            src={isMobile 
              ? "https://voilechic.com/cdn/shop/files/Untitled_design_21.png?v=1725361985" 
              : "https://voilechic.com/cdn/shop/files/Untitled_design_22.png?v=1725362655"}
            alt="First slide"
          />
          <Carousel.Caption className='slide-label'>
            <h1>The search for your favorite Hijab Ends here</h1>
            <h3>100,000+ Hijabs Sold</h3>
            <Link to={`/shop/Hijabs/Breathable Modal (Viscose)`} className='carousel-link'>
            <button className="carousel-btn">
              Shop Breathable Modal
            </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
