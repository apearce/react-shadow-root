import React from "react";
import Basic from "../demos/Basic";
import BasicFunctional from "../demos/BasicFunctional";
import A from "../utils/A";
import { JSXBlock } from "../utils/CodeBlock";
import NotSupported from "../utils/NotSupported";

export default function(props) {
  const Component = props.shadowRootSupported ? Basic : NotSupported;
  const ComponentFunctional = props.shadowRootSupported ? BasicFunctional : NotSupported;
  const code = `
  import React from 'react';
  import ShadowRoot from 'react-shadow-root';

  const styles = \`:host {
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
  }\`;

  export default class extends React.Component {
    state = { cnt: 0 };

    increment = () => {
      this.setState({
        cnt: this.state.cnt + 1
      });
    }

    render() {
      return (
        <basic-demo> {/* The shadow root will be attached to this element */}
          <ShadowRoot>
            <style>{styles}</style>
            <span>{this.state.cnt}</span>
            <button onClick={this.increment}>Click Me</button>
          </ShadowRoot>
        </basic-demo>
      );
    }
  }
  `;
  const functionalCode = `
  import React, { useState } from 'react';
  ...
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
  `;
  const linkCode = `
  <ShadowRoot>
    <link href="stylesheet.css" rel="stylesheet" />
    ...
  </ShadowRoot>
  `;

  return (<article>
    <h2 id="basic">A Basic Example</h2>
    <p>Here is a basic example. Be sure to look at the result of the example in your browser console to see that the content is actually in the shadow DOM.</p>
    <JSXBlock code={code} />
    This is the output:
    <div className="output">
      <Component />
    </div>
    <p>It also works fine with functional components:</p>
    <JSXBlock code={functionalCode} />
    <div className="output">
      <ComponentFunctional />
    </div>
    <p>
      You can also load an external stylesheet using a <A url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link">link</A> tag the the styles will be loaded and scoped appropriately.
    </p>
    <JSXBlock code={linkCode} />
  </article>);
}
