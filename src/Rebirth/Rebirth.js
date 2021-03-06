import React, { useState } from "react";
import ScoringFormRebirth from "./ScoringFormRebirth";
import ListOfRebirthGames from "./ListOfRebirthGames";
import ScoredGamesRebirth from "./ScoredGamesRebirth";

//this is the main page that inially loads when you click rebirth
export default function Rebirth({
  teamName,
  player1,
  player2,
  player3,
  player4,
  handicap,
}) {
  //used to hold all games played
  const [games, setGames] = useState([]);
  //this is used to generate a card for each game played to be displayed
  const listedGames = games.map((game) => <ListOfRebirthGames game={game} />);

  return (
    <>
      <ScoredGamesRebirth
        handicap={handicap}
        teamName={teamName}
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
        games={games}
      />
      <div className="row justify-content-around">
        <div className="col-md-6 col-md-5">
          <ScoringFormRebirth
            player1={player1}
            player2={player2}
            player3={player3}
            player4={player4}
            games={games}
            setGames={setGames}
          />
        </div>
        <div className=" d-flex col col-md-5 flex-wrap mx-2">{listedGames}</div>
      </div>
    </>
  );
}
