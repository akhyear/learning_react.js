import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Increment */}
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* Decrement */}
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* Reset */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
// This component can be used in your main application file (e.g., App.jsx) like this:
// import Counter from './components/Counter'; 