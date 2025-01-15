import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SecondaryComp.module.css';

const Button = ({ className, url, children, absoluteBtn, ...props }) => {
  const buttonClasses = `${classes.customBtn} ${classes.btn15} ${className || ''}`;
  return (
    <>
      {url ? (
        <Link to={url} className={absoluteBtn ? `${classes.absoluteClass} ${buttonClasses}` : buttonClasses} {...props}>
          {children}
        </Link>
      ) : (
        <button className={buttonClasses} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
