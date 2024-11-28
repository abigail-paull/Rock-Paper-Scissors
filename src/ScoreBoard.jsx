import React from "react";

const ScoreBoard = ({playerScore, computerScore}) => {
  return (
    <header>
      <h3 >
        rock <br /> paper <br /> scissors
      </h3>
      <section>
        <div className="player">
          <p>Player</p>
          <h2>{playerScore}</h2>
        </div>
        <p className="colon">:</p>
        <div className="computer">
          <p>computer</p>
          <h2>{computerScore}</h2>
        </div>
      </section>
    </header>
  );
};

export default ScoreBoard;

























