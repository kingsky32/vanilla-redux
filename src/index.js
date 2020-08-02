import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "Add";
const MINUS = "Minus";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      count++;
      break;
    case MINUS:
      count--;
      break;
    default:
      break;
  }
  return count;
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerHTML = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
