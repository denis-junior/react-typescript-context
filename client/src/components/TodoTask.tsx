import { FC, useContext } from "react";
import { TodoTaskContext } from "../contexts/TodoTaskContext";

export interface ITodoTaskProps {}

export const TodoTask: FC<ITodoTaskProps> = () => {
  const { todoList, completeTask } = useContext(TodoTaskContext);

  return (
    <>
      {todoList.map((task, key) => {
        return (
          <>
            <div className="card w-25 mt-5">
              <div className="card-header text-center">
                <span key={key}> <b>{task.taskName}</b></span>
              </div>
              <div className="card-body text-center">
                <span key={key}> <b>Estimate:</b> {task.deadline} days</span>
              </div>

              <button
                onClick={() => {
                  completeTask(task.taskName);
                }}
              >
                Finished
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};
