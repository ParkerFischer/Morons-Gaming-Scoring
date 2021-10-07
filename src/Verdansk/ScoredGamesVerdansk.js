import React from "react";
import postMessageToDiscord from "./PostVerdanskScore";

//this componant is used to generate the summary for the top 4 games AND holds the button to post the scores to the Discord.
export default function ScoredGamesVerdansk({
  teamName,
  player1,
  player2,
  player3,
  player4,
  games,
  handicap,
}) {
  //variable that holds the top 5 games played.
  const topFiveGames = games
    .sort((a, b) => {
      return b.score - a.score;
    })
    .slice(0, 5);
  //variable that holds the total number of kills in scored games (parseInt(totalDmg)/1500)
  const totalKillPoints = getTotal("teamKills", topFiveGames);
  //variable that holds the total number of kills in scored games (parseInt(totalDmg)/1500)
  const totalDmgPoints = (getTotal("teamDmg", topFiveGames) / 1500).toFixed(2);
  //this is the teams score. points - handicap
  const totalScore =
    parseInt(totalKillPoints) +
    parseFloat(totalDmgPoints) +
    parseInt(getTotal("placePoints", topFiveGames));
  //this will look at the scored games and pull the single highest kill game but a single player.
  const topKillsGame = killsArray(topFiveGames)
    .sort((a, b) => {
      return b.kills - a.kills;
    })
    .slice(0, 1);

  //function used to get the total of a specific key in an array. it will return a number that is a representation of all the values of a specific key in the entire array.
  function getTotal(key, arr) {
    let total = 0;
    arr.map((game) => (total += parseInt(game[key])));
    return total;
  }

  //this will look through all games played and make an array of objects that hold each individuals performance in each game.
  function killsArray(arr) {
    let killsPerPlayer = [];
    arr.map((game) => {
      killsPerPlayer.push({ player: game.player1, kills: game.player1Kills });
      killsPerPlayer.push({ player: game.player2, kills: game.player2Kills });
      killsPerPlayer.push({ player: game.player3, kills: game.player3Kills });
      killsPerPlayer.push({ player: game.player4, kills: game.player4Kills });
    });
    return killsPerPlayer;
  }

  //this will get the total DMG from a specific game in the top 5 games.
  function getGamesKills(gameNumber) {
    let player1 = topFiveGames[gameNumber].player1Kills;
    let player2 = topFiveGames[gameNumber].player2Kills;
    let player3 = topFiveGames[gameNumber].player3Kills;
    let player4 = topFiveGames[gameNumber].player4Kills;
    let total =
      parseInt(player1) +
      parseInt(player2) +
      parseInt(player3) +
      parseInt(player4);
    return total;
  }
  //this will get the total DMG from a specific game in the top 5 games.
  function getGamesDMG(gameNumber) {
    let player1 = topFiveGames[gameNumber].player1Dmg;
    let player2 = topFiveGames[gameNumber].player2Dmg;
    let player3 = topFiveGames[gameNumber].player3Dmg;
    let player4 = topFiveGames[gameNumber].player4Dmg;
    let total =
      parseInt(player1) +
      parseInt(player2) +
      parseInt(player3) +
      parseInt(player4);
    return (total / 1500).toFixed(2);
  }
  //this is the format for the string to be posted to the discord. is null if 4 games are not played
  const scoreToBePosted =
    topFiveGames.length === 5
      ? `Highest single kill game: ${topKillsGame[0].player}: ${
          topKillsGame[0].kills
        } Kills
         Game 1 - ${topFiveGames[0].score} - Time: ${
          topFiveGames[0].startTime
        } Team Kills: ${getGamesKills(0)} Team DMG Points: ${getGamesDMG(
          0
        )} Placement: ${topFiveGames[0].placement} 
         Game 2 - ${topFiveGames[1].score} - Time: ${
          topFiveGames[1].startTime
        } Team Kills: ${getGamesKills(1)} Team DMG Points: ${getGamesDMG(
          1
        )} Placement: ${topFiveGames[1].placement} 
         Game 3 - ${topFiveGames[2].score} - Time: ${
          topFiveGames[2].startTime
        } Team Kills: ${getGamesKills(2)} Team DMG Points: ${getGamesDMG(
          2
        )} Placement: ${topFiveGames[2].placement} 
         Game 4 - ${topFiveGames[3].score} - Time: ${
          topFiveGames[3].startTime
        } Team Kills: ${getGamesKills(3)} Team DMG Points: ${getGamesDMG(
          3
        )} Placement: ${topFiveGames[3].placement} 
         Game 5 - ${topFiveGames[4].score} - Time: ${
          topFiveGames[4].startTime
        } Team Kills: ${getGamesKills(4)} Team DMG Points: ${getGamesDMG(
          4
        )} Placement: ${topFiveGames[4].placement} 
         Points Scored: ${(
            totalScore + +handicap
          ).toFixed(2)} (Total points minus handicap ${totalScore}${handicap})
    `
      : "Not enough games played";

  //this will call the post to the discord when the post button gets clicked.
  function postHandler(e) {
    e.preventDefault();
    return postMessageToDiscord(scoreToBePosted, teamName);
  }

  //this is the body of the display
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-8  d-flex mx-4 text-center align-text-center scorebox3 pt-3 pb-2 my-4 ">
          <div className="col">
            <div className="row justify-content-center">
              <h4 className="font-weight-bold mr-2"> Points Scored:</h4>
              <h4 className="font-weight-normal">{`${(
                totalScore + +handicap
              ).toFixed(2)}`}</h4>
              <p className="ml-2">{`(Total points minus handicap ${totalScore}${handicap})`}</p>
            </div>
            <div className="row justify-content-center">
              <h4 className="font-weight-bold mr-2">Kill Points: </h4>
              <h4 className="font-weight-normal">{`${totalKillPoints}`} </h4>
            </div>
            <div className="row justify-content-center">
              <h4 className="font-weight-bold mr-2">Damage Points: </h4>
              <h4 className="font-weight-normal">{`${totalDmgPoints}`} </h4>
            </div>

            <div className="row justify-content-center">
              <h4 className="font-weight-bold mr-2">Placement Points: </h4>{" "}
              <h4 className="font-weight-normal">{`${getTotal(
                "placePoints",
                topFiveGames
              )}`}</h4>
            </div>
            <div className="row justify-content-center">
              <h4 className="font-weight-bold mr-2">
                Highest single kill game:
              </h4>
              {topKillsGame.length === 1 && (
                <h4 className="font-weight-normal">{`${topKillsGame[0].player}: ${topKillsGame[0].kills} Kills`}</h4>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around flex-wrap mb-4">
        <div className=" col-md-2 scorebox text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-1">{`${player1}`}</h4>
          <p className="mb-1">
            {`Kills: ${getTotal("player1Kills", topFiveGames)}`}{" "}
          </p>
          <p className="mb-1">
            {`DMG Points: ${(
              getTotal("player1Dmg", topFiveGames) / 1500
            ).toFixed(2)}`}{" "}
          </p>
          <p className="mb-1">% of points in scored games</p>
          <p className="mb-1">{`${(
            ((getTotal("player1Kills", topFiveGames) +
              getTotal("player1Dmg", topFiveGames) / 1500) /
              (getTotal("score", topFiveGames) -
                getTotal("placePoints", topFiveGames))) *
            100
          ).toFixed()}%`}</p>

          <p className="mb-1"> % of points in all games</p>
          <p className="mb-1">{`${(
            ((getTotal("player1Kills", games) +
              getTotal("player1Dmg", games) / 1500) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}%`}</p>
        </div>

        <div className=" col-md-2 scorebox text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-1">{`${player2}`}</h4>
          <p className="mb-1">
            {`Kills: ${getTotal("player2Kills", topFiveGames)}`}{" "}
          </p>
          <p className="mb-1">
            {`DMG Points: ${(
              getTotal("player2Dmg", topFiveGames) / 1500
            ).toFixed(2)}`}{" "}
          </p>
          <p className="mb-1">% of points in scored games</p>
          <p className="mb-1">{`${(
            ((getTotal("player2Kills", topFiveGames) +
              getTotal("player2Dmg", topFiveGames) / 1500) /
              (getTotal("score", topFiveGames) -
                getTotal("placePoints", topFiveGames))) *
            100
          ).toFixed()}%`}</p>

          <p className="mb-1"> % of points in all games</p>
          <p className="mb-1">{`${(
            ((getTotal("player2Kills", games) +
              getTotal("player2Dmg", games) / 1500) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}%`}</p>
        </div>

        <div className=" col-md-2 scorebox text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-1">{`${player3}`}</h4>
          <p className="mb-1">
            {`Kills: ${getTotal("player3Kills", topFiveGames)}`}{" "}
          </p>
          <p className="mb-1">
            {`DMG Points: ${(
              getTotal("player3Dmg", topFiveGames) / 1500
            ).toFixed(2)}`}{" "}
          </p>
          <p className="mb-1">% of points in scored games</p>
          <p className="mb-1">{`${(
            ((getTotal("player3Kills", topFiveGames) +
              getTotal("player3Dmg", topFiveGames) / 1500) /
              (getTotal("score", topFiveGames) -
                getTotal("placePoints", topFiveGames))) *
            100
          ).toFixed()}%`}</p>

          <p className="mb-1"> % of points in all games</p>
          <p className="mb-1">{`${(
            ((getTotal("player3Kills", games) +
              getTotal("player3Dmg", games) / 1500) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}%`}</p>
        </div>

        <div className=" col-md-2 scorebox text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-1">{`${player4}`}</h4>
          <p className="mb-1">
            {`Kills: ${getTotal("player4Kills", topFiveGames)}`}{" "}
          </p>
          <p className="mb-1">
            {`DMG Points: ${(
              getTotal("player4Dmg", topFiveGames) / 1500
            ).toFixed(2)}`}{" "}
          </p>
          <p className="mb-1">% of points in scored games</p>
          <p className="mb-1">{`${(
            ((getTotal("player4Kills", topFiveGames) +
              getTotal("player4Dmg", topFiveGames) / 1500) /
              (getTotal("score", topFiveGames) -
                getTotal("placePoints", topFiveGames))) *
            100
          ).toFixed()}%`}</p>

          <p className="mb-1"> % of points in all games</p>
          <p className="mb-1">{`${(
            ((getTotal("player4Kills", games) +
              getTotal("player4Dmg", games) / 1500) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}%`}</p>
        </div>
      </div>

      <div className="d-flex justify-content-around flex-wrap mb-4 text-light">
        <div className="col-md-2 scorebox2 text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-2">Best Game</h4>
          {topFiveGames.length >= 1 && (
            <p>
              {`Total Points: ${topFiveGames[0].score}`}
              <br />
              {`Start Time: ${topFiveGames[0].startTime} `}
              <br />
              {`Total Team Kills: ${getGamesKills(0)}`}
              <br />
              {`Total Team DMG: ${getGamesDMG(0)}`}
              <br />
              {`Placement: ${topFiveGames[0].placement}`}{" "}
            </p>
          )}
        </div>
        <div className="col-md-2 scorebox2 text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-2">Game 2</h4>
          {topFiveGames.length >= 2 && (
            <p>
              {`Total Points: ${topFiveGames[1].score}`}
              <br />
              {`Start Time: ${topFiveGames[1].startTime} `}
              <br />
              {`Total Team Kills: ${getGamesKills(1)}`}
              <br />
              {`Total Team DMG: ${getGamesDMG(1)}`}
              <br />
              {`Placement: ${topFiveGames[1].placement}`}{" "}
            </p>
          )}
        </div>
        <div className="col-md-2 scorebox2 text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-2">Game 3</h4>
          {topFiveGames.length >= 3 && (
            <p>
              {`Total Points: ${topFiveGames[2].score}`}
              <br />
              {`Start Time: ${topFiveGames[2].startTime} `}
              <br />
              {`Total Team Kills: ${getGamesKills(2)}`}
              <br />
              {`Total Team DMG: ${getGamesDMG(2)}`}
              <br />
              {`Placement: ${topFiveGames[2].placement}`}{" "}
            </p>
          )}
        </div>
        <div className="col-md-2 scorebox2 text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-2">Game 4</h4>
          {topFiveGames.length >= 4 && (
            <p className="my-1">
              {`Total Points: ${topFiveGames[3].score}`}
              <br />
              {`Start Time: ${topFiveGames[3].startTime} `}
              <br />
              {`Total Team Kills: ${getGamesKills(3)}`}
              <br />
              {`Total Team DMG: ${getGamesDMG(3)}`}
              <br />
              {`Placement: ${topFiveGames[3].placement}`}{" "}
            </p>
          )}
        </div>
        <div className="col-md-2 scorebox2 text-light text-center align-text-center mx-4 my-2">
          <h4 className="my-2">Game To Replace</h4>
          {topFiveGames.length >= 5 && (
            <p className="my-1">
              {`Total Points: ${topFiveGames[4].score}`}
              <br />
              {`Start Time: ${topFiveGames[4].startTime} `}
              <br />
              {`Total Team Kills: ${getGamesKills(4)}`}
              <br />
              {`Total Team DMG: ${getGamesDMG(4)}`}
              <br />
              {`Placement: ${topFiveGames[4].placement}`}{" "}
            </p>
          )}
        </div>
      </div>

      <div className="row d-flex justify-content-center M my-5">
        <button
          onClick={postHandler}
          type="button"
          className="btn-lg btn-primary  col-7"
        >
          Submit Team Score
        </button>
      </div>
    </>
  );
}
