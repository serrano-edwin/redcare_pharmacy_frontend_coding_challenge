import status from "../../../../utils/status-enum";
import { repositories } from "../../../../fixtures";
import reducer from "./reducer";
import * as actions from "../actions/actions";

const initialState = {
  status: status.IDLE,
  data: {},
};

describe("reducer test", () => {
  it("Should handle LOADING", () => {
    const expectedState = {
      ...initialState,
      status: status.LOADING,
    };

    expect(
      reducer(undefined, actions.repositoriesLoading())
    ).toEqual(expectedState);
  });

  it("Should handle SUCCESS", () => {
    const payload = {
      ...repositories,
    };
    const expectedState = {
      ...initialState,
      status: status.SUCCESS,
      data: {
        ...repositories,
      },
    };

    expect(
      reducer(undefined, actions.repositoriesSuccess(payload))
    ).toEqual(expectedState);
  });

  it("Should handle ERROR", () => {
    const expectedState = {
      ...initialState,
      status: status.ERROR,
    };

    expect(reducer(undefined, actions.repositoriesError())).toEqual(
      expectedState
    );
  });
});
