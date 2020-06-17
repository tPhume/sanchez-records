import React from "react";

function SideBar({ children }) {
  return (
    <section className="flex bg-cteal h-screen w-64 flex-col items-center shadow-lg">
      {children}
    </section>
  );
}

export default SideBar;
