import React from "react";

//this is the componant that actually creates the display card for each game p[layed. ]
export default function ListOfRebirthGames({ game }) {
  return (
    <div className="border">
      <h4>{`Placed ${game.placement} Total Points ${game.score} `}</h4>
      <h5>{`Game Start Time: ${game.startTime} `}</h5>
      <p>{`${game.player1} Kills: ${game.player1Kills}`}</p>
      <p>{`${game.player2} Kills: ${game.player2Kills}`}</p>
      <p>{`${game.player3} Kills: ${game.player3Kills}`}</p>
      <p>{`${game.player4} Kills: ${game.player4Kills}`}</p>
    </div>
  );
}
