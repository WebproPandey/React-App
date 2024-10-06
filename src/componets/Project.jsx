import React from 'react'

const Project = ({tasks}) => {
  return (
    <div>
         <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
               Task Graf
            </h3>
            <div className=" flex justify-center items-center gap-2 h-[28vh] ">
              <div className="bg-teal-500  p-2  w-1/2 h-full flex  flex-col justify-between  items-center rounded-[20px]">
                <div className="circular-progress z-10">
                  <h1 className='z-[2] text-sm'>100%</h1>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white">
                  {tasks.length === 0 ? (0) 
                    : (tasks.length )
                    }
                    <span className='pl-2 text-[5vw]'>task created</span>
                  </h4>
                  <p className="text-sm text-gray-600 font-sans  capitalize">Total timeing 24 hours</p>
                </div>
              </div>
              <div className=" bg-pink-500 p-2 w-1/2 h-full flex  flex-col justify-between  items-center rounded-[20px]  ">
                <div className="circular-progress-60">
                  <h1 className='z-[2] text-sm'>77.66%</h1>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white">
                    2 task completed
                  </h4>
                  <p className="text-sm text-gray-600 font-sans  font-semibold">remaining 12 hours</p>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Project