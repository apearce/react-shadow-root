import React from "react";
import ShadowRoot from "../../../lib";

const styles = `
  :host {
    display: inline-block;
    height: 25px;
    position: relative;
    width: 150px;
  }
  div, ul {
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 3px;
    box-sizing: border-box;
  }
  div {
    align-items: center;
    display: flex;
    height: 100%;
  }
  output {
    flex-grow: 1;
    overflow: hidden;
    padding: 0 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  output.placeholder {
    opacity: .6;
  }
  button {
    background-color: #fff;
    border: 0;
    border-left: 1px solid #333;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    height: 100%;
    margin-left: auto;
    margin-right: 0;
    outline: 0;
  }
  button:hover {
    background-color: #333;
    color: #fff;
  }
  ul {
    list-style-type: none;
    margin: 0;
    margin-top: 1px;
    max-height: 135px;
    min-width: 100%;
    overflow-y: auto;
    padding: 0;
    position: absolute;
  }
  li {
    cursor: pointer;
    padding: 5px 10px;
    white-space: nowrap;
  }
  li:hover {
    background-color: #333;
    color: #fff;
  }
`;

function Option(props) {
  const {
    value,
    label,
    ...rest
  } = props;

  return (<li data-value={value} {...rest}>{label}</li>);
}

class Select extends React.Component {
  state = {
    selected: {},
    visible: false
  };

  itemSelected = (e) => {
    const selected = {
      label: e.target.textContent,
      value: e.target.dataset.value
    };

    this.props.onClick(selected);

    this.setState({
      selected,
      visible: false
    });
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { selected, visible } = this.state;
    const arrow = visible ? 9650 : 9660;
    const outputClass = !selected.label && {
      className: 'placeholder'
    };
    return (
      <select-demo>
        <ShadowRoot>
          <div>
            <output {...outputClass}>{selected.label || 'Select Something'}</output>
            <button onClick={this.toggle}>{String.fromCharCode(arrow)}</button>
          </div>
          {visible && <ul onClick={this.itemSelected}>
            {this.props.children}
          </ul>}
          <style>{styles}</style>
        </ShadowRoot>
      </select-demo>
    );
  }
}

export default class extends React.PureComponent {
  optionClicked(option) {
    console.log('Option Clicked', option);
  }

  render () {
    return (<Select onClick={this.optionClicked}>
      <Option value='one' label='One' />
      <Option value='two' label='Two' />
      <Option value='three' label='Three is a magic number' />
      <Option value='four' label='Four' />
      <Option value='five' label='Five' />
    </Select>);
  }
}
