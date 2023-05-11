import axios from "axios";
import {
  PROJECTS_REQUEST_STARTED,
  PROJECTS_REQUEST_SUCCESS,
  PROJECTS_REQUEST_FAILED,
} from "./constatns";
import {
  PROJECT_REQUEST_STARTED,
  PROJECT_REQUEST_SUCCESS,
  PROJECT_REQUEST_FAILED,
} from "./constatns";

export const fetchProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECTS_REQUEST_STARTED });
    const response = await axios.get("http://127.0.0.1:5000/api/v1/allprojects");
    if (response.data) {
      if (response.data.success) {
        const proj = [];
        for (let i = 0; i < response.data.projects.length; i++) {
          proj.push(response.data.projects[i]);
        }
        dispatch({
          type: PROJECTS_REQUEST_SUCCESS,
          payload: proj,
        });
      } else {
        throw new Error(response.data.message);
      }
    }
  } catch (error) {
    if (error.response)
      dispatch({
        type: PROJECTS_REQUEST_FAILED,
        payload: error.response.data,
      });
    else if (error.request) {
      dispatch({
        type: PROJECTS_REQUEST_FAILED,
        payload: "Check your internet connection and try again ",
      });
    }
  }
};

export const fetchProject = (id, callback) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST_STARTED });
    const response = await axios.get(`http://127.0.0.1:5000/api/v1/singleProject/${id}`);
    if (response.data) {
      if (response.data.success) {
        dispatch({
          type: PROJECT_REQUEST_SUCCESS,
          payload: {
            project: response.data.project,
          },
        });
        callback(true, response.data.project);
      }
    } else {
      dispatch({
        type: PROJECT_REQUEST_FAILED,
        payload: response.data.message,
      });
      callback(false, response.data.message);
    }
  } catch (error) {
    if (error.response) {
      dispatch({
        type: PROJECT_REQUEST_FAILED,
        payload: error.response.data,
      });
      callback(false, error.response.data)
    }
    else if (error.request) {
      dispatch({
        type: PROJECT_REQUEST_FAILED,
        payload: "Check your internet connection and try again ",
      });
      callback(false, " Check your internet connection and try again");
    }
  }
};
