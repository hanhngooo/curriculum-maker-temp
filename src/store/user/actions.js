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

export const ADD_STUDY_SUCCESS = " ADD_STUDY_SUCCESS";

const addStudySuccess = (graduateProfile) => {
  return {
    type: ADD_STUDY_SUCCESS,
    payload: graduateProfile,
  };
};

export const addStudy = (studyInput) => {
  return async (dispatch, getState) => {
    // console.log("do you go here", studyInput);
    dispatch(addStudySuccess(studyInput));
  };
};

export const ADD_GRADUATE_PROFILE_SUCCESS = "ADD_GRADUATE_PROFILE_SUCCESS";

const addGraduateProfileSuccess = (graduateProfile) => {
  return {
    type: ADD_GRADUATE_PROFILE_SUCCESS,
    payload: graduateProfile,
  };
};

export const addGraduateProfile = (graduateProfile) => {
  return async (dispatch, getState) => {
    // console.log("do you go here", studyInput);
    dispatch(addGraduateProfileSuccess(graduateProfile));
  };
};

export const ADD_PROFESSION_SUCCESS = "ADD_PROFESSION_SUCCESS";

const addProfessionSuccess = (profession) => {
  return {
    type: ADD_PROFESSION_SUCCESS,
    payload: profession,
  };
};

export const addProfession = (profession) => {
  return async (dispatch, getState) => {
    // console.log("do you go here", studyInput);
    dispatch(addProfessionSuccess(profession));
  };
};
