import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = ({ manyInOne, children }) => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: manyInOne ? 4 : 1,
        slidesToScroll: 1,
        autoplay: manyInOne ? false : true,
        autoplaySpeed: 8000,
        arrows: manyInOne ? true : false,
        draggable: false,
        swipe: false,
        touchMove: false,
      };
  return (
    <Slider {...settings}>
      { children }
    </Slider>
  )
}

export default SlickSlider
