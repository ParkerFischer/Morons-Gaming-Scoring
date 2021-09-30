import React from "react";
import { Link } from "react-router-dom";

//front page
function Main() {
  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-center col-12">
          <h1>Morons Gaming Co.</h1>
        </div>
      </div>

      <div className="row">
        <div className="d-flex justify-content-center col-12">
          <p>this is where we describe ourselves</p>
        </div>
      </div>

      <div className="row">
        <div className="d-flex justify-content-center col-12">
          <h2>Scoring pages</h2>
        </div>
      </div>

      <div className="row">
        <div className="d-flex justify-content-around col-12  ">
          <button type="button" className="btn btn-primary btn-lg col-3 my-2">
            Discord link
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-around row">
        <div className="col-3"></div>
        <Link to="/reg" className="col-3">
          <button type="button" className="btn btn-primary btn-lg">
            Registration
          </button>
        </Link>
        <Link to="/scoring" className="col-3">
          <button type="button" className="btn btn-primary btn-lg">
            Submit Scores
          </button>
        </Link>
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default Main;
