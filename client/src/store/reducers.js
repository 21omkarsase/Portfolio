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
export const projectsReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECTS_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case PROJECTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        projectsList: action.payload,
      };
    case PROJECTS_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case PROJECT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload.project,
        imgUrl: action.payload.imgUrl,
      };
    case PROJECT_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
