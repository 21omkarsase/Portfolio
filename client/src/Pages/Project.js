import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectItem from "../Components/Projects/ProjectItem";
import classes from "./Project.module.css";
import Loader from "../Components/Layout/Loader";
import Error from "../Components/Layout/Error";
import MetaData from "../Components/Layout/MetaData";
import { fetchProjects } from "../store/actions";

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

function Project() {
  const dispatch = useDispatch();
  const { projectsList, loading, error } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (!projectsList) dispatch(fetchProjects());
  }, [projectsList]);

  return (
    <>
      <MetaData title="Omkar Sase | Projects" />;
      <div className={classes.projectArea}>
        <h2>Projects</h2>
        <div className={classes.projectsList}>
          {!projectsList && loading && <Loader />}
          {projectsList &&
            projectsList.map((project, idx) => (
              <ProjectItem
                key={project._id}
                id={project._id}
                name={project.name}
                github={project.github}
                website={project.website}
                title={project.title}
                tech={project.tech}
                desc={project.desc}
                imgage={projectsImages[idx]}
              />
            ))}
          {error && <Error error="No Projects Found" />}
        </div>
      </div>
    </>
  );
}

export default Project;
