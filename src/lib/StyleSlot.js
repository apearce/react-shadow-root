import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import IllegalNodeError from './IllegalNodeError.js';

export default class extends React.PureComponent {
  state = { assignedNodes: [] };

  static defaultProps = {
    name: 'styles'
  };
  static displayName = 'StyleSlot';
  static propTypes = {
    name: PropTypes.string
  };

  manageAssignedNodes() {
    const assignedNodes = [];

    this.slot.assignedNodes().forEach((n, i) => {
      if (n.tagName.toLowerCase() === 'style'){
        assignedNodes.push(<style key={i}>{n.textContent}</style>);
      } else {
        throw new IllegalNodeError(n);
      }
    });

    this.setState({
      assignedNodes
    });
  }

  onSlotChange = () => {
    this.manageAssignedNodes();
  }

  componentDidMount() {
    // Only the slot has been rendered when componentDidMount is called
    this.slot = ReactDOM.findDOMNode(this);

    // Have to do the setTimeout otherwise the slotchange event fires
    // immediately in Chrome and Firefox but not Safari for some reason
    setTimeout(() => {
      this.slot.addEventListener('slotchange', this.onSlotChange);
    }, 0);

    this.manageAssignedNodes();
  }

  componentWillUnmount() {
    this.slot.removeEventListener('slotchange', this.onSlotChange);
  }

  render() {
    return ([...this.state.assignedNodes, <slot key="slot" name={this.props.name}></slot>]);
  }
}
