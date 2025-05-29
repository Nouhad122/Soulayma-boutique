import React, { useEffect, useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import { useLocation, Outlet } from 'react-router'
import SideCompContext from '../store/SideCompContext.jsx'
import SearchedProducts from '../Components/SearchProducts/SearchedProducts.jsx'
import ChatBot from '../Components/ChatBot/ChatBot.jsx'
import ScrollToTop from '../Components/Secondary-Comps/ScrollToTop.jsx'

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
    <>
      <ScrollToTop />
      <Navbar />

      {inputValue.trim() && <SearchedProducts />}
      
      <main>
        <Outlet />
      </main>

      <Footer />
      <ChatBot />
      
   </>
  )
}

export default RootPage
