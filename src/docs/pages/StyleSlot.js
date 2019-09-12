import React from "react";
import Demo from "../demos/StyleSlot";
import { JSXBlock } from "../utils/CodeBlock";
import NotSupported from "../utils/NotSupported";

export default function(props) {
  const Component = props.shadowRootSupported ? Demo : NotSupported;
  const componentCode = `
  import ShadowRoot, { StyleSlot } from 'react-shadow-root';
  ...
  render() {
    return (
      <style-slot-demo>
        <ShadowRoot>
          <style>{style}</style>
          <StyleSlot />
          <span>{this.state.cnt}</span> <button onClick={this.increment}>Click Me</button>
        </ShadowRoot>
        {this.props.children}
      </style-slot-demo>
    );
  }
  `;
  const usageCode = `
  export default class extends React.Component {
    render() {
      const userStyles = \`:host span {
        background-color: #c00;
        border-radius: 10px;
      }
      :host button {
        color: #c00;
      }
      :host button:active {
        background-color: #c00;
      }\`;

      return (
        <StyleSlotDemo>
          <style slot="styles">{userStyles}</style>
        </StyleSlotDemo>
      );
    }
  }
  `;

  return (<article>
    <h2 id="style-slot">Using StyleSlot (deprecated)</h2>
    <p>StyleSlot is a special <code className="inline">slot</code> you can add to the ShadowRoot of your component. It gives the user the ability to inject their own syles into the ShadowRoot.</p>
    <p>Let's take the basic demo and allow the user to override styles. To do this, we have to add a StyleSlot to the ShadowRoot, along with allowing the component to render children.</p>
    <JSXBlock code={componentCode} />
    <p>Now the user can easily override any styles in the shadow DOM of the component by passing a child <code className="inline">style</code> tag
    with the <code className="inline">slot</code> attribute set to the name of the StyleSlot's <code className="inline">name</code> prop,
    which is <code className="inline">styles</code> by default. Note the use of <code className="inline">:host</code> in <code className="inline">userStyles</code>.
    <code className="inline">:host</code> only works in the shadow DOM. This ensures the styles do not affect the rest of the page.</p>
    <JSXBlock code={usageCode} />
    <div className="output">
      <Component />
    </div>
    <p>
      <em>
        As with regular slots, this same thing can be achieved using props.
        You may also experiance issues if you have nested components which have a StyleSlot, since even though the styles are moved to the shadow DOM,
        they also still exist outside and <code className="inline">:host</code> would then be the parent component. <strong>This component is deprecated and will be removed in the near future.</strong>
      </em>
    </p>
  </article>);
}
