import React from "react";
import ReactShadowRoot from "../../../lib";

const { constructableStylesheetsSupported } = ReactShadowRoot;
const styles = `:host {
  display: inline-flex;
  flex-wrap: wrap;
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
}
.fallback-message {
  background-color: transparent;
  color: #c00;
}`;

let sheet;
let styleSheets;

if (constructableStylesheetsSupported) {
  sheet = new CSSStyleSheet();
  sheet.replaceSync(styles);
  styleSheets = [sheet];
}

export default class extends React.Component {
  state = { cnt: 0 };

  increment = () => {
    this.setState({
      cnt: this.state.cnt + 1
    });
  }

  render() {
    return (
      <constructable-demo>
        <ReactShadowRoot stylesheets={styleSheets}>
          <span>{this.state.cnt}</span>
          <button onClick={this.increment}>Click Me</button>
          {!constructableStylesheetsSupported &&
            <>
              <span className="fallback-message">
                Your browser does not support constructable stylesheets. Using fallback.
              </span>
              <style>{styles}</style>
            </>
          }
        </ReactShadowRoot>
      </constructable-demo>
    );
  }
}
