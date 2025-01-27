import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import Header from './Header.jsx';
import SearchInput from './SearchInput.jsx';
import NavbarLinks from './NavbarLinks.jsx';
import CartIcon from './CartIcon.jsx';
import Modal from '../Secondary-Comps/Modal.jsx';
import SideCompContext from '../../store/sideCompContext.jsx';

const Navbar = ({inpValue, setInpValue, searchRef}) => {
  const NavListController = useContext(SideCompContext);
  
  useEffect(() => {
    NavListController.hideList;

    const handleResize = () => NavListController.hideList();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [NavListController]);

  return (
    <>
    {NavListController.openedList && <Modal closeModal = {NavListController.hideList} />}

    <div className='header-navbar'>
    <Header/>
    <div className='navbar'>

    <div className='left-side'>
      <NavbarLinks />
    </div>

      <div className='right-side'>
          <SearchInput
            inpValue={inpValue}
            setInpValue={setInpValue} 
            searchRef={searchRef}
          />
          <CartIcon />
      </div>
      
    </div>
    </div>
    </>
  );
};

export default Navbar;
