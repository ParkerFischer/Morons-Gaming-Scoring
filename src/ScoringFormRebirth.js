import React, {useState} from "react";
import { Link } from "react-router-dom";


export default function ScoringFormRebirth({ teamName,
    player1,
    player2,
    player3,
    player4}){




  return (
    <div className="container">
      <form onSubmit={null}>
        <div className="row">
          <label htmlFor="teamName" className="form-label ml-3">
            {`${player1} kills`}
            <input
              className="form-control"
              size="50"
              id="name"
              type="text"
              name="teamName"
              onChange={null}
              value={null}
              placeholder=" Enter Team Name"
            />
          </label>
          <button type="submit" className="btn btn-primary ml-2">
            Submit Game
          </button>
        </div>
        </form>
    </div>

  );
}

