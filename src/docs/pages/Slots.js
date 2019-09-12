import React from "react";
import Demo from "../demos/Slots";
import A from "../utils/A";
import { JSXBlock } from "../utils/CodeBlock";
import NotSupported from "../utils/NotSupported";

export default function(props) {
  const Component = props.shadowRootSupported ? Demo : NotSupported;
  const componentCode = `
  class ElementDetails extends React.Component {
    render() {
      return (<element-details>
        <ShadowRoot stylesheets={styleSheets}>
          <details>
            <summary>
              <span>
                <code className="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
                <i className="desc"><slot name="description">NEED DESCRIPTION</slot></i>
              </span>
            </summary>
            <div className="attributes">
              <h4><span>Attributes</span></h4>
              <slot name="attributes"><p>None</p></slot>
            </div>
          </details>
          <hr />
          {!constructableStylesheetsSupported && <style>{styles}</style>}
        </ShadowRoot>
        {this.props.children}
      </element-details>);
    }
  }
  `;
  const useageCode = `
  export default function SlotsDemo() {
    return (
      <>
        <ElementDetails>
          <span slot="element-name">slot</span>
          <span slot="description">A placeholder inside a web
          component that users can fill with their own markup,
          with the effect of composing different DOM trees
          together.</span>
          <dl slot="attributes">
            <dt>name</dt>
            <dd>The name of the slot.</dd>
          </dl>
        </ElementDetails>
        <ElementDetails>
          <span slot="element-name">template</span>
          <span slot="description">A mechanism for holding client-
            side content that is not to be rendered when a page is
            loaded but may subsequently be instantiated during
            runtime using JavaScript.</span>
        </ElementDetails>
      </>
    );
  }
  `;

  return (<article>
    <h2 id="slots">Working With Slots</h2>
    <p>
      <A url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot">Slots</A> let you create placeholders in the shadow DOM for users to pass content to.
      Of course you can achieve something silmilar with props, but with slots the user can control the markup and style of what is passed in, which may or may not be a good thing.
    </p>
    <p>
      Let's steal an example from <A url="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#A_more_involved_example">MDN</A>.
      We'll modify it to be a React component instead of a web component. Be sure to include <code className="inline">{'{this.props.children}'}</code> after the closing ShadowRoot tag. Below is the React equivalent of the template.
    </p>
    <JSXBlock code={componentCode} />
    And how you might use it:
    <JSXBlock code={useageCode} />
    This is the end result:
    <div className="output">
      <Component />
    </div>
  </article>);
}
