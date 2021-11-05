import actionCreators from "./actionCreator.js";
import store from "./store.js";
import "./style.css";

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const Valuepos = document.getElementById("value");

function updateViews() {
  const { count } = store.getState();
  Valuepos.innerText = count;
}
updateViews();
store.subscribe(updateViews);

incrementBtn.addEventListener("click", (e) => {
  e.preventDefault();
  store.dispatch(actionCreators.increment());
});

decrementBtn.addEventListener("click", (e) => {
  e.preventDefault();
  store.dispatch(actionCreators.decrement());
});
