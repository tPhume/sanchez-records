import React from "react";

function CharacterCard({ info, key }) {
  return (
    <div className="border-solid border-2 border-red-600" key={key}>
      <img src={info.image} alt="character profile" width="82" height="82" />
    </div>
  );
}

export default CharacterCard;
