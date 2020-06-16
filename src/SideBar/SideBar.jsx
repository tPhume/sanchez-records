import React from "react";
import "./SideBar.css";

function SideBar({ children }) {
  return <section className="flex bg-cteal h-screen w-64">{children}</section>;
}

export default SideBar;
