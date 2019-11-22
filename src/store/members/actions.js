import axios from "axios";
import {
  LOAD_MEMBERS_FAILURE,
  LOAD_MEMBERS_SUCCESS,
  LOAD_MEMBERS_PENDING,
  LOAD_MEMBER_FAILURE,
  LOAD_MEMBER_SUCCESS,
  LOAD_MEMBER_PENDING
} from "../constants";

export const getMembers = () => {
  return dispatch => {
    dispatch({
      type: LOAD_MEMBERS_PENDING
    });
    axios
      .get("http://localhost:8000/members")
      .then(res => {
        dispatch({
          type: LOAD_MEMBERS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_MEMBERS_FAILURE,
          payload: err
        })
      );
  };
};

export const getOneMember = id => {
  return dispatch => {
    dispatch({
      type: LOAD_MEMBER_PENDING
    });
    axios
      .get(`http://localhost:8000/members/${id}`)
      .then(res => {
        dispatch({
          type: LOAD_MEMBER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_MEMBER_FAILURE,
          payload: err
        })
      );
  };
};
