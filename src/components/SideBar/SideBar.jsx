import React from "react";

function SideBar({ children }) {
  return (
    <section className="flex bg-cteal h-screen w-1/6 flex-col items-center shadow-lg pl-2 pr-2">
      {children}
    </section>
  );
}

export default SideBar;
