import actionContant from "./constants.js";
export const initialState = {
  count: 10,
};

// actionMap
const actionMap = {
  [actionContant.increment]: function (state, action) {
    return { count: state.count + 1 };
  },
  [actionContant.decrement]: function (state, action) {
    return { count: state.count - 1 };
  },
};

// reducer function
const reducer = function (state = initialState, action) {
  const reducerFunction = actionMap[action.type];
  if (reducerFunction) {
    return reducerFunction(state, action);
  }
  return state;
};

export default reducer