import React from 'react';
import classes from './Products.module.css';


const Title = ({title, subTitle}) => {
  return (
        <div className={classes.title}>
                  <h3>{title}</h3>
                  <h1>{subTitle}</h1>
        </div>
  )
}

export default Title
