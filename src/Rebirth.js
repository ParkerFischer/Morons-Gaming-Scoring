import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScoringTeamSetFormRebirth from "./ScoringTeamSetFormRebirth";
import ScoringFormRebirth from "./ScoringFormRebirth";

export default function Rebirth() {
  const [teamName, setTeamName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  return (
    <>
      <ScoringTeamSetFormRebirth
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
      />
      <ScoringFormRebirth 
         teamName={teamName}
         player1={player1}
         player2={player2}
         player3={player3}
         player4={player4}/>
    </>
  );
}
