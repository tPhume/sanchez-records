import React from "react";
import ReactDom from "react-dom";

import SideBar from "./SideBar/SideBar";
import SideBarItem from "./SideBarItem/SideBarItem";

import "./App.css";

function App() {
  return (
    <main className="flex h-screen w-screen bg-clight">
      <SideBar>
        <SideBarItem name="Character" />
        <SideBarItem name="Location" />
        <SideBarItem name="Episode" />
      </SideBar>
      <section className="flex bg-clight" />
    </main>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
