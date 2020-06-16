import React from "react";

function SideBarItem({ name }) {
  return (
    <div className="flex w-56 justify-start mt-2">
      <div className="text-clight">{name}</div>
    </div>
  );
}

export default SideBarItem;
