import {
  LOAD_MEMBERS_FAILURE,
  LOAD_MEMBERS_SUCCESS,
  LOAD_MEMBERS_PENDING,
  LOAD_MEMBER_FAILURE,
  LOAD_MEMBER_SUCCESS,
  LOAD_MEMBER_PENDING
} from "../constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEMBERS_PENDING:
      return state;
    case LOAD_MEMBER_PENDING:
      return state;

    case LOAD_MEMBERS_SUCCESS:
      return { ...state, all: action.payload };
    case LOAD_MEMBER_SUCCESS:
      return { ...state, member: action.payload };

    case LOAD_MEMBERS_FAILURE:
      return { ...state, err: action.payload };
    case LOAD_MEMBER_FAILURE:
      return { ...state, err: action.payload };

    default:
      return state;
  }
};
