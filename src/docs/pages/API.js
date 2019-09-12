import React from "react";
import A from "../utils/A";

export default function(props) {
  return (<article>
    <h2 id="api">API</h2>
    <section>
      <h3>Static Properties</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="inline">constructableStylesheetsSupported</code></td>
            <td>A boolean telling you if constructable stylesheets are supported by the browser.</td>
          </tr>
          <tr>
            <td><code className="inline">constructibleStylesheetsSupported</code></td>
            <td>An alias of <code className="inline">constructableStylesheetsSupported</code> using the <A url="https://github.com/WICG/construct-stylesheets/issues/90">'correct' spelling</A>.</td>
          </tr>
          <tr>
            <td><code className="inline">shadowRootSupported</code></td>
            <td>A boolean telling you if attaching a shadow root is supported by the <em>browser</em>, not the element.</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>Props</h3>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Values</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="inline">delegatesFocus</code></td>
            <td><code className="inline">Boolean</code></td>
            <td><code className="inline">true</code> or <code className="inline">false</code></td>
            <td><code className="inline">false</code></td>
            <td>Expands the focus behavior of elements within the shadow DOM. Click <A url="https://apearce.github.io/react-shadow-root/#delegates-focus">here</A> for more information.</td>
          </tr>
          <tr>
            <td><code className="inline">mode</code></td>
            <td><code className="inline">String</code></td>
            <td><code className="inline">open</code> or <code className="inline">closed</code></td>
            <td><code className="inline">open</code></td>
            <td>Sets the mode of the shadow root.</td>
          </tr>
          <tr>
            <td><code className="inline">stylesheets</code></td>
            <td><code className="inline">Array</code></td>
            <td><code className="inline">arrayOf(CSSStyleSheet)</code></td>
            <td>optional</td>
            <td>Takes an array of CSSStyleSheet objects for constructable stylesheets.</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>);
}
