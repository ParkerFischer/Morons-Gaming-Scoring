import React from "react";

//this is the componant that actually creates the display card for each game p[layed. ]
export default function ListOfRebirthGames({ game }) {
  return (
    <div className="container scorebox2 my-2 text-light flex-wrap col-md-5">
<div className='row d-flex'>
      <h4 className='d-flex col  text-center justify-content-center'>{` Total Points: ${game.score}`}</h4>
      </div>
      <div className='row d-flex justify-content-center scorebox3 mx-1'>
      <h6 className='d-flex col-4 text-center justify-content-center mx-1'>{`Placed: ${game.placement} `}</h6>
      <h6 className='d-flex col-4 text-center justify-content-center mx-1'>{`Time: ${game.startTime} `}</h6>
      </div>
      
      <div className='justify-content-center'>
        <div className='text-center justify-content-center mx-1'>
      <p className='mx-2 my-1'>{`${game.player1} Kills: ${game.player1Kills}`}</p>
      </div>
      <div className='text-center justify-content-center'>
     <p className='mx-2 my-1'>{`${game.player2} Kills: ${game.player2Kills}`}</p>
      </div>
      <div className='text-center justify-content-center mx-1'>
      <p className='mx-2 my-1 '>{`${game.player3} Kills: ${game.player3Kills}`}</p>
      </div>
      <div className='text-center justify-content-center mx-1'>
      <p className='mx-2 my-1'>{`${game.player4} Kills: ${game.player4Kills}`}</p>
      </div>
      </div>
    </div>
  );
}
