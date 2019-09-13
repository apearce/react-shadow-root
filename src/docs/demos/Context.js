import React from "react";
import ReactShadowRoot from "../../../lib";

const MyContext = React.createContext('Alan');

class Bar extends React.Component {
  state = {cnt: 0};
  clicker = () => {
    this.setState({
      cnt: this.state.cnt + 1
    })
  }
  render() {
    return (<MyContext.Consumer>
      {foo => {
        return <strong onClick={this.clicker}>{foo} {this.state.cnt}</strong>;
      }}
    </MyContext.Consumer>);
  }
}

class Foo extends React.Component {
  render() {
    return (<div><ReactShadowRoot><Bar /></ReactShadowRoot></div>);
  }
}

class ContextTest extends React.Component {
  render() {
    return (<MyContext.Provider value="Pearce">
      <Foo />
    </MyContext.Provider>);
  }
}

export default ContextTest;
