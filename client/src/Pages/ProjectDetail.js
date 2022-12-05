import React, { useEffect, useState } from "react";
import classes from "./ProjectDetail.module.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Components/Layout/Loader";
import Error from "../Components/Layout/Error";
import axios from "axios";

function ProjectDetail() {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/v1/singleProject/${params.projectId}`
        );
        if (response.data && response.data.success === false) {
          throw new Error(response.data.message);
        } else {
          setProject(response.data.project);

          const base64String = btoa(
            new Uint8Array(response.data.project.image.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setImgUrl(`data:image/png;base64,${base64String}`);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchProject();
    if (project !== undefined) setError(false);
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
                  {project.date}
                </h4>
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
      {error && <Error />}
    </>
  );
}

export default ProjectDetail;
