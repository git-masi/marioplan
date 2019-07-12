import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = props => {
  return (
    <div className="project-list section">
      <ProjectSummary title="some post" author="some dude" date="some date"/>
      <ProjectSummary title="some other post" author="some chick" date="some other date"/>
      <ProjectSummary title="yet another post" author="some sentient plant" date="the future"/>
    </div>
  )
}

export default ProjectList;