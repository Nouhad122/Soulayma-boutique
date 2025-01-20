import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import { Outlet } from 'react-router'
import ChatBot from '../Components/ChatBot/ChatBot.jsx'

const RootPage = () => {
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
