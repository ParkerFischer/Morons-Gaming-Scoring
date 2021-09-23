import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import img from './img/morons-logo-gs.jpeg'

function Main() {
  return (
    <>
<div calssName='has-bg-img'>
 
      <div className="d-flex justify-content-center">
      
        <h1>Morons Gaming Co.</h1>
 
      </div>

      <div className="d-flex justify-content-center">
        <p>this is where we describe ourselves</p>
      </div>

      <div className="d-flex justify-content-center">
      <h2>Scoring pages</h2>
      </div>

      <div className="d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-lg mx-2">Rebirth</button>
      <button type="button" class="btn btn-primary btn-lg">Verdansk '84</button>
      </div>
      <img class="bg-img" src={img} alt="logo"></img>
      </div>
    </>
  );
}

export default Main;
