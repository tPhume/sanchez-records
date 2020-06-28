import React from "react";

function LocationCard({ info, key }) {
  return (
    <div
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4"
      key={key}
    >
      <h1 className="bg-cteal text-clight font-semibold py-3 px-5">
        {info.episode}
      </h1>
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
          <h3>Air Date</h3>
          <h2>{info.air_date}</h2>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
