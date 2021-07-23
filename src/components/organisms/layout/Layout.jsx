import React from 'react'
import './Layout.scss'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <div className='content'>
        <main className='main-container'>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
