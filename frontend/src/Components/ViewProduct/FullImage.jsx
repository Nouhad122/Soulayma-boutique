import React, { useRef, useContext } from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import classes from './FullImage.module.css';
import SideCompContext from '../../store/SideCompContext';
import Modal from '../Secondary-Comps/Modal';

const FullImage = ({ chosenProduct }) => {
    const sideCompController = useContext(SideCompContext);
    const nextRef = useRef(null);
    const previousRef = useRef(null);
        
  // Helper to get the correct image URL
  const getImageUrl = (img) => {
    if (!img) return '';
    if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('/')) return img;
    return `http://localhost:5000/uploads/${img}`;
  };

  return (
    <>
      <Modal />
      <div className={classes.fullImage}>
          <div className={classes.imagesBox}>
              <img className={`${sideCompController.openedFullImg.image === 2 ? `${classes.zeroOpacity}` : ''}`} src={getImageUrl(chosenProduct.image1)} alt='' ref={previousRef}/>
              <img className={`${sideCompController.openedFullImg.image === 1 ? `${classes.zeroOpacity}` : ''}`} src={getImageUrl(chosenProduct.image2)} alt='' ref={nextRef}/>
              <FaGreaterThan className={classes.scrollLeft} onClick={sideCompController.goToNextImg} />
              <HiMiniXMark className={classes.closeBtn} onClick={sideCompController.closeFullImage}/>
              <FaLessThan className={classes.scrollRight} onClick={sideCompController.goToPrevImg} />
          </div>
        
      </div>
    </>
  )
}

export default FullImage
