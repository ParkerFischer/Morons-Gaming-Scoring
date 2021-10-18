import React from "react";

import {TournamentResultsData} from "./TournamentResultsData"
import TournamentResultsListed from "./TournamentResultsListed"

export default function TournamentResults() {

let data = TournamentResultsData

const listedGames = data.map((tournament) => <TournamentResultsListed tournament={tournament} />);
  return (
  <>
  <div className=" d-flex  flex-wrap">{listedGames}</div>
  </>
  )}