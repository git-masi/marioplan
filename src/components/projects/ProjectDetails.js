import React from 'react';

const ProjectDetails = props => {
  // console.log(props);
  console.log(props.match.params.id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"></span>
          <p></p>
        </div>
        <div className="card-action grey lighten-4 grey-text"></div>
      </div>
    </div>
  )
}

export default ProjectDetails;