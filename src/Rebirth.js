import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScoringTeamSetFormRebirth from "./ScoringTeamSetFormRebirth";
import ScoringFormRebirth from "./ScoringFormRebirth";
import ListOfRebirthGames from "./ListOfRebirthGames";

export default function Rebirth(  {teamName,
    player1,
    player2,
    player3,
    player4,}) {
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
   {listedGames}


    </>
  );
}
