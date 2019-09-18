import React from "react";
import Demo from "../demos/Dynamic";
import A from "../utils/A";
import { CSSBlock, JSXBlock } from "../utils/CodeBlock";
import NotSupported from "../utils/NotSupported";

export default function(props) {
  const Component = props.shadowRootSupported ? Demo : NotSupported;
  const code = `
  import React from 'react';
  import ReactShadowRoot from 'react-shadow-root';

  const { constructableStylesheetsSupported } = ReactShadowRoot;
  const colors = [
    'black', 'red', 'rebeccapurple', 'blue', 'brown',
    'lime', 'magenta', 'green', 'orange', 'teal'
  ];
  const styles = \`:host {
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
  }\`;

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
      const dynamicStyles = \`
        :host {
          flex-direction: $\{reverse ? 'row-reverse' : 'row'};
          --color: $\{colors[cnt % 10]};
        }
      \`;

      return (
        <dynamic-styles-demo>
          <ReactShadowRoot stylesheets={styleSheets}>
            <style>{dynamicStyles}</style>
            <span>{cnt}</span>
            <button onClick={this.increment}>Click Me</button>
            {!constructableStylesheetsSupported &&
              <style>{styles}</style>
            }
          </ReactShadowRoot>
        </dynamic-styles-demo>
      );
    }
  }
  `;
  const hostCSS = `
  :host([reverse]) {
    flex-direction: row-reverse;
  }
  `;
  const removeCSS = `
  flex-direction: $\{reverse ? 'row-reverse' : 'row'};
  `;
  const reverseAttrCode = `
  <dynamic-styles-demo reverse={reverse}>
  `;
  return (<article>
    <h2 id="dynamic">Dynamic Styling</h2>
    <p>
      The previous examples created the styles outside of the component definition.
      Since the styes don't need to change based on props or state, this makes sense.
      You can however make style changes based on props and/or state by updating the styles
      in <code className="inline">render</code>. You could also do this using an instance
      specific constructable stylesheet.
    </p>
    <p>
      The following shows the above example modified to change the way it displays based on a prop.
      Passing a <code className="inline">reverse</code> prop will make the button appear before the output.
      It also changes color based on state; contrived, I know. For the color changes
      I am using <A url="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS custom properties</A> to
      keep the dynamic changes to a minimum.
    </p>
    <JSXBlock code={code} />
    Default:
    <div className="output">
      <Component />
    </div>
    With the <code className="inline">reverse</code> prop set:
    <div className="output">
      <Component reverse />
    </div>
    <p>
      You could also use <code className="inline"><A url="https://developer.mozilla.org/en-US/docs/Web/CSS/:host()">:host()</A></code> in
      the component's main stylesheet to reverse the order. To do so, add the following rule to the stylesheet:
    </p>
    <CSSBlock code={hostCSS} />
    <p>Remove the following from the dynamic styles:</p>
    <CSSBlock code={removeCSS} />
    <p>And add <code className="inline">reverse</code> as an attribute of the returned element:</p>
    <JSXBlock code={reverseAttrCode} />
    <p>
      React will only add the <code className="inline">reverse</code> attribute when
      the <code className="inline">reverse</code> prop is true. When the attribute is
      present, the <code className="inline">:host()</code> rule will be applied by the browser.
    </p>
  </article>);
}
