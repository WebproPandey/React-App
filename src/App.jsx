import React, { useState } from 'react';
import Buttonbox from './component/Buttonbox';

const App = () => {
  let [Color , setColor]  =   useState("#374151")

  let handlerColor = (newColor) =>{
    setColor(newColor)
  }

  return (
    <div className='h-screen w-full flex justify-center  items-center' 
     style={{backgroundColor:Color}}>
      <Buttonbox  onColorChange={handlerColor}  />
    </div>
  );
};

export default App;
