import * as React from "react";

import { render, cleanup } from "@testing-library/react";
import { App } from "./";

afterEach(cleanup);

it("renders", () => {
    const { container } = render(<App />);

    expect(container.children.length).toBe(1);
});
