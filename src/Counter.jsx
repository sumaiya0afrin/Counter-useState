import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countStyle = {
    backgroundColor: "grey",
    color: "white",
    border: "none",
    marginRight: "10px",
  };

  function handleAdd() {
    setCount(count + 1);
  }
  function handleRemove() {
    setCount(count - 1);
  }
  return (
    <>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd} style={countStyle}>
        Increase
      </button>
      <button onClick={handleRemove} style={countStyle}>
        Decrease
      </button>
    </>
  );
};

export default Counter;
