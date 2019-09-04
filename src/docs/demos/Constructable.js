import React from "react";
import ShadowRoot from "../../../lib";

const { constructableStylesheetsSupported } = ShadowRoot;
const styles = `span {
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
}
.fallback-message {
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
        <ShadowRoot stylesheets={styleSheets}>
          <span>{this.state.cnt}</span> <button onClick={this.increment}>Click Me</button>
          {!constructableStylesheetsSupported &&
            <>
              <p className="fallback-message">
                Your browser does not support constructable stylesheets. Using fallback.
              </p>
              <style>{styles}</style>
            </>
          }
        </ShadowRoot>
      </constructable-demo>
    );
  }
}
