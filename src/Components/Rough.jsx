import React, { useEffect, useState } from 'react'
import { AXIOS_SINGLETON } from './Constants'

const Rough = () => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        const getData=async() => {
            const res=await AXIOS_SINGLETON.get('/posts')
            setdata(res.data)
            
        }
        getData();

    },[])
  return (
    <>
    {
        data.map((items)=>(
            <ul key={items.id}>
                <li>{items.title}</li>
            </ul>
        ))

    }
    </>
   
  )
}

export default Rough