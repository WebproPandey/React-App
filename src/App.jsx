import React from 'react';

const App = () => {
  return (
    <div className='h-screen w-full flex justify-center  items-center bg-gray-700'>
     <div  className='h-[30%] w-[40%] flex flex-col justify-center items-center bg-slate-400 rounded-lg'>
       <h1 className='text-white text-4xl font-semibold font-sans'>Welcome to React!</h1>
       <p className='text-2xl text-white'>This is a simple React page</p>
       <p className='text-2xl text-white'>Thank you</p>
     </div>
    </div>
  );
};

export default App;
