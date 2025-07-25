import React from 'react'
import {motion} from "motion/react";
import { MdOutlineDelete } from "react-icons/md";
import { usecontext } from '@/Helper/Context';
const Card = ({reference,title,desc,index}) => {
  const {deleteData}=usecontext();
  return (
    <>

        <motion.div drag dragConstraints={reference} stiffness={300} className='card w-[250px] h-[300px] bg-amber-600 rounded-2xl relative overflow-hidden'>
          <div className='card overflow-y-scroll w-full h-full'>
            <div className='text-amber-50 p-3 text-3xl mb-2'>
                <h3>Title</h3>
            <h5 className='text-lg'>{title}</h5>
            </div>
            <div className='text-amber-50 text-3xl px-3'>
                <h3>Description</h3>
              <div>
                <p className='text-sm'>{desc}</p>
              </div>
            
            </div>
          </div>
            
            <div className='absolute bottom-0 left-0 w-full h-9 bg-red-600 z-1 flex justify-center items-center'>
              <button onClick={()=>deleteData(index)}>
                <MdOutlineDelete size="30" padding="20px"/>
              </button>
            </div>
        </motion.div>
        
    </>
  )
}

export default Card