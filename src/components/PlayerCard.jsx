import React from "react";

const PlayerCard = ({ img, firstName, lastName, age, position, stats }) => {
  return (
    <div className="card">
      <div className="img__container">
        <img src={img} alt="" />
      </div>
      <div className="player__info">
        <div>
          <h3>{firstName}</h3>
          <h2>{lastName}</h2>
        </div>
        <div>
          <h3>Age</h3>
          <h2>{age}</h2>
        </div>
        <div>
          <h3>Position</h3>
          <h2>{position}</h2>
        </div>
      </div>
      <div className="player__stats">
        <a href={stats} target="_blank">Player Stats</a>
      </div>
    </div>
  );
};

export default PlayerCard;
