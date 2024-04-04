import React from 'react'
import './PanelViewTask.css'

const PanelViewTask = ({ taskData, setIsViewingTask }) => {
  return (
    <form className="panel" id='details-panel'>
      <button className="panel__close" id="create-new__close" onClick={() => setIsViewingTask(false)}>×</button>
      <div className={`details__header details__header-${['low', 'medium', 'high'].includes(taskData.priority) ? taskData.priority : 'low'}`}>
        <div className="details__task-name">{taskData.name}</div>
      </div>
      <div className="details-content">
        {/* <div className="details__task-description">{taskData.deadline}</div> */}
        <div className="details__task-description">{taskData.description}</div>
      </div>
    </form>
  );
};

export default PanelViewTask;