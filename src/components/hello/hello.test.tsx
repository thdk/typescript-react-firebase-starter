import * as React from "react";

import { render, cleanup } from "@testing-library/react";
import { Hello } from "./";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Hello compiler="compiler" framework="framework" />);
    expect(asFragment()).toMatchSnapshot();
});
