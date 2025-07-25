"use client"
import { usecontext } from '@/Helper/Context';
import React from 'react'
import { RiApps2AddLine } from "react-icons/ri";

// import Link from 'next/link';
const Navbar = () => {
    const {setvalue} = usecontext();    
  return (
    <>
    <div className='nav w-full bg-slate-900 flex items-center justify-between px-5 rounded-b-2xl'>
        <div className='heading text-amber-300 text-4xl'>
            <h2>Abhi's Work List</h2>
        </div>
        <div className='ad w-[40px] h-[40px] bg-amber-300 rounded-full flex items-center justify-center' >
            <button onClick={()=>setvalue(true)}>
            <RiApps2AddLine size='25px'/>
            </button>
        </div>

    </div>
    </>
  )
}

export default Navbar