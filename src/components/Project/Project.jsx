import React from "react";
import "./Project.css";

function Project(props) {
  let project = props.project;

  return (
    <div className='project m-3'>
      <div className='card'>
        <img
          src={project.thumbnail}
          className='card-img-top'
          alt={project.title}
        />
        <div className='card-body'>
          <h5 className='card-title text-center'>{project.title}</h5>
          <a href={project.link} className='btn btn-pink'>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
