import axios from "axios";
import {
  LOAD_INSPECTIONS_FAILURE,
  LOAD_INSPECTIONS_SUCCESS,
  LOAD_INSPECTIONS_PENDING,
  LOAD_INSPECTION_FAILURE,
  LOAD_INSPECTION_SUCCESS,
  LOAD_INSPECTION_PENDING,
  ADD_INSPECTION_FAILURE,
  ADD_INSPECTION_SUCCESS,
  ADD_INSPECTION_PENDING,
  DELETE_INSPECTION_FAILURE,
  DELETE_INSPECTION_SUCCESS,
  DELETE_INSPECTION_PENDING,
  EDIT_INSPECTION_FAILURE,
  EDIT_INSPECTION_SUCCESS,
  EDIT_INSPECTION_PENDING
} from "../constants";

export const getInspections = () => {
  return dispatch => {
    dispatch({
      type: LOAD_INSPECTIONS_PENDING
    });
    axios
      .get("http://localhost:8000/inspections")
      .then(res => {
        dispatch({
          type: LOAD_INSPECTIONS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_INSPECTIONS_FAILURE,
          payload: err
        })
      );
  };
};

export const getOneInspection = id => {
  return dispatch => {
    dispatch({
      type: LOAD_INSPECTION_PENDING
    });
    axios
      .get(`http://localhost:8000/inspections/${id}`)
      .then(res => {
        dispatch({
          type: LOAD_INSPECTION_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_INSPECTION_FAILURE,
          payload: err
        })
      );
  };
};

export const addInspection = inspection => {
  return dispatch => {
    dispatch({
      type: ADD_INSPECTION_PENDING
    });
    axios
      .post("http://localhost:8000/inspections", inspection)
      .then(res => {
        dispatch({
          type: ADD_INSPECTION_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_INSPECTION_FAILURE,
          payload: err
        })
      );
  };
};

export const deleteInspection = id => {
  return dispatch => {
    dispatch({
      type: DELETE_INSPECTION_PENDING
    });
    axios
      .delete(`http://localhost:8000/inspections/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_INSPECTION_SUCCESS,
          payload: res.data
        });
        // window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_INSPECTION_FAILURE,
          payload: err
        })
      );
  };
};

export const editInspection = (inspection, id) => dispatch => {
  dispatch({
    type: EDIT_INSPECTION_PENDING
  });
  axios
    .patch(`http://localhost:8000/inspections/${id}`, inspection)
    .then(res => {
      dispatch({
        type: EDIT_INSPECTION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_INSPECTION_FAILURE,
        payload: err
      })
    );
};
