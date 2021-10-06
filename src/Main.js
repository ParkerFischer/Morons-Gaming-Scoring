import React from "react";
import { Link } from "react-router-dom";
import img from "./img/morons-logo-gs.jpeg";
import "./Main.css";

//front page
function Main() {
	return (
		<>
			<div className="mb-5 bg-light d-flex justify-content-center">
				<img
					src={img}
					className="mb-5 d-flex justify-content-center"
					style={{ width: "60%" }}
				></img>
			</div>

			<div className="bg-dark">
				<div className="row">
					<div className="d-flex justify-content-center text-center col-12 text-light">
						<h2>Welcome to Morons Gaming Co.</h2>
					</div>
				</div>
				<div className="row">
					<div className="d-flex justify-content-center col-12 text-light my-3">
						<div className="d-flex justify-content-center text-center col-6 text-light">
							<p>
								We are a group of people who love gaming, music, food and fun!
								We run tournaments weekly for bragging rights and cash! Jump on
								in and become a Moron!{" "}
							</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="d-flex justify-content-around col-12  ">
						<div className="d-flex justify-content-around col-5">
							<button
								type="button"
								className="btn btn-secondary btn-lg col my-4 "
								onClick={(e) => {
									e.preventDefault();
									window.location.href='https://discord.gg/XWZWkG8r4m';
									}}
							>
								Become a Moron!
							</button>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="d-flex justify-content-around col-12  ">
						<Link to="/reg" className=" d-flex justify-content-around col-5">
							<button
								type="button"
								className="btn btn-primary col btn-lg my-4"
							>
								Team Registration
							</button>
						</Link>
					</div>
				</div>

				<div className="row">
					<div className="d-flex justify-content-around col-12  ">
						<Link
							to="/scoring"
							className="d-flex justify-content-around col-5"
						>
							<button
								type="button"
								className="btn btn-primary col btn-lg my-4"
							>
								Submit Scores
							</button>
						</Link>
					</div>
				</div>
				<div className="row">
					{" "}
					<p className="mb-5"></p>
				</div>
			</div>
		</>
	);
}

export default Main;
