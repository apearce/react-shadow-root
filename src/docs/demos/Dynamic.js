import React from "react";
import ShadowRoot from "../../../lib";

const { constructableStylesheetsSupported } = ShadowRoot;
const colors = [
  'black', 'red', 'rebeccapurple', 'blue', 'brown',
  'lime', 'magenta', 'green', 'orange', 'teal'
];
const styles = `:host {
  display: inline-flex;
}
span {
  background-color: var(--color);
  border-radius: 3px;
  color: #fff;
  padding: 1px 5px;
}
button {
  background-color: #fff;
  border: 1px solid var(--color);
  border-radius: 3px;
  color: var(--color);
  cursor: pointer;
  outline: 0;
}
button:active {
  background-color: var(--color);
  color: #fff;
}
button,
span {
  margin: 0 2px;
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
    const { reverse } = this.props;
    const { cnt } = this.state;
    const dynamicStyles = `
      :host {
        flex-direction: ${reverse ? 'row-reverse' : 'row'};
        --color: ${colors[cnt % 10]};
      }
    `;

    return (
      <dynamic-styles-demo>
        <ShadowRoot stylesheets={styleSheets}>
          <style>{dynamicStyles}</style>
          <span>{cnt}</span>
          <button onClick={this.increment}>Click Me</button>
          {!constructableStylesheetsSupported &&
            <style>{styles}</style>
          }
        </ShadowRoot>
      </dynamic-styles-demo>
    );
  }
}
