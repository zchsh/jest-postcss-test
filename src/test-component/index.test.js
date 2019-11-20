import React from "react";
import { render, cleanup } from "@testing-library/react";

import TestComponent from "./index.js";

afterEach(cleanup);

describe("<TestComponent />", () => {
  it("should render a <div> element with text from the text prop", () => {
    const testText = "My special text";
    const { getByText } = render(<TestComponent text={testText} />);
    const rootElem = getByText(testText);
    expect(rootElem.tagName).toBe("DIV");
  });

  it("should use basic CSS imported from the component", () => {
    const testText = "I should have a red border";
    const { getByText } = render(<TestComponent text={testText} />);
    const rootElem = getByText(testText);
    const computedStyle = getComputedStyle(rootElem);
    expect(computedStyle.border).toBe("1px solid red");
  });
});
