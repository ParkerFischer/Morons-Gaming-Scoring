import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScoringTeamSetForm from "./ScoringTeamSetForm";
import ScoringFormRebirth from "./ScoringFormRebirth";
import ListOfRebirthGames from "./ListOfRebirthGames";
import ScoredGamesRebirth from "./ScoredGamesRebirth";

export default function Rebirth(  {teamName,
    player1,
    player2,
    player3,
    player4,
    handicap,}) {
        const [games, setGames] = useState([])

        const listedGames = games.map((game) => <ListOfRebirthGames game={game}/>)



  return (
    <>
      <ScoringFormRebirth 
         teamName={teamName}
         player1={player1}
         player2={player2}
         player3={player3}
         player4={player4}
         games={games}
         setGames={setGames}/>
      <ScoredGamesRebirth 
      handicap={handicap}
      teamName={teamName}
         player1={player1}
         player2={player2}
         player3={player3}
         player4={player4}
         games={games}
         setGames={setGames}/>
   {listedGames}


    </>
  );
}
