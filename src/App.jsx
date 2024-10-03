import React from "react";
import "./index.css";
import Header from "./componets/Header";
import Task from "./componets/Task";
import Project from "./componets/Project";

const App = () => {
  return (
    <>
      <div className="bg-[#f8f4ee] flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl p-6">
           <Header/>
           <Task/>
          <Project/>
        </div>
      </div>
    </>
  );
};

export default App;
