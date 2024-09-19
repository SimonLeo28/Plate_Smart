import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <>
    <Navbar />
    <div>
        <div className='bg-custom-bg h-screen flex flex-col justify-center items-center'>
        <h1 className='text-white font-bold text-7xl'>Welcome to Plate Smart</h1>
        <p className='flex justify-center items-center text-white text-2xl'>Serving food is better than wasting food</p>
        </div>

        
        <p></p>
    </div>
    <Footer />
    </>
  )
}
