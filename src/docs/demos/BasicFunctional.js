import React, { useState } from "react";
import ShadowRoot from "../../../lib";

const styles = `:host {
  display: inline-flex;
}
span {
  background-color: #333;
  border-radius: 3px;
  color: #fff;
  padding: 1px 5px;
}
button {
  background-color: #fff;
  border: 1px solid currentColor;
  border-radius: 3px;
  cursor: pointer;
  outline: 0;
}
button:active {
  background-color: #333;
  color: #fff;
}
button,
span {
  margin: 0 2px;
}`;

export default function() {
  const [cnt, setCount] = useState(0);

  return (
    <basic-functional-demo> {/* The shadow root will be attached to this element */}
      <ShadowRoot>
        <style>{styles}</style>
        <span>{cnt}</span>
        <button onClick={() => setCount(cnt + 1)}>Click Me</button>
      </ShadowRoot>
    </basic-functional-demo>
  );
}
