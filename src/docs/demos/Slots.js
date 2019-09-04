import React from "react";
import ShadowRoot from "../../../lib";

const { constructableStylesheetsSupported } = ShadowRoot;
const styles = `
  :host { background-color: #fff; display:block; }
  details { font-family: "Open Sans Light",Helvetica,Arial; }
  .name { font-weight: bold; color: #217ac0; font-size: 120%; margin-right: 5px; }
  h4 { margin: 10px 0 -8px 0; }
  h4 span { background: #217ac0; padding: 2px 6px 2px 6px; }
  h4 span { border: 1px solid #cee9f9; border-radius: 4px; }
  h4 span { color: white; }
  .attributes { margin-left: 22px; font-size: 90%; }
  .attributes p { margin-left: 16px; font-style: italic; }
`;

let sheet;
let styleSheets;

if (constructableStylesheetsSupported) {
  sheet = new CSSStyleSheet();
  sheet.replaceSync(styles);
  styleSheets = [sheet];
}

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
