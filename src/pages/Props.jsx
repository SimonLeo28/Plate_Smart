import React from 'react'
import Navbar from '../components/Navbar'
import PropDisplay from './PropDisplay'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'



const Props = () => {

  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex ">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Prop</h1>
      </div>
      <PropDisplay /> 
      <div className='bg-gray px-10 py-6 leading-12'>
        <Link to={"/"} className="bg-black text-white p-3" >Back</Link>
      </div>
      <Footer/>
      </>
    </div>
  )
}

export default Props
