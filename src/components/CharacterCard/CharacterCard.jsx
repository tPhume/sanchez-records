import React from "react";

function CharacterCard(info) {
  return (
    <div className="border-solid border-2 border-red-600">
      {JSON.stringify(info)}
    </div>
  );
}

export default CharacterCard;
