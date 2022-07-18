import React from 'react'
import { ITask } from '../Interfaces'


interface Props {
    item: ITask;
    completeHandler(DeleteTaskName: string): void;
}
const TodoTask = ({item, completeHandler}: Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span className='writting'>{item.TaskName}</span>
            <span className='nmbr'>{item.deadLine}</span>
        </div>
        <button onClick={() => completeHandler(item.TaskName)}>X</button>
    </div>
  )
}

export default TodoTask