import React, {useState} from "react";
import { Link } from "react-router-dom";
import Verdansk from "./Verdansk";
import Rebirth from "./Rebirth/Rebirth.js";
import ScoringTeamSetForm from './Rebirth/ScoringTeamSetForm'

export default function ScoringHeader() {
  const [teamName, setTeamName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [handicap, setHandicap] = useState("")
  const [pageState, setPageState] = useState(true)
const [initialLoad, setInitialLoad] = useState(false)
const [isDisabled, setIsDisabled] = useState(false)



  let scoreSheet = (pageState === true)? 
  <Rebirth   
  handicap={handicap}
  teamName={teamName}
  player1={player1}
  player2={player2}
  player3={player3}
  player4={player4}/> : <Verdansk/>

function handleClickV(e){
    e.preventDefault()
    setInitialLoad(true)
    setIsDisabled(true)
    return setPageState(false)
}

function handleClickR(e){
    e.preventDefault()
    setInitialLoad(true)
    setIsDisabled(true)
    return setPageState(true)
}
  
  
    return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Scoring Header</h1>
      </div>

      <ScoringTeamSetForm
        teamName={teamName}
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
        setTeamName={setTeamName}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        setPlayer3={setPlayer3}
        setPlayer4={setPlayer4}
        isDisabled={isDisabled}
        handicap={handicap}
        setHandicap={setHandicap}
      />






      <div className="d-flex justify-content-around">
        <div ClassName="col-2"></div>
          <button type="button" className="btn btn-primary btn-lg col-3" onClick={handleClickR}>
            Rebirth
          </button>
          <button type="button" className="btn btn-primary btn-lg col-3" onClick={handleClickV}>
            Verdansk '84'
          </button>
        <div ClassName="col-2"></div>
      </div>

    {initialLoad && scoreSheet}
    </>
  );
}
