import React, {FC, useState, ChangeEvent} from 'react';
import {ITask} from './Interfaces';
import './App.css';
import TodoTask from './Components/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [time, setTime] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
     e.target.name === 'task' ? setTask(e.target.value) : setTime(Number(e.target.value)); 
  }
  const todoHandler = (): void => { 
    const newTask = {TaskName: task, deadLine: time}
    setTodoList([...todoList, newTask]); setTask(''); setTime(0);
   }
   const completeHandler = (DeleteTaskName: string):void => {
      setTodoList(todoList.filter((aa) =>{
        return aa.TaskName != DeleteTaskName
      } ))
   }
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='What To Do...' name='task' onChange={handleChange} value={task}/>
          <input type='number' placeholder='Timing (Days)...' name='num' onChange={handleChange} value={time}/>
        </div>
          <button onClick={todoHandler}>Add Task</button>
      </div>
      <div className='todoList'>{todoList.map((item: ITask, key: number) => <TodoTask key={key} item={item} completeHandler={completeHandler}/>)}</div>
    </div>
  );
}

export default App;
