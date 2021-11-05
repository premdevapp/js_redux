import * as Redux from "redux";
import reducer from "./reducerCount.js";
const store = Redux.createStore(reducer /* ,  {count: 5} */);
export default store;