import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const constructableStylesheetsSupported = typeof window !== 'undefined'
  && window.ShadowRoot
  && window.ShadowRoot.prototype.hasOwnProperty('adoptedStyleSheets')
  && window.CSSStyleSheet
  && window.CSSStyleSheet.prototype.hasOwnProperty('replace');

const shadowRootSupported = typeof window !== 'undefined'
  && window.Element
  && window.Element.prototype.hasOwnProperty('attachShadow');

export default class extends React.PureComponent {
  static constructableStylesheetsSupported = constructableStylesheetsSupported;
  static constructibleStylesheetsSupported = constructableStylesheetsSupported;
  static defaultProps = {
    declarative: false,
    delegatesFocus: false,
    mode: 'open'
  };
  static displayName = 'ReactShadowRoot';
  static propTypes = {
    declarative: PropTypes.bool,
    delegatesFocus: PropTypes.bool,
    mode: PropTypes.oneOf(['open', 'closed']),
    stylesheets: PropTypes.arrayOf(typeof window !== 'undefined' ? PropTypes.instanceOf(window.CSSStyleSheet) : PropTypes.any)
  };
  static shadowRootSupported = shadowRootSupported;

  state = { initialized: false };

  /**
   * @param {object} props Properties passed to the component
   * @param {boolean} props.declarative  When true, uses a declarative shadow root
   * @param {boolean} props.delegatesFocus  Expands the focus behavior of elements within the shadow DOM.
   * @param {string} props.mode Sets the mode of the shadow root. (open or closed)
   * @param {CSSStyleSheet[]} props.stylesheets Takes an array of CSSStyleSheet objects for constructable stylesheets.
   */
  constructor(props) {
    super(props);
    this.placeholder = React.createRef();
  }

  componentDidMount() {
    const {
      delegatesFocus,
      mode,
      stylesheets
    } = this.props;

    this.shadowRoot = this.placeholder.current.parentNode.attachShadow({
      delegatesFocus,
      mode
    });

    if (stylesheets) {
      this.shadowRoot.adoptedStyleSheets = stylesheets;
    }

    this.setState({
      initialized: true
    });
  }

  render() {
    if (!this.state.initialized) {
      if (this.props.declarative) {
        // @ts-ignore
        return (<template ref={this.placeholder} shadowroot={this.props.mode}>
          {this.props.children}
        </template>);
      }

      return (<span ref={this.placeholder}></span>);
    }

    return ReactDOM.createPortal(this.props.children, this.shadowRoot);
  }
}
