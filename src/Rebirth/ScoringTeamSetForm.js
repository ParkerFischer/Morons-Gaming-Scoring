import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ScoringTeamSetForm({
  setTeamName,
  setPlayer1,
  setPlayer2,
  setPlayer3,
  setPlayer4,
  teamName,
  player1,
  player2,
  player3,
  player4,
  isDisabled,
  handicap,
  setHandicap
}) {
  


  const handleTeamNameChange = (event) => setTeamName(event.target.value);
  const handlePlayer1NameChange = (event) => setPlayer1(event.target.value);
  const handlePlayer2NameChange = (event) => setPlayer2(event.target.value);
  const handlePlayer3NameChange = (event) => setPlayer3(event.target.value);
  const handlePlayer4NameChange = (event) => setPlayer4(event.target.value);
  const handleHandicapChange = (event) => setHandicap(event.target.value);
 


  return (
    <div className="border">
      <div className="container">
        <form onSubmit={null}>
          <label htmlFor="teamName" className="form-label ml-3">
            Team Name
            <input
              className="form-control"
              size="15"
              id="name"
              type="text"
              name="teamName"
              onChange={handleTeamNameChange}
              value={teamName}
              placeholder=" Enter Team Name"
              disabled={isDisabled}
            />
          </label>

          <label htmlFor="player1" className="form-label ml-3">
            Player 1 Name
            <input
              className="form-control"
              size="15"
              id="name"
              type="text"
              name="player1"
              onChange={handlePlayer1NameChange}
              value={player1}
              placeholder="Enter Player Name"
              disabled={isDisabled}
            />
          </label>

          <label htmlFor="player2" className="form-label ml-3">
            Player 2 Name
            <input
              className="form-control"
              size="15"
              id="name"
              type="text"
              name="player2"
              onChange={handlePlayer2NameChange}
              value={player2}
              placeholder="Enter Player Name"
              disabled={isDisabled}
            />
          </label>

          <label htmlFor="player3" className="form-label ml-3">
            Player 3 Name
            <input
              className="form-control"
              size="15"
              id="name"
              type="text"
              name="player3"
              onChange={handlePlayer3NameChange}
              value={player3}
              placeholder="Enter Player Name"
              disabled={isDisabled}
            />
          </label>

          <label htmlFor="player4" className="form-label ml-3">
            Player 4 Name
            <input
              className="form-control"
              size="15"
              id="name"
              type="text"
              name="player4"
              onChange={handlePlayer4NameChange}
              value={player4}
              placeholder="Enter Player Name"
              disabled={isDisabled}
            />
          </label>

          <label htmlFor="handicap" className="form-label ml-3">
            Team Handicap
            <input
              className="form-control"
              size="15"
              id="name"
              type="text"
              name="handicap"
              onChange={handleHandicapChange}
              value={handicap}
              placeholder="Enter as a negative '-13'"
              disabled={isDisabled}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
