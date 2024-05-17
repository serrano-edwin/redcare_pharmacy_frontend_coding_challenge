import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

// ======================================================
// Store
// ======================================================
const store = configureStore({ reducer: rootReducer });

const State = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default State;
