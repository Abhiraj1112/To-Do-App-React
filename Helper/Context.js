"use client"
import React, { createContext, useContext, useState } from 'react'


const MyContext=createContext();
const Context = ({children}) => {
    const [value, setvalue] = useState(false);
    const [data, setdata] = useState([]);
   
    const addData=(item)=>{
    setdata((prev)=>[...prev,item]);
    };

    const deleteData=(index)=>{
      setdata((prev)=>prev.filter((_,i)=>i!==index));
    };
    
  return (
    <div>
        <MyContext.Provider value={{value,setvalue,data,addData,deleteData}}>
            {children}
        </MyContext.Provider>
    </div>
  )
}
export const usecontext=()=>useContext(MyContext);
export default Context