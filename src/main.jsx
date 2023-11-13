/* eslint-disable react/no-children-prop */
import ReactDom from "react-dom/client";
import React from "react";

import { mocks } from "./constants/mock";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ul id={1 + 1} className="test">
    <li>{mocks[0].name}</li>
    <li>...</li>
  </ul>
);

// root.render(
//   React.createElement("ul", {
//     id: "123",
//     className: "test",
//     children: [
//       React.createElement("li", { children: mocks[0].name }),
//       React.createElement("li", { children: "2" }),
//       React.createElement("li", { children: "3" }),
//       React.createElement("li", { children: "4" }),
//       React.createElement("li", { children: "5" }),
//       React.createElement("li", { children: "6" }),
//       React.createElement("li", { children: "7" }),
//       React.createElement("li", { children: "8" }),
//       React.createElement("li", { children: "9" }),
//       React.createElement("li", { children: "0" }),
//     ],
//   })
// );
