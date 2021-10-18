import React from "react";

//this is the componant that actually creates the display card for each game p[layed. ]
export default function TournamentResultsListed({ tournament }) {
  return (








 <div className='container-fluid scorebox3 col-8 my-2'>
 <div className='row d-flex justify-content-center'>
 <div className='col-8 d-flex justify-content-center flex-wrap'>
 <h3 className='text-center'>Tournament Results for {tournament.type} {tournament.date}</h3>
 <h5 className='text-center'>Winners!</h5>
 </div>
 </div>
 <div className='d-flex justify-content-center text-center row'>
 <p>{tournament.teamWinnerName} | Team K/D: {tournament.WinnerKd} | Score: {tournament.teamWinnerScore}</p>
 </div>
 <div className='d-flex justify-content-center text-center row'>
<p>Roster: {tournament.winnerPlayer1}, {tournament.winnerPlayer2}, {tournament.winnerPlayer3}, {tournament.winnerPlayer4}</p>
 </div>
 


 <div className='row d-flex justify-content-center'>
 <div className='col-8 d-flex justify-content-center flex-wrap'>

 <p className='text-center font-weight-bold'>Runner up</p>
 </div>
 </div>
 <div className='d-flex justify-content-center text-center row flex-wrap'>
 <p>{tournament.teamSecondName} | Team K/D: {tournament.secondKd} | Score: {tournament.teamSecondScore}</p> 
 </div>
 <div className='d-flex justify-content-center text-center row flex-wrap'>
 <p>Roster: {tournament.secondPlayer1}, {tournament.secondPlayer2}, {tournament.secondPlayer3}, {tournament.secondPlayer4}</p>
 
 </div>

 
 </div>

  )}