import React from 'react'

const PanelEditTask = ({taskData, setIsEditingTask}) => {
  return (    
    <form className="panel">
      <div className="panel__header">
        <h2 className="panel__heading">Edit note...</h2>
        <button className="panel__close" id="create-new__close" onClick={() => setIsEditingTask(false)}>×</button>
      </div>

    </form>
  );
}

export default PanelEditTask