import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectItem from "../Components/Projects/ProjectItem";
import classes from "./Project.module.css";
import Loader from "../Components/Layout/Loader";
import Error from "../Components/Layout/Error";
import MetaData from "../Components/Layout/MetaData";
import { fetchProjects } from "../store/actions";

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
            projectsList.map((project) => (
              <ProjectItem
                key={project._id}
                id={project._id}
                name={project.name}
                github={project.github}
                website={project.website}
                title={project.title}
                tech={project.tech}
                desc={project.desc}
                image={project.image}
              />
            ))}
          {error && <Error error="No Projects Found" />}
        </div>
      </div>
    </>
  );
}

export default Project;
