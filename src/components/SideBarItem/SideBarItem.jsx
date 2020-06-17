import React from "react";

function SideBarItem({ name, current, action }) {
  const actionElement = () => action(name);

  return (
    <div
      className={
        name !== current
          ? "sidebar-item"
          : "sidebar-item bg-ctealDark rounded-md"
      }
      role="button"
      tabIndex={0}
      onKeyPress={actionElement}
      onClick={actionElement}
    >
      <div className="text-clight text-lg ml-2 hover:text-white">{name}</div>
    </div>
  );
}

export default SideBarItem;
