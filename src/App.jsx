import React, { useState } from "react";
import ReactDom from "react-dom";

import SideBar from "./components/SideBar/SideBar";
import SideBarItem from "./components/SideBarItem/SideBarItem";

import RickSanchez from "./Icons/RickSanchez.svg";

import "./App.css";

const CHARACTER = "Character";
const LOCATION = "Location";
const EPISODE = "Episode";

function App() {
  const [current, setCurrent] = useState(CHARACTER);

  return (
    <main className="flex h-screen w-screen bg-clight">
      <SideBar>
        <RickSanchez width="40px" height="40px" className="mt-4 mb-2" />
        <SideBarItem name={CHARACTER} current={current} action={setCurrent} />
        <SideBarItem name={LOCATION} current={current} action={setCurrent} />
        <SideBarItem name={EPISODE} current={current} action={setCurrent} />
      </SideBar>
      <section className="flex bg-clight" />
    </main>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
