# react-shadow-root
Lets you add a shadow root to React components allowing you to use the shadow DOM. This provides scoped CSS and includes support for [constructable](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) [stylesheets](https://wicg.github.io/construct-stylesheets).

## Installation
`npm install --save react-shadow-root`

## Examples
https://apearce.github.io/react-shadow-root/

## ReactShadowRoot
### Usage
```jsx
import React from 'react';
import ReactShadowRoot from 'react-shadow-root';

class ShadowCounter extends React.Component {
  state = { cnt: 0 };

  increment = () => {
    this.setState({
      cnt: this.state.cnt + 1
    });
  }

  render() {
    const style = `span {
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
    }`;

    return (
      <div> {/* The shadow root will be attached to this DIV */}
        <ReactShadowRoot>
          <style>{style}</style>
          <span>{this.state.cnt}</span> <button onClick={this.increment}>Click Me</button>
        </ReactShadowRoot>
      </div>
    );
  }
}
```
When the shadow root is created on its parent element, all children are copied into the shadow DOM. Styles in the shadow DOM are automatically scoped. You can inspect the element to confirm. [Slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) work as expected; just be sure to add `{this.props.children}` _after_ the closing `ReactShadowRoot` tag.

### Static Properties
| Name | Description |
|------|-------------|
| `constructableStylesheetsSupported` | A boolean telling you if constructable stylesheets are supported by the browser. |
| `constructibleStylesheetsSupported` | An alias of `constructableStylesheetsSupported` using the ['correct' spelling](https://github.com/WICG/construct-stylesheets/issues/90). |
| `shadowRootSupported` | A boolean telling you if attaching a shadow root is supported by the _browser_, not the element. |

### Props
| Prop | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `declarative` | `Boolean` | `true` or `false` | `false` | Creates a [Declarative Shadow Root](https://apearce.github.io/react-shadow-root/#declarative) |
| `delegatesFocus` | `Boolean` | `true` or `false` | `false` | Expands the focus behavior of elements within the shadow DOM. Click [here](https://apearce.github.io/react-shadow-root/#delegates-focus) for more information. |
| `mode` | `String` | `open` or `closed` | `open` | Sets the [mode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode) of the shadow root. |
| `stylesheets` | `Array` | `arrayOf(CSSStyleSheet)` | optional | Takes an array of [CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) objects for constructable stylesheets. |

## Notes
- A minimum of React 16 is required.
- TypeScript definitions included and should not require configuration
- Works in all modern browsers except non-Chromium Edge. Click [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Browser_compatibility) for current browser support.
- Not all HTML elements allow you to attach a shadow root. Click [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Elements_you_can_attach_a_shadow_to) for more information.
- It has been tested with the Context API introduced in React 16.3.0 and it worked fine. It has not been tested with the previous API.
