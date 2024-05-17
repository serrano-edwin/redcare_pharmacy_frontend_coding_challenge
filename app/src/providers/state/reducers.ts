import { combineReducers } from "redux";

import { reducer as repositories } from "../../libs/data-access/repositories";

export default combineReducers({
  repositories,
});
