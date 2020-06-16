import React from "react";

function SideBarItem({ name, current, action }) {
  let style = "flex w-56 h-10 items-center justify-start mt-2";
  const actionElement = () => action(name);

  if (name === current) {
    style =
      "flex w-56 h-10 items-center justify-start mt-2 bg-ctealDark rounded-md";
  }

  return (
    <div
      className={style}
      role="button"
      tabIndex={0}
      onKeyPress={actionElement}
      onClick={actionElement}
    >
      <div className="text-clight text-lg ml-2 hover:text-white hover:shadow">
        {name}
      </div>
    </div>
  );
}

export default SideBarItem;
