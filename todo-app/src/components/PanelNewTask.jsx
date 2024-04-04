import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './PanelNewTask.css';

const PanelNewTask = ({addTask, setIsCreatingTask}) => {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  }
  
  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  }
  
  const handleTaskPriorityChange = (e) => {
    setTaskPriority(e.target.value);
  }

  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      name: taskTitle || "Empty Task",
      description: taskDescription,
      deadline: "MM/DD/YYYY",
      priority: taskPriority || "low"
    };
    addTask(newTask);

    setTaskTitle('');
    setTaskDescription('');
    setTaskPriority('low');

    document.getElementById('create-new__title').value = '';
    document.getElementById('create-new__description').value = '';
  };


  return (
    <form className="panel">
      <div className="panel__header">
        <h2 className="panel__heading">Create a new note...</h2>
        <button className="panel__close" id="create-new__close" onClick={() => setIsCreatingTask(true)}>×</button>
      </div>
      <div className="panel__content">
        <div className="create-new__sidebar"></div>
        <div className="create-new__entry">
          <textarea className="create-new__input" id="create-new__title" type="text" placeholder='Title: Do Homework' maxLength={40} onChange={handleTaskTitleChange}/>
          <textarea className="create-new__input" id="create-new__description" type="text" placeholder='Description: e.g do trig identities' onChange={handleTaskDescriptionChange}/>
          <div className="create-new__priority-submit">
            <div className="create-new__priority">
              <div className="create-new__priority-title">Priority:</div>
              {['low', 'medium', 'high'].map((value) => (
                <React.Fragment key={value}>  
                  <input
                    id={`create-new-${value}`}
                    type="radio"
                    value={value}
                    checked={taskPriority === value}
                    onChange={handleTaskPriorityChange}
                    required
                  />
                  <label
                    htmlFor={`create-new-${value}`}
                    className={`create-new__priority-btn create-new__priority-btn-${value} ${taskPriority === value ? `create-new__priority-btn-${value}-active` : ''}`}
                  > 
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </label>
                </React.Fragment>
              ))}
            </div>
            <input className="create-new__task-submit" type="submit" value="Add Task" onClick={handleAddTask} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PanelNewTask;
