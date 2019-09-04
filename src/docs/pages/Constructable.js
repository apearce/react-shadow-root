import React from "react";
import Demo from "../demos/Constructable";
import A from "../utils/A";
import { JSXBlock } from "../utils/CodeBlock";
import NotSupported from "../utils/NotSupported";

export default function(props) {
  const Component = props.shadowRootSupported ? Demo : NotSupported;
  const code = `
  import React from 'react';
  import ShadowRoot from 'react-shadow-root';

  const { constructableStylesheetsSupported } = ShadowRoot;
  const styles = \`span {
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
  `;

  return (<article>
    <h2 id="constructable">Constructable Stylesheets</h2>
    <p>
      <A url="https://developers.google.com/web/updates/2019/02/constructable-stylesheets">
        Constructable
      </A> <A url="https://wicg.github.io/construct-stylesheets">
        stylesheets
      </A> allow you to create a stylesheet object that will be shared by any shadow root that adopts it.
      The styles do not appear in the shadow DOM but are still applied to the content.
    </p>
    <p>
      In the example below the stylesheet is created outside of the component definition as it's intended
      to be used by all instances of the component. Any change to the style rules will be applied
      to <em>all</em> components using the stylesheet.
    </p>
    <JSXBlock code={code} />
    <div id="constructable-demo" className="output">
      <Component />
    </div>
    <p>
      If you look at the result of the above example in your console in a supported browser,
      you will not see a <code className="inline">style</code> tag but can still inspect the applied styles.
      The example also contains a fallback for browsers that don't support constructable stylesheets.
    </p>
    <p>
      If you do provide such a fallback, it is important to put it <em>after</em> any other styles in the shadow DOM,
      including any <a href="#style-slot">mechanism</a> for letting the user inject their own. This is because constructable stylesheets
      are added <A url="https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets">after</A> any styles already in the shadow DOM.
    </p>
  </article>);
}
