import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const SingleProp = () => {


    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams();

    const [prop, setProp] = useState({})

    const getPropFromId = async (id)=>{
      const response = await axios.get(`http://localhost:3000/props/${id}`)
      console.log(response);
      setBlog(response.data)
      setIsLoading(false)
    }

    useEffect(()=>{
      getPropFromId(id)
    },[])

    console.log(prop);

  return (
    <>
    <div>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex ">
        <h1 className='text-5xl text-white font-bold p-[7%]'>{prop.title}</h1>
      </div>
    <div className='bg-gray px-10 py-6 leading-12'>
        <Link to={"/Prop"} className="bg-black text-white p-3" >Back</Link>
        {
          isLoading?(
          <div className='text-2xl text-blue-300 text-center'>Data is Loading.....</div>
          ):(
          <>
          <h1 className='text-3xl my-5'>{prop.title}</h1>
          <p className='text-2xl'>{prop.content}</p>
          <p className='text-2xl'>You can contact me at {prop.mobile}</p>
          </>
        )}
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default SingleProp