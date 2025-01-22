import React, { useState, useRef, useEffect } from 'react';
import classes from './productImages.module.css';
import ImagesPoints from './ImagesPoints';

const ProductImages = ({chosenProduct, setOpenedFullImage}) => {

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

  return (
    <>
        <div className={classes.productImages} ref={productImagesRef}>
                <img onClick={() => setOpenedFullImage({isOpen:true, image:1})} src={chosenProduct.image1} alt='' ref={point1Ref}/>
                <img onClick={() => setOpenedFullImage({isOpen:true, image:2})} src={chosenProduct.image2} alt='' ref={point2Ref}/>
        </div>

      <ImagesPoints 
        handlePointClick={handlePointClick}
        activePoint={activePoint}
      />
    </>
  
  )
}

export default ProductImages
