import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import Header from './Header.jsx';
import SearchInput from './SearchInput.jsx';
import NavbarLinks from './NavbarLinks.jsx';
import CartIcon from './CartIcon.jsx';
import Modal from '../Secondary-Comps/Modal.jsx';
import SideCompContext from '../../store/SideCompContext.jsx';

const Navbar = () => {
  const { openedList, hideList } = useContext(SideCompContext);
  
  useEffect(() => {
    const handleResize = () => hideList();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [hideList]);

  return (
    <>
    {openedList && <Modal closeModal = {hideList} />}

    <div className='header-navbar'>
    <Header/>
    <div className='navbar'>

    <div className='left-side'>
      <NavbarLinks />
    </div>

      <div className='right-side'>
          <SearchInput />
          <CartIcon />
      </div>
      
    </div>
    </div>
    </>
  );
};

export default Navbar;
