import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="btn btn-outline-success m-2" onClick={() => setCount(count - 1)}>Subtract</button>
       <h1 className="m-2">{count}</h1>
      <button className="btn btn-outline-success m-2" onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default Counter;
