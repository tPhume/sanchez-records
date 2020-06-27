import React from "react";

function CharacterCard({ info, key }) {
  return (
    <div
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4"
      key={key}
    >
      <img src={info.image} alt="character profile" />
      <h1>{info.name}</h1>
      <h2>{info.status}</h2>
      <h3>{info.species}</h3>
      <h3>{info.gender}</h3>
      <h2>{info.origin.name}</h2>
      <h2>{info.location.name}</h2>
    </div>
  );
}

export default CharacterCard;
