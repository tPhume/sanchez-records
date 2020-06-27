import React from "react";

function CharacterCard({ info, key }) {
  return (
    <div className="character-card" key={key}>
      <img src={info.image} alt="character profile" width="150" height="150" />
    </div>
  );
}

export default CharacterCard;
