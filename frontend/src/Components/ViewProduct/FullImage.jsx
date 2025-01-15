import React, {useRef} from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

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
    <div className='full-image'>
        <div className='images-box'>
            <img className={`'full-image1' ${openedFullImage.image === 2 ? 'zero-opacity' : ''}`} src={chosenProduct.image1} alt='' ref={previousRef}/>
            <img className={`'full-image1' ${openedFullImage.image === 1 ? 'zero-opacity' : ''}`} src={chosenProduct.image2} alt='' ref={nextRef}/>
            <FaGreaterThan onClick={() =>{handleChosenImage("previous")}} className='greater-icon'/>
            <HiMiniXMark onClick={() => setOpenedFullImage({isOpen:false, image:1})} className='full-x-mark'/>
            <FaLessThan onClick={() =>{handleChosenImage("next")}} className='less-icon'/>
        </div>
      
    </div>
  )
}

export default FullImage
