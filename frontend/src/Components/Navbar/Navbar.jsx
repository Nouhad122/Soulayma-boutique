import React, {useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingBag }from "react-icons/fa";
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput.jsx';
import NavbarLinks from './NavbarLinks.jsx';

const Navbar = ({openedList, setOpenedList, openedCategories, setOpenedCategories, inpValue, setInpValue, searchRef}) => {
  const cart = useSelector(state => state.cart);

  const calculateCartLength = (cartItems) => {
    return cartItems.reduce((a, b) => a + b.quantity, 0);
  };

  const [cartLength, setCartLength] = useState(calculateCartLength(cart));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartLength(calculateCartLength(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartLength(calculateCartLength(savedCart));
  }, []);


  useEffect(() => {
    const handleResize = () => setOpenedList(false);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setOpenedList]);

  return (
    <div className='header-navbar'>
    <Header/>
    <div className='navbar'>

      <NavbarLinks 
        openedList={openedList}
        setOpenedList={setOpenedList}
        openedCategories={openedCategories}
        setOpenedCategories={setOpenedCategories}
      />

      <div className='right-side'>
          <SearchInput setOpenedList={setOpenedList} inpValue={inpValue} setInpValue={setInpValue} searchRef={searchRef}/>
        <div className='bag-cont'>
          <Link to={'/cart'} className='navbar-mini-link'>
          <FaShoppingBag className='shopping-bag' />
          </Link>
          <p className='bag-count'>({cartLength})</p>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Navbar;
