import React from "react";
import { useState } from "react";
import "./AnimalCard.css";

const AnimalCard = () => {
  const name = "Sparky";
  const [voteCount, setVoteCount] = useState(12);
  const [isFrozen, setIsFrozen] = useState(true);

  const handleVote = () => {
    if (!isFrozen) {
      setVoteCount(voteCount + 1);
    }
  };

  // const handleFreeze = () => {
  //   if (isFrozen ? setIsFrozen(false) : setIsFrozen(true));
  // };

  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h5>Dog - Corgi - Poughkeepsie</h5>
        <p>Major: Molecular Biology</p>
        <p>Minor: Political Science</p>
        <p className="quote">"Eat, Pray, Love" - Elizabeth Gilbert</p>
        <div className="votes">
          <span>Current Votes: {voteCount}</span>
        </div>
        <div className="buttons">
          {isFrozen ? (
            ""
          ) : (
            <button className="vote" onClick={handleVote}>
              Vote for {name}
            </button>
          )}

          <button className="freeze" onClick={() => setIsFrozen(!isFrozen)}>
            {" "}
            {isFrozen ? "Unfreeze" : "Freeze"} Voting
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;

//onClick={handleFreeze}>
// {isFrozen ? }Freeze Voting
