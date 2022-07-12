import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoTask } from "./components/TodoTask";
import { TodoTaskContextProvider } from "./contexts/TodoTaskContext";
import { ITask } from "./interfaces";

const App: FC = () => {
  // const [task, setTask] = useState<string>("");
  // const [deadline, setDeadline] = useState<number>(0);
  // const [todoList, setTodoList] = useState<ITask[]>([]);


  return (
    <div className="App">
      <TodoTaskContextProvider>
        <Header />
        <div className="todoList">
          {todoList.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </TodoTaskContextProvider>
    </div>
  );
};

export default App;
