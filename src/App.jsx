import React, { useState } from "react";
import ReactDom from "react-dom";

import SideBar from "./SideBar/SideBar";
import SideBarItem from "./SideBarItem/SideBarItem";

import "./App.css";

const CHARACTER = "Character";
const LOCATION = "Location";
const EPISODE = "Episode";

function App() {
  const [current, setCurrent] = useState(CHARACTER);

  return (
    <main className="flex h-screen w-screen bg-clight">
      <SideBar>
        <SideBarItem name={CHARACTER} current={current} action={setCurrent} />
        <SideBarItem name={LOCATION} current={current} action={setCurrent} />
        <SideBarItem name={EPISODE} current={current} action={setCurrent} />
      </SideBar>
      <section className="flex bg-clight" />
    </main>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
