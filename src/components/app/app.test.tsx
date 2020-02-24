import * as React from "react";

import { render, cleanup } from "@testing-library/react";
import { App } from "./";

afterEach(cleanup);

it("has one child", () => {
    const { container } = render(<App />);

    expect(container.children.length).toBe(1);
});

it("renders", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
