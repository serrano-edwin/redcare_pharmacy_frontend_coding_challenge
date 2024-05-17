import status from "../../../../utils/status-enum";
import initialState from "./initial-state";
import reducer from "../reducer/reducer";

describe("initialState test", () => {
  it("Should match initial State", () => {
    const expectedState = {
      status: status.IDLE,
      data: {},
    };
    expect(reducer(initialState)).toEqual(expectedState);
  });
});
