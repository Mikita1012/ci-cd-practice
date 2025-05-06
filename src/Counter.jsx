import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {count}
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
}

export default Counter;
