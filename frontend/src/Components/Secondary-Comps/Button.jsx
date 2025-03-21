import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SecondaryComp.module.css';

const Button = ({ className, url, children, absoluteBtn, ...props }) => {
  const buttonClasses = `${classes.customBtn} ${classes.btn15} ${className || ''}`;
  const isAbsolute = absoluteBtn ? `${classes.absoluteClass} ${buttonClasses}` : buttonClasses;
  return (
    <>
      {url ? (
        <Link to={url} className={isAbsolute} {...props}>
          {children}
        </Link>
      ) : (
        <button className={isAbsolute} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
