import React from "react";
import ReactDom from "react-dom";

import SideBar from "./SideBar/SideBar";

import "./App.css";

function App() {
  return (
    <main className="flex h-screen w-screen bg-clight">
      <SideBar />
      <section className="flex bg-clight" />
    </main>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
