import React from "react";

// import "./style.css";
import "./style-manually-transpiled.css";

function TestComponent(props) {
  const { text, className } = props;
  return <div className={`g-test-component ${className}`}>{text}</div>;
}

export default TestComponent;
