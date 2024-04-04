import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"
import './Task.css'

const Task = ({task, deleteTask, editTask, viewTask}) => {
    const [isPanelHidden, setPanelHidden] = useState(false);
    const [isTaskCompleted, setTaskCompleted] = useState(false);

    const taskName = task.name;
    const taskDescription = task.description;
    const taskDeadline = task.deadline;
    const priority = task.priority;

    const displayText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }

        return text;
    }


  return (
    <>

<div className={`task priority-${isTaskCompleted ? "" : priority}`} onClick={() => {viewTask(task)}}>
    <button className={`task-complete ${ isTaskCompleted ? 'task-complete__checked' : ''}`} onClick={ (e) => { e.stopPropagation(); setTaskCompleted(!isTaskCompleted) }}/>
    <h1 className={`task-name ${ isTaskCompleted ? 'task-name__checked' : ''}`}>{displayText(taskName, 20)}</h1>
    <p className={`task-description ${ isTaskCompleted ? 'task-name__checked' : ''}`}>{displayText(taskDescription, 100)}</p>
    <button className="task-delete" onClick={ (e) => { e.stopPropagation(); deleteTask(task.id) }}><FaTrashAlt /></button>
</div>
    </>
  )
}

export default Task