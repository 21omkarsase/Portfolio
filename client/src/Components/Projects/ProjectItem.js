import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
  const base64String = btoa(
    new Uint8Array(props.image.data.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const url = `data:image/png;base64,${base64String}`;
  return (
    <div className={classes.card}>
      <Link to={`/projects/${props.id}`}>
        <div className={classes.ProjectCard}>
          <div className={classes.image}>
            <img
              className={`${classes.img}${" "}${classes["img-fluid"]}`}
              src={url}
              alt="Project Image"
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
