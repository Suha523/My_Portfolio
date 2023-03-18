import React from "react";
import "./Project.css";
function Project(props) {
  let project = props.project;

  return (
    <div className='project m-3'>
      <img
        src={project.thumbnail}
        alt={project.title}
        width='100%'
        height='100%'
        className="rounded"
      />
      <div className='description rounded p-3 d-flex flex-column justify-content-center align-items-start'>
        <h5 className='text-white'>{project.title}</h5>
        <p className='text-white'>{project.description}</p>
        <a href={project.link} className='btn btn-pink'>
          Demo
        </a>
      </div>
    </div>
  );
}

export default Project;
