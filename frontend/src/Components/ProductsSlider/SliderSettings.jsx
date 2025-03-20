import classes from './SliderSettings.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return <div className={classes.nextArrow} onClick={onClick}>›</div>;
};

const PrevArrow = ({ onClick }) => {
  return <div className={classes.prevArrow} onClick={onClick}>‹</div>;
};

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  rows: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
};

const SliderSettings = ({children}) => {
  return (
    <div className={classes['slider-all']}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}

export default SliderSettings