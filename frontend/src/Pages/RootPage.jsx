import React, { useEffect, useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import { useLocation, Outlet } from 'react-router'
import ChatBot from '../Components/ChatBot/ChatBot.jsx'
import SideCompContext from '../store/SideCompContext.jsx'
import SearchedProducts from '../Components/SearchProducts/SearchedProducts.jsx'

const RootPage = () => {
  const {hideContentInModal, hideList, emptyInput, hideFilter, inputValue} = useContext(SideCompContext);

  const location = useLocation();

  useEffect(() => {
      hideContentInModal();
      hideList();
      emptyInput();
      hideFilter();
    }, [location.pathname]);


  return (
    <div className='web-container'>
      <Navbar />

      {inputValue.trim() && <SearchedProducts />}
      
      <main>
        <Outlet />
      </main>

      <Footer />

      <ChatBot />
    </div>
  )
}

export default RootPage
