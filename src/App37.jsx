import React from "react";
import { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`The count is ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
