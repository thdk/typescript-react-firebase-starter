import * as React from "react";

import "./style";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>
    Hello from <span className={"red"}>{props.compiler}</span> and <span className="green">{props.framework}</span>!
    </h1>;
