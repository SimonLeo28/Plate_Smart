import React, { useState , useEffect } from  'react'
import axios from 'axios'
import { Ncard } from '../components/Ncard'
import { Link } from 'react-router-dom'



const NGODisplay = () => {


    const [data, setData] = useState([])
  
    const [isLoading, setIsLoading] = useState(true)
  
    const getData = async ()=>{
      const response = await axios.get(`http://localhost:3000/NGO`)
      console.log("**********************")
      console.log(response);
      console.log("**********************")
      setData(response.data)
      setIsLoading(false);
    }
  
    useEffect(()=>{
      getData()
    },[])
  
  
    
    return (
      <>
      <div>
          <div className='bg-gray-300 p-5 text-black' >
              <h1 className='text-3xl'>NGO's</h1>
              {
                isLoading?
                <div>Loading data from backend....</div>
                :
                <div className='p-3'>
                  {data.map((item)=>{
                      return <Ncard key={item.key} item={item}  />
                  })}
              </div>
              }
          </div>
          <div className='flex-col p-5'>
                <h1 className='text-2xl p-3'><center>Want to register your NGO...</center></h1>
                <Link to={"/NewNGO"}><center>
                  <button className='p-3 border-2 border-black-500 rounded-[10%] bg-white text-black'>Click Here</button>
                </center></Link>
              </div>
      </div>
      </>
    )
  }
  
  export default NGODisplay
