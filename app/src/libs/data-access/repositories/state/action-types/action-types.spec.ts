import actionTypes from "./action-types";

describe("actionTypes test", () => {
  const expectedActionTypes = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
  };

  it("should match actionTypes", () => {
    expect(actionTypes).toEqual(expectedActionTypes);
  });
});
