import React from 'react';
import classes from './productDetail.module.css';

const ImagesPoints = ({handlePointClick, activePoint}) => {

  return (
    <div className={classes.imagesPoints}>
        <span onClick={() => handlePointClick('point1')} className={activePoint === 'point1' ? classes.activePoint : undefined}></span>
        <span onClick={() => handlePointClick('point2')} className={activePoint === 'point2' ? classes.activePoint : undefined}></span>
    </div>
  )
}

export default ImagesPoints
