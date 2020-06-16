import React from "react";
import ReactDom from "react-dom";

import SideBar from "./SideBar/SideBar";

import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-light">
      <SideBar>
        <h1 className="text-2xl">Sanchez Records</h1>
      </SideBar>
    </main>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
