import React, { useState } from "react";

//this is the form for entering the results of each game.
export default function ScoringFormVerdansk({
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
  const [player1Dmg, setPlayer1Dmg] = useState("");
  const [player2Dmg, setPlayer2Dmg] = useState("");
  const [player3Dmg, setPlayer3Dmg] = useState("");
  const [player4Dmg, setPlayer4Dmg] = useState("");
  const [startTime, setStartTime] = useState("");
  const [placement, setPlacement] = useState("");

  //this is the scoring mechanism for the placment method
  let placePoints = 0;
  if (parseInt(placement) <= 25 && parseInt(placement) > 20) {
    placePoints = 1;
  } else if (parseInt(placement) <= 20 && parseInt(placement) > 15) {
    placePoints = 2;
  } else if (parseInt(placement) <= 15 && parseInt(placement) > 10) {
    placePoints = 5;
  } else if (parseInt(placement) <= 10 && parseInt(placement) > 7) {
    placePoints = 10;
  } else if (parseInt(placement) <= 7 && parseInt(placement) > 5) {
    placePoints = 12;
  } else if (parseInt(placement) <= 5 && parseInt(placement) > 3) {
    placePoints = 15;
  } else if (parseInt(placement) <= 3 && parseInt(placement) > 1) {
    placePoints = 18;
  } else if (parseInt(placement) === 1) {
    placePoints = 20;
  }

  //this is a variable that holds all the kills for the entire team.
  const totalKills =
    parseInt(player1Kills) +
    parseInt(player2Kills) +
    parseInt(player3Kills) +
    parseInt(player4Kills);
  //this is a variable that holds all the DMG for the entire team.
  const totalDmg =
    parseInt(player1Dmg) +
    parseInt(player2Dmg) +
    parseInt(player3Dmg) +
    parseInt(player4Dmg);
  //this is used to calculate the score for the game.
  const score = (
    parseInt(totalKills) +
    parseInt(placePoints) +
    parseInt(totalDmg) / 1500
  ).toFixed(2);
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
    teamKills: totalKills,
    player1Dmg,
    player2Dmg,
    player3Dmg,
    player4Dmg,
    teamDmg: totalDmg,
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
  const handlePlayer1DmgChange = (event) => setPlayer1Dmg(event.target.value);
  const handlePlayer2DmgChange = (event) => setPlayer2Dmg(event.target.value);
  const handlePlayer3DmgChange = (event) => setPlayer3Dmg(event.target.value);
  const handlePlayer4DmgChange = (event) => setPlayer4Dmg(event.target.value);
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
    setPlayer1Dmg("");
    setPlayer2Dmg("");
    setPlayer3Dmg("");
    setPlayer4Dmg("");
    setStartTime("");
    setPlacement("");
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-around my-3">
        <form
          onSubmit={handleFormSubmit}
          className="d-flex scorebox justify-content-around flex-wrap"
        >
          <div className="d-flex justify-content-around my-2 row col-12">
            <div className="d-flex justify-content-around flex-wrap">
              <label
                htmlFor="player1 kills"
                className="form-label mx-2 text-light text-center"
              >
                {`${player1}`}
                <input
                  className="form-control text-center"
                  size="5"
                  id="player1 Kills"
                  type="text"
                  name="player1 Kills"
                  onChange={handlePlayer1KillChange}
                  value={player1Kills}
                  placeholder="Kills"
                />
                <input
                  className="form-control text-center mt-1"
                  size="5"
                  id="player1 Dmg"
                  type="text"
                  name="player1 Dmg"
                  onChange={handlePlayer1DmgChange}
                  value={player1Dmg}
                  placeholder="DMG"
                />
              </label>
              <label
                htmlFor="player2 kills"
                className="form-label mx-2 text-light text-center"
              >
                {`${player2}`}
                <input
                  className="form-control text-center"
                  size="5"
                  id="player2 Kills"
                  type="text"
                  name="player2 Kills"
                  onChange={handlePlayer2KillChange}
                  value={player2Kills}
                  placeholder="Kills"
                />
                <input
                  className="form-control text-center mt-1"
                  size="5"
                  id="player2 Dmg"
                  type="text"
                  name="player2 Dmg"
                  onChange={handlePlayer2DmgChange}
                  value={player2Dmg}
                  placeholder="DMG"
                />
              </label>
              <label
                htmlFor="player3 kills"
                className="form-label mx-2 text-light text-center"
              >
                {`${player3}`}
                <input
                  className="form-control text-center"
                  size="5"
                  id="player3 Kills"
                  type="text"
                  name="player3 Kills"
                  onChange={handlePlayer3KillChange}
                  value={player3Kills}
                  placeholder="Kills"
                />
                <input
                  className="form-control text-center mt-1"
                  size="5"
                  id="player3 Dmg"
                  type="text"
                  name="player3 Dmg"
                  onChange={handlePlayer3DmgChange}
                  value={player3Dmg}
                  placeholder="DMG"
                />
              </label>
              <label
                htmlFor="player4 kills"
                className="form-label mx-2 text-light text-center "
              >
                {`${player4}`}
                <input
                  className="form-control text-center"
                  size="5"
                  id="player4 Kills"
                  type="text"
                  name="player4 Kills"
                  onChange={handlePlayer4KillChange}
                  value={player4Kills}
                  placeholder="Kills"
                />
                <input
                  className="form-control text-center mt-1"
                  size="5"
                  id="player4 Dmg"
                  type="text"
                  name="player4 Dmg"
                  onChange={handlePlayer4DmgChange}
                  value={player4Dmg}
                  placeholder="DMG"
                />
              </label>
            </div>
          </div>

          <div className="row col-12 justify-content-center my-2">
            <label
              htmlFor="Placement"
              className=" mx-2 text-center form-label  text-light"
            >
              {`Match Placement`}
              <input
                className="form-control text-center"
                size="5"
                id="Placement"
                type="text"
                name="Placement"
                onChange={handleplacementChange}
                value={placement}
                placeholder="Dub?"
              />
            </label>
            <label
              htmlFor="startTime"
              className=" mx-2 text-center form-label  text-light"
            >
              {`Match Start Time`}
              <input
                className="form-control text-center"
                size="5"
                id="startTime"
                type="time"
                name="startTime"
                onChange={handleStartTimeChange}
                value={startTime}
                placeholder="Time?"
              />
            </label>
          </div>

          <div className="row">
            <button type="submit" className="btn btn-primary mx-2 my-2">
              Submit Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
