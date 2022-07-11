import React, {FC} from 'react';
import { ITask } from '../interfaces';

export interface ITodoTaskProps {
    task: ITask
    completeTask(taskNameToDelete: string): void
}

export const TodoTask: FC<ITodoTaskProps> = ({task, completeTask}) => {
  return (
    <div className='task'>
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={()=>{completeTask(task.taskName)}}>X</button>
    </div>
  );
}
