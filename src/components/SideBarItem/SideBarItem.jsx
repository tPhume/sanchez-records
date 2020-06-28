import React from "react";

function SideBarItem({ name, current, action }) {
  const actionElement = () => action(name);

  return (
    <button
      className={
        name !== current
          ? "sidebar-item hover:bg-ctealMid"
          : "sidebar-item bg-ctealDark"
      }
      type="button"
      onClick={actionElement}
    >
      {name}
    </button>
  );
}

export default SideBarItem;
