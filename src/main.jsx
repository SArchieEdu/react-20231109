import ReactDom from "react-dom/client";

import { App } from "./App";
import { mocks } from "./constants/mock";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App products={mocks} />);
