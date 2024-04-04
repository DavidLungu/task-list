import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Task from './Task'


const TaskManager = ({tasks, setTasks, setIsCreatingTask, editTask, viewTask}) => {

    useEffect(() => {
      const storedTasks = Cookies.get('tasks');
    
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        setTasks(parsedTasks);
      }
    }, []);
    
    const deleteTask = id => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      
      setTasks(updatedTasks);
      Cookies.set('tasks', JSON.stringify(updatedTasks));
    }

  return (
    <div className="todo-panel">
    <header className="header">TO-DO</header>
    {/* <nav className="side-panel">
      <ul className="navbar">
        <li className="nav-item">Item</li>
        <li className="nav-item">Item</li>
        <li className="nav-item">Item</li>
      </ul>
      <button className="new-task" onClick={() => setPanelHidden(false)}>+</button>
    </nav> */}
    <div className="content">
      <div className="task-list">
        { 
        tasks.map( task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} viewTask={viewTask}/>
          ))
        }
      </div>
    </div>
    <button className="new-task" onClick={() => setIsCreatingTask(true)}>+</button>
  </div>
  )
}

export default TaskManager