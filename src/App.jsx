import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const AddHandler = () => {
    console.log("Add Handler");
    dispatch({ type: "add" });
  };

  const minusHandler = () => {
    console.log("Minus Handler");
    dispatch({ type: "minus" });
  };

  return (
    <>
      <div>Kunal</div>
      <div>Counter : {counter}</div>
      <br />
      <button onClick={AddHandler}>ADD</button>
      <br />
      <br />
      <button onClick={minusHandler}>Minus</button>
    </>
  );
};

export default App;
