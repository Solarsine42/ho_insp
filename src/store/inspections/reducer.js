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

const initialState = {
  all: [],
  err: {},
  inspection: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INSPECTIONS_PENDING:
      return state;
    case LOAD_INSPECTION_PENDING:
      return state;
    case ADD_INSPECTION_PENDING:
      return state;
    case DELETE_INSPECTION_PENDING:
      return state;
    case EDIT_INSPECTION_PENDING:
      return state;

    case LOAD_INSPECTIONS_SUCCESS:
      return { ...state, all: action.payload };
    case LOAD_INSPECTION_SUCCESS:
      return { ...state, inspection: action.payload };
    case ADD_INSPECTION_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };
    case DELETE_INSPECTION_SUCCESS:
      return {
        ...state,
        all: state.all.filter(inspection => inspection.id === action.payload.id)
      };
    case EDIT_INSPECTION_SUCCESS:
      return { all: [...state.all, action.payload] };

    case LOAD_INSPECTIONS_FAILURE:
      return { ...state, err: action.payload };
    case LOAD_INSPECTION_FAILURE:
      return { ...state, err: action.payload };
    case ADD_INSPECTION_FAILURE:
      return { ...state, err: action.payload };
    case DELETE_INSPECTION_FAILURE:
      return { ...state, err: action.payload };
    case EDIT_INSPECTION_FAILURE:
      return { ...state, err: action.payload };

    default:
      return state;
  }
};
