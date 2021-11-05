import actionContant from "./constants.js";
import reducer, { initialState } from "./reducerCount.js";
describe("counter reducer", () => {
  it("return intial state when action unknow", () => {
    const action = {};
    const actual = reducer(undefined, action);
    expect(actual.count).toEqual(initialState);
  });
  it("return state when action increment", () => {
    const action = {type: actionContant.increment};
    const actual = reducer(initialState, action);
    expect(actual.count).toBe(initialState + 1);
  });
  it("return state when action decrement", () => {
    const action = {type: actionContant.decrement};
    const actual = reducer(initialState, action);
    expect(actual.count).toBe(initialState - 1);
  });
});
