import React, { useEffect, useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import { useLocation, Outlet } from 'react-router'
import ChatBot from '../Components/ChatBot/ChatBot.jsx'
import SideCompContext from '../store/SideCompContext.jsx'

const RootPage = () => {
  const sideCompController = useContext(SideCompContext);

  const location = useLocation();

  useEffect(() => {
      sideCompController.hideContentInModal();
      sideCompController.hideList();
      sideCompController.emptyInput();
      sideCompController.hideFilter();
    }, [location.pathname]);


  return (
    <div className='web-container'>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ChatBot />
    </div>
  )
}

export default RootPage
