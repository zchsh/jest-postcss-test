import React from "react";

import "./style.css";

function TestComponent(props) {
  const { text } = props;
  return <div className="g-test-component">{text}</div>;
}

export default TestComponent;
