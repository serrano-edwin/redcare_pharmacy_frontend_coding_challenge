import { repositories } from "../../../../fixtures";
import actionTypes from "../action-types/action-types";
import * as actions from "./actions";

describe("actions test", () => {
  it("Should handle repositoriesLoading()", () => {
    const expectedResponse = {
      type: actionTypes.LOADING,
    };

    expect(actions.repositoriesLoading()).toEqual(expectedResponse);
  });

  it("Should handle repositoriesSuccess(payload)", () => {
    const payload = {
      data: {
        ...repositories,
      },
    };
    const expectedResponse = {
      type: actionTypes.SUCCESS,
      payload: {
        data: {
          ...repositories,
        },
      },
    };

    expect(actions.repositoriesSuccess(payload)).toEqual(expectedResponse);
  });

  it("Should handle repositoriesError()", () => {
    const expectedResponse = {
      type: actionTypes.ERROR,
    };

    expect(actions.repositoriesError()).toEqual(expectedResponse);
  });
});
