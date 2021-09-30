import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import Registration from "./Registration";
import ScoringHeader from "./ScoringHeader";
import "./Main.css";

//main switch and router
function App() {
  return (
    <>
      <div className="container-fluid bg-dark px-0">
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/reg">
              <Registration />
            </Route>
            <Route path="/scoring">
              <ScoringHeader />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
