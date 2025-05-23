import React, { useState, useRef, useEffect, useContext } from 'react';
import classes from './productImages.module.css';
import ImagesPoints from './ImagesPoints';
import SideCompContext from '../../store/SideCompContext';

const ProductImages = ({ chosenProduct }) => {
    const { openFirstImage, openSecondImage } = useContext(SideCompContext);
    const [activePoint, setActivePoint] = useState('point1');
    
    const point1Ref = useRef();
    const point2Ref = useRef();
    const productImagesRef = useRef();

    const handlePointClick = (point) => {
    setActivePoint(point); 
    if (point === 'point1') {
        point1Ref.current.scrollIntoView({ behavior: 'smooth' });
      }     
    else if (point === 'point2') {
        point2Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    useEffect(() => {
      const handleScroll = () => {
        if (productImagesRef.current.scrollLeft > 350) {
          setActivePoint('point2');
        } else {
          setActivePoint('point1');
        }
      };
  
      const productImagesDiv = productImagesRef.current;
      productImagesDiv.addEventListener('scroll', handleScroll);
  
      return () => {
        productImagesDiv.removeEventListener('scroll', handleScroll);
      };
      }, []);

    useEffect(() => {
      const handleResize = () => {
          handlePointClick('point1');
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);

    // Helper to get the correct image URL
    const getImageUrl = (img) => {
        if (!img) return '';
        if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('/')) return img;
        return `http://localhost:5000/uploads/${img}`;
    };

  return (
    <>
        <div className={classes.productImages} ref={productImagesRef}>
                <img onClick={openFirstImage} src={getImageUrl(chosenProduct.image1)} alt='First Product Image' ref={point1Ref}/>
                <img onClick={openSecondImage} src={getImageUrl(chosenProduct.image2)} alt='Second Product Image' ref={point2Ref}/>
        </div>

      <ImagesPoints 
        handlePointClick={handlePointClick}
        activePoint={activePoint}
      />
    </>
  
  )
}

export default ProductImages
