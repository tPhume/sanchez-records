import React from "react";
import ReactDom from "react-dom";

import "./app.css";

function App() {
  return (
    <h1 className="text-lg text-semibold text-blue-500">Sanchez Records</h1>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
