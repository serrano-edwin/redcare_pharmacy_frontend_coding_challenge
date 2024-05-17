import status from "../../../../utils/status-enum";
import initialState from "../initial-state/initial-state";
import actionTypes from "../action-types/action-types";

const reducer = (state = initialState, { payload = {}, type = {} } = {}) => {
  switch (type) {
    case actionTypes.LOADING:
      return {
        ...state,
        status: status.LOADING,
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        status: status.SUCCESS,
        data: {
          ...state.data,
          ...payload,
        },
      };
    case actionTypes.ERROR:
      return {
        ...state,
        status: status.ERROR,
        data: {},
      };
    default:
      return state;
  }
};
export default reducer;
