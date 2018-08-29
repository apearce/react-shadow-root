import React from "react";
import ReactDOM from "react-dom";
import ShadowRoot from "../../lib";
import BasicDemo from "./demos/Basic";
import SlotsDemo from "./demos/Slots";
import "./styles.css";

ReactDOM.render(<BasicDemo />, document.getElementById("basic"));
ReactDOM.render(<SlotsDemo />, document.getElementById("slots"));
