import React from 'react'
import './SecondaryComp.module.css'
import classes from './SecondaryComp.module.css'
const LoadingPage = () => {
  return (
    <div className={classes['loading-container']}>
      <div className={classes.spinner}></div>
    </div>
  )
}

export default LoadingPage
