import actionContant from "./constants.js";
// action creators
const actionCreators = {
  increment() {
    return {
      type: actionContant.increment,
    };
  },
  decrement() {
    return {
      type: actionContant.decrement,
    };
  },
};

export default actionCreators;
