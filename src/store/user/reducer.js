import { ADD_SCHOOL_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHOOL_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
