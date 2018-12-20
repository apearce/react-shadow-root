import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ShadowRoot extends React.PureComponent {
  state = { initialized: false };

  static propTypes = {
    delegatesFocus: PropTypes.bool,
    mode: PropTypes.oneOf(['open', 'closed'])
  };

  static defaultProps = {
    delegatesFocus: false,
    mode: 'closed'
  };

  componentDidMount() {
    this.shadowRoot = ReactDOM.findDOMNode(this).parentNode.attachShadow({
      delegatesFocus: this.props.delegatesFocus,
      mode: this.props.mode
    });
    this.setState({
      initialized: true
    });
  }

  render() {
    if (!this.state.initialized) {
      return <span></span>;
    }

    return ReactDOM.createPortal(this.props.children, this.shadowRoot);
  }
}
