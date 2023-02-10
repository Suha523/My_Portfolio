import React from "react";
import Project from "../Project/Project";
import "./Portfolio.css";
import React_Temp from "../../assets/thumbnails/React_Temp.png";
import Movies_Library from "../../assets/thumbnails/Movies_Library.png";
import Notes_App from "../../assets/thumbnails/Notes_App.png";
import Save_Websites from "../../assets/thumbnails/Save_Websites.png";
import Laundry from "../../assets/thumbnails/Laundry.jpg";
import Agency from "../../assets/thumbnails/Agency.png";
import Todo_List from "../../assets/thumbnails/Todo_List.png";

function Portfolio() {
  let projects = [
    {
      id: 0,
      title: "React Template",
      link: "https://suha523.github.io/Start-Bootstrap-React-Template/",
      thumbnail: React_Temp,
      description: "",
    },

    {
      id: 1,
      title: "Movies App",
      link: "https://suha523.github.io/Movies-Library/index.html",
      thumbnail: Movies_Library,
      description: "",
    },
    {
      id: 2,
      title: "Notes App",
      link: "https://suha523.github.io/Notes-App/",
      thumbnail: Notes_App,
      description: "",
    },
    {
      id: 3,
      title: "Save Websites",
      link: "https://suha523.github.io/Save-Websites/",
      thumbnail: Save_Websites,
      description: "",
    },
    {
      id: 4,
      title: "Laundry Landing Page",
      link: "https://suha523.github.io/Laundry-design-template/",
      thumbnail: Laundry,
      description: "",
    },
    {
      id: 5,
      title: "Agency Landing Page",
      link: "https://suha523.github.io/Agency-design-template/",
      thumbnail: Agency,
      description: "",
    },
    {
      id: 6,
      title: "TODO List",
      link: "https://suha523.github.io/Todo_List-JavaScript/",
      thumbnail: Todo_List,
      description: "",
    },
  ];
  return (
    <div className='projects p-5'>
      <h2 className='text-center text-white'>My Portfolio</h2>
      <div className='container d-flex justify-content-center flex-wrap mt-5'>
        {projects.map((p) => (
          <Project project={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
