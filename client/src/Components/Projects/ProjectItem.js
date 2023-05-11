import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProjectItem.module.css";

function ProjectItem(props) {

  return (
    <div className={classes.card}>
      <Link to={`/projects/${props.id}`}>
        <div className={classes.ProjectCard}>
          <div className={classes.image}>
            <img
              className={`${classes.img}${" "}${classes["img-fluid"]}`}
              src={props.imgage}
              alt={props.name || "Project"}
            />
          </div>
          <div className={classes.content}>
            <h4>{props.name}</h4>
            <p> {props.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
