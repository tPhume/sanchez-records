import React from "react";

function LocationCard({ info, key }) {
  return (
    <div
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4"
      key={key}
    >
      <img
        src={info.image}
        alt="location"
        className="w-full object-cover object-center"
      />
      <div className="py-3 px-5">
        <h1 className="py-1 text-2xl font-semibold text-cteal">{info.name}</h1>
        <div className="card-info">
          <h3>Type</h3>
          <h2>{info.type}</h2>
        </div>
        <div className="card-info">
          <h3>Dimension</h3>
          <h2>{info.dimension}</h2>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
