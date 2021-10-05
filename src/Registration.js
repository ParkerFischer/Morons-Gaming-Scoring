import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//registration form
export default function Registration() {
	const history = useHistory();

	const initialState = {
		teamName: "",
		startTime: "",
		squadSize: "",
		member1: "",
		member1KD: "",
		member2: "",
		member2KD: "",
		member3: "",
		member3KD: "",
		member4: "",
		member4KD: "",
	};
	const [registration, setRegistration] = useState({ ...initialState });

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

		fetch("http://localhost:3000/reg", {
			//api url to create data doesn't exist atm (404)
			method: "POST",
			body: JSON.stringify(registration),
			headers: { "Content-Type": "application/json" },//tells server sending json data
		})
			.then(() => {
				console.log("registration complete");
				history.push("/");
			})
			.catch((error) => console.error(error));
			
			console.log(registration)
			
	}

	return (
		<>
			<div className="d-flex justify-content-center">
				<h1>Register Your Team!</h1>
			</div>

			<form className="registration m-5" onSubmit={submitHandler}>
				<fieldset>
					<div className="row">
						<div className="col">
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
						</div>
						<div className="col">
							<div className="row">
								<div className="col">
									<label htmlFor="startTime">Start Time</label>
									<select
										id="inputState"
										className="form-control"
										name="startTime"
										value={registration.startTime}
										onChange={changeHandler}
										require="true"
									>
										<option value>Choose...</option>
										<option>...</option>
									</select>
								</div>
								<div className="col">
									<label htmlFor="squadSize">Squad Size</label>
									<select
										id="inputState"
										className="form-control"
										name="squadSize"
										value={registration.squadSize}
										onChange={changeHandler}
										require="true"
									>
										<option value>Choose...</option>
										<option>...</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<label htmlFor="member1">Member #1 Name</label>
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
						<div className="col">
							<label htmlFor="member1KD">Member #1 KD</label>
							<input
								type="text"
								id="member1KD"
								name="member1KD"
								className="form-control"
								placeholder="Ex: 5.4"
								require="true"
								value={registration.member1KD}
								onChange={changeHandler}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<label htmlFor="member2">Member #2 Name</label>
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
							<label htmlFor="member2KD">Member #2 KD</label>
							<input
								type="text"
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
					<div className="row">
						<div className="col">
							<label htmlFor="member3">Member #3 Name</label>
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
							<label htmlFor="member3KD">Member #3 KD</label>
							<input
								type="text"
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
					<div className="row">
						<div className="col">
							<label htmlFor="member4">Member #4 Name</label>
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
							<label htmlFor="member4KD">Member #4 KD</label>
							<input
								type="text"
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

					<button
						type="button"
						className="btn btn-secondary mr-2"
						onClick={cancelHandler}
					>
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</fieldset>
			</form>
		</>
	);
}
