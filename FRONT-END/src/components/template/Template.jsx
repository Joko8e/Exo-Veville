import React from 'react'
import { Outlet } from 'react-router-dom'


import Header from '../header/Header'
import Footer from '../footer/Footer'



const Template = () => {
  return (
    <div>
        <Header/>
        <section>
        <Outlet/>
        </section>
        <Footer/>
    </div>
  )
}

export default Template