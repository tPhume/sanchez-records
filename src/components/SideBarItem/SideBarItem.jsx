import React from "react";

function SideBarItem({ name, current, action }) {
  const actionElement = () => action(name);

  return (
    <button
      className={
        name !== current
          ? "sidebar-item"
          : "sidebar-item bg-ctealDark rounded-md"
      }
      type="button"
      onClick={actionElement}
    >
      {name}
    </button>
  );
}

export default SideBarItem;
