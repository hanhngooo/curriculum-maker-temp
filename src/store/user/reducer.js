import { ADD_SCHOOL_SUCCESS, ADD_STUDY_SUCCESS } from "./actions";

const initialState = {};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHOOL_SUCCESS:
      return { ...state, ...action.payload };
    case ADD_STUDY_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
