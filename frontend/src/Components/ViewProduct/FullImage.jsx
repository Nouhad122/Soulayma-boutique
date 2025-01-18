import React, {useRef} from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import classes from './FullImage.module.css';

const FullImage = ({openedFullImage, setOpenedFullImage, chosenProduct}) => {

    const nextRef = useRef(null);
    const previousRef = useRef(null);

    const handleChosenImage = (position) => {
        if (position === 'next') {
            setOpenedFullImage((prev) => ({...prev, image: 1}));
          } 
        else if (position === 'previous') {
            setOpenedFullImage((prev) => ({...prev, image: 2}));
          }
        };
        
  return (
    <div className={classes.fullImage}>
        <div className={classes.imagesBox}>
            <img className={`${openedFullImage.image === 2 ? `${classes.zeroOpacity}` : ''}`} src={chosenProduct.image1} alt='' ref={previousRef}/>
            <img className={`${openedFullImage.image === 1 ? `${classes.zeroOpacity}` : ''}`} src={chosenProduct.image2} alt='' ref={nextRef}/>
            <FaGreaterThan className={classes.scrollLeft} onClick={() =>{handleChosenImage("previous")}} />
            <HiMiniXMark className={classes.closeBtn} onClick={() => setOpenedFullImage({isOpen:false, image:1})}/>
            <FaLessThan className={classes.scrollRight} onClick={() =>{handleChosenImage("next")}} />
        </div>
      
    </div>
  )
}

export default FullImage
