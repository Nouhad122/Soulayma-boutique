import React, {useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/S-logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaBars, FaPlus, FaMinus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Header from './Header.jsx';
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput.jsx';

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

  const handleLinkClick = (linkName) => {
    setOpenedCategories((prevOpenedCategories) => ({
      ...prevOpenedCategories,
      [linkName]: !prevOpenedCategories[linkName],
    }));
  };

  const handleMouseEnter = (linkName) => {
    if (window.innerWidth >= 1450) {
      setOpenedCategories((prevOpenedCategories) => ({
        ...prevOpenedCategories,
        [linkName]: true,
      }));
    }
  };

  const handleMouseLeave = (linkName) => {
    if (window.innerWidth >= 1450) {
      setTimeout(() => {
        if (!document.querySelector(`.link-container.${linkName}:hover`) && !document.querySelector(`.list-links.${linkName}:hover`)) {
          setOpenedCategories((prevOpenedCategories) => ({
            ...prevOpenedCategories,
            [linkName]: false,
          }));
        }
      }, 100);
    }
  };

  return (
    <div className='header-navbar'>
    <Header/>
    <div className='navbar'>
      <div className='left-side'>
        <FaBars className='menu-bars' onClick={() => setOpenedList(true)}/>
        <Link to={'/'}><img src={logo} alt='soulayma logo' /></Link>

        <div className={`nav-list ${openedList ? 'visible' : 'hidden-list'}`}>
          <FaXmark className='x-mark' onClick={() => setOpenedList(false)}/>
          
          <div className='auto-list-container'>
            <div 
              className={`link-container ${openedCategories.hijabs ? 'clicked-link hijabs' : ''}`}
              onMouseEnter={() => handleMouseEnter('hijabs')}
              onMouseLeave={() => handleMouseLeave('hijabs')}
            >
              <div className={`list-title ${openedList ? 'title-animation' : ''}`} onClick={() => handleLinkClick('hijabs')}>
                <p>Hijabs</p>
                <div className='plus-minus'>
                  <FaPlus className={!openedCategories.hijabs ? 'opacity' : 'no-opacity'} />
                  <FaMinus className={openedCategories.hijabs ? 'opacity' : 'no-opacity'}/>
                </div>
              </div>
              {openedCategories.hijabs && (
                <div
                  className='list-links' 
                  onMouseEnter={() => handleMouseEnter('hijabs')}
                  onMouseLeave={() => handleMouseLeave('hijabs')}
                >
                    <Link to={`/shop/all/Hijabs/page/1`} className='navbar-mini-link'>Shop All Hijabs</Link>
                    <Link to={`/shop/Hijabs/Premium Jersey Hijabs`} className='navbar-mini-link'>Premium Jersey Hijabs</Link>
                    <Link to={`/shop/Hijabs/Instant Hijabs`} className='navbar-mini-link'>Instant Hijabs</Link>
                    <Link to={`/shop/Hijabs/Bamboo Ribbed Jersey Hijabs`} className='navbar-mini-link'>Bamboo Ribbed Jersey Hijabs</Link>
                    <Link to={`/shop/Hijabs/Premium Chiffon Hijabs`} className='navbar-mini-link'>Premium Chiffon Hijabs</Link>
                    <Link to={`/shop/Hijabs/Instant Bamboo Ribbed Jersey Hijabs`} className='navbar-mini-link'>Instant Bamboo Ribbed Jersey Hijabs</Link>
                    <Link to={`/shop/Hijabs/Small Luxury Chiffon Hijabs`} className='navbar-mini-link'>Small Luxury Chiffon Hijabs</Link>
                    <Link to={`/shop/Hijabs/Small Chiffon Hijabs`} className='navbar-mini-link'>Small Chiffon Hijabs</Link>
                    <Link to={`/shop/Hijabs/Breathable Modal (Viscose)`} className='navbar-mini-link'>Breathable Modal (Viscose)</Link>
                    <Link to={`/shop/Hijabs/SpeakPure Set Satin Lined`} className='navbar-mini-link'>SpeakPure Set Satin Lined</Link>

                </div>
              )}
            </div>

            <div 
              className={`link-container ${openedCategories.pins ? 'clicked-link pins' : ''}`}
              onMouseEnter={() => handleMouseEnter('pins')}
              onMouseLeave={() => handleMouseLeave('pins')}
            >
              <div className={`list-title ${openedList ? 'title-animation' : ''}`} onClick={() => handleLinkClick('pins')}>
                <p>Bags & Accessories</p>
                <div className='plus-minus'>
                  <FaPlus className={!openedCategories.hijabs ? 'opacity' : 'no-opacity'} />
                  <FaMinus className={openedCategories.hijabs ? 'opacity' : 'no-opacity'}/>
                </div>
              </div>
              {openedCategories.pins && (
                <div 
                  className='list-links' 
                  onMouseEnter={() => handleMouseEnter('pins')}
                  onMouseLeave={() => handleMouseLeave('pins')}
                >
                    <Link to={`/shop/Hijab Pins/Hijab Pins`} className='navbar-mini-link'>Hijab Pins</Link>
                    <Link to={`/shop/Arm & Neck Covers/Arm & Neck Covers`} className='navbar-mini-link'>Arm & Neck Covers</Link>
                    <Link to={`/shop/Luxury Bags/Luxury Bags`} className='navbar-mini-link'>Luxury Bags</Link>
                    <Link to={`/shop/Soulayma Accessories/Soulayma Accessories`} className='navbar-mini-link'>Soulayma Accessories</Link>
                </div>
              )}
            </div>

            <div 
              className={`link-container ${openedCategories.underscarves ? 'clicked-link underscarves' : ''}`}
              onMouseEnter={() => handleMouseEnter('underscarves')}
              onMouseLeave={() => handleMouseLeave('underscarves')}
            >
              <div className={`list-title ${openedList ? 'title-animation' : ''}`} onClick={() => handleLinkClick('underscarves')}>
                <p>Underscarves</p>
                <div className='plus-minus'>
                  <FaPlus className={!openedCategories.hijabs ? 'opacity' : 'no-opacity'} />
                  <FaMinus className={openedCategories.hijabs ? 'opacity' : 'no-opacity'}/>
                </div>
              </div>
              {openedCategories.underscarves && (
                <div 
                  className='list-links' 
                  onMouseEnter={() => handleMouseEnter('underscarves')}
                  onMouseLeave={() => handleMouseLeave('underscarves')}
                >
                    <Link to={`/shop/all/Underscarves/page/1`} className='navbar-mini-link'>Shop All Underscarves</Link>
                    <Link to={`/shop/Underscarves/Satin Lined Tie-Back`} className='navbar-mini-link'>Satin Lined Tie-Back</Link>
                    <Link to={`/shop/Underscarves/Satin Linded Undercap`} className='navbar-mini-link'>Satin Linded Undercap</Link>
                    <Link to={`/shop/Underscarves/Tube Underscarves`} className='navbar-mini-link'>Tube Underscarves</Link>
                    <Link to={`/shop/Underscarves/Criss Cross Tie-Back Underscarves`} className='navbar-mini-link'>Criss Cross Tie-Back Underscarves</Link>
                    <Link to={`/shop/Underscarves/Ear Slit Underscarves`} className='navbar-mini-link'>Ear Slit Underscarves</Link>
                    <Link to={`/shop/Underscarves/Full Coverage Underscarves`} className='navbar-mini-link'>Full Coverage Underscarves</Link>
                    <Link to={`/shop/Underscarves/Satin Lined Full Coverage Underscarves`} className='navbar-mini-link'>Satin Lined Full Coverage Underscarves</Link>
                    <Link to={`/shop/Underscarves/Mesh Back Underscarves`} className='navbar-mini-link'>Mesh Back Underscarves</Link>
                </div>
              )}
            </div>

            <div 
              className={`link-container ${openedCategories.abayas ? 'clicked-link abayas' : ''}`}
              onMouseEnter={() => handleMouseEnter('abayas')}
              onMouseLeave={() => handleMouseLeave('abayas')}
            >
              <div className={`list-title ${openedList ? 'title-animation' : ''}`} onClick={() => handleLinkClick('abayas')}>
                <p>Abayas</p>
                <div className='plus-minus'>
                  <FaPlus className={!openedCategories.hijabs ? 'opacity' : 'no-opacity'} />
                  <FaMinus className={openedCategories.hijabs ? 'opacity' : 'no-opacity'}/>
                </div>
              </div>
              {openedCategories.abayas && (
                <div 
                  className='list-links' 
                  onMouseEnter={() => handleMouseEnter('abayas')}
                  onMouseLeave={() => handleMouseLeave('abayas')}
                >
                  <Link to={`/shop/all/Abayas/page/1`} className='navbar-mini-link'>Shop All Abayas</Link>
                  <Link to={`/shop/Abayas/Suede Open Abayas`} className='navbar-mini-link'>Suede Open Abayas</Link>
                  <Link to={`/shop/Abayas/Mina Abayas`} className='navbar-mini-link'>Mina Abayas</Link>
                  <Link to={`/shop/Abayas/Ruffle Border Abayas`} className='navbar-mini-link'>Ruffle Border Abayas</Link>
                  <Link to={`/shop/Abayas/Yara Closed Abayas`} className='navbar-mini-link'>Yara Closed Abayas</Link>
                </div>
              )}
            </div>

            <div 
              className={`link-container ${openedCategories.jilbabs ? 'clicked-link jilbabs' : ''}`}
              onMouseEnter={() => handleMouseEnter('jilbabs')}
              onMouseLeave={() => handleMouseLeave('jilbabs')}
            >
              <div className={`list-title ${openedList ? 'title-animation' : ''}`} onClick={() => handleLinkClick('jilbabs')}>
                <p>Jilbabs</p>
                <div className='plus-minus'>
                  <FaPlus className={!openedCategories.hijabs ? 'opacity' : 'no-opacity'} />
                  <FaMinus className={openedCategories.hijabs ? 'opacity' : 'no-opacity'}/>
                </div>
              </div>
              {openedCategories.jilbabs && (
                <div 
                  className='list-links' 
                  onMouseEnter={() => handleMouseEnter('jilbabs')}
                  onMouseLeave={() => handleMouseLeave('jilbabs')}
                >
                  <Link to={`/shop/all/Jilbabs/page/1`}  className='navbar-mini-link'>Shop All Jilbabs</Link>
                  <Link to={`/shop/Jilbabs/French Tie Back Jilbabs`} className='navbar-mini-link'>French Tie Back Jilbabs</Link>
                  <Link to={`/shop/Jilbabs/Soulayma Jilbabs`} className='navbar-mini-link'>Soulayma Jilbabs</Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

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
