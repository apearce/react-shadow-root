import React from "react";
import Demo from "../demos/DelegatesFocus";
import A from "../utils/A";
import { CSSBlock, JSXBlock } from "../utils/CodeBlock";
import NotSupported from "../utils/NotSupported";

export default function(props) {
  const Component = props.shadowRootSupported ? Demo : NotSupported;
  const code = `
  export default class extends React.Component {
    render() {
      const { delegatesFocus } = this.props;
      const style = \`:host {
        background-color: #fff;
        border: 1px dotted black;
        display: flex;
        padding: 16px;
      }
      :focus {
        outline: 2px solid blue;
      }
      input {
        margin-left: 5px;
        width: 150px;
      }\`;

      return (
        <focus-demo>
          <ReactShadowRoot delegatesFocus={delegatesFocus}>
            <style>{style}</style>
            <div>Clickable Shadow DOM text</div>
            <input type="text" placeholder="Input inside shadow dom" />
          </ReactShadowRoot>
        </focus-demo>
      );
    }
  }
  `;
  const styleCode = `
  focus-demo:focus {
    outline: 2px solid red;
  }
  `;

  return (<article>
    <h2 id="delegates-focus">Delegates Focus</h2>
    <p>This is the description for <code className="inline">delegatesFocus</code> from <A url="https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Parameters">MDN</A>.</p>
    <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Parameters">
      <p>A boolean that, when set to true, specifies behavior that mitigates custom element issues around focusability. When a non-focusable part of the shadow DOM is clicked, the first focusable part is given focus, and the shadow host is given any available <code className="inline">:focus</code> styling.</p>
    </blockquote>
    <p>
      Click <A url="https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus#Browser_compatibility">here</A> for browser support and <A url="https://developers.google.com/web/fundamentals/web-components/shadowdom#focus">here</A> for more info on <code className="inline">delegatesFocus</code>.
      Below are live demos of the examples from that article which of course will only work in supported browsers.
    </p>
    <JSXBlock code={code} />
    <p>Note that I am returning a custom element as my shadow host. In my main stylesheet I have the following rule which targets the custom element when it has focus:</p>
    <CSSBlock code={styleCode} />
    Set to true:
    <div className="output">
      <Component delegatesFocus />
    </div>
    Not set:
    <div className="output">
      <Component />
    </div>
  </article>);
}
