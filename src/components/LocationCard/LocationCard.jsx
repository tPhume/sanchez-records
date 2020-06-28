import React from "react";

function LocationCard({ info, key }) {
  return (
    <div
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4"
      key={key}
    >
      <div className="py-3 px-5">
        <a
          href={info.url}
          target="_blank"
          rel="noreferrer"
          className="py-1 text-2xl font-semibold text-cteal hover:text-cGray"
        >
          {info.name}
        </a>
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
