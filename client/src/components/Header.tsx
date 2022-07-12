import React from "react";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="header">
      <div className="inputContainer">
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
      </div>

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
