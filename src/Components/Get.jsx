import React, { useEffect, useState } from 'react'
import { AXIOS_SINGLETON } from './Constants'

const Post = () => {
    const [data, setdata] = useState([])
   useEffect(()=>{
    const fetchedData=async () => {
        const res= await AXIOS_SINGLETON.get('/posts')
        setdata(res.data)
        
        
    }
    fetchedData()

   },[])
  return (
    <>
    {
        data.map((items)=>(
           <>
           <ul key={items.id}>
            <li>{items.title}</li>
           </ul>
            
           </>
           
        ))
    }
    </>
  )
}

export default Post