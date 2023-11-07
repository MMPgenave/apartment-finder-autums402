import React from "react";
import { useState, useDeferredValue } from "react";
function MyComponent() {
  const [value, setValue] = useState(1);
  const deferredValue = useDeferredValue(value);
  console.log(deferredValue);
  return (
    <div>
      <h1>{deferredValue}</h1>
      <button
        type="button"
        onClick={() => setValue((prevValue) => prevValue + 1)}
      >
        click to add
      </button>
    </div>
  );
}

export default MyComponent;
