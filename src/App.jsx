import React, { useState } from "react";
import ReactDom from "react-dom";

import Page from "./components/Page/Page";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import SideBar from "./components/SideBar/SideBar";
import SideBarItem from "./components/SideBarItem/SideBarItem";

import RickSanchez from "./Icons/RickSanchez.svg";

import "./App.css";

const CHARACTER = "Character";
const LOCATION = "Location";
const EPISODE = "Episode";

function App() {
  const [current, setCurrent] = useState(CHARACTER);

  const cPage = (
    <Page
      api="https://rickandmortyapi.com/api/character/"
      card={CharacterCard}
    />
  );

  const lPage = <Page api="https://rickandmortyapi.com/api/location/" />;
  const ePage = <Page api="https://rickandmortyapi.com/api/episode/" />;

  return (
    <main className="flex h-screen w-screen bg-clight">
      <SideBar>
        <RickSanchez width="40px" height="40px" className="mt-4 mb-1" />
        <h1 className="mb-5 text-clight font-medium">Sanchez Records</h1>
        <SideBarItem name={CHARACTER} current={current} action={setCurrent} />
        <SideBarItem name={LOCATION} current={current} action={setCurrent} />
        <SideBarItem name={EPISODE} current={current} action={setCurrent} />
      </SideBar>
      {CHARACTER === current && cPage}
      {LOCATION === current && lPage}
      {EPISODE === current && ePage}
    </main>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
