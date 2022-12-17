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
    const response = await axios.get("/api/v1/allprojects");
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

export const fetchProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST_STARTED });
    const response = await axios.get(`/api/v1/singleProject/${id}`);
    if (response.data) {
      if (response.data.success) {
        const base64String = btoa(
          new Uint8Array(response.data.project.image.data.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        dispatch({
          type: PROJECT_REQUEST_SUCCESS,
          payload: {
            project: response.data.project,
            imgUrl: `data:image/png;base64,${base64String}`,
          },
        });
      }
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (error.response)
      dispatch({
        type: PROJECT_REQUEST_FAILED,
        payload: error.response.data,
      });
    else if (error.request) {
      dispatch({
        type: PROJECT_REQUEST_FAILED,
        payload: "Check your internet connection and try again ",
      });
    }
  }
};
