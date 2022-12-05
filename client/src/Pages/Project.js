import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectItem from "../Components/Projects/ProjectItem";
import classes from "./Project.module.css";
import Loader from "../Components/Layout/Loader";
import Error from "../Components/Layout/Error";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/v1/allprojects");
        if (response.data) {
          if (response.data.success) {
            const proj = [];
            for (let i = 0; i < response.data.projects.length; i++) {
              proj.push(response.data.projects[i]);
            }
            setProjects(proj);
            setError(false);
          } else {
            setError(true);
            throw new Error(response.data.message);
          }
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchProjects();
    if (projects.length > 0) setError(false);
  }, []);
  return (
    <div className={classes.projectArea}>
      <h2>Projects</h2>
      <div className={classes.projectsList}>
        {loading && <Loader />}
        {projects &&
          projects.map((project) => (
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
  );
}

export default Project;
