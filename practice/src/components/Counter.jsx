import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleIncreaseClick(e) {
    setCounter((prev) => prev + 1);
  }
  function handleDecreaseClick(e) {
    setCounter((prev) => prev - 1);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{counter}</div>
        <button onClick={handleIncreaseClick}>+</button>
        <button onClick={handleDecreaseClick}>-</button>
      </form>
      <hr />
    </>
  );
};

export default Counter;
