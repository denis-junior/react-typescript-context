import {
  ChangeEvent,
  createContext,
  ReactNode,
  useState,
} from "react";
import { ITask } from "../interfaces";

type TodoTaskContextType = {
  task: string;
  setTask: Function;
  deadline: number;
  setDeadline: Function;
  todoList: Array<ITask>;
  setTodoList: Function;
  addTask: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  completeTask: Function;
};

type TodoTaskContextProps = {
  children: ReactNode;
};

const initialValues = {
  task: "",
  setTask: () => {},
  deadline: 0,
  setDeadline: () => {},
  todoList: [],
  setTodoList: () => {},
  addTask: () => {},
  handleChange: () => {},
  completeTask: () => {},
};

export const TodoTaskContext = createContext<TodoTaskContextType>(initialValues);

export const TodoTaskContextProvider = ({ children }: TodoTaskContextProps) => {
  const [task, setTask] = useState<string>(initialValues.task);
  const [deadline, setDeadline] = useState<number>(initialValues.deadline);
  const [todoList, setTodoList] = useState<ITask[]>(initialValues.todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      console.log(event.target.name + "\n value:" + event.target.value)
      setTask(event.target.value);
    } else {
      console.log(event.target.name + "\n value:" + event.target.value)
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline };
    console.log(newTask)
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <TodoTaskContext.Provider
      value={{ task, setTask, deadline, setDeadline, todoList, setTodoList, addTask, handleChange, completeTask}} >
      {children}
    </TodoTaskContext.Provider>
  );
};
