import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ScoredGamesRebirth({ teamName,
    player1,
    player2,
    player3,
    player4,
    setGames,
games,
handicap}){

    const topFourGames = games.sort((a, b) => {return   b.score-a.score}).slice(0, 4)
    const totalKillPoints = getTotal('score', topFourGames) - getTotal('placePoints', topFourGames)
    const totalScore = getTotal('score', topFourGames) + +handicap
    const topKillsGame = killsArray(topFourGames).sort((a, b) => {return   b.kills-a.kills}).slice(0, 1)

    function getTotal(key, arr){
        let total = 0
        arr.map((game) => total += parseInt(game[key]))
        return total
    }
 
    function killsArray(arr){
       let killsPerPlayer = []
        arr.map((game) => {
            killsPerPlayer.push({player:game.player1, kills : game.player1Kills})
            killsPerPlayer.push({player:game.player2, kills : game.player2Kills})
            killsPerPlayer.push({player:game.player3, kills : game.player3Kills})
            killsPerPlayer.push({player:game.player4, kills : game.player4Kills})
        })
return killsPerPlayer
    }
    
console.log(topKillsGame)
    return(
    <>
    
    <div className='row'>
<div className='border col-6'>
    <p>{`Points Scored: ${totalScore} (Total points minus handicap ${getTotal('score', topFourGames)}${handicap})`}</p>
     <p>{`Kill Points: ${totalKillPoints}`} </p>
     <p>{`Placement Points: ${getTotal('placePoints', topFourGames)}`}</p>
    {topKillsGame.length === 1 && <p>{`highest single kill game: ${topKillsGame[0].player} - ${topKillsGame[0].kills}`}</p>}
    
    </div>
<div className='border col-6'>
    <p>{`${player1} Kills: ${getTotal('player1Kills', topFourGames)}  - ${(getTotal('player1Kills', topFourGames)/totalScore*100).toFixed(2)}% points in scored games - ${(getTotal('player1Kills', games)/totalScore*100).toFixed(2)}%% points in all games`}</p>
    <p>{`${player2} Kills: ${getTotal('player2Kills', topFourGames)}  - ${(getTotal('player2Kills', topFourGames)/totalScore*100).toFixed(2)}% points in scored games - ${(getTotal('player2Kills', games)/totalScore*100).toFixed(2)}%% points in all games`}</p>
    <p>{`${player3} Kills: ${getTotal('player3Kills', topFourGames)}  - ${(getTotal('player3Kills', topFourGames)/totalScore*100).toFixed(2)}% points in scored games - ${(getTotal('player3Kills', games)/totalScore*100).toFixed(2)}%% points in all games`}</p>
    <p>{`${player4} Kills: ${getTotal('player4Kills', topFourGames)}  - ${(getTotal('player3Kills', topFourGames)/totalScore*100).toFixed(2)}% points in scored games - ${(getTotal('player3Kills', games)/totalScore*100).toFixed(2)}%% points in all games`}</p>
    </div>
    </div>
    <div className='row'>
<div className='border col d-flex'>
<div>
<p>game 1 summary</p>
</div>
<div>
<p>game 2 summary</p>
</div>
<div>
<p>game 3 summary</p>
</div>
<div>
<p>game 4 summary</p>
</div>
</div>
    </div>
    <div className='row'>
<button type="button" className="btn btn-primary ml-2">
            Submit Team Score
          </button>
         </div> 


    </>)
}