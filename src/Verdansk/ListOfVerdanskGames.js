import React from "react";

//this is the componant that actually creates the display card for each game p[layed. ]
export default function ListOfVerdanskGames({ game }) {
  return (
    <div className="container scorebox2 my-2 text-light flex-wrap col-md-5">
      <div className="row d-flex">
        <h4 className="d-flex col  text-center justify-content-center">{` Total Points: ${game.score}`}</h4>
      </div>
      <div className="row d-flex justify-content-center scorebox3 mx-1">
        <h6 className="d-flex col-4 text-center justify-content-center mx-1">{`Placed: ${game.placement} `}</h6>
        <h6 className="d-flex col-4 text-center justify-content-center mx-1">{`Time: ${game.startTime} `}</h6>
      </div>

      <div className="justify-content-center">
        <div className="text-center justify-content-center mx-1">
          <p className="mx-2 my-1 font-weight-bold">{`${game.player1}`}</p>
          <p>{`Kills: ${game.player1Kills} DMG: ${(
            game.player1Dmg / 1500
          ).toFixed(2)}`}</p>
        </div>
        <div className="text-center justify-content-center">
          <p className="mx-2 my-1 font-weight-bold">{`${game.player2}`}</p>
          <p>{`Kills: ${game.player2Kills} DMG: ${(
            game.player2Dmg / 1500
          ).toFixed(2)}`}</p>
        </div>
        <div className="text-center justify-content-center mx-1">
          <p className="mx-2 my-1 font-weight-bold">{`${game.player3}`}</p>
          <p>{`Kills: ${game.player3Kills} DMG: ${(
            game.player3Dmg / 1500
          ).toFixed(2)}`}</p>
        </div>
        <div className="text-center justify-content-center mx-1">
          <p className="mx-2 my-1 font-weight-bold">{`${game.player4}`}</p>
          <p>{`Kills: ${game.player4Kills} DMG: ${(
            game.player4Dmg / 1500
          ).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
}
