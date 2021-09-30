import React, { useState } from "react";
import Verdansk from "./Verdansk";
import Rebirth from "./Rebirth/Rebirth.js";
import ScoringTeamSetForm from "./Rebirth/ScoringTeamSetForm";

//this is the header that will display when you go to the main scoring page. it also holds the states.
export default function ScoringHeader() {
  //these are used to set the players and teams names to be used later
  const [teamName, setTeamName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  //this is the negative number of points if a team si over the KD cap
  const [handicap, setHandicap] = useState("");
  //this is used to determine if verdansk scoresheet or rebirth scoresheet will load
  const [pageState, setPageState] = useState(true);
  //this is used to prevent the full page from rendering until you enter your team
  const [initialLoad, setInitialLoad] = useState(false);
  //this is used to disable the text fields for the team once entered.
  const [isDisabled, setIsDisabled] = useState(false);

  //this determines if the verdansk sheet or the rebirth sheet is shown.
  let scoreSheet =
    pageState === true ? (
      <Rebirth
        handicap={handicap}
        teamName={teamName}
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
      />
    ) : (
      <Verdansk />
    );

  //this handles the click for Verdansk
  function handleClickV(e) {
    e.preventDefault();
    setInitialLoad(true);
    setIsDisabled(true);
    return setPageState(false);
  }
  //this handles the click for rebirth
  function handleClickR(e) {
    e.preventDefault();
    setInitialLoad(true);
    setIsDisabled(true);
    return setPageState(true);
  }

  return (
    <>
      <div className="d-flex justify-content-center text-center text-light my-5 mx-2">
        <h2>Enter team info and Select Game Mode</h2>
      </div>

      <ScoringTeamSetForm
        teamName={teamName}
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
        setTeamName={setTeamName}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        setPlayer3={setPlayer3}
        setPlayer4={setPlayer4}
        isDisabled={isDisabled}
        handicap={handicap}
        setHandicap={setHandicap}
      />

      <div className="d-flex justify-content-around">
        <div className="col-2"></div>
        <button
          type="button"
          className="btn btn-primary btn-lg col-4 mr-2"
          onClick={handleClickR}
        >
          Rebirth
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg col-4"
          onClick={handleClickV}
        >
          Verdansk '84'
        </button>
        <div className="col-2"></div>
      </div>

      {initialLoad && scoreSheet}
    </>
  );
}
