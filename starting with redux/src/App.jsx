import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/CounterSlice";
import TestComponent from "./TestComponent";

const App = () => {

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  function handleIncrement() { 
    dispatch(increment());
  }

  function handleDecrement() { 
    dispatch(decrement());
  }

  return (
    <div>
      <p>Count is: {count} </p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <TestComponent />
    </div>
  );
};

export default App;