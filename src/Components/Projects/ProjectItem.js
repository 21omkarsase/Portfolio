import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
  return (
    <div className={classes.ProjectCard}>
      <div className={classes.image}>
        <Link to={`/projects/${props.url}`}>
          <img
            className={`${classes.img}${" "}${classes["img-fluid"]}`}
            src={props.image}
            alt="#"
          />
        </Link>
      </div>
      <div className={classes.content}>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
