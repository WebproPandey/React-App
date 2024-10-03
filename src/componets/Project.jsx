import React from 'react'

const Project = () => {
  return (
    <div>
         <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Active Projects
            </h3>
            <div className=" flex justify-center items-center gap-4 h-[25vh] ">
              <div className="bg-teal-500  w-1/2 h-full flex  flex-col justify-between  items-center rounded-[20px]">
                <div className="circular-progress">25%</div>
                <div>
                  <h4 className="text-base font-medium text-gray-800">
                    Medical App
                  </h4>
                  <p className="text-sm text-gray-500">8 hours progress</p>
                </div>
              </div>
              <div className=" bg-pink-700 w-1/2 h-full flex  flex-col justify-between  items-center rounded-[20px]  ">
                <div className="circular-progress-60">60%</div>
                <div>
                  <h4 className="text-base font-medium text-gray-800">
                    Making History{" "}
                  </h4>
                  <p className="text-sm text-gray-500">20 hours progress</p>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Project