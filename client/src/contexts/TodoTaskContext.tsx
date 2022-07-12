import {
  ChangeEvent,
  Children,
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
  addTask: Function;
  handleChange: Function;
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

export const TodoTaskContext =
  createContext<TodoTaskContextType>(initialValues);

export const TodoTaskContextProvider = ({ children }: TodoTaskContextProps) => {
  const [task, setTask] = useState(initialValues.task);
  const [deadline, setDeadline] = useState(initialValues.deadline);
  const [todoList, setTodoList] = useState<ITask[]>(initialValues.todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline };
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
      value={{ task, setTask, deadline, setDeadline, todoList, setTodoList, addTask, handleChange, completeTask}}
    >
      {children}
    </TodoTaskContext.Provider>
  );
};
