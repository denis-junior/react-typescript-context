import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoTask } from "./components/TodoTask";
import { ITask } from "./interfaces";

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline}
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string):void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      
      <Header/>
      <div className="todoList"> 
        {todoList.map((task: ITask, key: number)=>{
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
      
    </div>
  );
};

export default App;
