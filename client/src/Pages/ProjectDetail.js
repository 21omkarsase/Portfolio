import React, { useEffect, useState } from "react";
import classes from "./ProjectDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Components/Layout/Loader";
import Error from "../Components/Layout/Error";
import { fetchProject } from "../store/actions";

function ProjectDetail() {
  const dispatch = useDispatch();
  const { project, imgUrl, loading, error } = useSelector(
    (state) => state.project
  );
  const params = useParams();

  useEffect(() => {
    dispatch(fetchProject(params.projectId));
  }, []);

  return (
    <>
      {loading && <Loader />}
      {project && !loading && (
        <div className={classes.projectDetailArea}>
          <div className={classes["main-img"]}>
            <img className={classes["img-fluid"]} src={imgUrl} alt="#" />
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
                  <span>Tech : </span>
                  {project.tech}
                </h4>
                <div className={classes.projLinks}>
                  <span className={classes.text}>Links </span>
                  <div className={classes.links}>
                    <span>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className={classes.icon}
                          icon={faLink}
                        />
                      </a>
                    </span>
                    <span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className={classes.icon}
                          icon={faGithub}
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.bottomArea}>
              <h2>Details</h2>
              {project.desc}
            </div>
          </div>
        </div>
      )}
      {error && <Error error={error} />}
    </>
  );
}

export default ProjectDetail;
