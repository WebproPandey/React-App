import React from "react";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="bg-[#f8f4ee] flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl p-6">
          {/* Profile Section */}
          <header className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img
                src="profile-pic.png"
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Sourav Suman
                </h2>
                <p className="text-sm text-gray-500">App Developer</p>
              </div>
            </div>
            <button className="text-gray-500 text-2xl">
              <i className="fas fa-cog"></i>
            </button>
          </header>

          {/* Task Section */}
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

          {/* Projects Section */}
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
      </div>
    </>
  );
};

export default App;
