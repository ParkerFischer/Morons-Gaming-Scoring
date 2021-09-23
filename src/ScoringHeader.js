import React, {useState} from "react";
import { Link } from "react-router-dom";
import Verdansk from "./Verdansk";
import Rebirth from "./Rebirth";

export default function ScoringHeader() {
  const [pageState, setPageState] = useState(true)

  let scoreSheet = (pageState === true)? <Rebirth/> : <Verdansk/>

function handleClickV(e){
    e.preventDefault()
    return setPageState(false)
}

function handleClickR(e){
    e.preventDefault()
    return setPageState(true)
}
  
  
    return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Scoring Header</h1>
      </div>

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

    {scoreSheet}
    </>
  );
}
