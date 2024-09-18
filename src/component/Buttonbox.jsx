import React from 'react'

const 
Buttonbox = ({onColorChange}) => {
 

  return (
    <div className=' fixed bottom-12  bg-slate-200 px-3 flex py-3   gap-12  rounded-2xl '>
         <button className='text-white px-8 py-3  border-[1px] rounded-3xl'  
         style={{backgroundColor:"red"}}
         onClick={()=>onColorChange("red")}
         > Red</button>
         <button className='text-white px-8 py-3   border-[1px] rounded-3xl'  
         style={{backgroundColor:"green"}}
         onClick={()=>onColorChange("green")}
         > Red</button>
         <button className='text-white px-8 py-3  border-[1px] rounded-3xl'  
         style={{backgroundColor:"yellow"}}
         onClick={()=>onColorChange("yellow")}
         > Red</button>
         <button className='text-white px-8 py-3   border-[1px] rounded-3xl'  
         style={{backgroundColor:"pink"}}
         onClick={()=>onColorChange("pink")}
         > Red</button>
    </div>
  )
}

export default 
Buttonbox