import React from "react";

function CharacterCard({ info, key }) {
  return (
    <div
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4"
      key={key}
    >
      <img
        src={info.image}
        alt="character profile"
        className="w-full object-cover object-center"
      />
      <h1 className="bg-cteal text-clight font-semibold py-3 px-5">
        {info.status}
      </h1>
      <div className="py-3 px-5">
        <h1 className="py-1 text-2xl font-semibold text-cteal">{info.name}</h1>
        <div className="card-info">
          <h3>Species</h3>
          <h2>{info.species}</h2>
        </div>
        <div className="card-info">
          <h3>Gender</h3>
          <h2>{info.gender}</h2>
        </div>
        <div className="card-info">
          <h3>Origin</h3>
          <h2>{info.origin.name}</h2>
        </div>
        <div className="card-info">
          <h3>Last known location</h3>
          <h2>{info.location.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
