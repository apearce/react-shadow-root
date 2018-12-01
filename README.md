# react-shadow-root
Lets you add a shadow root to React components allowing you to use the shadow DOM.

## Installation
`npm install --save react-shadow-root`

## Examples
https://apearce.github.io/react-shadow-root/

## Usage
```jsx
import React form 'react';
import ShadowRoot from 'react-shadow-root';

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
      <div> // The shadow root will be attached to this DIV
        <ShadowRoot>
          <style>{style}</style>
          <span>{this.state.cnt}</span> <button onClick={this.increment}>Click Me</button>
        </ShadowRoot>
      </div>
    );
  }
}
```
When the shadow root is created on its parent element, all children are copied into the shadow DOM. Styles in the shadow DOM are automatically scoped. You can inspect the element to confirm. [Slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) work as expected; just be sure to add `{this.props.children}` _after_ the closing `ShadowRoot` tag.

## Props
| Prop | Type | Values | Default | Description |
|------|------|------|---------|-------------|
| `delegatesFocus` | `Boolean` | `true` or `false` | `false` | Expands the focus behavior of elements within the shadow DOM. Click [here](https://apearce.github.io/react-shadow-root/#delegates-focus) for more information. |
| `mode` | `String` | `open` or `closed` | `closed` | Sets the mode of the shadow root. |

## Notes
- A minimum of React 16 is required
- Not all browsers support the shadow DOM. Click [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Browser_compatibility) for current browser support.
- Not all HTML elements support the shadow DOM. Click [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Elements_you_can_attach_a_shadow_to) for more information.
- It has been tested with the 'new' Context API and it worked fine. It has not been tested with the legacy API.
