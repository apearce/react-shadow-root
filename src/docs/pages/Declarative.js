import React from "react";
import A from "../utils/A";
import { JSXBlock } from "../utils/CodeBlock";
import NotSupported from "../utils/NotSupported";

export default function(props) {

  return (<article>
    <h2 id="declarative">Declarative Shadow Root</h2>
    <p>
      Setting the <code className="inline">declarative</code> prop to <code className="inline">true</code> will result in
      a <A url="https://web.dev/declarative-shadow-dom/">Declarative Shadow Root</A>. The code will render
      a <code className="inline">template</code> tag with a <code className="inline">shadowroot</code> prop.
      This is useful for server side rendering because in <A url="https://caniuse.com/mdn-html_elements_template_shadowroot">supported browsers</A> the
      shadow root will automatically be applied to the parent node of the component even without JavaScript enabled or when JavaScript may be slow to load.
      Obviously any functionality which requires JavaScript will not work when JavaScript is disabled,
      including <a href="#constructable">constructable stylesheets</a> and <a href="#delegates-focus">delegates focus</a>,
      but at least the component will still render the HTML and CSS. Browsers which do not support
      Declarative Shadow Root will still work as expected as long as JavaScript is enabled.
    </p>
    <p>
      <strong>
        When using this with JavaScript enabled, you may see a warning in the browser console saying something like
        <code className="block warning">Warning: Expected server HTML to contain a matching &lt;template&gt; in &lt;div&gt;.</code>
        I <em>think</em> this happens because the browser removes the <code className="inline">template</code> tag before
        hydration. While it seems to be harmless, you can suppress this by adding the <code className="inline">suppressHydrationWarning</code> prop set
        to <code className="inline">true</code> to the parent node of your shadow root. I'm open to suggestions for a better
        way to fix this.
      </strong>
    </p>
  </article>);
}
