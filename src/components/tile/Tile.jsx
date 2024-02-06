import React from "react";

export const Tile = (props) => {
  const descriptions = Object.values(props.description).map((value, index) => (
    <p key={index}>{value}</p>
  ))


  return (
    <div className="tile-container">
      <p className="tile-title tile">{props.name}</p>
      {descriptions}
    </div>
  );
};
