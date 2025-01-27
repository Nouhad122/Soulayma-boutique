import React, {useEffect} from 'react'
import { createPortal } from 'react-dom'
import classes from './SecondaryComp.module.css'

const Modal = ({children, closeModal}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = 'unset';
    };
    }, []);


  return createPortal(
    <div className={classes.blurBackground} onClick={closeModal}>
      <div className={classes.blurContent}>
        {children}
      </div>
    </div>
  , document.getElementById("modal"))
}

export default Modal
