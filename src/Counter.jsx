import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button style={{width: "100px"}} onClick={() => setCount(count - 1)}>Subtract</button>
      {count}
      <button style={{width: "100px"}} onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default Counter;
