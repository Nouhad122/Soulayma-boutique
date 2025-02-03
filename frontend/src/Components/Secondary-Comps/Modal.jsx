import React, {useEffect, useContext} from 'react'
import { createPortal } from 'react-dom'
import classes from './SecondaryComp.module.css'
import SideCompContext from '../../store/SideCompContext'

const Modal = ({ closeModal, title, message, onNeededAction }) => {
  const sideCompController = useContext(SideCompContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = 'unset';
    };
    }, []);

    const handleAction = () =>{
      onNeededAction();
      sideCompController.hideContentInModal();
    }


  return createPortal(
    <div className={classes.blurBackground} onClick={closeModal}>
      {
        sideCompController.modalContent && (
          <div className={classes.blurContent}>
            <h1>{title}</h1>
            <p>{message}</p>
            <div className={classes.modalBtns}>
              <button className={classes.mBtn} onClick={sideCompController.hideContentInModal}>Cancel</button> 
              <button className={classes.mBtn} onClick={handleAction}>Delete</button>  
            </div>            
        </div>
        )
      }
      
    </div>
  , document.getElementById("modal"))
}

export default Modal
