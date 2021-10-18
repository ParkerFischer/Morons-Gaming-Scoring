import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DiscordPostRegistration from "./DiscordPostRegistration";
import { Alert } from 'reactstrap';

//registration form
export default function Registration() {
  const history = useHistory();

const [show, setShow] = useState(false)

  const initialState = {
    teamName: "",
    startTime: "",
    day: "",
    isPaid: "",
    member1: "",
    member1KD: "0",
    member2: "",
    member2KD: "0",
    member3: "",
    member3KD: "0",
    member4: "",
    member4KD: "0",
  };

  const [registration, setRegistration] = useState({ ...initialState });
  const teamKD =
    parseFloat(registration.member1KD) +
    parseFloat(registration.member2KD) +
    parseFloat(registration.member3KD) +
    parseFloat(registration.member4KD);
  const teamHandicap = teamKD <= 5.19 ? 0 : truncate(teamKD - 5.10, 1) * 10 * 3;

  const regFormToBePosted = `Start Time: ${registration.startTime}
 Day: ${registration.day}
 Handicap: -${teamHandicap}
 Team K/D: ${teamKD}
 Paid or Free: ${registration.isPaid}
 Player 1: ${registration.member1} K/D: ${registration.member1KD} 
 Player 2: ${registration.member2} K/D: ${registration.member2KD} 
 Player 3: ${registration.member3} K/D: ${registration.member3KD} 
 Player 4: ${registration.member4} K/D: ${registration.member4KD} 
`;


function truncate(number, index = 2) {
  // cutting the number
  return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}


  function changeHandler({ target: { name, value } }) {
    setRegistration((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function cancelHandler() {
    history.goBack();
  }

  function submitHandler(event) {
    event.preventDefault();
    if(registration.startTime === "" || registration.teamName === "" || registration.day === "" || registration.isPaid === ""){
      return setShow(true)}
if(registration.isPaid === 'Paid'){
  DiscordPostRegistration(regFormToBePosted, registration.teamName);
  console.log("registration complete");
  console.log(registration);
 return  history.push("/regpaid");
    
} else {   DiscordPostRegistration(regFormToBePosted, registration.teamName);
  console.log("registration complete");
  console.log(registration);}
  return history.push("/regnotpaid");
  }


 


  return (
    <>
      <div className="d-flex justify-content-center text-light">
        <h1>Register Your Team!</h1>
      </div>

      <form className="registration m-5 text-light" onSubmit={submitHandler}>
        <fieldset>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="teamName">Team Name</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                className="form-control"
                placeholder="Team Name"
                require="true"
                value={registration.teamName}
                onChange={changeHandler}
              
              />
              {show === true && <Alert color="danger">Required</Alert>}
            </div>
            <div className="col">
              <div className="row">
                <div className="col-md ">
                  <label htmlFor="startTime">Start Time</label>
                  <input
                    
                    id="inputState"
                    className="form-control"
                    name="startTime"
                    value={registration.startTime}
                    onChange={changeHandler}
                    require="true"
                    type="time"
                  ></input>
                  {show === true && <Alert color="danger">Required</Alert>}
                </div>
                <div className="col-md">
                  <label htmlFor="day">Day</label>
                  <select
                    
                    id="inputState"
                    className="form-control"
                    name="day"
                    value={registration.day}
                    onChange={changeHandler}
                    require="true"
                  >
                    <option value>Choose...</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                  {show === true && <Alert color="danger">Required</Alert>}
                </div>
                <div className="col-md">
                  <label htmlFor="day">Paid Team</label>
                  <select
                    
                    id="inputState"
                    className="form-control"
                    name="isPaid"
                    value={registration.isPaid}
                    onChange={changeHandler}
                    require="true"
                  >
                    <option value>Choose...</option>
                    <option value="Paid">Paid</option>
                    <option value="Free">Free</option>
                  </select>
                  {show === true && <Alert color="danger">Required</Alert>}
                </div>
                <div className="col my-3 text-center">
                  <p>Team K/D</p>
                  <p>{teamKD.toFixed(2)}</p>
                </div>

                <div className="col my-3 text-center">
                  <p>Team Handicap</p>
                  <p>{`-${teamHandicap}`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center my-2">
            <div className="col">
              <label htmlFor="member1">Player #1 Name</label>
              <input
                type="text"
                id="member1"
                name="member1"
                className="form-control"
                placeholder="ActivisionID"
                require="true"
                value={registration.member1}
                onChange={changeHandler}
              />
            </div>
            <div className="col ">
              <label htmlFor="member1KD">Player #1 KD</label>
              <input
                id="member1KD"
                name="member1KD"
                className="form-control"
                placeholder="Ex: 5.4"
                require="true"
                value={registration.member1KD}
                onChange={changeHandler}
                type="number"
                step="0.01"
              />
            </div>
          </div>
          <div className="row text-center my-2">
            <div className="col">
              <label htmlFor="member2">Player #2 Name</label>
              <input
                type="text"
                id="member2"
                name="member2"
                className="form-control"
                placeholder="ActivisionID"
                require="true"
                value={registration.member2}
                onChange={changeHandler}
              />
            </div>
            <div className="col">
              <label htmlFor="member2KD">Player #2 KD</label>
              <input
                type="number"
                step="0.01"
                id="member2KD"
                name="member2KD"
                className="form-control"
                placeholder="Ex: 5.4"
                require="true"
                value={registration.member2KD}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row text-center my-2">
            <div className="col">
              <label htmlFor="member3">Player #3 Name</label>
              <input
                type="text"
                id="member3"
                name="member3"
                className="form-control"
                placeholder="ActivisionID"
                require="true"
                value={registration.member3}
                onChange={changeHandler}
              />
            </div>
            <div className="col">
              <label htmlFor="member3KD">Player #3 KD</label>
              <input
                type="number"
                step="0.01"
                id="member3KD"
                name="member3KD"
                className="form-control"
                placeholder="Ex: 5.4"
                require="true"
                value={registration.member3KD}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row text-center my-2">
            <div className="col">
              <label htmlFor="member4">Player #4 Name</label>
              <input
                type="text"
                id="member4"
                name="member4"
                className="form-control"
                placeholder="ActivisionID"
                require="true"
                value={registration.member4}
                onChange={changeHandler}
              />
            </div>
            <div className="col">
              <label htmlFor="member4KD">Player #4 KD</label>
              <input
                type="number"
                step="0.01"
                id="member4KD"
                name="member4KD"
                className="form-control"
                placeholder="Ex: 5.4"
                require="true"
                value={registration.member4KD}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <button
              type="submit"
              className="btn btn-primary my-2 col col-md-5"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
          <div className="row justify-content-center">
            <button
              type="button"
              className="btn btn-warning  my-2 text-light col col-md-5"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
