import React from "react";
import classes from "./ProjectDetail.module.css";
import { useParams } from "react-router-dom";
import ProjectsList from "../Components/Projects/ProjectsList";

function ProjectDetail() {
  const params = useParams();
  console.log(params.projectId);
  const project = ProjectsList.find(
    (project) => project.url === params.projectId
  );
  console.log(project);
  return (
    <div className={classes.projectDetailArea}>
      <div className={classes["main-img"]}>
        <img className={classes["img-fluid"]} src={project.image} alt="#" />
      </div>
      <div className={classes.projectDetail}>
        <div className={classes.topArea}>
          <h1>{project.name}</h1>
          <hr />
          <div className={classes.info}>
            <h4>
              <span>category : </span>
              {project.category}
            </h4>
            <h4>
              <span>category : </span>
              {project.date}
            </h4>
            <h4 className={classes.link}>
              <span className={classes.text}>Link: </span>
              <span>
                <a className={classes.link} target="_blank" href={project.link}>
                  {project.link}
                </a>
              </span>
            </h4>
          </div>
        </div>
        <div className={classes.bottomArea}>
          <h2>Details</h2>
          <ul className={classes.detailList}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum?
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
