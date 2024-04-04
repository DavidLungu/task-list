import TaskManager from './components/TaskManager'
import PanelNewTask from './components/PanelNewTask'
import { useState } from 'react'
import Cookies from 'js-cookie'

import './App.css'
import './components/Overlay.css'
import PanelEditTask from './components/PanelEditTask'
import PanelViewTask from './components/PanelViewTask'


function App() {

const [isCreatingTask, setIsCreatingTask] = useState(false);
const [isEditingTask, setIsEditingTask] = useState(false);
const [isViewingTask, setIsViewingTask] = useState(false);

const [tasks, setTasks] = useState([]);
const [currentTaskData, setCurrentTaskData] = useState({});

const addTask = (task) => {
  const newTasks = [...tasks, task];
  setTasks(newTasks);
  Cookies.set('tasks', JSON.stringify(newTasks));
  setIsCreatingTask(false);
};

const editTask = (task) => {
  const _currentTaskData = {
    ...task,
    name: task.name,
    description: task.description,
    deadline: task.deadline,
    priority: task.priority
  };

  setCurrentTaskData(_currentTaskData);
  setIsEditingTask(true);
}

const viewTask = (task) => {
  const _currentTaskData = {
    ...task,
    name: task.name,
    description: task.description,
    deadline: task.deadline,
    priority: task.priority
  };

  setCurrentTaskData(_currentTaskData);
  setIsViewingTask(true);
}

  return (
    <>
    <TaskManager tasks={tasks} setTasks={setTasks} setIsCreatingTask={setIsCreatingTask} editTask={editTask} viewTask={viewTask} />
    
    <div className={`overlay-new ${isCreatingTask ? "" : "overlay-hidden"}`}>
      <PanelNewTask addTask={addTask} setIsCreatingTask={setIsCreatingTask}/>
    </div>
    
    <div className={`overlay-new ${isEditingTask ? "" : "overlay-hidden"}`}>
      <PanelEditTask taskData={currentTaskData} setIsEditingTask={setIsEditingTask}/>
    </div>

    <div className={`overlay-new ${isViewingTask ? "" : "overlay-hidden"}`}>
      <PanelViewTask taskData={currentTaskData} setIsViewingTask={setIsViewingTask}/>
    </div>
    </>
  )
}

export default App
