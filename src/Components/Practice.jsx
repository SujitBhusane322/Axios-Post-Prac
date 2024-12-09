import React, { useState } from 'react'
import { AXIOS_SINGLETON } from './Constants'

const Practice = () => {
    const [data, setdata] = useState({
        title:'',
        description:''
    })
    const handlechange=(e)=>{
        setdata({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler=async () => {
        AXIOS_SINGLETON.post('/posts',data)
        console.log(data);
        

        
    }
  return (
    <>
    TITLE:<input type='text' name="title" onChange={handlechange}/>
    DESCRIPTION:<input type='text'  name="description" onChange={handlechange}/>
    <button onClick={submithandler}>POST DATA</button>
    </>
  )
}

export default Practice