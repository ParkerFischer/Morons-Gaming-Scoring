import React, { useState } from "react";

//this is the form for entering the results of each game.
export default function ScoringFormRebirth({
  player1,
  player2,
  player3,
  player4,
  setGames,
  games,
}) {
  //these states hold the kills for each player, the start time fo teh match and the matches placement.
  const [player1Kills, setPlayer1Kills] = useState("");
  const [player2Kills, setPlayer2Kills] = useState("");
  const [player3Kills, setPlayer3Kills] = useState("");
  const [player4Kills, setPlayer4Kills] = useState("");
  const [startTime, setStartTime] = useState("");
  const [placement, setPlacement] = useState("");

  //this is the scoring mechanism for the placment method
  let placePoints = 0;
  if (parseInt(placement) === 5 || parseInt(placement) === 4) {
    placePoints = 5;
  } else if (parseInt(placement) === 3 || parseInt(placement) === 2) {
    placePoints = 7;
  } else if (parseInt(placement) === 1) {
    placePoints = 10;
  }

  //this is a variable that holds all the kills for the entire team.
  const totalKills =
    parseInt(player1Kills) +
    parseInt(player2Kills) +
    parseInt(player3Kills) +
    parseInt(player4Kills);
  //this is used to calculate the score for the game.
  const score = parseInt(totalKills) + parseInt(placePoints);
  //this is the object that is created with each new game played.
  const newGame = {
    placement,
    placePoints,
    score,
    player1,
    player2,
    player3,
    player4,
    player1Kills,
    player2Kills,
    player3Kills,
    player4Kills,
    startTime,
  };

  //these are handlers for the text input fields on the form for game submission.
  const handlePlayer1KillChange = (event) =>
    setPlayer1Kills(event.target.value);
  const handlePlayer2KillChange = (event) =>
    setPlayer2Kills(event.target.value);
  const handlePlayer3KillChange = (event) =>
    setPlayer3Kills(event.target.value);
  const handlePlayer4KillChange = (event) =>
    setPlayer4Kills(event.target.value);
  const handleStartTimeChange = (event) => setStartTime(event.target.value);
  const handleplacementChange = (event) => setPlacement(event.target.value);

  //this is handles when you submit a form.
  function handleFormSubmit(e) {
    e.preventDefault();
    setGames([...games, newGame]);
    setPlayer1Kills("");
    setPlayer2Kills("");
    setPlayer3Kills("");
    setPlayer4Kills("");
    setStartTime("");
    setPlacement("");
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <label htmlFor="player1 kills" className="form-label ml-3">
            {`${player1}`}
            <input
              className=""
              size="5"
              id="player1 Kills"
              type="text"
              name="player1 Kills"
              onChange={handlePlayer1KillChange}
              value={player1Kills}
              placeholder="Kills"
            />
          </label>
          <label htmlFor="player2 kills" className="form-label ml-3">
            {`${player2}`}
            <input
              className=""
              size="5"
              id="player2 Kills"
              type="text"
              name="player2 Kills"
              onChange={handlePlayer2KillChange}
              value={player2Kills}
              placeholder="Kills"
            />
          </label>
          <label htmlFor="player3 kills" className="form-label ml-3">
            {`${player3}`}
            <input
              className=""
              size="5"
              id="player3 Kills"
              type="text"
              name="player3 Kills"
              onChange={handlePlayer3KillChange}
              value={player3Kills}
              placeholder="Kills"
            />
          </label>
          <label htmlFor="player4 kills" className="form-label ml-3">
            {`${player4}`}
            <input
              className=""
              size="5"
              id="player4 Kills"
              type="text"
              name="player4 Kills"
              onChange={handlePlayer4KillChange}
              value={player4Kills}
              placeholder="Kills"
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="Placement" className="form-label ml-3">
            {`Match Placement`}
            <input
              className=""
              size="5"
              id="Placement"
              type="text"
              name="Placement"
              onChange={handleplacementChange}
              value={placement}
              placeholder="dub?"
            />
          </label>
          <label htmlFor="startTime" className="form-label ml-3">
            {`Match Start Time`}
            <input
              className=""
              size="5"
              id="startTime"
              type="text"
              name="startTime"
              onChange={handleStartTimeChange}
              value={startTime}
              placeholder="Time?"
            />
          </label>
        </div>

        <div className="row">
          <button type="submit" className="btn btn-primary ml-2">
            Submit Game
          </button>
        </div>
      </form>
    </div>
  );
}
