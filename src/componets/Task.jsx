import React from "react";

import { useState } from "react";

const Task = ({ tasks }) => {

  const [isSleep, setSleep] = useState(true);

  const [message, setMessage] = useState(""); // New state for message

  const handleClick = () => {

    setSleep(!isSleep);

    setMessage("Now task is completed!"); // Update message on click

  };


  return (

    <div>

      <section className="mb-6">

        <h3 className="text-xl font-semibold text-gray-800 mb-4">My Tasks</h3>

        <div className="space-y h-[30vh] overflow-y-auto bg-gray-300 rounded-md shadow-md inset-3 flex flex-col gap-2 justify-start pt-3  ">

          {tasks.map((task, index) => (

            <div key={index} className="flex items-center justify-between px-2  ">

              <div onClick={handleClick} className="w-10 h-10 rounded-full bg-red-400 flex justify-center items-center">

                {isSleep ? "😴" : "😀"}

              </div>

              <div>

                <h4 className="text-base font-medium text-gray-800">{task}</h4>

                <p className="text-sm text-gray-500">1 task now, 1 started</p>

              </div>

              <div className="opestion h-auto w-auto flex gap-2 ">
                <div className="eidt bg-gray-100 w-5 h-5 flex justify-center  items-center rounded-sm">

                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M3 17.25V21h3.75l11-11-3.75-3.75-11 11zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>

                </div>
                <div className="delete bg-gray-100 h-5 w-5  flex justify-center items-center rounded-sm">

                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">

                    <path d="M3 6h18v2H3V6zm2 2v12a2 2 0 002 2h10a2 2 0 002-2V8H5zm5 2h2v8h-2v-8zm4 0h2v8h-2v-8zM9 4V3h6v1h5v2H4V4h5z" />

                  </svg>

                </div>

              </div>

            </div>

          ))}
        </div>
         <div className="h-10 flex justify-center">
            {message && <p className="text-green-500 mt-2">{message}</p>}
         </div>
      </section>
    </div>

  );

};

export default Task;
