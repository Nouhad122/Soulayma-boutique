import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SecondaryComp.module.css';

const Button = ({ className, url, children, absoluteBtn, inverse, ...props }) => {
  const buttonClasses = `${classes.customBtn} ${classes.btn15} ${className || ''}`;
  const isAbsolute = absoluteBtn ? `${classes.absoluteClass} ${buttonClasses}` : buttonClasses;
  const inversed = inverse ? `${classes['inverse-btn']}` : '';
  return (
    <>
      {url ? (
        <Link to={url} className={`${isAbsolute} ${inversed}`} {...props}>
          {children}
        </Link>
      ) : (
        <button className={`${isAbsolute} ${inversed}`} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
