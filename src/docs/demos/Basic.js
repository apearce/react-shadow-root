import React from "react";
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
