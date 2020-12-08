export const ADD_SCHOOL_SUCCESS = "ADD_SCHOOL_ADDSCHOOL";

const addSchoolSuccess = (schoolInfo) => {
  return {
    type: ADD_SCHOOL_SUCCESS,
    payload: schoolInfo,
  };
};

export const addSchool = (schoolInput) => {
  return async (dispatch, getState) => {
    // console.log("do you go here", schoolInput);
    dispatch(addSchoolSuccess({ school: schoolInput }));
  };
};

export const ADD_STUDY_SUCCESS = "ADD_STUDY_SUCCESS";

const addStudySuccess = (studyInfo) => {
  return {
    type: ADD_STUDY_SUCCESS,
    payload: studyInfo,
  };
};

export const addStudy = (studyInput) => {
  return async (dispatch, getState) => {
    // console.log("do you go here", studyInput);
    dispatch(addStudySuccess({ study: studyInput }));
  };
};
