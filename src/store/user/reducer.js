import {
  ADD_SCHOOL_SUCCESS,
  ADD_STUDY_SUCCESS,
  ADD_GRADUATE_PROFILE_SUCCESS,
  ADD_PROFESSION_SUCCESS,
} from "./actions";

const initialState = {
  studies: [],
  graduateProfiles: [],
  professions: [],
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHOOL_SUCCESS:
      return { ...state, ...action.payload };
    case ADD_STUDY_SUCCESS:
      return { ...state, studies: [action.payload, ...state.studies] };
    case ADD_GRADUATE_PROFILE_SUCCESS:
      return {
        ...state,
        graduateProfiles: [action.payload, ...state.graduateProfiles],
      };
    case ADD_PROFESSION_SUCCESS:
      return {
        ...state,
        professions: [action.payload, ...state.professions],
      };
    default:
      return state;
  }
};
