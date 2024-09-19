import React, { useState , useEffect } from  'react'
import axios from 'axios'
import { Card } from '../components/Card'
import { Link } from 'react-router-dom'



const PropDisplay = () => {


    const [data, setData] = useState([])
  
    const [isLoading, setIsLoading] = useState(true)
  
    const getData = async ()=>{
      const response = await axios.get(`http://localhost:3000/props`)
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
              <h1 className='text-3xl'>Props</h1>
              {
                isLoading?
                <div>Loading data from backend....</div>
                :
                <div className='p-3'>
                  {data.map((item)=>{
                      return <Card key={item.key} item={item}  />
                  })}
              </div>
              }
          </div>
          <div className='flex-col p-5'>
                <h1 className='text-2xl p-3'><center>Want to donate food...</center></h1>
                <Link to={"/Prop/PropPost"}><center>
                  <button className='p-3 border-2 border-black-500 rounded-[10%] bg-white text-black'>Click Here</button>
                </center></Link>
              </div>
      </div>
      </>
    )
  }
  
  export default PropDisplay
