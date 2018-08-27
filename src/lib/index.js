import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ShadowRoot extends React.PureComponent {
  state = { initialized: false };

  static propTypes = {
    mode: PropTypes.oneOf(['open', 'closed'])
  }

  static defaultProps = {
    mode: 'closed'
  };

  componentDidUpdate() {
    ReactDOM.render(this.props.children, this.shadowRoot);
  }

  componentDidMount() {
    this.shadowRoot = ReactDOM.findDOMNode(this).parentNode.attachShadow({mode: this.props.mode});
    this.setState({
      initialized: true
    });
  }

  render() {
    if (!this.state.initialized) {
      return <span></span>;
    }

    return null;
  }
}
