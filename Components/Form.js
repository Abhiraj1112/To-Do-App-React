"use client"
import { usecontext } from '@/Helper/Context';
// import Link from 'next/link';
import React, { useState } from 'react'

const Form = () => {
  const {setvalue,addData,data} = usecontext();
  // const {carddata,setcarddata} = usecontext();
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        addData({title,desc});
        settitle("");
        setdesc("");
         setvalue(false);
    }
  return (
    
    <>
    <div className='absolute top-0 left-0 w-screen h-full bg-black/70 text-white z-5'>
    <div className='absolute top-[50%] left-[65%] -translate-x-[65%] -translate-y-[40%] flex' >
 <form 
      className='h-[50%] w-[50%] '
      onSubmit={submitHandler}>
        <input type="text" 
        placeholder='Enter Your Title' 
        className='p-3 text-black text-xl border-2 border-white rounded-2xl m-2' 
        input={title} 
        onChange={(e)=>settitle(e.target.value)}/>

        <input 
        type="text" 
        placeholder='Enter Your Description' 
        className='p-3 text-black text-xl border-2 border-white rounded-2xl m-2' 
        input={desc} 
        onChange={(e)=>setdesc(e.target.value)} />
        <button className='px-[6.5em] py-3 rounded-xl bg-black m-2'>Submit</button>
    </form>
    </div>

    </div>
     
    
    </>
  )
}

export default Form