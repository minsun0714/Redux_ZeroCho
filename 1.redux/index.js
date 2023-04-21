const { legacy_createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = legacy_createStore(reducer, initialState);

console.log(store.getState());

const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data: data,
  };
};

store.dispatch(changeCompA("b"));
store.dispatch(changeCompA("c"));

console.log(store.getState());
