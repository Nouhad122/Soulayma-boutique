import React from "react";
import carouselImg1 from '../../assets/carousel-image-1.png'
import carouselImg2 from '../../assets/carousel-image-2.png'
import SlickSlider from "./SlickSlider";
import classes from "./CarouselSlider.module.css";

const CarouselSlider = () => {
  const slides = [
    {
      img: carouselImg1,
      header: "Discover the perfect Hijab for every style",
      caption: "From 1980, 40+ Years",
      btnText: "Shop All Hijabs",
      btnLink: "/shop/all/Hijabs/page/1",
    },
    {
      img: carouselImg2,
      header: "The search for your favorite Hijab Ends here",
      caption: "100,000+ Hijabs Sold",
      btnText: "Shop Breathable Modal",
      btnLink: "/shop/Hijabs/Breathable Modal (Viscose)",
    },
  ];

  return (
    <div className={classes["slider-container"]}>
      <SlickSlider>
        {slides.map((slide, index) => (
          <div key={index} className={classes['slider-wrapper']}>
            <img src={slide.img} alt={slide.header} className={classes["slider-image"]} />
            <div className={classes["slider-overlay"]}>
              <h2 className={classes["slider-title"]}>{slide.header}</h2>
              <p className={classes["slider-caption"]}>{slide.caption}</p>
              <a href={slide.btnLink} className={classes["slider-button"]}>
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default CarouselSlider;
