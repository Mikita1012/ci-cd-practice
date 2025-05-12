import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="d-flex flex-column align-items-center">
      <button type="button" className="btn btn-outline-success btn-lg" onClick={() => setCount(count + 1)}>Add</button>
       <h1 className="m-2">{count}</h1>
      <button className="btn btn-outline-success btn-lg" onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
}

export default Counter;
