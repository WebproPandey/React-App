import React, { useState } from 'react';
import Task from './Task';

const Header = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]); // New state for tasks

  const submitHandler = (e) => {
    e.preventDefault();
    if (title) { 
      setTasks([...tasks, title]); 
      setTitle("");
    }
  }

  return (
    <div>
      <header>
        <form onSubmit={submitHandler} className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder='Enter Your task' 
              className='border-2 px-2 py-1 rounded-lg' 
              onChange={(e) => setTitle(e.target.value)} // Update title state
              value={title}  
            />
          </div>
          <button className="text-gray-500 px-2 py-1 bg-gray-300 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/>
            </svg>
          </button>
        </form>
      </header>
       <Task tasks={tasks}/>
    </div>
  );
}

export default Header;