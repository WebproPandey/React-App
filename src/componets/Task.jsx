import React from 'react'

const Task = () => {
  return (
    <div>
         <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              My Tasks
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-400 mr-4"></div>
                <div>
                  <h4 className="text-base font-medium text-gray-800">To Do</h4>
                  <p className="text-sm text-gray-500">
                    5 tasks now, 1 started
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-400 mr-4"></div>
                <div>
                  <h4 className="text-base font-medium text-gray-800">
                    In Progress
                  </h4>
                  <p className="text-sm text-gray-500">1 task now, 1 started</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-400 mr-4"></div>
                <div>
                  <h4 className="text-base font-medium text-gray-800">Done</h4>
                  <p className="text-sm text-gray-500">
                    18 tasks now, 13 started
                  </p>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Task