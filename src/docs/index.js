import React from "react";
import ReactDOM from "react-dom";
import APIPage from "./pages/API";
import BasicPage from "./pages/Basic";
import ConstructablePage from "./pages/Constructable";
import DelegatesFocusPage from "./pages/DelegatesFocus";
import DynamicStylesPage from "./pages/DynamicStyles";
import IntroductionPage from "./pages/Introduction";
import SlotsPage from "./pages/Slots";
import StyleSlotPage from "./pages/StyleSlot";
import ReactShadowRoot from "../lib/ReactShadowRoot";

import "./styles.css";

const shadowRootSupported = ReactShadowRoot.shadowRootSupported;

const subheaders = [
  "Styles go in and they don't come out",
  "You got your Web components in my React components!",
  "Put your style where your substance is"
];

function Header() {
  const subheader = subheaders[Math.floor(Math.random() * subheaders.length)];

  return (<>
    <h1>react-shadow-root</h1>
    <h2>{subheader}</h2>
  </>);
}

function Main() {
  return (<>
    <IntroductionPage />
    <APIPage />
    <BasicPage shadowRootSupported={shadowRootSupported} />
    <ConstructablePage shadowRootSupported={shadowRootSupported} />
    <DynamicStylesPage shadowRootSupported={shadowRootSupported} />
    <SlotsPage shadowRootSupported={shadowRootSupported} />
    <StyleSlotPage shadowRootSupported={shadowRootSupported} />
    <DelegatesFocusPage shadowRootSupported={shadowRootSupported} />
  </>);
}

class Nav extends React.PureComponent {
  componentDidMount() {
    const headings = document.querySelectorAll('article > h2[id]');
    const menu = document.createElement('ul');

    headings.forEach(h => {
      const menuItem = document.createElement('li');
      const menuLink = document.createElement('a');
      menuLink.textContent = h.textContent;
      menuLink.href = '#' + h.id;
      menuItem.appendChild(menuLink);
      menu.appendChild(menuItem);
    });

    document.querySelector('nav').prepend(menu);
  }

  render() {
    return <a href="#top" className='back-to-top' title='Back to top'>{String.fromCharCode(9650)}</a>;
  }
}

ReactDOM.render(<Header />, document.querySelector("body > header"));
ReactDOM.render(<Main />, document.querySelector("main > section"));
ReactDOM.render(<Nav />, document.querySelector("main > nav"));
