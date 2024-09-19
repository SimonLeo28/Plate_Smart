import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import NGODisplay from './NGODisplay'

export const NGO = () => {
  return (
    <>
    <Navbar />
    <div>
    <div className=" bg-custom-bg  bg-cover bg-center flex ">
        <h1 className='text-5xl text-white font-bold p-[7%]'>NGO's Available Here</h1>
      </div>
    <NGODisplay />
    </div>
    
    <Footer />
    </>
  )
}
