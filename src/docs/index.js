import React from "react";
import ReactDOM from "react-dom";
import ShadowRoot from "../../lib";
import BasicDemo from "./demos/Basic";
import FocusDemo from "./demos/Focus";
import SlotsDemo from "./demos/Slots";
import "./styles.css";

ReactDOM.render(<BasicDemo />, document.getElementById("basic-demo"));
ReactDOM.render(<SlotsDemo />, document.getElementById("slots-demo"));
ReactDOM.render(<FocusDemo delegatesFocus />, document.getElementById("focus-demo-true"));
ReactDOM.render(<FocusDemo />, document.getElementById("focus-demo-false"));
