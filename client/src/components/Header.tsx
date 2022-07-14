import React, { useContext } from "react";
import { TodoTaskContext } from "../contexts/TodoTaskContext";

export function Header() {
  
  const {task, handleChange, deadline, addTask} = useContext(TodoTaskContext)
  
  return (
    <div className="navbar bg-dark w-100 d-flex align-items-center justify-content-center">
      <div className=" px-5">
        
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task..."
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline (in days)..."
            onChange={handleChange}
          />
        <button onClick={addTask}>Add Task</button>

      
      </div>

    </div>
  );
}
