import React from "react";

//this handles the form for filling out the team info.
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
  setHandicap,
}) {
  //these are used to handle the text input fields.
  const handleTeamNameChange = (event) => setTeamName(event.target.value);
  const handlePlayer1NameChange = (event) => setPlayer1(event.target.value);
  const handlePlayer2NameChange = (event) => setPlayer2(event.target.value);
  const handlePlayer3NameChange = (event) => setPlayer3(event.target.value);
  const handlePlayer4NameChange = (event) => setPlayer4(event.target.value);
  const handleHandicapChange = (event) => {
    if(event.target.value.includes('-')){setHandicap(event.target.value)}else{setHandicap(`-${event.target.value}`)}}
  

  return (
    <div className="">
      <div className="d-flex justify-content-around my-3">
        <form className="d-flex justify-content-around flex-wrap">
          <label
            htmlFor="teamName"
            className="form-label mx-2 text-light text-center"
          >
            Team Name
            <input
              className="form-control text-center"
              size="16"
              id="name"
              type="text"
              name="teamName"
              onChange={handleTeamNameChange}
              value={teamName}
              placeholder=" Enter Team Name"
              disabled={isDisabled}
            />
          </label>

          <label
            htmlFor="player1"
            className="form-label mx-2 text-light text-center"
          >
            Player 1 Tag
            <input
              className="form-control text-center"
              size="16"
              id="name"
              type="text"
              name="player1"
              onChange={handlePlayer1NameChange}
              value={player1}
              placeholder="Enter Player"
              disabled={isDisabled}
            />
          </label>

          <label
            htmlFor="player2"
            className="form-label mx-2 text-light text-center"
          >
            Player 2 Tag
            <input
              className="form-control text-center"
              size="16"
              id="name"
              type="text"
              name="player2"
              onChange={handlePlayer2NameChange}
              value={player2}
              placeholder="Enter Player"
              disabled={isDisabled}
            />
          </label>

          <label
            htmlFor="player3"
            className="form-label mx-2 text-light text-center"
          >
            Player 3 Tag
            <input
              className="form-control text-center"
              size="16"
              id="name"
              type="text"
              name="player3"
              onChange={handlePlayer3NameChange}
              value={player3}
              placeholder="Enter Player"
              disabled={isDisabled}
            />
          </label>

          <label
            htmlFor="player4"
            className="form-label mx-2 text-light text-center"
          >
            Player 4 Tag
            <input
              className="form-control text-center"
              size="16"
              id="name"
              type="text"
              name="player4"
              onChange={handlePlayer4NameChange}
              value={player4}
              placeholder="Enter Player"
              disabled={isDisabled}
            />
          </label>

          <label
            htmlFor="handicap"
            className="form-label mx-2 text-light text-center"
          >
            Team Handicap
            <input
              className="form-control text-center"
              size="16"
              id="name"
              type="text"
              name="handicap"
              onChange={handleHandicapChange}
              value={handicap}
              placeholder="I.E. '-13'"
              disabled={isDisabled}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
