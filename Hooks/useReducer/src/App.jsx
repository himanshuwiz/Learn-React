import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;

    case "minus":
      return state - 1;

    default:
      throw new Error("Error");
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      Counter
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>Add</button>
      <button onClick={() => dispatch("minus")}>Reduce</button>
    </div>
  );
};

export default App;
