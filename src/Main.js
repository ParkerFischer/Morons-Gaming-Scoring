import React from "react";
import { Link } from "react-router-dom";

//front page
function Main() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Morons Gaming Co.</h1>
      </div>

      <div className="d-flex justify-content-center">
        <p>this is where we describe ourselves</p>
      </div>

      <div className="d-flex justify-content-center">
        <h2>Scoring pages</h2>
      </div>

      <div className="d-flex justify-content-around">
        <button type="button" className="btn btn-primary btn-lg col-3 my-2">
          Discord link
        </button>
      </div>

      <div className="d-flex justify-content-around">
        <div ClassName="col-2"></div>
        <Link to="/reg" className="col-3">
          <button type="button" className="btn btn-primary btn-lg ml-5">
            Registration
          </button>
        </Link>
        <Link to="/scoring" className="col-3">
          <button type="button" className="btn btn-primary btn-lg ml-2">
            Submit Scores
          </button>
        </Link>
        <div ClassName="col-2"></div>
      </div>
    </>
  );
}

export default Main;
