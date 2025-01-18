import React from 'react';
import { FaStar } from "react-icons/fa";
import classes from './Reviews.module.css';

const Reviews = ({inCard}) => {
    const reviewsClass = inCard ? `${classes.productReviews} ${classes.cardReviews}` : classes.productReviews;
  return (
    <div className={reviewsClass}>
    <span>
        {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
        ))}
    </span>
    <p className={classes.rate}>5.0 <span className={classes.numOfRates}>(5)</span></p>
    </div>
  )
}

export default Reviews
