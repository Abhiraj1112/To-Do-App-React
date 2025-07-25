"use client"
import React, { useContext, useRef, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { usecontext } from '@/Helper/Context'
import Form from './Form'


const Background = () => {
  const {value,data}=usecontext();

   const ref=useRef(null);
  //  console.log(value);
  
  return (
    <>
    <div className='back w-full bg-amber-200 overflow-hidden relative z-2'>
    <Navbar/>
    {value===true?<Form/>:null}
  
    <div ref={ref} className='card-component w-full h-[87%] p-5 flex gap-5 flex-wrap'>
      {
        data.map((item,i)=>(
          <Card reference={ref} key={i} index={i} title={item.title} desc={item.desc}/>
        ))
      }
    
    </div>
    </div>
    </>
  )
}

export default Background