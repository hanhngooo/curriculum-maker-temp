export const ADD_SCHOOL_SUCCESS = "ADD_SCHOOL_ADDSCHOOL";

const addSchoolSuccess = (schoolInfo) => {
  return {
    type: ADD_SCHOOL_SUCCESS,
    payload: schoolInfo,
  };
};

export const addSchool = (schoolInput) => {
  return async (dispatch, getState) => {
    console.log("do you go here", schoolInput);
    dispatch(addSchoolSuccess({ school: schoolInput }));
  };
};
