# react-shadow-root
Lets you add a shadow root to React components allowing you to use the shadow DOM.

## Installation
`npm install --save react-shadow-root`

## Usage
```jsx
import React form 'react';
import ShadowRoot from 'react-shadow-root';

class ShadowCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      cnt: 0
    }
  }

  increment = () => {
    this.setState({
      cnt: this.state.cnt + 1
    });
  }

  render() {
    const style = `span {
      background-color: #333;
      color: #fff;
      padding: 0 5px;
    }`;

    return (
      <div> // The shadow root will be attached to this DIV
        <ShadowRoot>
          <style>{style}</style>
          <span id="count">{this.state.cnt}</span> <button onClick={this.increment}>Click</button>
        </ShadowRoot>
      </div>
    );
  }
}
```
When the shadow root is created on its parent element, all children are copied into the shadow DOM. Styles in the shadow DOM are automatically scoped. [Slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) work as expected; just be sure to add `{this.props.children}` _after_ the closing `ShadowRoot` tag.

## Requirements
A minimum of React 16 is required

## Notes
Not all browsers support the shadow DOM. Click [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Browser_compatibility) for current browser support.

Not all HTML elements support the shadow DOM. Click [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#Elements_you_can_attach_a_shadow_to) for more information.

It has been tested with the 'new' Context API and it worked fine. It has not been tested with the legacy API.
