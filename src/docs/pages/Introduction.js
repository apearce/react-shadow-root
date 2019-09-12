import React from "react";
import A from "../utils/A";

export default function(props) {
  return (<article>
    <h2 id="intro">Introduction</h2>
    <p>
      <A url="https://github.com/apearce/react-shadow-root">React shadow root</A> allows you to use the <A url="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM">shadow DOM</A> in
      your <A url="https://reactjs.org/">React</A> components. The biggest advantage of this is that you can include
      your CSS with your component and it will be scoped to the shadow DOM. The styles don't leak out
      of the shadow DOM and only inheritable styles can't get in. You can use a preprocessor or whatever you like to
      create your CSS as long as it is valid CSS when you use it in your component.
    </p>
    <p>
      In the examples I am using <A url="http://w3c.github.io/webcomponents/spec/custom/#valid-custom-element-name">valid custom element names</A> for
      the shadow host instead of a more generic <code className="inline">div</code> or <code className="inline">span</code>.
      This is not required, but I find it can make debugging easier and it allows you to easily target your components
      from your main CSS file if needed. Since the behavior is defined with React, you should not need
      to <A url="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry">register</A> the custom element.
    </p>
    <h3>Installation</h3>
    <code className="block">npm install --save react-shadow-root</code>
    <em>or</em>
    <code className="block">yarn add react-shadow-root</code>
    <h3>Notes</h3>
    <ul>
      <li>A minimum of React 16 is required.</li>
      <li>Works in all modern browsers except non-Chromium Edge. Click <A url="https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Browser_compatibility">here</A> for current browser support.</li>
      <li>Not all HTML elements allow you to attach a shadow root. Click <A url="https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Elements_you_can_attach_a_shadow_to">here</A> for more information.</li>
      <li>It has been tested with the Context API introduced in React 16.3.0 and it worked fine. It has not been tested with the previous API.</li>
    </ul>
  </article>);
}
