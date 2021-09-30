import React from "react";
import postMessageToDiscord from "./PostRebirthScore";

//this componant is used to generate the summary for the top 4 games AND holds the button to post the scores to the Discord.
export default function ScoredGamesRebirth({
  teamName,
  player1,
  player2,
  player3,
  player4,
  games,
  handicap,
}) {
  //variable that holds the top 4 games played.
  const topFourGames = games
    .sort((a, b) => {
      return b.score - a.score;
    })
    .slice(0, 4);
  //variable that holds the total number of kills in scored games
  const totalKillPoints =
    getTotal("score", topFourGames) - getTotal("placePoints", topFourGames);
  //this is the teams score. points - handicap
  const totalScore = getTotal("score", topFourGames) + +handicap;
  //this will look at the scored games and pull the single highest kill game but a single player.
  const topKillsGame = killsArray(topFourGames)
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

  //this will get the total kills from a specific game in the top 4 games.
  function getGamesKills(gameNumber) {
    let player1 = topFourGames[gameNumber].player1Kills;
    let player2 = topFourGames[gameNumber].player2Kills;
    let player3 = topFourGames[gameNumber].player3Kills;
    let player4 = topFourGames[gameNumber].player4Kills;
    let total =
      parseInt(player1) +
      parseInt(player2) +
      parseInt(player3) +
      parseInt(player4);
    return total;
  }
  //this is the format for the string to be posted to the discord. is null if 4 games are not played
  const scoreToBePosted =
    topFourGames.length === 4 ? 
    `Highest single kill game: ${topKillsGame[0].player} - ${topKillsGame[0].kills}
         Game 1 - ${topFourGames[0].score} - Time: ${topFourGames[0].startTime} Team Kills: ${getGamesKills(0)} Placement: ${topFourGames[0].placement} 
         Game 2 - ${topFourGames[1].score} - Time: ${topFourGames[1].startTime} Team Kills: ${getGamesKills(1)} Placement: ${topFourGames[1].placement} 
         Game 3 - ${topFourGames[2].score} - Time: ${topFourGames[2].startTime} Team Kills: ${getGamesKills(2)} Placement: ${topFourGames[2].placement} 
         Game 4 - ${topFourGames[3].score} - Time: ${topFourGames[3].startTime} Team Kills: ${getGamesKills(3)} Placement: ${topFourGames[3].placement} 
         Points Scored: ${totalScore} (Total points minus handicap ${getTotal("score",topFourGames)}${handicap})
    ` : null;

  //this will call the post to the discord when the post button gets clicked.
  function postHandler(e) {
    e.preventDefault();
    return postMessageToDiscord(scoreToBePosted, teamName);
  }

  //this is the body of the display
  return (
    <>
      <div className="row">
        <div className="border col-6">
          <p>{`Points Scored: ${totalScore} (Total points minus handicap ${getTotal(
            "score",
            topFourGames
          )}${handicap})`}</p>
          <p>{`Kill Points: ${totalKillPoints}`} </p>
          <p>{`Placement Points: ${getTotal("placePoints", topFourGames)}`}</p>
          {topKillsGame.length === 1 && (
            <p>{`Highest single kill game: ${topKillsGame[0].player} - ${topKillsGame[0].kills}`}</p>
          )}
        </div>
        <div className="border col-6">
          <p>{`${player1} Kills: ${getTotal(
            "player1Kills",
            topFourGames
          )}  - ${(
            (getTotal("player1Kills", topFourGames) /
              (getTotal("score", topFourGames) -
                getTotal("placePoints", topFourGames))) *
            100
          ).toFixed()}% points in scored games - ${(
            (getTotal("player1Kills", games) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}% points in all games`}</p>
          <p>{`${player2} Kills: ${getTotal(
            "player2Kills",
            topFourGames
          )}  - ${(
            (getTotal("player2Kills", topFourGames) /
              (getTotal("score", topFourGames) -
                getTotal("placePoints", topFourGames))) *
            100
          ).toFixed()}% points in scored games - ${(
            (getTotal("player2Kills", games) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}% points in all games`}</p>
          <p>{`${player3} Kills: ${getTotal(
            "player3Kills",
            topFourGames
          )}  - ${(
            (getTotal("player3Kills", topFourGames) /
              (getTotal("score", topFourGames) -
                getTotal("placePoints", topFourGames))) *
            100
          ).toFixed()}% points in scored games - ${(
            (getTotal("player3Kills", games) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}% points in all games`}</p>
          <p>{`${player4} Kills: ${getTotal(
            "player4Kills",
            topFourGames
          )}  - ${(
            (getTotal("player4Kills", topFourGames) /
              (getTotal("score", topFourGames) -
                getTotal("placePoints", topFourGames))) *
            100
          ).toFixed()}% points in scored games - ${(
            (getTotal("player4Kills", games) /
              (getTotal("score", games) - getTotal("placePoints", games))) *
            100
          ).toFixed()}% points in all games`}</p>
        </div>
      </div>
      <div className="row">
        <div className="border col d-flex">
          <div className="border col-3">
            <p>game 1 summary</p>
            {topFourGames.length >= 1 && (
              <p>
                {`Points: ${topFourGames[0].score} - Time: ${
                  topFourGames[0].startTime
                } Team Kills: ${getGamesKills(0)} Placement: ${
                  topFourGames[0].placement
                }`}{" "}
              </p>
            )}
          </div>
          <div className="border col-3">
            <p>game 2 summary</p>
            {topFourGames.length >= 2 && (
              <p>
                {`Points: ${topFourGames[1].score} - Time: ${
                  topFourGames[1].startTime
                } Team Kills: ${getGamesKills(1)} Placement: ${
                  topFourGames[1].placement
                }`}{" "}
              </p>
            )}
          </div>
          <div className="border col-3">
            <p>game 3 summary</p>
            {topFourGames.length >= 3 && (
              <p>
                {`Points: ${topFourGames[2].score} - Time: ${
                  topFourGames[2].startTime
                } Team Kills: ${getGamesKills(2)} Placement: ${
                  topFourGames[2].placement
                }`}{" "}
              </p>
            )}
          </div>
          <div className="border col-3">
            <p>game 4 summary</p>
            {topFourGames.length >= 4 && (
              <p>
                {`Points: ${topFourGames[3].score}  Time: ${
                  topFourGames[3].startTime
                } Team Kills: ${getGamesKills(3)} Placement: ${
                  topFourGames[3].placement
                }`}{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <button
          onClick={postHandler}
          type="button"
          className="btn btn-primary ml-2"
        >
          Submit Team Score
        </button>
      </div>
    </>
  );
}
