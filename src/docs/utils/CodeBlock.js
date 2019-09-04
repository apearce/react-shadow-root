import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CSSBlock(props) {
  return (<SyntaxHighlighter language="css" style={coy}>
    {props.code}
  </SyntaxHighlighter>);
}

export function JSXBlock(props) {
  return (<SyntaxHighlighter language="jsx" style={coy}>
    {props.code}
  </SyntaxHighlighter>);
}
