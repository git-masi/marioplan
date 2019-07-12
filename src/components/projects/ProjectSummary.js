import React from 'react';

const ProjectSummary = props => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.title}</span>
        <p>Posted By: {props.author}</p>
        <p className="grey-text">{props.date}</p>
      </div>
    </div>
  )
}

export default ProjectSummary;