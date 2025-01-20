import React, { useEffect } from 'react';
import './Navbar.css';
import Header from './Header.jsx';
import SearchInput from './SearchInput.jsx';
import NavbarLinks from './NavbarLinks.jsx';
import CartIcon from './CartIcon.jsx';

const Navbar = ({openedList, setOpenedList, inpValue, setInpValue, searchRef}) => {
  
  useEffect(() => {
    const handleResize = () => setOpenedList(false);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setOpenedList]);

  return (
    <div className='header-navbar'>
    <Header/>
    <div className='navbar'>

    <div className='left-side'>
      <NavbarLinks 
        openedList={openedList}
        setOpenedList={setOpenedList}
      />
    </div>

      <div className='right-side'>
          <SearchInput
            setOpenedList={setOpenedList}
            inpValue={inpValue}
            setInpValue={setInpValue} 
            searchRef={searchRef}
          />
          <CartIcon />
      </div>
      
    </div>
    </div>
   
  );
};

export default Navbar;
