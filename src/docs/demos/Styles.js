import React from "react";
import ShadowRoot, { StyleSlot } from "../../../lib";

class BasicDemo extends React.Component {
  state = { cnt: 0 };

  increment = () => {
    this.setState({
      cnt: this.state.cnt + 1
    });
  }

  render() {
    const style = `span {
      background-color: #333;
      border-radius: 3px;
      color: #fff;
      padding: 1px 5px;
    }
    button {
      background-color: #fff;
      border: 1px solid currentColor;
      border-radius: 3px;
      color: #333;
      cursor: pointer;
      outline: 0;
    }
    button:active {
      background-color: #333;
      color: #fff;
    }`;

    return (
      <div>
        <ShadowRoot>
          <style>{style}</style>
          <StyleSlot />
          <span>{this.state.cnt}</span> <button onClick={this.increment}>Click Me</button>
        </ShadowRoot>
        {this.props.children}
      </div>
    );
  }
}

export default class StylesDemo extends React.Component {
  render() {
    const userStyles = `:host span {
      background-color: #c00;
      border-radius: 10px;
    }
    :host button {
      color: #c00;
    }
    :host button:active {
      background-color: #c00;
    }`;

    return (
        <BasicDemo>
          <style slot="styles">{userStyles}</style>
        </BasicDemo>
    );
  }
}
