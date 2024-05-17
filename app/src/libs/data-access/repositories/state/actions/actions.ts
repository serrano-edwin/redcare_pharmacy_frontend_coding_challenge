import actionTypes from "../action-types/action-types";

export const repositoriesLoading = () => {
  return {
    type: actionTypes.LOADING,
  };
};

export const repositoriesSuccess = (payload: any) => {
  return {
    type: actionTypes.SUCCESS,
    payload: payload,
  };
};

export const repositoriesError = () => {
  return {
    type: actionTypes.ERROR,
  };
};
