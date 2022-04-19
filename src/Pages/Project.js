import React from "react";
import ProjectItem from "../Components/Projects/ProjectItem";
import ProjectsList from "../Components/Projects/ProjectsList";
import classes from "./Project.module.css";

function Project() {
  return (
    <div className={classes.projectArea}>
      <h2>Projects</h2>
      <div className={classes.projectsList}>
        {ProjectsList.map((project) => (
          <ProjectItem
            key={project.url}
            url={project.url}
            name={project.name}
            image={project.image}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
