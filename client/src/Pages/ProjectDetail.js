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


import chatapp from "../Images/chatapp.png"
import dsa from "../Images/dsa.png"
import portfolio from "../Images/portfolio.png"
import stm from "../Images/stm.png"
import task_manager from "../Images/taskmanager.png"
import weather_app from "../Images/weatherapp.png"
import expense_tracker from "../Images/expensetracker.png"
import cf_analyzer from "../Images/visualizer.PNG"

const projectsImages = [
  stm, portfolio, cf_analyzer, task_manager, chatapp, weather_app, expense_tracker, dsa
]

function ProjectDetail() {
  const [imgUrl, setImgUrl] = useState("");
  // const [project, setProject] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { project, loading } = useSelector(
    (state) => state.project
  );
  const params = useParams();

  useEffect(() => {
    dispatch(fetchProject(params.projectId, (status, response) => {
      if (status) {
        if (response.name === "Meetings Summarization") {
          setImgUrl(projectsImages[0]);
        }
        else if (response.name === "Portfolio")
          setImgUrl(projectsImages[1]);
        else if (response.name === "Codeforces-Analyzer")
          setImgUrl(projectsImages[2]);
        else if (response.name === "Task Manager")
          setImgUrl(projectsImages[3]);
        else if (response.name === "Chat App")
          setImgUrl(projectsImages[4]);
        else if (response.name === "Weather App")
          setImgUrl(projectsImages[5]);
        else if (response.name === "Expense Tracker")
          setImgUrl(projectsImages[6]);
        else setImgUrl(projectsImages[7]);
      } else {
        setError(response)
      }
    }));
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
              <ul>
                {project.desc.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {error && !loading && <Error error={error} />}
    </>
  );
}

export default ProjectDetail;
